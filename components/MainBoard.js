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

import PanelController from './../PanelController';

import SortingFilterFactory from '../ModelFilter/SortingFilterFactory';



import './MainBoardStyle.css';


var MainBoard = ()=>{

    var pageController = new PanelController(),
        sortingFilter = SortingFilterFactory.createNew('counting'),

        getModel = ()=>{
          return pageController.getAllKingdomMembersProfile();
        },

        getProfileNameList = ()=>{

            var model = getModel();

            return model.map(singleProfile=>{

                return singleProfile.getName();

            });

        };


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

                            <Route exact path="/" render={()=><KingdomPopulationList model={sortingFilter.sortData(getModel())} />} />

                            <Route path="/addPickerProfile" render={(props)=><AddPickerProfile {...props} pageController={pageController} />} />

                            <Route path="/removePickerProfile" render={(props)=><RemoveProfile {...props} pageController={pageController} profileNameList={getProfileNameList()} />} />

                            <Route path="/assignStock" render={(props)=><AssignStock {...props} pageController={pageController} profileNameList={getProfileNameList()} />} />

                        </div>

                    </div>


                </div>


            </div>

        </BrowserRouter>

    );

};


export default MainBoard;