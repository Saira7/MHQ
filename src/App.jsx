import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import ServicesPage from "./pages/Services";
import About from "./pages/About";
import TestimonialsPage from "./pages/Testimonialspage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import QuotePage from "./pages/QuotePage";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/testimonials" element={<TestimonialsPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/blog" element={<BlogPage/> }/>
        <Route path="/quote" element={<QuotePage/> }/>
        {/* Add other pages */}
      </Routes>

      <Footer />
    </>
  );
};

export default App;
