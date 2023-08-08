import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './components/Table';
import AddForm from './components/AddForm';
import EditForm from './components/EditForm';
import Navbar from './components/Navbar'; // Import komponen Navbar

const BASE_URL = 'https://localhost:7025/api/CRUD';

const App = () => {
  const [barang, setBarang] = useState([]);
  const [formData, setFormData] = useState({
    nama_barang: '',
    deskripsi: '',
    stock: 0,
  });
  const [showEditForm, setShowEditForm] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    fetchBarang();
  }, []);

  const fetchBarang = async () => {
    try {
      const response = await fetch(`${BASE_URL}/Getbarang`);
      if (!response.ok) {
        throw new Error("Gagal mengambil data dari API.");
      }
      const data = await response.json();
      setBarang(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddData = async (newData) => {
    try {
      const response = await fetch(`${BASE_URL}/Addbarang`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(newData),
      });

      if (!response.ok) {
        throw new Error("Gagal menambahkan data.");
      }

      fetchBarang();

      setFormData({
        nama_barang: '',
        deskripsi: '',
        stock: 0,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteData = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/Deletebarang?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error("Gagal menghapus data.");
      }

      fetchBarang();
    } catch (error) {
      console.error(error);
    }
  };

  const handleShowModal = (data) => {
    setEditData(data);
    setShowEditForm(true);
  };

  const handleEditData = async (editedData) => {
  try {
    const response = await fetch(`${BASE_URL}/Updatebarang`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedData),
    });

    if (!response.ok) {
      throw new Error('Gagal memperbarui data.');
    }

    fetchBarang();

    setShowEditForm(false);
  } catch (error) {
    console.error(error);
  }
};


  return (
    <div className="App">
      <Navbar /> {/* Tambahkan komponen Navbar di sini */}
      <h1>Daftar Barang</h1>
      <>
        <AddForm formData={formData} setFormData={setFormData} handleAddData={handleAddData} />
        {showEditForm && (
          <EditForm editData={editData} handleEditData={handleEditData} handleCancelEdit={() => setShowEditForm(false)} />
        )}
        <Table barang={barang} handleDeleteData={handleDeleteData} handleShowModal={handleShowModal} />
      </>
    </div>
  );
};

export default App;
