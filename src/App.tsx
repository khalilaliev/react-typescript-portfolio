import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectsDetail from "./pages/ProjectsDetail";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage.tsx";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isBlogPage = location.pathname === "/blog";
  const isProjectPage = location.pathname === "/";

  return (
    <>
      {isHomePage ? (
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className='"flex-grow w-full h-full"'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectsDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
      ) : (
        <div className="flex flex-col min-h-screen">
          <Header />
          <main
            className={`flex-grow mx-auto mt-5 pt-20 container ${
              isBlogPage || isProjectPage ? "max-w-[1400px]" : "max-w-5xl"
            }`}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectsDetail />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
