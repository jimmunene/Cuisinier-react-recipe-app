import React from "react";
import RareRecipes from "../components/Popular";
import Commonrecipes from "../components/Commonrecipes";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <RareRecipes />
      <Commonrecipes />
    </motion.div>
  );
}

export default Home;
