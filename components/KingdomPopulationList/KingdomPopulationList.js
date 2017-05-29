import React from 'react';

var KingdomPopulationList = (props)=>{


    var {
        model
    } = props,




    countPickedStock = (productList, productId)=>{

        var pickedQnt = 0,
            productListQnt = productList.length;


        for(var i=0; i<productListQnt; i++){

            if(productList[i].id === productId){

                pickedQnt = pickedQnt + productList[i].qnt;

            }


        }

        return pickedQnt;

    },


    makeTableBody = data=>{

        var tableCounter = 1,
            profileData = {},
            tableRowList = [],

            keyCounter = 1;


        for(var singleProfileId in data){

            if(data.hasOwnProperty(singleProfileId)){

                profileData = data[singleProfileId];

                tableRowList.push(

                    <tr key={keyCounter}>

                        <th>{tableCounter++}</th>
                        <th>{singleProfileId}</th>
                        <th>{countPickedStock(profileData.pickedStock, '#carrot')}</th>

                    </tr>

                );


            }


        }


        return tableRowList;

    };









    return(

        <div id="KingdomPopulationList">

            <h3>Rabbit Kingdom population list</h3>


            <table className="table table-bordered">

                <thead>

                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Carrot Qnt</th>
                    </tr>

                </thead>

                <tbody>

                    {makeTableBody(model)}

                </tbody>


            </table>


        </div>

    );


};

export default KingdomPopulationList;