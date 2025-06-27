import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        alert("Login berhasil!");
        navigate("/subscription"); // 🚀 Arahkan ke Subscription
      } else {
        alert(data.message || "Login gagal");
      }
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat login.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Login ke SEA Catering</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Login

 
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600 text-center">
            Belum punya akun?{" "}
            <span
                onClick={() => navigate("/register")}
                className="text-green-600 cursor-pointer underline"
                >
            Buat akun
        </span>
        </p>
      </div>
    </section>
  );
};

export default Login;
