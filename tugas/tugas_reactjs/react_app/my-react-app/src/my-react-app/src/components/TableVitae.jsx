import React from 'react';
import row from '../../../TableRow';

const TableVitae = ({ data }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Categories</th>
            <th>Tahun</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <TableRow key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default vitae;
