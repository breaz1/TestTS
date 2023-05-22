import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { store } from './store/store'
import Home from './page/Home'
import User from './components/User'
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './page/About';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/user" element={<User />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
