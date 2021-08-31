import React from 'react';
import Provider from './Context/Provider';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'boxicons';
import MainRouter from './Router/MainRouter';

function App() {
  return (
    <Provider>
      <link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css" rel="stylesheet" />
      <div className="meals">
        <MainRouter />
      </div>
    </Provider>
  );
}

export default App;
