import React from 'react';

import './RemoveProfileStyle.css';


var RemoveProfile = ()=>{

    return(

        <div className="removeRabbitProfileContainer">

            <h4>Please select profile to delete</h4>

            <select name="removeRabbitProfile" id="removeRabbitProfile">

                <option value="1">Krolik uszatek</option>
                <option value="2">Krolik klapouch</option>
                <option value="3">Krolik prosiaczek</option>

            </select>

            <button>Confirm</button>

        </div>

    )


};



export default RemoveProfile;

