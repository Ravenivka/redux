
import React from 'react';
import './App.css';
import Switcher from './component/switcher';
import store from './store/theme';
import { Provider } from 'react-redux';
import theme from './component/switcher';

function App() {


  return (
    <div className="App">
      
      <Provider store={store}>        
        <Switcher />
        
      </Provider>
    </div>
  );
}



export default App;
