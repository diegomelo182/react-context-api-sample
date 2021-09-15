import { useContext } from 'react';
import { Table, Button } from 'react-bootstrap';

import { ItemsContext } from '../../contexts/itemsContext';

export default function ItemsList() {
  const { removeItem, items } = useContext(ItemsContext);

  const onClickRemove = (index) => () => {
    removeItem(index);
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Item Name</th>
          <th>Item Size</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={`item-${index}`}>
            <td>{index}</td>
            <td>{item.name}</td>
            <td>{item.size}</td>
            <td><Button size="sm" variant="danger" onClick={onClickRemove(index)}>Remove</Button></td>
          </tr>)
        )}
      </tbody>
    </Table>
  )
}