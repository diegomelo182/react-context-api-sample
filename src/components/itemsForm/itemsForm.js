import { useContext } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { useFormik } from 'formik';

import { ItemsContext } from '../../contexts/itemsContext';
import validate from './validation';

export default function ItemsForm() {
  const { createItem } = useContext(ItemsContext);

  const formik = useFormik({
    initialValues: {
      name: '',
      size: '',
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      createItem(values);
      resetForm();
    },
  });

  return (
    <Card>
      <Card.Body>
        <Card.Title>Create new item:</Card.Title>
        <Form onSubmit={formik.handleSubmit}>
          <Row>
            <Form.Group as={Col} className="mb-3" controlId="name">
              <Form.Control
                type="text"
                placeholder="Enter name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <Form.Text>{formik.errors.name}</Form.Text>
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="size">
              <Form.Control
                type="number"
                placeholder="Enter Size"
                onChange={formik.handleChange}
                value={formik.values.size}
              />
              <Form.Text>{formik.errors.size}</Form.Text>
            </Form.Group>

            <Col>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}
