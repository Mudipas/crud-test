// ... Kode sebelumnya ...

const Table = ({ barang, handleDeleteData, handleShowModal }) => {
  return (
    <table className="table table-striped">
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
              <button type="button" className="btn btn-warning mr-2" onClick={() => handleShowModal(item)}>Edit</button>
              {/* Tambahkan class "mr-2" untuk memberi margin kanan */}
              
              <button type="button" className="btn btn-primary" onClick={() => handleDeleteData(item.id_barang)}>Hapus</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
