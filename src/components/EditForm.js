import React, { useState, useEffect } from 'react';

const EditForm = ({ editData, handleEditData, handleCancelEdit, BASE_URL }) => {
  const [formData, setFormData] = useState({
    nama_barang: 'nama_barang',
    deskripsi: 'deskripsi',
    stock: 0,
  });

  useEffect(() => {
    // Memeriksa apakah editData memiliki nilai sebelum mengatur nilai awal untuk formData
    if (editData) {
      setFormData(editData);
    }
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditData(formData);
  };

  return (
    <form class="mb-3" onSubmit={handleSubmit}>
      <label>
        Nama Barang:
        <input type="text" name="nama_barang" class="form-control" value={formData.nama_barang} onChange={handleChange} />
      </label>
      <label>
        Deskripsi:
        <input type="text" name="deskripsi" class="form-control" value={formData.deskripsi} onChange={handleChange} />
      </label>
      <label>
        Stock:
        <input type="number" name="stock" class="form-control" value={formData.stock} onChange={handleChange} />
      </label>
      <button type="submit" class="btn btn-primary">Simpan Perubahan</button>
      <button type="button" class="btn btn-warning" onClick={handleCancelEdit}>Batal</button>
    </form>
  );
};

export default EditForm;
