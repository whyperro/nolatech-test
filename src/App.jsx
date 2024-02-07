import {
  About,
  DrinksMenu,
  Gallery,
  Hero,
  JoinUs,
  LatestVideos,
  News,
  Staff,
} from "./components/sections";
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
