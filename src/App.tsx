import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from "./pages";
import Layout from "./components/Layout/Layout";
import DevCompany from "./pages/dev-company";
import AddExtension from "./pages/add-extension";
import Owner from "./pages/owner";

function App() {
  return (
          <BrowserRouter>
              <Layout>
                  <Routes>
                      <Route path='/' element={<Homepage/> }/>
                      <Route path='/dev-company-dashboard' element={<DevCompany/> }/>
                      <Route path='/add-extension' element={<AddExtension/>}/>
                      <Route path='/owner' element={<Owner/>}/>
                  </Routes>
              </Layout>
          </BrowserRouter>

  );
}

export default App;
