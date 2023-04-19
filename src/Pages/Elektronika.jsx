import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Papa from "papaparse";
import { addElektronika } from "../Lib/ProductSlice";
import Fungsi from "../Component/FungsiTampilan";
import { Link } from "react-router-dom";

const Elektronika = () => {
  const products = useSelector((state) => state.product.elektronika[0]);
  const dispatch = useDispatch();

  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTBa4BHo94u1XgOZvcHqVxm3vOWn4HHiSTcjEJXpdNqhOnFL5A7qoGOxhRl0I0-hW1bi_jat087VliP/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (value) => {
          dispatch(addElektronika(value.data));
        },
      }
    );
  }, [dispatch]);

  return (
    <div className="container-fluid">
      <div className="row py-3" style={{ backgroundColor: "purple" }}>
        <div className="col">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="30"
              fill="white"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </Link>
        </div>
        <div className="col">
          <h3
            className="text-center"
            style={{
              fontFamily: "'Signika Negative', sans-serif",

              color: "white",
            }}
          >
            <strong>Elektronika</strong>
          </h3>
        </div>
        <div className="col">
          <span className="float-end mb-2">
            <Link to="/pesanan">
              <img src="./assets/keranjang1.png" alt=" " width="50px" />
            </Link>
          </span>
        </div>
      </div>

      {products ? (
        <div className="row justify-content-center">
          <Fungsi props={products} />
        </div>
      ) : (
        <div>
          <h1>Loading ...</h1>
        </div>
      )}
    </div>
  );
};
export default Elektronika;
