import React, { useMemo } from "react";
import { useAsync } from "react-use";
import { motion, AnimatePresence } from "framer-motion";
import type { Tree } from "../components/content-tree/tree";
import { Loading } from "../components/loading";

type Props = Parameters<typeof Tree>[0];

export default function Home() {
  const state = useAsync(() => import("../components/content-tree/tree"), []);
  const element = useMemo(() => {
    if (state.loading || state.error != null || state.value == null)
      return (
        <motion.div
          key="aaa"
          initial={{ x: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          Loading
        </motion.div>
      );
    const { Tree } = state.value;
    return (
      <Tree
        contents={{
          title1: { isContent: true, description: "", path: "" },
          title2: {
            isContent: false,
            description: "",
            under: {
              nested1: { isContent: true, description: "", path: "" },
              nested2: { isContent: true, description: "", path: "" },
            },
          },
          title3: { isContent: true, description: "", path: "" },
          title4: { isContent: true, description: "", path: "" },
        }}
      />
    );
  }, [state]);
  return <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>;
}
