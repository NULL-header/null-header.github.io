import React from "react";
import { makeLoading } from "../components/loading";

const WillLoad = makeLoading(() =>
  import("../components/content-tree/tree").then((mod) => () => (
    <mod.Tree
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
  )),
);

export default function Home() {
  return <WillLoad backgroundColor="#2b2b2b" />;
}
