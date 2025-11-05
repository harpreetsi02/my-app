import React, { useRef, useState, useEffect } from "react";

export default function CameraCapture() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [error, setError] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [facingMode, setFacingMode] = useState("user");

  // Start camera
  const startCamera = async () => {
    setError(null);
    try {
      const constraints = {
        video: {
          facingMode,
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
        audio: false,
      };
      const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
      setStream(mediaStream);
      if (videoRef.current) videoRef.current.srcObject = mediaStream;
    } catch (err) {
      setError(err.message || "Could not access camera");
      console.error(err);
    }
  };

  // Stop camera
  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
    if (videoRef.current) videoRef.current.srcObject = null;
  };

  // Take photo
  const takePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;
    canvas.width = video.videoWidth || 1280;
    canvas.height = video.videoHeight || 720;
    const ctx = canvas.getContext("2d");
    if (facingMode === "user") {
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
    }
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    const dataUrl = canvas.toDataURL("image/png");
    setPhoto(dataUrl);
  };

  // Copy captured image to clipboard
  const copyToClipboard = async () => {
    if (!photo) return;
    try {
      const response = await fetch(photo);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ]);
      alert("📋 Image copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy:", err);
      alert("❌ Failed to copy image to clipboard.");
    }
  };

  // Switch camera
  const toggleFacing = async () => {
    stopCamera();
    setFacingMode((prev) => (prev === "user" ? "environment" : "user"));
  };

  useEffect(() => {
    startCamera();
    return () => stopCamera();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [facingMode]);

  return (
    <div className="max-w-md mx-auto bg-white p-4 rounded-2xl shadow-md text-center">
      <h3 className="text-lg font-semibold mb-3">Camera Capture (Frontend Only)</h3>

      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="w-full rounded-lg bg-black"
      />

      <div className="mt-3 flex flex-wrap justify-center gap-2">
        <button
          onClick={takePhoto}
          disabled={!stream}
          className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700"
        >
          📸 Capture
        </button>

        <button
          onClick={copyToClipboard}
          disabled={!photo}
          className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700"
        >
          📋 Copy to Clipboard
        </button>

        <button
          onClick={toggleFacing}
          disabled={!stream}
          className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600"
        >
          🔄 Switch Camera
        </button>

        <button
          onClick={stopCamera}
          className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700"
        >
          🛑 Stop
        </button>
      </div>

      {error && <p className="text-red-500 mt-2">Error: {error}</p>}

      <canvas ref={canvasRef} style={{ display: "none" }} />

      {photo && (
        <div className="mt-4">
          <h4 className="font-semibold">Snapshot</h4>
          <img
            src={photo}
            alt="snapshot"
            className="w-full mt-2 rounded-lg shadow-sm"
          />
          <a
            href={photo}
            download="photo.png"
            className="inline-block mt-2 text-blue-600 hover:underline"
          >
            ⬇️ Download Photo
          </a>
        </div>
      )}
    </div>
  );
}