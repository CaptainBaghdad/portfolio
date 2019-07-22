import React, {Component} from 'react';
import MainController from './components/mainController';
import RubyComponent from './components/rubyComponent';
import NodeComponent from './components/nodeComponent';
import PythonComponent from './components/pythonComponent';
import SiderComponent from './components/Sider';

import './App.css';



class App extends React.Component{

  
  componentDidMount(){
   
    window.AOS.init({
      delay: 1000
    });
  }

  
  

  render(){ 

     return (
      <div className="App" >
    <SiderComponent></SiderComponent>
    

     

       </div>
     
    )

  }
  
}

export default App;
