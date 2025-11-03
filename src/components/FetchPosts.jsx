import { useEffect, useState } from "react";

const FetchPosts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then(res => res.json())
        .then(data => setPosts(data));
    }, []);
    return (
        <div className="p-10 bg-gray-900 text-white min-h-screen">
            <h1 className="text-2xl mb-4">Fetched Posts</h1>
            {posts.map(post => (
                <div key={post.id} className="mb-3 border-b border-gray-600 pb-2">
                    <h2 className="font-bold">{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};

export default FetchPosts;