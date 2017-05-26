import React from 'react';

import RabbitProfileFactory from './RabbitProfileFactory';
import RabbitKingdom from './RabbitKingdom';
import RabbitFactory from './RabbitFactory';





class PanelController{



    createNewProfile(rabbitName){


        var rabbit = RabbitFactory.createNew(rabbitName),
            rabbitProfile = RabbitProfileFactory.createNewProfile(rabbit);

        RabbitKingdom.addNewMember(rabbitProfile);


    }

    removeExistingProfile(profileId){


        RabbitKingdom.removeMember()

    }



}

export default PanelController;