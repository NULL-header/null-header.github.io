import React from "react";
import { Box } from "@chakra-ui/react";
import { Tree } from "../components/content-tree/tree";

export default function Home() {
  return (
    <Box height="100vh" width="100vw">
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
    </Box>
  );
}
