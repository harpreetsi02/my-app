import AlertOnLoad from "./components/AlertOnLoad.jsx";
import AutoCounter from "./components/AutoCounter.jsx";
import BgChanger from "./components/BgChander.jsx";
import CharLength from "./components/CharLength.jsx";
import CleanupDemo from "./components/CleanupDemo.jsx";
import ConsoleLogger from "./components/ConsoleLogger.jsx";
import CountDown from "./components/CountDown.jsx";
import Counter from "./components/Counter.jsx";
import DarkMode from "./components/DarkMode.jsx";
import Demo from "./components/Demo.jsx";
import DocumentColorChanger from "./components/DocumentColorChanger.jsx";
import FetchPosts from "./components/FetchPosts.jsx";
import LocalStorageCounter from "./components/LocalStorageCounter.jsx";
import MouseTracker from "./components/MouseTracker.jsx";
import RandomNumber from "./components/RandomNumber.jsx";
import ResizeDetector from "./components/ResizeDetector.jsx";
import ShowPassword from "./components/ShowPassword.jsx";
import TempConverter from "./components/TempConverter.jsx";
import Timer from "./components/Timer.jsx";
import TimerEffect from "./components/TimerEffect.jsx";
import TitleUpdater from "./components/TitleUpdater.jsx";
import TodoList from "./components/TodoList.jsx";
import ToggleButton from "./components/ToggleButton.jsx";
import ToggleTheme from "./components/ToggleTheme.jsx";

function App() {
  return(
    <div>
      <CountDown/>
      <LocalStorageCounter/>
      <ShowPassword/>
      {/* <ResizeDetector/> */}
      {/* <MouseTracker/> */}
      {/* <FetchPosts/> */}
      {/* <Timer/> */}
      {/* <ToggleTheme/> */}
      {/* <BgChanger/> */}
      {/* <CharLength/> */}
      {/* <ToggleButton/> */}
      {/* <Counter/> */}
      {/* <AutoCounter/> */}
      {/* <DarkMode/>
      <TimerEffect/>
      <Demo/>
      <TitleUpdater/>
      <ConsoleLogger/>
      <CleanupDemo/>
      <main>
        <section className="flex items-center justify-center gap-8">
          <TempConverter/>
          <TodoList/>
          <RandomNumber/>
          <AlertOnLoad/>
        </section>
        <section>
          <Counter/>
        </section>
      </main> */}
    </div>
  );
}

export default App