import React from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';


import NavigationBar from './NavigationBar';

import PickerList from './PickerList';
import AddPickerProfile from './AddPickerProfile';
import RemovePickerProfile from './RemovePickerProfile';



var MainBoard = ()=>{


    return(

        <BrowserRouter>

            <div id="mainBoard">

                <NavigationBar />


                <Route exact path="/" component={PickerList} />

                <Route path="/addPickerProfile" component={AddPickerProfile} />

                <Route path="/removePickerProfile" component={RemovePickerProfile} />



            </div>

        </BrowserRouter>

    );

};


export default MainBoard;