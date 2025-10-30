import React from 'react';

const TableRow = ({ item }) => {
  const handleEdit = () => {
    console.log('Edit', item.id);
  };

  const handleDelete = () => {
    console.log('Delete', item.id);
  };

  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>{item.categories}</td>
      <td>{item.tahun}</td>
      <td>
        <button onClick={handleEdit}>Ubah</button>
        <button onClick={handleDelete} style={{ marginLeft: '5px' }}>Hapus</button>
      </td>
    </tr>
  );
};

export default TableRow;
