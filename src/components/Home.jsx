import About from "./About";
import Features from "./Features";
// import Story from "./Story";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
// import { GallerySection } from "./Gallery";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Features />
      {/* <Story /> */}
      {/* <GallerySection /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
