import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("General Page Test", () => {
  beforeAll(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => {
          Promise.resolve([{ name: "binance" }, { name: "BitoPro" }]);
        },
      })
    );
  });

  test("should render", () => {
    render(<Home />);
  });

  test("should render API data", () => {
    render(<Home />);

    screen.findByText("binance");
  });

  test("it should filter correctly", () => {
    render(<Home />);
    const filter = screen.getByLabelText(/filter/i);
    fireEvent.change(filter, { target: { value: "binance" } });

    screen.findByText("binance");
    expect(screen.queryByText("BitoPro")).not.toBeInTheDocument;
  });
});
