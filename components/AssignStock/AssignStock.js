
import React from 'react';

import './AssignStockStyle.css';


var AssignStock = (props)=>{

    var {
        pageController,
        model
    } = props,


    selectedQntNode = null,
    selectedQnt = 0,

    selectedProductNode = null,
    selectedProfileNode = null,


    makeOptionsNode = profileStorage=>{


        var nodeList = [],
            keyCounter = 0;


        for(var profileId in profileStorage){


            if(profileStorage.hasOwnProperty(profileId)){

                nodeList.push(

                    <option key={keyCounter} value={profileId}>{profileId}</option>

                );

            }


        }


        return nodeList;
    };





    return(

        <div id="assignStock" className="col-md-8 col-md-offset-2">

            <div className="panel panel-primary">

                <div className="panel-heading">
                    <h3 className="panel-title">Assign product to Rabbit profile ...</h3>
                </div>

                <div className="background">

                    <div className="panel-body">

                        <div className="form-group">


                            <h4>Select rabbit profile</h4>

                            <select
                                className="form-control"
                                name="assignStockProfileSelector"
                                id="assignStockProfileSelector"
                                ref={thisNode=>{selectedProfileNode=thisNode}}
                            >

                                {makeOptionsNode(model)}


                            </select>


                            <h4>Select product</h4>

                            <select
                                className="form-control"
                                name="assignStockProductSelector"
                                id="assignStockProductSelector"
                                ref={thisNode=>{selectedProductNode=thisNode}}
                            >
                                <option value='#carrot'>Marchewka</option>

                            </select>


                            <h4>Selected quantity: <span className="selectedQnt" ref={thisNode=>selectedQntNode=thisNode}>0</span></h4>


                            <div className="qntButton" onClick={(e)=>{

                                var targetElement = e.target;


                                if(targetElement.className.indexOf('btn') !== -1){

                                    selectedQnt = selectedQnt + parseInt(targetElement.value);

                                    selectedQntNode.innerHTML = selectedQnt;
                                }
                            }}>

                                <div className="plus">

                                    <button className="btn btn-success btn-xs" value="1">+1</button>
                                    <button className="btn btn-success btn-xs" value="2">+2</button>
                                    <button className="btn btn-success btn-xs" value="5">+5</button>

                                    <button className="btn btn-success btn-xs" value="10">+10</button>
                                    <button className="btn btn-success btn-xs" value="20">+20</button>
                                    <button className="btn btn-success btn-xs" value="50">+50</button>

                                    <button className="btn btn-success btn-xs" value="100">+100</button>
                                    <button className="btn btn-success btn-xs" value="200">+200</button>
                                    <button className="btn btn-success btn-xs" value="500">+500</button>

                                    <button className="btn btn-success btn-xs" value="1000">+1000</button>
                                    <button className="btn btn-success btn-xs" value="2000">+2000</button>
                                    <button className="btn btn-success btn-xs" value="5000">+5000</button>

                                </div>


                                <div className="minus">

                                    <button className="btn btn-danger btn-xs" value="-1">-1</button>
                                    <button className="btn btn-danger btn-xs" value="-2">-2</button>
                                    <button className="btn btn-danger btn-xs" value="-5">-5</button>

                                    <button className="btn btn-danger btn-xs" value="-10">-10</button>
                                    <button className="btn btn-danger btn-xs" value="-20">-20</button>
                                    <button className="btn btn-danger btn-xs" value="-50">-50</button>

                                    <button className="btn btn-danger btn-xs" value="-100">-100</button>
                                    <button className="btn btn-danger btn-xs" value="-200">-200</button>
                                    <button className="btn btn-danger btn-xs" value="-500">-500</button>

                                    <button className="btn btn-danger btn-xs" value="-1000">-1000</button>
                                    <button className="btn btn-danger btn-xs" value="-2000">-2000</button>
                                    <button className="btn btn-danger btn-xs" value="-5000">-5000</button>


                                </div>

                            </div>


                            <button className="btn btn-primary acceptAssign"
                                    onClick={e=>{

                                        pageController.addProduct(
                                            selectedProfileNode.children[selectedProfileNode.selectedIndex].value,
                                            selectedProductNode.children[selectedProductNode.selectedIndex].value,
                                            selectedQnt
                                        );

                                    }}

                            >
                                Add product...
                            </button>



                        </div>

                    </div>

                </div>

            </div>

        </div>

    );


};

export default AssignStock;