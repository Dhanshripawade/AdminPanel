import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Components/DashboardPages/Dashboard";
import Products from "./Components/DashboardPages/Products";
import User from "./Components/DashboardPages/User";
import Blog from "./Components/DashboardPages/Blog";
// import Wishlists from "./Components/DashboardPages/Wishlists";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar1 from "./Components/Navbar/Navbar";
import NotFoundPage from "./Components/DashboardPages/Notfound";
import Login from "./Components/LoginSignUp/Login";
import SignUp from "./Components/LoginSignUp/SignUp";

function Layout() {
  const location = useLocation();
  const hiddenRoutes = ["/login", "/signUp", "/notfound"];
  const shouldHideSidebarAndNavbar = hiddenRoutes.includes(location.pathname);

  return (
    <div className="d-flex">
      {!shouldHideSidebarAndNavbar && <Sidebar />}
      <div className="w-100">
        {!shouldHideSidebarAndNavbar && <Navbar1 />}
        <div className="flex-grow-1 p-3">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/user" element={<User />} />
            <Route path="/products" element={<Products />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/notfound" element={<NotFoundPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
