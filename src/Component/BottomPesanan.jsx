import React from "react";
import { Link } from "react-router-dom";

const BottomPesanan = () => {
  return (
    <Link to="/pesanan">
      <div className="d-flex justify-content-center">
        <div
          className="pt-3 border border-0 rounded-2"
          style={{
            position: "fixed",
            bottom: "40px",
            background: "linear-gradient(#7149C6,#3A1078)",
            width: "90%",
            color: "white",
          }}
        >
          <p
            className="text-center"
            style={{ fontSize: "13px", color: "white" }}
          >
            Yeay, pesanan kamu sudah masuk keranjang!
            <img src="./assets/keranjang1.png" alt=" " width="30px" />
          </p>
        </div>
      </div>
    </Link>
  );
};
export default BottomPesanan;
