import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col, Modal, Button, Form } from "react-bootstrap";
import { fetchData } from './api.js';

const Problem2 = () => {
    const [modalType, setModalType] = useState(null);
    const [onlyEven, setOnlyEven] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [contacts, setContacts] = useState([]);
  
    useEffect(() => {
      fetchData('users')
        .then((data) => setContacts(data))
        .catch((error) => console.error('Error fetching contacts:', error));
    }, []);
  
    const openModal = (type) => {
      setModalType(type);
    };
  
    const closeModal = () => {
      setModalType(null);
    };
  
    const handleCheckboxChange = () => {
      setOnlyEven(!onlyEven);
    };
  
    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
    };
  
    const filterContacts = () => {
      let filteredContacts = contacts;
  
      if (onlyEven) {
        filteredContacts = filteredContacts.filter((contact) => contact.id % 2 === 0);
      }
  
      if (searchQuery) {
        const lowerSearchQuery = searchQuery.toLowerCase();
        filteredContacts = filteredContacts.filter(
          (contact) =>
            contact.name.toLowerCase().includes(lowerSearchQuery) ||
            contact.email.toLowerCase().includes(lowerSearchQuery)
        );
      }
  
      return filteredContacts;
    };
  
    const filteredContacts = filterContacts();
  
    return (
      <div className="App text-center">
        <Button variant="primary" onClick={() => openModal('A')}>
          All Contact
        </Button>
        <Button variant="warning" onClick={() => openModal('B')}>
          US Contact
        </Button>
  
        {/* Modal A */}
        <Modal show={modalType === 'A'} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal A</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button variant="primary" onClick={() => openModal('A')}>
              All Contacts
            </Button>
            <Button variant="warning" onClick={() => openModal('B')}>
              US Contacts
            </Button>
            <Button variant="primary" onClick={closeModal}>
              Close
            </Button>
            <Form.Check
              type="checkbox"
              label="Only even"
              id="onlyEvenCheckboxA"
              checked={onlyEven}
              onChange={handleCheckboxChange}
            />
            <Form.Control
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <div id="contactsListA">
              {filteredContacts.map((contact) => (
                <div key={contact.id}>{contact.name}</div>
              ))}
            </div>
          </Modal.Body>
        </Modal>
  
        {/* Modal B */}
        <Modal show={modalType === 'B'} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal B</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button variant="primary" onClick={() => openModal('A')}>
              All Contacts
            </Button>
            <Button variant="warning" onClick={() => openModal('B')}>
              US Contacts
            </Button>
            <Button variant="warning" onClick={closeModal}>
              Close
            </Button>
            <Form.Check
              type="checkbox"
              label="Only even"
              id="onlyEvenCheckboxB"
              checked={onlyEven}
              onChange={handleCheckboxChange}
            />
            <Form.Control
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <div id="contactsListB">
              {filteredContacts.map((contact) => (
                <div key={contact.id}>{contact.name}</div>
              ))}
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  };

export default Problem2;
