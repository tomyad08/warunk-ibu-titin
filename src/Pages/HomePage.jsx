import React from "react";
import FAQ from "../Component/FAQ";
import Kontak from "../Component/Footer";
import NavBanner from "../Component/NavBanner";
import Produk from "../Component/Product";
import WA from "../Component/WA";
import Navibar from "../Component/NavBar";

const HomePage = () => {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          width: "100%",
          top: "-2px",
          zIndex: "1",
        }}
      >
        <Navibar />
      </div>
      <div style={{ marginTop: "50px" }}>
        <NavBanner />
        <Produk />
        <FAQ />
        <Kontak />
      </div>
    </div>
  );
};
export default HomePage;
