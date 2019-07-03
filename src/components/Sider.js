import React, {Component} from 'react';
import '../css/sider.css';
import RubyComponent from '../components/rubyComponent';
import NodeComponent from '../components/nodeComponent';

import HeaderComponent from '../components/headerComponent';
import TouchComponent from './touchComponent';
import CarsComponent from '../components/carsComponent';
import WeatherComponent from '../components/weatherComponent';


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
        return (
            <div class="wrapper">

            <nav id="sidebar">
           
                <div class="sidebar-header">
                    <h3>Jason Pitts</h3>
                </div>

                <div id="pro-pic">
                <img className="rounded-circle" src="/images/meme.jpg" alt="no data" height="100px;" width="125px"/>
                </div>
    
                
                <ul class="list-unstyled components">
                    
                    <li><h2 id="about-tag">About</h2></li>
                    <li>
                       <p>I am a full stack developer who lives in the greater NYC area.
                           I am a self taught programmer who has a solid background in customer service as well as sales.
                           Building state-of-the-art, easy to use, user-friendly websites and applications is truly a passion of mine. 
                       </p>
                       
                    </li>
                    
                        <li><h2>Skills</h2></li>
                        <li>JavaScript</li>
                        <li>Nodejs</li>
                        <li>Ruby</li>
                        <li>Python</li>
                        <li>Java</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>React</li>
                        <li>Angular</li>
                        <li>JQuery</li>
                        <li>Java 8</li> 
                        <li>PHP</li>
                        <li>Laravel</li> 
                        <li>Express js</li> 
                        <li>HTML 5</li>
                        <li>CSS</li>
                        <li>Bootstrap 3-4</li>
                        <li>Material Design</li>
                        <li>Linux</li>
                        <li>Apache Server</li>
                                   
                       
                        <li><h3>Contact Me</h3></li>
                        <li>
                        <a className="anchor" href="https://github.com/CaptainBaghdad">Github</a>
                        
                    </li>
                    <li>
                        <a className="anchor" href="https://www.linkedin.com/in/jason-pitts-9b4a6159/">LinkedIn</a>
                    </li>
                    <li>Email- <p>jasonpitts63@gmail.com</p></li>
                        </ul>
            </nav>
    
            <div id="content">
                <button type="button" id="sidebarCollapse" class="navbar-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                
    <section id="ruby-projects">
     <RubyComponent data-aos="fade-left">
     </RubyComponent>
     </section>
     <br/>
     <section id="node-projects">
     <NodeComponent data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000">
     </NodeComponent>
     </section>
     <br/>
     <section>
         <TouchComponent></TouchComponent>
     </section>
     <br/>
     <CarsComponent></CarsComponent>
     <br/>
     <section>
      <WeatherComponent />
     
     
     </section>
     <br/>
     <section id="interests">
     <h3>Interests</h3>
     <p>When I need to take a break from coding to relive some stress, I enjoy time
         either playing sports such as basketball or jogging. I also find that doing weight training in moderation helps me
         to clear my mind as well. I used to be an over the road truck driver so I still enjoy traveling. I haven't made it out of the country
         as of yet, but going across the Atlantic/Pacific is in the plans. 
     </p>
            </section>
    <br/>

           



            </div>
    
    </div>
        )
    }

}


export default SiderComponent;