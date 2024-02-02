import React, { useEffect } from 'react';
import Modal from 'react-modal';
import './index.css';

// Import your custom router with an uppercase name
import Routers from './routes';

const App = () => {
  // Set the app element when the component mounts
  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  return (
    <div>
      <Routers />
    </div>
  );
};

export default App;
