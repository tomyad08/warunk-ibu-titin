import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const BoxModal = (props) => {
  let data = props.props;
  let kondisi1 = data.kondisi;
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(true);
  console.log("luar1");

  const handleClose = (e) => {
    setShow(!kondisi1);
  };

  console.log(data);
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="fs-1">{data.nama}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6 className="fs-3">
            Jumlah:
            <span
              className="mx-2 px-3 fs-3 border border-1 rounded-2"
              onClick={() => setCount(count - 1)}
            >
              -
            </span>
            <span className="fs-3 ">{count}</span>
            <span
              className="mx-2 px-2 fs-3 border border-1 rounded-2"
              onClick={() => setCount(count + 1)}
            >
              +
            </span>
          </h6>
          {/* <h4>Harga Total: Rp. {hargaTotal} </h4> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default BoxModal;
