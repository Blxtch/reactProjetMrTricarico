import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProductItemForm from './ProductItemForm';
import pizzaImage from '../img/pizza.jpg';

function ProductItem() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pizzaImage} />
            <Card.Body>
                <Card.Title>Produit</Card.Title>
            </Card.Body>
            <ProductItemForm />
        </Card>
    );
}

export default ProductItem;