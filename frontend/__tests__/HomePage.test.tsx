import { HomePage } from "@/features/home/HomePage";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

describe("HomePage", () => {
  test("renders", () => {
    render(<HomePage />);
    expect(screen.getByText("Learn React")).toBeDefined();
  });
});
