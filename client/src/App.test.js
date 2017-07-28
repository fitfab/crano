import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const fetchIt = jest.fn();
  fetchIt.mockReturnValueOnce([
    {
      href: "/",
      title: "Artnet.com",
      media: "/media/redesign/img/logo_brand.svg"
    }
  ]);
  const div = document.createElement("div");
  ReactDOM.render(<App fetchIt={fetchIt} />, div);
});
