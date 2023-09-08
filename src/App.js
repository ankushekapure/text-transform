import './App.css';
import React, { useState } from 'react';
import Alert from './components/Alert.jsx';
import TextInput from './components/Textinput.jsx';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => {
      setAlert(null);
    }, 3000); // Hide the alert after 3 seconds
  };

  return (
    <main className='container'>
      <Alert alert={alert} />
      <TextInput ShowAlert={showAlert} />
    </main>
  );
}

export default App;
