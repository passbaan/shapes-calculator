import React from 'react';
import Header from './components/includes/Header';
import MainForm from './components/form/MainForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainForm />
    </div>
  );
}

export default App;
