import RabbitProfilePickerDecorator from './RabbitProfilePickerDecorator';


var RabbitProfileFactory = (()=>{


    return{

        createNewProfile(rabit){

           return new RabbitProfilePickerDecorator(rabit);

        }

    }


})();


export default RabbitProfileFactory;