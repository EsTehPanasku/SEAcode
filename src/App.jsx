import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Home from './pages/Home';
import MealPlans from './pages/MealPlans'
import Subscription from'./pages/Subscription';
import AdminDashboard from "./pages/AdminDashboard";

const App = () => {
  console.log('App Rendered!');
  return (
   <div className="bg-green-50 min-h-screen text-slate-800">
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MealPlans />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
      
      <Contact />
      
    </div>
  );
};

export default App;