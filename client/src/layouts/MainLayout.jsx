import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="font-poppins">
            <nav className="p-4 bg-gray-100">Navbar (Placeholder)</nav>
            <div className="min-h-[calc(100vh-200px)]">
                <Outlet />
            </div>
            <footer className="p-4 bg-gray-800 text-white">Footer (Placeholder)</footer>
        </div>
    );
};
export default MainLayout;