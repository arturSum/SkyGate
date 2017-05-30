import React from 'react';

import './RemoveProfileStyle.css';


var RemoveProfile = (props)=>{

    var selectNodeRef,

        {
            pageController,
            profileNameList

    } = props;




    var makeOptionsNode = profileStorage=>{


        return profileStorage.map((profile, val)=>{

            return  <option key={val} value={profile}>{profile}</option>

        });


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

                            <h4>Please select rabbit name below</h4>


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
                                    pageController.removeExistingProfile(selectNodeRef.children[selectNodeRef.selectedIndex].value)
                                }}
                            >
                                Delete ...
                            </button>

                        </div>


                    </div>

                </div>

            </div>


        </div>

    )


};



export default RemoveProfile;

