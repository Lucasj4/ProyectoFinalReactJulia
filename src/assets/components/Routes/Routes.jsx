import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Sidebar from "../Sidebar/Sidebar";


const MyRoutes = () => {
  return (
    <>
      <BrowserRouter>
      <Sidebar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyRoutes;
