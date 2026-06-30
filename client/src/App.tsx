import Navbar from "./components/layout/Navbar/Navbar";
import Hero from "./components/home/Hero/Hero";
import Categories from "./components/home/Categories/Categories";
import FeaturedProducts from "./components/home/FeaturedProducts/FeaturedProducts";
import AIAssistant from "./components/home/AIAssistant/AIAssistant";
import Accessibility from "./components/home/Accessibility/Accessibility";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <AIAssistant />
      <Accessibility />
    </>
  );
}

export default App;