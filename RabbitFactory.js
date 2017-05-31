
import PickerRabbitProfile from './PickerRabbitProfile';



var RabbitFactory = (()=>{

   return{

       createNewProfile(profileName){

           return new PickerRabbitProfile(profileName);

       },

       makeProfile(profile){



       }

   }


})();

export default RabbitFactory;