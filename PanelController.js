import React from 'react';

import RabbitProfileFactory from './RabbitProfileFactory';
import RabbitKingdom from './RabbitKingdom';
import RabbitFactory from './RabbitFactory';
import ProductFactory from './ProductFactory';




class PanelController{



    createNewProfile(rabbitName){


        var rabbit = RabbitFactory.createNew(rabbitName),
            rabbitProfile = RabbitProfileFactory.createNewProfile(rabbit);

        RabbitKingdom.addNewMember(rabbitProfile);


    }

    removeExistingProfile(profileId){


        RabbitKingdom.removeMember(profileId)

    }


    addProduct(profileId, productId, quantity){


        var pickedProduct = ProductFactory.createNew(productId, quantity);


        RabbitKingdom.assignNewNewProductToMember(profileId, pickedProduct);

    }




}

export default PanelController;