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
import Sidebar from "./components/ui/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
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
