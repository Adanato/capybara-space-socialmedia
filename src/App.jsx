import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

// Main Pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Capybara from "./pages/Capybara";

import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Forgot from "./pages/auth/Forgot";

// Sub Pages
import Post from "./pages/post/Post";

// Common component
import Header from "./shared/header/Header";
import Footer from "./shared/footer/Footer";
import NotFound from "./shared/notfound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capybara" element={<Capybara />} />
        <Route path="/about" element={<About />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />

        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
