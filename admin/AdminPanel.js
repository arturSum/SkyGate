import React from 'react';

import KingdomPickers from '../KingdomPickers';

import AdminPanelTemplate from './AdminPanelTemplate';





class AdminPanel{



    createNewPickerProfile(rabbitName){


        KingdomPickers.addNew(new Rabbit(rabbitName))

    }

    removeExistingPickerProfile(profileId){

        KingdomPickers.remove(profileId);

    }


    render(){

        return <AdminPanelTemplate />;

    }


}

export default AdminPanel;