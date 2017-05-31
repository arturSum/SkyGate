import React from 'react';

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


        for(var profile in profileList){


            if(profileList.hasOwnProperty(profile)){


                tableRowList.push(

                    <tr key={keyCounter++}>

                        <th>{tableCounter++}</th>
                        <th>{profileList[profile].getName()}</th>
                        <th>{countPickedStock(profileList[profile].getPickedStock(), '#carrot')}</th>

                    </tr>

                );


            }


        }


        return tableRowList;

    };
    console.log('Reload');

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