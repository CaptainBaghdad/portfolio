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
                <h3 className="r3" >Node Projects</h3><br/><hr/>

                
                
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
                <p className="rd">THis is a test to see what that will look like we can just make something up in the meantime.
                    I know I can make this even better that It qas in the first place then there is the thing about how what was fone o wonder if 
                    this is ebouth ext
                </p>
                </section>

            
            </section>


            



            </div>
          
                
           
        )
    }


}

export default NodeComponent;