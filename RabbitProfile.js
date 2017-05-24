import {IdGenerator} from './AppManager';



class RabbitProfile{

    constructor(rabbitName = ''){

        this.id = IdGenerator.getNextAvailableValue();

        this.name = rabbitName;
        this.pickedStock = [];

    }

}


export default RabbitProfile;