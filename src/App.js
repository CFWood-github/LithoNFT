import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import './assets/styles/styles.scss';
import Layout from './layouts';
import Home from './pages/home';
import moment from 'moment-timezone';

moment.tz.setDefault("utc");


function App() {

  const [account, setAccount] = useState(null);

  return (
    <Layout account={account} setAccount={setAccount}>
      <Routes>
        <Route index element={<Home account={account}/>} />
      </Routes>
    </Layout>
  );
}

export default App;
