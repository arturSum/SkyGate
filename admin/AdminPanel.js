import RabbitProfile from './../RabbitProfile';
import KingdomWorkers from '../KingdomWorkers';



class AdminPanel{


    createNewRabbitProfile(rabbitName){

        KingdomWorkers.addNew(new RabbitProfile(
            rabbitName
        ));

    }

    removeExistingRabbitProfile(profileId){

        KingdomWorkers.remove(profileId);

    }


}