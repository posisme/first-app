import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./sass/styles.scss";
import CardBox from "./components/CardBox/CardBox.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CardBox count={5} card="joker" />
  </StrictMode>
);