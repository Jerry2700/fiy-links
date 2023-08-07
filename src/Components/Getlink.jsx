import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
          type="button"
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-24 h-10 rounded-2xl text-white font-bold"
        onClick={handleShow}
        >
          GET LINK
        </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>GET LINK</Modal.Title>
        </Modal.Header>
        <Modal.Body>/Link/</Modal.Body>
        <Modal.Footer>
         <button type="button" className=" bg-red-600 text-white mr-6 text-2xl w-28 rounded-xl h-12" onClick={handleClose}>
            Close 
         </button>
          <button type="button" className=" bg-blue-600 text-white mr-6 text-2xl w-28 rounded-xl h-12" onClick={handleClose}>
            Copy
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;