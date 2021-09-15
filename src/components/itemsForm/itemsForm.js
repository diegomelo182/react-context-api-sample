import { useContext } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useFormik } from 'formik';

import { ItemsContext } from '../../contexts/itemsContext';

export default function ItemsForm() {
  const { createItem } = useContext(ItemsContext);

  const formik = useFormik({
    initialValues: {
      name: '',
      size: '',
    },
    onSubmit: values => {
      createItem(values);
    },
  });


  return (
    <Card>
      <Card.Body>
        <Card.Title>Create new item:</Card.Title>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="size">
            <Form.Label>Size</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Size"
              onChange={formik.handleChange}
              value={formik.values.size}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
      </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
