import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function BaDge() {
  return (
    <Button variant="primary">
      Panier<Badge bg="secondary">9</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
  );
}

export default BaDge;