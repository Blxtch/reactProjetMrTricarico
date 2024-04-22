
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductItem from './ProductItem';

function Product() {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <ProductItem/>
        </Col>
      ))}
    </Row>
  );
}

export default Product;