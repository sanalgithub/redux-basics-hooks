import './App.css';
import store from './redux/store';
import React from 'react';
import { Provider } from 'react-redux';
import HooksCakeContainer from './components/cakeusingHooks';
import IceCreamContainer from './components/iceCreamContainer';
import UserContainer from './components/userContainer';

function App() {
  return (
    <Provider store={store}>
 <div className="App">
  <UserContainer/>
      <HooksCakeContainer/>
      <IceCreamContainer/>
     
    </div>

    </Provider>
  )
   
}

export default App;


//provider is used provid our store to reactapplication