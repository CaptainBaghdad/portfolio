import React, {Component} from 'react';
import '../App.css';

class RubyCompoment extends React.Component{
    render(){
        return (
            <div id="ruby-div">
            <section data-aos="flip-right">
                <h3 data-aos="flip-right">Ruby Projects</h3><br/>
                
                <iframe width="560" height="315" src="https://www.youtube.com/embed/uC-hWjSNuKE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               
                <br/>
                <h5 data-aos="flip-right"><span>Big Mapple</span></h5>
                <br/>
                <h5 data-aos="flip-right">Application Description</h5>
                <br/>
                <p data-aos="flip-right">The Big Mapple was enginered with Ruby on Rails. This application allows users to see 
                    tourist destinations in the greater NYC area. Users can plot their own destination on the map so that others can 
                    visit that location as well.
                </p>
                <br/>
                <h3 data-aos="flip-right">Application Features</h3>
                <ul>
                    <li>Ruby on Rails</li>
                    <li>Google Maps API</li>
                    <li>Bootstrap for responsiveness</li>

                </ul>

            
            </section>
            </div>
        );
    }



}

export default RubyCompoment;