import About from "./components/sections/About/About";
import DrinksMenu from "./components/sections/DrinksMenu/DrinksMenu";
import { Gallery } from "./components/sections/Gallery/Gallery";
import Hero from "./components/sections/Hero/Hero";
import JoinUs from "./components/sections/JoinUs/JoinUs";
import LatestVideos from "./components/sections/LatestVideos/LatestVideos";
import News from "./components/sections/News/News";
import Staff from "./components/sections/Staff/Staff";
import Footer from "./components/ui/Footer/Footer";

function App() {
  return (
    <>
      <Hero />
      <About />
      <DrinksMenu />
      <Staff />
      <LatestVideos />
      <JoinUs />
      <News />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
