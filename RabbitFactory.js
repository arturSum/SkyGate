
import PickerRabbitProfile from './PickerRabbitProfile';



var RabbitFactory = (()=>{

   return{

       createNewProfile(profileName){

           return new PickerRabbitProfile(profileName);

       }

   }


})();

export default RabbitFactory;