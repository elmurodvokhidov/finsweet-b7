import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./components/Home"
import RootLayout from "./layouts/RootLayout"
import About from "./pages/about/About"
import Blog from "./pages/blog/Blog"
import Careers from "./pages/careers/Careers"
import Services from "./pages/services/Services"
import Contact from "./pages/contact/Contact"
import BlogInner from "./pages/bloginner/BlogInner"
import Privacy from "./pages/privacy_terms/Privacy"
import Terms from "./pages/privacy_terms/Terms"
import NotFound from "./components/NotFound"

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="careers" element={<Careers />} />
      <Route path="services" element={<Services />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact" element={<Contact />} />
      <Route path="blog/bloginner" element={<BlogInner />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="terms" element={<Terms />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App