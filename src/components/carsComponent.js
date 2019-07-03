import React, {Component} from 'react';


class CarsComponent extends React.Component{
    render(){
        return (
            <div className="ang-div">
                 <section data-aos="flip-right" className="ruby-projects">
                <h3 className="r3" >Angular Project</h3><br/><hr/>

                
                
                <section className="mapple-vid">
                
                <iframe width="360" height="215" src="https://www.youtube.com/embed/wR1GoXUYpcc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <h5 data-aos="flip-right"><span>Used Cars</span></h5>
                <h3 data-aos="flip-right" className="app-feat">Application Features</h3>
                <ul className="ruby-feats">
                <li>Node js</li>
                    <li>Angular Framework</li>
                    <li>MongoDB</li>
                    <li>Nightmare Js for web scraping</li>

                </ul>
                </section>
                
                <section className="ruby-features">
                <h3 className="r3">Description</h3>
                <p className="rd">Used Cars is an application that shows users used cars for sale in the greate NY area. The main set of data comes from Carfax.com. 
                Users can also place their own used car for sale on the site. Users can upload photos of their car as well as provide the specs and price they are looking for.
                Users can also update that information incase they're having a hard time selling the car, or maybe they are still driving the car, so 
                the mileage can be edited. The application also allows the user to edit the specs in case they have replaced a part or added some new feature to the car, such as tires, for example.
                </p>
                </section>

            
            </section>

            </div>
        )
    }
}


export default CarsComponent;