import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Dashboard />
    </div>
  );
};

export default App;
