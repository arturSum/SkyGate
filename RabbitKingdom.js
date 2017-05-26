import {IdGenerator} from './AppManager';



var RabbitKingdom = (()=>{

    var kingdomPopulationList = new Map(),


        areRabbitExistInKingdomPopulation = rabbitProfile=>{

            return kingdomPopulationList.has(rabbitProfile.id);
        };


    return{

        addNewMember(rabbitProfile){


            kingdomPopulationList.set(
                IdGenerator.getNextAvailableValue(),
                rabbitProfile
            );

        },

        removeMember(rabbitProfile){

            if(areRabbitExistInKingdomPopulation(rabbitProfile)){
                kingdomPopulationList.delete(rabbitProfile)
            }

        },


        getSingleWorkerInfo(rabbitProfile){

            if(areRabbitExistInKingdomPopulation(rabbitProfile)){
                return kingdomPopulationList.get(rabbitProfile.id)
            }

        },


        getCurrentWorkersAvailableList(){
            return kingdomPopulationList;
        }


    }

})();



export default RabbitKingdom;