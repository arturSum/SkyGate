

var KingdomWorkers = (()=>{

    var workersList = new Map(),


        areRabbitWorkingInKingdom = rabbitProfile=>{

            return rabbitProfile instanceof 'RabbitProfile' && workersList.has(rabbitProfile.id);
        };


    return{

        addNew(workerProfile){

            workersList.set(workerProfile.id, workerProfile);

        },

        remove(workerProfile){

            if(areRabbitWorkingInKingdom(workerProfile)){
                workersList.delete(workerProfile)
            }

        },


        getSingleWorkerInfo(workerProfile){

            if(areRabbitWorkingInKingdom(workerProfile)){
                return workersList.get(workerProfile.id)
            }

        },


        getCurrentWorkersAvailableList(){
            return workersList;
        }


    }

})();



export default KingdomWorkers;