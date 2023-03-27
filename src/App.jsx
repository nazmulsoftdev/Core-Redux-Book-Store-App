// import React, {useState} from 'react'
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import BookPage from "./pages/BookPage";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<BookPage />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
