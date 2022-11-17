import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Header from './components/Header';
import Step1 from './containers/Step1';
import Step2 from './containers/Step2';
import Step3 from './containers/Step3';
import Step4 from './containers/Step4';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="bodyWrapper">
          <Routes>
            <Route path="/" element={<Step1 />}>
              <Route index element={<Step1 />} />
              <Route path="step2" element={<Step2 />} />
              <Route path="step3" element={<Step3 />} />
              <Route path="step4" element={<Step4 />} />
              <Route path="*" element={<Step1 />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
