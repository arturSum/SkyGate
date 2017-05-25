import React from 'react';

import {Link} from 'react-router-dom';



var NavigationBar = ()=>{

    return(

        <div>

            <p>NavigationBar</p>

            <div>

                <button>
                    <Link to='/'>Home</Link>
                </button>

                <button>
                    <Link to='/addPickerProfile'>addPickerProfile</Link>
                </button>

                <button>
                    <Link to='/removePickerProfile'>removePickerProfile</Link>
                </button>


            </div>


        </div>




    );

};

export default NavigationBar;