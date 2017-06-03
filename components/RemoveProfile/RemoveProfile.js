import React from 'react';

import './RemoveProfileStyle.css';


var RemoveProfile = (props)=>{

    var selectNodeRef,

        {
            pageController,
            profileNameList,
            history

    } = props;




    var makeOptionsNode = profileStorage=>{


        return profileStorage.map((profile, val)=>{

            return  <option key={val} value={profile}>{profile}</option>

        });


    },

    makeContent = ()=>{

        if(profileNameList.length === 0){

            return <div className="modelEmpty">

                <h3>You can not do this operation right now</h3>

            </div>

        }


        return <div>

            <h4>Please select rabbit name</h4>

            <select
                className="form-control"
                name="removeRabbitProfileSelector"
                id="removeRabbitProfileSelector"

                ref={thisNode=>selectNodeRef = thisNode}
            >

                {makeOptionsNode(profileNameList)}

            </select>

            <button
                className="btn btn-success"
                onClick={()=>{
                    pageController.removeExistingProfile(selectNodeRef.children[selectNodeRef.selectedIndex].value);
                    history.push('/');
                }}
            >
                Delete ...
            </button>

        </div>

    };



    return(

        <div id="removeRabbitProfile" className="col-md-8 col-md-offset-2">

            <div className="panel panel-primary">

                <div className="panel-heading">
                    <h3 className="panel-title">Remove Rabbit picker profile ...</h3>
                </div>

                <div className="background">

                    <div className="panel-body">

                        <div className="form-group">

                            {makeContent()}

                        </div>

                    </div>

                </div>

            </div>


        </div>

    )


};



export default RemoveProfile;

