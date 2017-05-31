import React from 'react';

import RabbitKingdom from './RabbitKingdom';
import ProductFactory from './ProductFactory';




class PanelController{



    createNewProfile(profileName){


        if(RabbitKingdom.profileExist(profileName)){

            console.log('profile exist');

            return;

        }

        RabbitKingdom.addNewMember(profileName);

        //window.location.reload();


    }

    removeExistingProfile(profileName){

        RabbitKingdom.removeMember(profileName)

    }


    addProduct(profileName, productId, quantity){

        console.log(profileName, productId, quantity);


        var pickedProduct = ProductFactory.createNew(productId, quantity);

        RabbitKingdom.assignNewNewProductToMember(profileName, pickedProduct);

    }





    getAllKingdomMembersProfile(){

        return RabbitKingdom.getCurrentMemberAvailableList();

    }



}

export default PanelController;