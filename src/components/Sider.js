import React, {Component} from 'react';
import '../css/sider.css';
import Work from '../images/work_1.jpg';
import Work2 from '../images/work_2.jpg';
import Work3 from '../images/work_3.jpg';
//import PersonOne from '../images/meme.jpg';
import PersonThree from "../images/testimonial_person3.jpg";
import RubyComponent from '../components/rubyComponent';
import NodeComponent from '../components/nodeComponent';

import HeaderComponent from '../components/headerComponent';
import TouchComponent from './touchComponent';
import CarsComponent from '../components/carsComponent';
import WeatherComponent from '../components/weatherComponent';
import  PythonComponent from '../components/pythonComponent';


class SiderComponent extends React.Component{

    componentDidMount(){
        window.$(document).ready(function () {
            window.$('#sidebarCollapse').on('click', function () {
                window.$('#sidebar').toggleClass('active');
                window.$(this).toggleClass('active');
            });
        });

        
    }



    render(){
        let styles = {
            backgroundImage: 'url("images/hero.jpg")'

        }
        return (
            <div id="fh5co-page">
            <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>
          
    
            <div id="fh5co-main">
    
                <div className="fh5co-narrow-content">
                    
                    <div className="row animate-box" data-animate-effect="fadeInLeft">
                        <div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12 work-item">
                            
                                <PythonComponent />
                                <h3 className="fh5co-work-title"></h3>
                                <p></p>
                            
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12 work-item">
                            <RubyComponent/>
                               
                                <h3 className="fh5co-work-title"></h3>
                                <p></p>
                           
                        </div>
                        <div className="clearfix visible-sm-block"></div>
                        <div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12 work-item">
                            
                               <CarsComponent />
                                <h3 className="fh5co-work-title"></h3>
                                <p></p>
                            
                        </div>
                        <div className="clearfix visible-md-block"></div>
                        <div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12 work-item">
                            
                                <WeatherComponent />
                                <h3 className="fh5co-work-title"></h3>
                                <p></p>
                          
                        </div>
                        <div className="clearfix visible-sm-block"></div>
                        <div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12 work-item">
                            <NodeComponent />

                                <h3 className="fh5co-work-title"></h3>
                                <p></p>
                            
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12 work-item">
                           
                                <TouchComponent />
                                <h3 className="fh5co-work-title"></h3>
                                <p></p>
                          
                        </div>
                       
                        
                    </div>
                </div>
                
                
                <div className="fh5co-testimonial" >
                    <div className="fh5co-narrow-content">
                        <div className="owl-carousel-fullwidth animate-box" data-animate-effect="fadeInLeft">
                        <div className="jumbotron">
                            <figure>
                                <img src="/images/meme.jpg" alt="Free HTML5 Bootstrap Template" className="rounded-circle" />
                            </figure>
                              <p className="text-center quote">Hello, my name is Jason Pitts and I am a Full Stack Engineer. I live in NYC and love to build modern, responsive web and mobile applications. You can connect with me by checking out my 
                              LinkedIn and Github right below.
                               
                               </p>
                        </div>
                       
                        
                      </div>
                    </div>
                </div>

                <div id="connect">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/jason-pitts-9b4a6159/">LinkedIn</a>
                    </li>
                    <li><a href="https://github.com/CaptainBaghdad">Github</a></li>

                </ul>

                </div>
    
    
                
                
            
               
                
    
            </div>
        </div>
    
        
    
        )
    }

}


export default SiderComponent;