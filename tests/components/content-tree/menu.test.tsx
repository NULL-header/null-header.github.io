import React from "react";
import { Menu } from "src/components/content-tree/menu";
import { Item } from "src/components/content-tree/item";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("integration test for menu", () => {
  it("show menu", () => {
    render(<Menu itemRecord={{ test1: Item }} />);
    expect(screen.getByText("test1")).toBeInTheDocument();
  });
});
