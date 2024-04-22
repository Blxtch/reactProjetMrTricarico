import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

function CartWindow() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  
    const dataFromBackend = [
        { id: 1, name: 'Product 1', price: 10, amount: 2},
        { id: 2, name: 'Product 2', price: 20, amount: 3},
        { id: 3, name: 'Product 3', price: 30, amount: 1 },
        { id: 4, name: 'Product 4', price: 40, amount: 4},
    ];

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                panier
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th>Ref</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataFromBackend.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        {item.amount}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary">Order</Button>{' '}
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CartWindow;