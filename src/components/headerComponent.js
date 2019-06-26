import React, {Component} from 'react';
import '../css/header.css';

class HeaderComponent extends React.Component{
    render(){
        return (
            <div>
                <nav>
                    <ul id="head-ul">
                        <li>
                            <a href="#">Github</a>
                            </li>
                            <li>
                                <a href="#python-projects">Contact</a>
                                </li>

                                <li>
                                    <a href="#interests">Interests</a>
                                </li>
                        

                    </ul>
                </nav>
            </div>

        )
    }


}


export default HeaderComponent;