import { useState, useEffect } from "react";

export default function CrudApp() {
  const [data, setData] = useState([]);
  const [nama, setNama] = useState("");
  const [layanan, setLayanan] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [search, setSearch] = useState("");

  // LOAD dari localStorage
  useEffect(() => {
    const saved = localStorage.getItem("barberData");
    if (saved) setData(JSON.parse(saved));
  }, []);

  // SIMPAN ke localStorage
  useEffect(() => {
    localStorage.setItem("barberData", JSON.stringify(data));
  }, [data]);

  function handleSubmit() {
    if (!nama || !layanan || !tanggal) {
      alert("Semua field harus diisi!");
      return;
    }

    const newData = { nama, layanan, tanggal };

    if (editIndex !== null) {
      const updated = [...data];
      updated[editIndex] = newData;
      setData(updated);
      setEditIndex(null);
    } else {
      setData([...data, newData]);
    }

    setNama("");
    setLayanan("");
    setTanggal("");
  }

  function handleEdit(index) {
    const item = data[index];
    setNama(item.nama);
    setLayanan(item.layanan);
    setTanggal(item.tanggal);
    setEditIndex(index);
  }

  function handleDelete(index) {
    const filtered = data.filter((_, i) => i !== index);
    setData(filtered);
  }

  // FILTER SEARCH
  const filteredData = data.filter((item) =>
    item.nama.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 shadow-xl">
        <h1 className="text-3xl mb-6 text-center text-amber-400 font-semibold">
          Booking Barbershop
        </h1>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Cari pelanggan..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-4 p-2 rounded text-black"
        />

        {/* FORM */}
        <div className="grid md:grid-cols-4 gap-3 mb-6">
          <input
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Nama"
            className="p-2 rounded text-black"
          />

          <select
            value={layanan}
            onChange={(e) => setLayanan(e.target.value)}
            className="p-2 rounded text-black"
          >
            <option value="">Layanan</option>
            <option value="Potong Rambut">✂️ Potong Rambut</option>
            <option value="Cukur Jenggot">🧔 Cukur Jenggot</option>
            <option value="Hair Styling">💇 Hair Styling</option>
          </select>

          <input
            type="date"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
            className="p-2 rounded text-black"
          />

          <button
            onClick={handleSubmit}
            className="bg-amber-500 rounded hover:bg-amber-400 transition text-black font-semibold"
          >
            {editIndex !== null ? "Update" : "Tambah"}
          </button>
        </div>

        {/* LIST */}
        <div className="space-y-3">
          {filteredData.length === 0 && (
            <p className="text-gray-400 text-center">Tidak ada data</p>
          )}

          {filteredData.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-900 p-4 rounded-lg"
            >
              <div>
                <p className="font-semibold text-lg">{item.nama}</p>
                <p className="text-sm text-gray-400">{item.layanan}</p>
                <p className="text-sm text-gray-500">📅 {item.tanggal}</p>
              </div>

              <div className="space-x-3">
                <button
                  onClick={() => handleEdit(index)}
                  className="text-blue-400 hover:text-blue-300"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-400 hover:text-red-300"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
