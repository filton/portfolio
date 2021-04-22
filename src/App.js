import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import "./i18n";

function App() {
  return (
    <div>
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
    </div>
  );
}

export default App;
