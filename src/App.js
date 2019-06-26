import React from 'react';
import Header from './components/includes/Header';
import Footer from './components/includes/Footer';
import MainForm from './components/form/MainForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <h1>Welcome to Shape Calculator</h1>
            <p className="lead">
              Shape Calculator is an interactive web application. To the right
              you will find the 3 step application. Follow the intstructions in
              each step . Clicking cancel will take you back to step 1. Enjoy!
            </p>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-8">
                <div
                  className="card card-body mx-auto"
                  style={{
                    width: '22rem',
                    minHeight: '370px',
                    background: '#EFC96C'
                  }}>
                  <MainForm />
                </div>
              </div>
              <div className="col-md-4 mx-auto">
                <div
                  className=" card  card-body"
                  style={{
                    minWidth: '120px',
                    Width: '120px',
                    minHeight: '370px',
                    Height: '370px',
                    background: '#D8D8D8'
                  }}>
                  <p className="lead p-2">120 x 370 (Vertical banner)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
