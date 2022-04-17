import { render, screen } from "@testing-library/react";
import Home from "./Home";

jest.mock("../../service/data", () => [
  { name: "Sailor Saturn", identity: "Hotaru Tomoe" },
  { name: "Black Lady", identity: "Rini" },
  { name: "Sailor Mars", identity: "Usagi Tsukino" },
]);

test("render Home with all items", () => {
  render(<Home />);

  const TodoItem = screen.getByText("Sailor Saturn", "Hotaru Tomoe");
  const TodoItem2 = screen.getByText("Black Lady", "Rini");
  const TodoItem3 = screen.getByText("Sailor Mars", "Usagi Tsukino");

  expect(TodoItem).toBeInTheDocument();
  expect(TodoItem2).toBeInTheDocument();
  expect(TodoItem3).toBeInTheDocument();
});
