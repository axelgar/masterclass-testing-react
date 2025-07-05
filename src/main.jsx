import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import App from "./App.jsx";
import { Test01 } from "./01-test-structure/Test01.jsx";
import { Layout } from "./components/Layout.jsx";
import { Test02 } from "./02-test-with-vitest/Test02.jsx";
import { Test05 } from "./05-mocking/Test05.jsx";
import { Test06 } from "./06-debug/Test06.jsx";
import { Test07 } from "./07-mock-api-calls/Test07.jsx";
import { Test03 } from "./03-react-testing-library/Test03.jsx";
import { Test04 } from "./04-user-interactions/Test04.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <html className="h-full bg-white">
      <body className="h-full">
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<App />} />
              <Route path="/test-01" element={<Test01 />} />
              <Route path="/test-02" element={<Test02 />} />
              <Route path="/test-03" element={<Test03 />} />
              <Route path="/test-04" element={<Test04 />} />
              <Route path="/test-05" element={<Test05 />} />
              <Route path="/test-06" element={<Test06 />} />
              <Route path="/test-07" element={<Test07 />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </body>
    </html>
  </StrictMode>,
);
