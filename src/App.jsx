import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Componenets/Header';
import Home from './Pages/Home';
import AuthorPage from './Pages/AuthorPage';
import AdminPage from './Pages/AdminPage';
import FormikEdit from './Pages/FormikEdit';
import FormikCreate from './Pages/FormikCreate';
import AuthorEdit from './Pages/AuthorEdit';
import AuthorCreate from './Pages/AuthorCreate';

const App = () => {
  const [id,setId] =useState(0);
  return (
    <div>
   <BrowserRouter>
   <div>
    <Header/>
   </div>
   <Routes>
    <Route path="/" element={<Home setId={setId}/>}/>
    <Route path="/author" element={<AuthorPage setId={setId}/>}/>
    <Route path="/admin" element={<AdminPage setId={setId}/>}/>
    <Route path="/edit/:id" element={<FormikEdit id={id}/>}/>
    <Route path="/create" element={<FormikCreate/>}/>
    <Route path='/authoredit/:id' element={<AuthorEdit id={id}/>}/>
    <Route path='/authorcreate' element={<AuthorCreate/>}/>
   </Routes>
   </BrowserRouter>
   </div>
  );
};

export default App;