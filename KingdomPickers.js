import PickerProfile from './PickerProfile';
import {IdGenerator} from './AppManager';



var KingdomPickers = (()=>{

    var activePickersList = new Map(),


        areRabbitWorkingInKingdom = rabbitProfile=>{

            return rabbitProfile instanceof 'RabbitProfile' && activePickersList.has(rabbitProfile.id);
        };


    return{

        addNew(rabbit){


            var pickerProfile = new PickerProfile(rabbit);


            activePickersList.set(
                IdGenerator.getNextAvailableValue(),
                pickerProfile
            );

        },

        remove(workerProfile){

            if(areRabbitWorkingInKingdom(workerProfile)){
                activePickersList.delete(workerProfile)
            }

        },


        getSingleWorkerInfo(workerProfile){

            if(areRabbitWorkingInKingdom(workerProfile)){
                return activePickersList.get(workerProfile.id)
            }

        },


        getCurrentWorkersAvailableList(){
            return activePickersList;
        }


    }

})();



export default KingdomPickers;