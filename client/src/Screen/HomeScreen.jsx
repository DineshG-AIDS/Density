import NavBar from "../Components/NavBar";
import Heors from "../Components/Heros";
import { motion as m } from "framer-motion";
import Cards from "../Components/Cards";
import Cards1 from "../Components/Cards1";
import Cards2 from "../Components/Cards2";
import { Footer } from "../Components/Footer";
import MiddleText from "../Components/MiddleText";

const HomeScreen = () => {
  return (
    <>
      <div className="bg-gray-900 h-screen font-custom1">
        <div className="sticky">
          {" "}
          <NavBar />
        </div>
        <m.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 40,
          }}
          className="overflow-hidden"
        >
          <Heors />
        </m.div>
        <m.div className="text-4xl font-custom1 text-yellow-500 text-center">
          <h1>Features</h1>
        </m.div>
        <m.div
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="flex justify-start gap-20 flex-row bg-gray-900 p-8 py-22 px-32"
        >
          <Cards />
          <Cards1 />
          <Cards2 />
        </m.div>
        <div className="bg-gray-900 h-screen">
          <MiddleText />
        </div>
        <div className="bg-gray-900">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
