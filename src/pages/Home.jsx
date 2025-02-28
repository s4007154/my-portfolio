import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-black/20 items-center my-auto">
      <Navbar />
      <main className="h-full w-full grid grid-cols-2 items-center my-auto py-14 px-10">
        <section class="items-center col-span-1 w-full my-auto">
          <img
            src="src/assets/Avatar.png"
            alt="Developer's Avatar"
            className="w-3/5 mx-auto justify-center items-center my-auto"
          ></img>
        </section>
        <section className="w-2/3 py-5 mx-auto text-white justify-center items-center my-auto">
          <h3 className="text-2xl font-semibold"> Welcome, I'm Jessica!</h3>
          <h1 className="text-6xl my-8 font-bold">
            <span className="text-yellow-400 ">Front-End</span> Developer{" "}
          </h1>
          <h2 className="text-2xl my-2 font-semibold">
            Blah blah blah blah blah blah blah blah blah blah{" "}
          </h2>
          <h2 className="text-2xl my-2 font-semibold">
            Blah blah blah blah blah blah blah blah blah blah{" "}
          </h2>
          <button className=" bg-yellow-500 py-2 px-12 my-8 rounded-full font-bold">
            Learn More About Me
          </button>
        </section>
      </main>
    </div>
  );
};

export default Home;
