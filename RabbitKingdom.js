
import KingdomModelStorageManager from './KingdomModelStorageManager';




var RabbitKingdom = (()=>{


    //przeniesc to do KingdomModelStorageManager

    var areRabbitExistInKingdomPopulation = rabbitProfileId=>{

            return KingdomModelStorageManager.hasData(rabbitProfileId);
        };


    return{

        addNewMember(rabbitProfile){

            KingdomModelStorageManager.addData(rabbitProfile);

        },

        removeMember(rabbitProfileId){

            if(areRabbitExistInKingdomPopulation(rabbitProfileId)){

                KingdomModelStorageManager.deleteData(rabbitProfileId);

            }

        },



        assignNewNewProductToMember(profileId, product){

            var memberProfile = KingdomModelStorageManager.getData(profileId);


            memberProfile.addStock(product);

            KingdomModelStorageManager.updateData(profileId, memberProfile);


        },




        getSingleWorkerInfo(rabbitProfileId){

            if(areRabbitExistInKingdomPopulation(rabbitProfileId)){

                return KingdomModelStorageManager.getData(rabbitProfileId);
            }

        },


        getCurrentWorkersAvailableList(){

            return KingdomModelStorageManager.getAllData();
        }


    }

})();



export default RabbitKingdom;