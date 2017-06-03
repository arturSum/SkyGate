import React from 'react';

import './AddProfileStyle.css';





var AddPickerProfile = (props)=>{

    var {
            pageController,
            history
        } = props,

        pickerNameNode = null;

    return(

        <div id="KingdomPopulationList" className="col-md-8 col-md-offset-2">


            <div className="panel panel-primary">

                <div className="panel-heading">
                    <h3 className="panel-title">Create Rabbit picker profile ...</h3>
                </div>

                <div className="background">

                    <div className="panel-body">

                        <div className="form-group">

                            <h4>Please write the picker name</h4>

                            <input type="text" className="form-control" id="pickerName" placeholder="picker name" ref={thisNode=>{pickerNameNode=thisNode}} />

                            <button className="btn btn-success"
                                    onClick={()=>{ pageController.createNewProfile(pickerNameNode.value); history.push('/'); }}
                            >
                                Create ...
                            </button>

                        </div>

                    </div>

                </div>

            </div>


        </div>

    );

};

export default AddPickerProfile;