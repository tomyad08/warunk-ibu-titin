import React, { Suspense, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navibar from "./Component/NavBar";
import Pesanan from "./Pages/Pesanan";
import HomePage from "./Pages/HomePage";

const Sembako = React.lazy(() => import("./Pages/Sembako"));
const AlatTulis = React.lazy(() => import("./Pages/AlatTulis"));
const Elektronika = React.lazy(() => import("./Pages/Elektronika"));
const Kesehatan = React.lazy(() => import("./Pages/Kesehatan"));
const Kebersihan = React.lazy(() => import("./Pages/Kebersihan"));

const App = () => {
  const [kondisi, setKondisi] = useState(true);
  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/sembako"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Sembako />
                </Suspense>
              }
            />
            <Route
              path="/alat-tulis"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <AlatTulis />
                </Suspense>
              }
            />
            <Route
              path="/elektronika"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Elektronika />
                </Suspense>
              }
            />
            <Route
              path="/kesehatan"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Kesehatan />
                </Suspense>
              }
            />
            <Route
              path="/kebersihan"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Kebersihan />
                </Suspense>
              }
            />
            <Route path="/pesanan" element={<Pesanan />} />
          </Routes>
        </BrowserRouter>
      </div>
      {kondisi && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "8px",
          }}
        >
          <p className="float-end me-2" onClick={() => setKondisi(false)}>
            X
          </p>
          <div className="float-end">
            <a href={`https://wa.me/628991563674`}>
              <img src="./assets/WA.png" alt=" " width="70px" />
            </a>
          </div>
          <p>
            <strong
              style={{
                backgroundColor: "white",
                padding: "5px 5px 5px 5px",
                borderRadius: "10px",
                fontSize: "12px",
              }}
            >
              Butuh bantuan?
            </strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
