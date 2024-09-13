
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicCard({ title, role, salary, removeHandler }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Role: {role}</Card.Text>
        <Card.Text>Salary: ${salary}</Card.Text>
        <Button variant="danger" onClick={removeHandler}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BasicCard;
