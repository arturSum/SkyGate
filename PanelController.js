import React from 'react';

import RabbitKingdom from './RabbitKingdom';
import ProductFactory from './Product/ProductFactory';




class PanelController{


    createNewProfile(profileName){


        if(RabbitKingdom.profileExist(profileName)){

            return;

        }

        RabbitKingdom.addNewMember(profileName);

    }

    removeExistingProfile(profileName){

        RabbitKingdom.removeMember(profileName)

    }


    removeProduct(profileName, productId, quantity){

        RabbitKingdom.removeProductFromMemberProfile(profileName, productId, quantity);

    }


    addProduct(profileName, productId, quantity){

        var pickedProduct = ProductFactory.createNew(productId, quantity);

        RabbitKingdom.assignNewNewProductToMember(profileName, pickedProduct);

    }



    getAllKingdomMembersProfile(){

        return RabbitKingdom.getCurrentMemberAvailableList();

    }



}

export default PanelController;