import React from 'react';
import { Table } from 'react-bootstrap';
import { SubCategory } from '../types/SubCategory';

interface DataTableProps {
  data: SubCategory[];
  onEdit: (subcategory: SubCategory) => void;
  onDelete: (id: number) => void;
  handleSort: (key: keyof SubCategory) => void;
}

const DataTable: React.FC<DataTableProps> = ({ data, onEdit, onDelete, handleSort }) => {
  return (
    <Table id="subcategory-table" className="border text-nowrap text-md-nowrap table-hover mb-0">
      <thead className="table-primary">
        <tr>
          <th onClick={() => handleSort('id')}>ID</th>
          <th>Photo</th>
          <th onClick={() => handleSort('name')}>Names</th>
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
                <span onClick={() => onEdit(item)} className="avatar rounded-circle bg-azure"><i className="bi bi-pen fs-15"></i></span>
              </td>
              <td>
                <span onClick={() => onDelete(item.id)} className="avatar rounded-circle bg-pink"><i className="bi bi-trash fs-15"></i></span>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5} className="text-center">
              No records found.
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default DataTable;
