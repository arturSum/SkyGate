
import KingdomModelStorageManager from './KingdomModelStorageManager';

import RabbitFactory from './RabbitFactory';



var RabbitKingdom = (()=>{




    return{

        addNewMember(profileName){

            var rabbitProfile = RabbitFactory.createNewProfile(profileName);

            KingdomModelStorageManager.addData(rabbitProfile);


        },

        removeMember(profileName){

           KingdomModelStorageManager.deleteData(profileName);


        },



        assignNewNewProductToMember(profileName, product){

            var memberProfile = KingdomModelStorageManager.getData(profileName);



            memberProfile.addStock(product);

            KingdomModelStorageManager.updateData(memberProfile);


        },



        profileExist(profileName){

            KingdomModelStorageManager.hasData(profileName);

        },


        getSingleWorkerInfo(rabbitProfileId){

            return KingdomModelStorageManager.getData(rabbitProfileId);

        },


        getCurrentMemberAvailableList(){

            return KingdomModelStorageManager.getAllData();
        }


    }

})();



export default RabbitKingdom;