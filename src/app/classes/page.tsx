"use client";
import Framer from "@/components/ui/framer";
import React from "react";
import { motion } from "framer-motion";
import { Cover } from "@/components/ui/cover";

export default function page() {
  return (
    <div className="w-full h-screen py-10 relative overflow-hidden flex items-center px-30">
      <div className="w-full h-full absolute top-0 left-0 overflow-hidden -z-10">
        <video
          className="w-full object-cover h-full"
          src="//videos.ctfassets.net/drib7o8rcbyf/2mx4Z5Imag5wDIrgufxXnE/ee912f00c879bcd8cab1785ba7d67917/WEB_GF_HERO_MOBILE_FINAL.mp4"
          autoPlay
          muted
          loop
        />
      </div>
      <motion.div
        className="w-[600px] h-[50px] mt-[-200px]"
        initial={{ opacity: 0.0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          DESIGNED FOR THE INDIVIDUAL. <br />{"    "}
          <Cover>POWERED BY THE COLLECTIVE.</Cover>
        </h1>
      </motion.div>
    </div>
  );
}
