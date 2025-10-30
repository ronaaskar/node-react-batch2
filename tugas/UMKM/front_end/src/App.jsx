import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ produk: "", kategori: "", harga: "", sisa: "" });
  const [editItem, setEditItem] = useState(null);

  const apiUrl = "http://localhost:5000/items";

  // Ambil data
  const fetchItems = () => {
    axios.get(apiUrl).then(res => setItems(res.data));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Tambah item
  const addItem = () => {
    axios.post(apiUrl, {
      produk: newItem.produk,
      kategori: newItem.kategori,
      harga: parseFloat(newItem.harga),
      sisa: parseInt(newItem.sisa)
    }).then(() => {
      fetchItems();
      setNewItem({ produk: "", kategori: "", harga: "", sisa: "" });
    });
  };

  // Hapus item
  const deleteItem = (id) => {
    axios.delete(`${apiUrl}/${id}`).then(() => fetchItems());
  };

  // Update item
  const updateItem = (id) => {
    axios.put(`${apiUrl}/${id}`, editItem).then(() => {
      fetchItems();
      setEditItem(null);
    });
  };

  return (
    <div>
      <h1>Daftar Stok Barang</h1>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>ID</th><th>Produk</th><th>Kategori</th><th>Harga</th><th>Sisa</th><th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{editItem?.id === item.id ? <input value={editItem.produk} onChange={e => setEditItem({...editItem, produk: e.target.value})} /> : item.produk}</td>
              <td>{editItem?.id === item.id ? <input value={editItem.kategori} onChange={e => setEditItem({...editItem, kategori: e.target.value})} /> : item.kategori}</td>
              <td>{editItem?.id === item.id ? <input type="number" value={editItem.harga} onChange={e => setEditItem({...editItem, harga: parseFloat(e.target.value)})} /> : item.harga}</td>
              <td>{editItem?.id === item.id ? <input type="number" value={editItem.sisa} onChange={e => setEditItem({...editItem, sisa: parseInt(e.target.value)})} /> : item.sisa}</td>
              <td>
                {editItem?.id === item.id ? (
                  <button onClick={() => updateItem(item.id)}>Simpan</button>
                ) : (
                  <>
                    <button onClick={() => setEditItem(item)}>Edit</button>
                    <button onClick={() => deleteItem(item.id)}>Hapus</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Tambah Item Baru</h2>
      <input placeholder="Produk" value={newItem.produk} onChange={e => setNewItem({...newItem, produk: e.target.value})} />
      <input placeholder="Kategori" value={newItem.kategori} onChange={e => setNewItem({...newItem, kategori: e.target.value})} />
      <input placeholder="Harga" type="number" value={newItem.harga} onChange={e => setNewItem({...newItem, harga: e.target.value})} />
      <input placeholder="Sisa" type="number" value={newItem.sisa} onChange={e => setNewItem({...newItem, sisa: e.target.value})} />
      <button onClick={addItem}>Tambah</button>
    </div>
  );
}

export default App;
