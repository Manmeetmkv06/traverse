
import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home'; 
import Tours from '../pages/Tours';
import TourDetails from '../pages/TourDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchResultList from '../pages/SearchResultList';
import Thankyou from "../pages/Thankyou";
import Booking from "../components/Booking/Booking";
import MemoryForm from "../pages/MemoryForm";
import CommunityPage from "../pages/CommunityPage";


const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/tours' element={<Tours />} />
      <Route path='/tours/:id' element={<TourDetails />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/thank-you' element={<Thankyou />} />
      <Route path='/tours/:id/booking' element={<Booking />} />
      <Route path='/tours/search' element={<SearchResultList />} />
      <Route path="/memories" element={<CommunityPage />} />
      <Route path="/memories/new" element={<MemoryForm />} />
      
      
    </Routes>
  );
};

export default Router;
