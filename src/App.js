import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import {Header} from './components/Header/Header.component'
import {HomePage} from './components/HomePage/HomePage.component'
import {UserPage} from './components/User/User.component'
import {GlobalProvider} from './context/GlobalContext'


function App() {
  
  return (

    <GlobalProvider>
    <div className="container">
    <Header />
    <Route exact path='/'  component={HomePage}  />
    <Route path={`/:id`} component={UserPage} />
    </div>
    </GlobalProvider>
  );
}

export default App;
