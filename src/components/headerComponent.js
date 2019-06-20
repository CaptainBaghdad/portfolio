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
                                <a href="#">Contact</a>
                                </li>

                                <li>
                                    <a href="#">Interest</a>
                                </li>
                        

                    </ul>
                </nav>
            </div>

        )
    }


}


export default HeaderComponent;