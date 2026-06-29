import Navbar from "../../components/layout/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <main className="flex h-[80vh] items-center justify-center">
        <h1 className="text-5xl font-bold text-slate-800">
          EveryGen Market
        </h1>
      </main>
    </>
  );
};

export default Home;