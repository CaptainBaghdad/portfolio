import React, {Component} from 'react';
import './App.css';
import { tsExpressionWithTypeArguments } from '@babel/types';
class NodeComponent extends React.Component{

    componentDidMount(){
       
    }


    render(){
        return (
            <div>
                 <h3 data-aos="flip-right">Node Projects</h3><br/>
                <section>
                <iframe width="560" 
                height="315" 
                src="https://www.youtube.com/embed/48Wx6iL-TFE" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>

                </section>
                <br/>

                 <h5 data-aos="flip-right"><span>Clear Arabic</span></h5>
                <br/>
                <h5 data-aos="flip-right">Application Description</h5>
                <br/>
                <p data-aos="flip-right">Clear Arabic was designed to be able to assit a user in the ability to learn the Arabic
                alphabet. The application is test based. There are multiple choice as well as drag and drop quizes to test the users retention.
                </p>
                <br/>
                <h3 data-aos="flip-right">Application Features</h3>
                <ul>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>

                </ul>
                <br/>
                <section data-aos="zoom-in-right">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/4jmNi3fe0aU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </section>
                <br/>
                <h5 data-aos="flip-right"><span>Touch Typing</span></h5>
                <br/>
                <h5 data-aos="flip-right">Application Description</h5>
                <br/>
                <p data-aos="flip-right">Touch Typing was created to make the learning of the skill of touch typing more easy. There are multiple letters with the ability to compete 
                with other users for the fastest word per minute.
                </p>
                <br/>
                <h3 data-aos="flip-right">Application Features</h3>
                <ul>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>

                </ul>
                <br/>
                <section data-aos="fade-left"
                         data-aos-anchor="#example-anchor"
                         data-aos-offset="500"
                         data-aos-duration="500">

                        <iframe width="560" height="315" src="https://www.youtube.com/embed/4jmNi3fe0aU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </section>
                
            </div>
        )
    }


}

export default NodeComponent;