import React, {Component} from 'react';
import MainController from './controllers/mainController';
import RubyComponent from './controllers/rubyComponent';
import NodeComponent from './controllers/nodeComponent';
import './App.css';


class App extends React.Component {
  componentDidMount(){
    window.AOS.init({
      delay: 1000
    });
  }

  render(){ 
    return (
      <div className="App" >
     
     <RubyComponent data-aos="fade-left"></RubyComponent>
     <NodeComponent data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000"></NodeComponent>

     <section data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
    <MainController></MainController>
     </section>

     <section data-aos="fade-right">
     <iframe width="560" height="315" src="https://www.youtube.com/embed/GTexe8c0eqw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     </section>

     <section data-aos="fade-right">
     <iframe width="560" height="315" src="https://www.youtube.com/embed/GTexe8c0eqw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     </section>

       </div>
     
    )

  }
  
}

export default App;
