import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Test01 } from "./01-basic-test/Test01";
import { Test02 } from "./02-test-with-vitest/Test02";
import { Test03 } from "./03-react-testing-library/Test03";
import { Test04 } from "./04-user-interactions/Test04";
import { Test05 } from "./05-mocking/Test05";
import { Test06 } from "./06-tests-with-context/Test06";
import { Test07 } from "./07-async-testing/Test07";
import { Test08 } from "./08-snapshots/Test08";
import { Test10 } from "./10-mock-api-calls/Test10";
import { Layout } from "./components/Layout";
import { NotFound } from "./components/NotFound";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Test01 />} />
          <Route path="/test-01" element={<Test01 />} />
          <Route path="/test-02" element={<Test02 />} />
          <Route path="/test-03" element={<Test03 />} />
          <Route path="/test-04" element={<Test04 />} />
          <Route path="/test-05" element={<Test05 />} />
          <Route path="/test-06" element={<Test06 />} />
          <Route path="/test-07" element={<Test07 />} />
          <Route path="/test-08" element={<Test08 />} />
          <Route path="/test-10" element={<Test10 />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
