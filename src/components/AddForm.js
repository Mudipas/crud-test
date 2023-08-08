import React, { useState } from 'react';

const AddForm = ({ handleAddData }) => {
  const [formData, setFormData] = useState({
    nama_barang: '',
    deskripsi: '',
    stock: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
   <div class="mb-3">
  <h4>Tambah Data</h4>
  <div class="row">
    <div class="col">
      <input
        type="text"
        name="nama_barang"
        class="form-control"
        placeholder="Nama Barang"
        value={formData.nama_barang}
        onChange={handleInputChange}
      />
    </div>
    <div class="col">
      <input
        type="text"
        name="deskripsi"
        class="form-control"
        placeholder="Deskripsi"
        value={formData.deskripsi}
        onChange={handleInputChange}
      />
    </div>
    <div class="col">
      <input
        type="number"
        name="stock"
        class="form-control"
        placeholder="Stock"
        value={formData.stock}
        onChange={handleInputChange}
      />
    </div>
    <div class="col">
      <button type="button" class="btn btn-primary" onClick={() => handleAddData(formData)}>Tambah Data</button>
    </div>
  </div>
</div>

  );
};

export default AddForm;
