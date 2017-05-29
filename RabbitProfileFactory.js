import RabbitProfilePickerDecorator from './RabbitProfilePickerDecorator';


var RabbitProfileFactory = (()=>{


    return{

        createNewProfile(profileName){

           return new RabbitProfilePickerDecorator(profileName);

        }

    }


})();


export default RabbitProfileFactory;