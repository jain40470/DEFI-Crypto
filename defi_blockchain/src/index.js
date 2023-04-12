import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import {BrowserRouter} from 'react-router-dom'
import Mainapp from './mainapp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    
    <Mainapp />

  </BrowserRouter>
);
