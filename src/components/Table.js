import React from 'react';

const Table = ({ barang, handleDeleteData, handleShowModal }) => {
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Barang</th>
          <th>Deskripsi Barang</th>
          <th>Stock Barang</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {barang.map((item, index) => (
          <tr key={item.id_barang}>
            <td>{index + 1}</td>
            <td>{item.nama_barang}</td>
            <td>{item.deskripsi}</td>
            <td>{item.stock}</td>
            <td>
              <button type="button" class="btn btn-warning" onClick={() => handleShowModal(item)}>Edit</button>
              
              <button type="button" class="btn btn-primary" onClick={() => handleDeleteData(item.id_barang)}>Hapus</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
