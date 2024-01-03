import React,{Component} from "react";
//import {Routes, Route, Navigate} from 'react-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Middle from './components/Middle'
import Right from './components/Right'
import Left from './components/Left'
import './App.css'
//import './bootstrap.css'


function App() {
  return (

    <div>
      <Header></Header>
        <div className="container-fluid text-center">    
        <div className="row content">
          <Left></Left>
          <Middle></Middle>
          <Right></Right>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;

