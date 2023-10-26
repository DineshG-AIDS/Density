import { motion } from "framer-motion";
import { useState } from "react";
// import { Link } from "react-router-dom";

const tabs = ["Home", "Search", "About", "FAQ"];

const ChipTabs = () => {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <>
      <div className="px-4 py-5 bg-gray-900 sticky  flex items-center flex-wrap gap-8 border-yellow-600 border-2 rounded-full justify-center">
        {tabs.map((tab) => (
          <Chip
            text={tab}
            selected={selected === tab}
            setSelected={setSelected}
            key={tab}
          />
        ))}
      </div>
    </>
  );
};

const Chip = ({ text, selected, setSelected }) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:text-slate-200 hover:bg-slate-700 font-custom1  "
      } text-xl transition-colors px-2.5 py-0.5 rounded-full relative font-custom1 `}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r  from-yellow-500 to-yellow-500 rounded-full "
        ></motion.span>
      )}
    </button>
  );
};

export default ChipTabs;
