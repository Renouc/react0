import { createRoot } from "react-dom/client";

const element = (
  <h1>
    Hello,<span style={{ color: "red" }}>World</span>
  </h1>
);

console.log("element:", element);

const root = createRoot(document.getElementById("root"));

console.log("root:", root);

console.log("url", new URL("../doc/queue.js", import.meta.url).href);
