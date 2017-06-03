import React from 'react';

import {NavLink} from 'react-router-dom';

import './NavBarStyle.css';





var NavigationBar = ()=>{


    var navButtonsDescriptions = [

        ['/', 'Pickers List', false],
        ['/addPickerProfile', 'Add Picker Profile', false],
        ['/removePickerProfile', 'Remove Picker Profile', true],
        ['/assignStock', 'Assign stock to pickers', true]

    ],

    navLinks = navButtonsDescriptions.map((singleLink, i)=>{

                    var [href, description, disabled] = singleLink;

                    return <li className={ `navButton ${disabled? 'disabled':''}` } key={i}>

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