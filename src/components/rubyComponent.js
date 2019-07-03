import React, {Component} from 'react';
import '../App.css';

class RubyCompoment extends React.Component{
    componentDidMount(){
        window.AOS.init();
    }
    render(){
        return (
            <div className="ruby-div">
           
            <section data-aos="flip-right" className="ruby-projects">
                <h3 className="r3">Ruby Projects</h3><br/><hr/>

                
                
                <section className="mapple-vid">
                
                <iframe  className="map" width="360" height="215" src="https://www.youtube.com/embed/uC-hWjSNuKE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h5 data-aos="flip-right"><span>Big Mapple</span></h5>
                <h3 data-aos="flip-right" className="app-feat">Application Features</h3>
                <ul className="ruby-feats">
                    <li>Ruby on Rails</li>
                    <li>Google Maps API</li>
                    <li>Bootstrap for responsiveness</li>

                </ul>
                </section>
                
                <section className="ruby-features">
                <h3 className="r3">Description</h3>

                <p className="rd">
                Big Mapple is an application that allows users to register a new tourist destination in the greater NYC area.
                Users can upload pictures of the cool places they have seen and think that others should vist as well.
                Users can also give a decription of the place as well as rate the place based upon their experience. With the new place regitered, there will be a marker on the
                map to show other users where the place is in relation to where they are.
                </p>
                </section>

            
            </section>
            </div>
           
        );
    }



}

export default RubyCompoment;