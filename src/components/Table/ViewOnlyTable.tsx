import React from 'react';
import { Table } from 'react-bootstrap';
import { Category } from '../types/Category';

interface ViewOnlyTableProps {
  data: Category[]; // Array of categories to display
  handleSort: (key: keyof Category) => void; // Function for sorting columns
  onEdit: (category: Category) => void; // Function for editing a category
  onDelete: (id: number) => void; // Function for deleting a category
}

const ViewOnlyTable: React.FC<ViewOnlyTableProps> = ({ data, handleSort, onEdit, onDelete }) => {
  return (
    <Table id="category-table" className="border text-nowrap text-md-nowrap table-hover mb-0">
      <thead className="table-primary">
        <tr>
          <th onClick={() => handleSort('id')} style={{ cursor: 'pointer' }}>
            ID
          </th>
          <th>Photo</th>
          <th onClick={() => handleSort('name')} style={{ cursor: 'pointer' }}>
            Name
          </th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <img
                  className="avatar rounded-pill cover-image"
                  src={'https://kwickfoods.in/uploads/dosa.jpg'}
                  alt={item.name}
                />
              </td>
              <td>{item.name}</td>
              <td>
                <span
                  className="avatar rounded-circle bg-azure"
                  style={{ cursor: 'pointer' }}
                  onClick={() => onEdit(item)} // Edit handler
                >
                  <i className="bi bi-pen fs-15"></i>
                </span>
              </td>
              <td>
                <span
                  className="avatar rounded-circle bg-pink"
                  style={{ cursor: 'pointer' }}
                  onClick={() => onDelete(item.id)} // Delete handler
                >
                  <i className="bi bi-trash fs-15"></i>
                </span>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={4} className="text-center text-muted">
              No categories found.
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default ViewOnlyTable;
