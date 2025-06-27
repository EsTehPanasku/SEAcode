import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.password) {
      return alert("Harap lengkapi semua data.");
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        return alert(data.message || "Gagal mendaftar");
      }

      // Simpan token dan arahkan ke dashboard atau login
      localStorage.setItem("token", data.token);
      alert("Berhasil membuat akun!");

      navigate("/"); // atau redirect ke dashboard jika mau
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan server");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white p-8 rounded shadow max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-green-700">Buat Akun Baru</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Nama Lengkap"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Aktif"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Daftar Sekarang
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600 text-center">
          Sudah punya akun?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-green-600 cursor-pointer underline"
          >
            Masuk di sini
          </span>
        </p>
      </div>
    </section>
  );
};

export default Register;
