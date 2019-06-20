import React, {Component} from 'react';
import '../App.css';

class PythonComponent extends React.Component{
    render(){
        return (
            <div id="python-div">
                <h5 data-aos="flip-right"><span>Python CRUD</span></h5>
                <br/>
                <h5 data-aos="flip-right">Application Description</h5>
                <br/>
                <p data-aos="flip-right">This is a standard CRUD application. The user can create new employees for a company. The user can see all the employees in a list.
                The user can also delete an employee, as well as edit the employees information.
                </p>
                <br/>
                <h3 data-aos="flip-right">Application Features</h3>
                <ul>
                    <li>Django Framework</li>
                    <li>Python</li>
                    <li>Bootstrap</li>

                </ul>
                <br/>
            </div>

        )
    }


}

export default PythonComponent;