import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";

const Problem2 = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        {/* Modal */}
        <Modal show={showModal} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title className="fs-5">Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>Data show</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>

        <div className="d-flex justify-content-center gap-3">
          <Button
            className="btn-lg btn-outline-primary"
            onClick={handleShow}
          >
            All Contacts
          </Button>

          <Button className="btn-lg btn-outline-warning" type="button">
            US Contacts
          </Button>
        </div>
      </Row>
    </Container>
  );
};

export default Problem2;
