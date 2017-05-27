import React from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css'


import NavigationBar from './NavigationBar/NavigationBar';

import KingdomPopulationList from './KingdomPopulationList/KingdomPopulationList';
import AddPickerProfile from './AddPickerProfile/AddPickerProfile';
import RemoveProfile from './RemoveProfile/RemoveProfile';
import AssignStock from './AssignStock/AssignStock';

import './MainBoardStyle.css';


var MainBoard = ()=>{


    return(

        <BrowserRouter>

            <div id="mainBoard" className="container-fluid">

                <div className="panelTitle row">

                    <div className="col-md-12">

                        <h1>Rabbit Pickers Administrator Panel</h1>

                    </div>

                </div>


                <div className="row adminPanel">

                    <div className="col-md-2 addPickerProfileContainer">

                        <NavigationBar />

                    </div>

                    <div className="viewContainer col-md-10">

                        <div className="row">

                            <Route exact path="/" component={KingdomPopulationList} />
                            <Route path="/addPickerProfile" component={AddPickerProfile} />
                            <Route path="/removePickerProfile" component={RemoveProfile} />
                            <Route path="/assignStock" component={AssignStock} />

                        </div>

                    </div>


                </div>


            </div>

        </BrowserRouter>

    );

};


export default MainBoard;