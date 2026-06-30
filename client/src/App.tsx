import Navbar from "./components/layout/Navbar/Navbar";
import Hero from "./components/home/Hero/Hero";
import Categories from "./components/home/Categories/Categories";
import FeaturedProducts from "./components/home/FeaturedProducts/FeaturedProducts";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
    </>
  );
}

export default App;