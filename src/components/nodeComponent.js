import React, {Component} from 'react';
import '../App.css';
import '../css/sider.css';

class NodeComponent extends React.Component{

    componentDidMount(){
       
    }


    render(){
        return (
            <div className="node-div">
            <section data-aos="flip-right" className="ruby-projects">
                <h3 className="r3" >Node Project</h3><br/><hr/>

                
                
                <section className="mapple-vid">
                
                <iframe className="map" width="360" data-aos="zoom-in-right"
                height="215" 
                src="https://www.youtube.com/embed/48Wx6iL-TFE" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>

                <h5 data-aos="flip-right"><span>Clear Arabic</span></h5>
                <h3 data-aos="flip-right" className="app-feat">Application Features</h3>
                <ul className="ruby-feats">
                <li>Node js</li>
                    <li>Handlebars for the template engine</li>
                    <li>MongoDB</li>
                    <li>JQuery UI for most of the functionality</li>

                </ul>
                </section>
                
                <section className="ruby-features">
                <h3 className="r3">Description</h3>
                <p className="rd">Clear Arabic is an application that is intented to aid in the ability to read the Arabic Language.
                Clear Arabic takes a test driven approach to check for retention. Users can also find themselves on a leader board.
                The application keeps track of all the users test scores, and ranks them based on the average. There are also numerous
                resourses to help the users to learn the 28 letters of the Arabic language.
                There are embeded Youtube videos, audio files, and pictures.  
                </p>
                <a href="https://github.com/King-tut/cleararabic">
                <img 
                height="80px;" 
                width="80px;" 
                src="/images/git2.png" 
                alt="github" 
                className="git-pic rounded-circle"
                
                />
                </a>
                </section>

            
            </section>


            



            </div>
          
                
           
        )
    }


}

export default NodeComponent;