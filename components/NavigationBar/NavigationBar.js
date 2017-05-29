import React from 'react';

import {NavLink} from 'react-router-dom';

import './NavBarStyle.css';





var NavigationBar = ()=>{


    var navButtonsDescriptions = [

        ['/', 'Pickers List'],
        ['/addPickerProfile', 'Add Picker Profile'],
        ['/removePickerProfile', 'Remove Picker Profile'],
        ['/assignStock', 'Assign stock to pickers']

    ],

    navLinks = navButtonsDescriptions.map((singleLink, i)=>{

                    var [href, description] = singleLink;

                    return <li className="navButton" key={i}>

                                <NavLink exact to={href} activeClassName="selected">
                                    <span>{description}</span>
                                </NavLink>

                           </li>

                });


    return(

        <div id="navigationBar">

            <ul>{navLinks}</ul>

        </div>

    );

};

export default NavigationBar;