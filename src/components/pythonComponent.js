import React, {Component} from 'react';
import '../App.css';

class PythonComponent extends React.Component{
    render(){
        return (
            <div className="python-div">
            <section data-aos="flip-right" className="ruby-projects">
           <h3 className="r3" >Python Project</h3><br/><hr/>

           
           
           <section className="mapple-vid">
           
           
           <iframe className="map" 
           width="360" 
           height="215" 
           src="https://www.youtube.com/embed/sdfnPs_spQU" 
           frameborder="0" 
           allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            >
            </iframe>

           <h5 data-aos="flip-right"><span>Trader Coles</span></h5>
           <h3 data-aos="flip-right" className="app-feat">Application Features</h3>
           <ul className="ruby-feats">
           <li>Python 3.7</li>
               <li>Django Framework</li>
               <li>Material Design Bootstrap 4</li>
               <li>Crispy Forms</li>

           </ul>
           </section>
           
           <section className="ruby-features">
           <h3 className="r3">Description</h3>
           <p className="rd">
           Trader Coles is an application that is similar to Ebay, where in that the items for sale are typically used. I decided to use Material Designs JQuery Template for 
           the structure of the application. A user can select an item from the landing page, and then be tooken to a detail view of that item. Users can then put items into their cart or delete them. There is a checkout feature that is going to use
           stripe for the payment proccessing. Django-admin made the process of creating and editing the items seemless. The admin can add the items they want to add or edit from an admin dashboard.
           </p>
           <a href="https://github.com/CaptainBaghdad/used-cars">
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

export default PythonComponent;