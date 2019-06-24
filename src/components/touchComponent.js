import React, {Component} from 'react';
import '../App.css';
import '../css/sider.css';
class TouchComponent extends React.Component{
    

    render(){
        return(
            <div className="touch-div">
                <section data-aos="flip-right" className="ruby-projects">
                <h3 className="r3" >React Project</h3><br/><hr/>

                
                
                <section className="mapple-vid">
                
                <iframe width="360" className="map" data-aos="zoom-in-right"
                height="215" 
                src="https://www.youtube.com/embed/4jmNi3fe0aU" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>

                <h5 data-aos="flip-right"><span>Touch Typing</span></h5>
                <h3 data-aos="flip-right" className="app-feat">Application Features</h3>
                <ul className="ruby-feats">
                <li>Node js</li>
                    <li>React for the view library</li>
                    <li>MongoDB</li>
                    <li>Materilize CSS</li>

                </ul>
                </section>
                
                <section className="ruby-features">
                <h3 className="r3">Description</h3>
                <p className="rd">Touch Typing is a web application that allows users to compete on a leader board to see who
                can type the most words per minute. React is used for the view library. Users can register and login to keep post their scores
                on the leaderboard. The application uses a NoSQL database for the storage of the users data.
                The application also follows the RESTful standard in that it keeps track of the session on the client side.

                </p>
                </section>

            
            </section>

                </div>
        )
    }



}

export default TouchComponent;