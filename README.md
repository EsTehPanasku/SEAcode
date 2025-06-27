# SEA Catering

**SEA Catering** adalah aplikasi web pemesanan makanan sehat berbasis langganan. Dibuat menggunakan **React**, **Tailwind CSS**, **Express**, **MongoDB**, dan **Vite**, aplikasi ini memungkinkan pengguna untuk memilih meal plan, menjadwalkan pengiriman, serta memantau dan mengelola langganannya.

## Fitur Utama

### Untuk Pengguna:
- Registrasi dan login aman dengan JWT
- Pemilihan plan diet: Diet, Protein, Royal
- Pemilihan jenis makan: Breakfast, Lunch, Dinner
- Pemilihan hari pengiriman
- Estimasi harga otomatis
- Form langganan interaktif dan responsif
- Dashboard pengguna untuk:
  - Melihat langganan aktif
  - Pause langganan sementara
  - Batalkan langganan

### Untuk Admin:
- Dashboard admin dengan filter tanggal
- Statistik bisnis: langganan baru, MRR, reaktivasi, pertumbuhan langganan
- Akses terbatas untuk admin (berdasarkan role)

## Teknologi yang Digunakan

- **Frontend**: React, Tailwind CSS, Framer Motion, Swiper.js
- **Backend**: Node.js, Express.js, Mongoose
- **Database**: MongoDB (dengan MongoDB Atlas)
- **Autentikasi**: JSON Web Token (JWT)
- **Validasi & Keamanan**:
  - Validasi email, nomor HP, dan form
  - Proteksi dari XSS dan CSRF
  - Password di-hash dengan bcrypt

### 1. Clone repository ini
```bash
git clone https://github.com/EsTehPanasku/SEAcode.git
cd sea-catering
