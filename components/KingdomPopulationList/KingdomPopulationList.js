import React from 'react';

var KingdomPopulationList = ()=>{

    return(

        <div>

            <h3>Rabbit Kingdom population list</h3>


            <table className="table table-bordered">

                <thead>

                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>carrot qnt</th>
                    </tr>

                </thead>

                <tbody>

                    <tr>
                        <td>1</td>
                        <td>Krolik uszatek</td>
                        <td>20</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Krolik klapouch</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Krolik prosiaczek</td>
                        <td>3</td>
                    </tr>

                </tbody>


            </table>


        </div>

    );


};

export default KingdomPopulationList;