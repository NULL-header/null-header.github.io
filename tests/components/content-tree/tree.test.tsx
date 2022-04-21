import React from "react";
import { Tree } from "src/components/content-tree/tree";
import { screen, render, waitFor, act } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("intergration test for tree", () => {
  it("menu show", () => {
    render(
      <Tree
        contents={{
          test1: { description: "", isContent: true, path: "" },
          test2: {
            isContent: false,
            description: "",
            under: { nested1: { isContent: true, description: "", path: "" } },
          },
        }}
      />,
    );
    expect(screen.getByText("test1")).toBeInTheDocument();
    expect(screen.getByText("test2")).toBeInTheDocument();
  });
  it("nested show", async () => {
    render(
      <Tree
        contents={{
          test1: { description: "", isContent: true, path: "" },
          test2: {
            isContent: false,
            description: "",
            under: { nested1: { isContent: true, description: "", path: "" } },
          },
        }}
      />,
    );
    act(() => {
      screen.getByText("test2").click();
    });
    await waitFor(() => {
      expect(screen.getByText("nested1")).toBeInTheDocument();
    });
  });
});
