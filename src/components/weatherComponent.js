import React, {Component} from 'react' ;
import '../App.css';
import '../css/sider.css';

class WeatherComponent extends React.Component{
    render(){
        return (
            <div id="weather-div">
            <section data-aos="flip-right" className="ruby-projects">
                <h3 className="r3" >React Project</h3><br/><hr/>

                
                
                <section className="mapple-vid">
                
               <iframe className="map" 
               width="360" 
               height="215" 
               src="https://www.youtube.com/embed/58t9KTgOGYY" 
               frameborder="0" 
               allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
               allowfullscreen></iframe>

                <h5 data-aos="flip-right"><span>Weather App</span></h5>
                <h3 data-aos="flip-right" className="app-feat">Application Features</h3>
                <ul className="ruby-feats">
                <li>React js</li>
                    <li>React for the view library</li>
                    <li>Apiux.com's API for the applications data</li>
                    <li>Sass was used for all the sytling of the appliction</li>

                </ul>
                </section>
                
                <section className="ruby-features">
                <h3 className="r3">Description</h3>
                <p className="rd">The Weather application is your typicall weather app. A user can enter in a string for the
                location. The response from the API will give the user the current temperature Fahrenheit. It will also return 
                the current conditions as well as an icon that will let the user know the current time of the day.    
                </p>
                <a href="https://github.com/CaptainBaghdad/weatherapp">
                <img 
                height="80px;"
                 width="80px;" 
                 src="/images/git2.png" 
                 alt="github"
                 className="git-pic rounded-circle" 
                 /></a>
                </section>

            
            </section>

            
            </div>
        )
    }



}

export default WeatherComponent;