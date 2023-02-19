import { useState } from 'react';
import Header from './components/Header';
import './App.scss';
import TimePage from './components/TimePage';

function App() {
  return (
    <div className='App'>
      <Header />
      <TimePage />
    </div>
  );
}

export default App;
