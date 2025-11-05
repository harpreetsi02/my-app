import { Routes, Route, Link } from "react-router-dom";

const NestedRoutes = () => {
    return(
        <div className="h-screen bg-gray-800 text-white p-4">
            <h1 className="text-3xl mb-4">Nested Routes Example</h1>
            <nav className="flex space-x-4 mb-3">
                <Link
                    to="profile"
                    className="hover:text-yellow-400"
                >
                    Profile
                </Link>

                <Link
                    to="dashboard"
                    className="hover:text-yello-400"
                >
                    Dashboard
                </Link>

                <Routes>
                    <Route path="profile" element={<p>Profile Page</p>}/>
                    <Route path="dashboard" element={<p>Dashboard Page</p>}/>
                </Routes>
            </nav>
        </div>
    );
}

export default NestedRoutes