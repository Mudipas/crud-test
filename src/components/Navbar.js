// components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid d-flex justify-content-center"> {/* Tambahkan class justify-content-center untuk membuat navbar berada di tengah */}
        <a className="navbar-brand" href="#">Daftar Barang</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#add">Tambah Barang</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#table">Tabel Barang</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
