"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLoader from "./PageLoader";

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  const handleComplete = () => setLoading(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <PageLoader key="loader" onComplete={handleComplete} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ pointerEvents: loading ? "none" : "auto" }}
      >
        {children}
      </motion.div>
    </>
  );
}
