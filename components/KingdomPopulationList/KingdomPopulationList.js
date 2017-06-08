import React from 'react';

import './KingdomPopulationListStyle.css'


var KingdomPopulationList = (props)=>{

    var {
        model
    } = props,


    countPickedStock = (productList, productId)=>{

        var pickedQnt = 0,
            productListQnt = productList.length;


        for(var i=0; i<productListQnt; i++){

            if(productList[i].getId() === productId){

                pickedQnt = pickedQnt + productList[i].getQnt();

            }
        }

        return pickedQnt;
    },


    makeTableBody = profileList=>{

        var tableCounter = 1,
            tableRowList = [],

            keyCounter = 1;


        for(var profile of profileList){


                tableRowList.push(

                    <tr key={keyCounter++}>

                        <th>{tableCounter++}</th>
                        <th>{profile.getName()}</th>
                        <th>{countPickedStock(profile.getPickedStock(), '#carrot')}</th>

                    </tr>

                );

        }


        return tableRowList;

    },


    makeContext = data=>{

        if(data.length === 0){

            return <h3 className="nothingToShow">Nothing to show</h3>
        }

        return <table className="table table-bordered">

            <thead>

            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Carrot Qnt</th>
            </tr>

            </thead>

            <tbody>

                {makeTableBody(data)}

            </tbody>


        </table>

    };



    //########## RENDER #########






    return(

        <div id="KingdomPopulationList" className="col-md-10 col-md-offset-1">

            <div className="panel panel-primary">

                <div className="panel-heading">
                    <h3 className="panel-title">Rabbit Kingdom population list ...</h3>
                </div>

                <div className="background">

                    <div className="panel-body">

                        <div className="form-group">

                            {makeContext(model)}

                        </div>

                    </div>

                </div>

            </div>


        </div>

    );


};

export default KingdomPopulationList;