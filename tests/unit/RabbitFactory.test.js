
import RabbitFactory from './../../RabbitProfile/RabbitFactory';
import RabbitProfile from './../../RabbitProfile/RabbitProfile';


describe('RabbitFactory', ()=>{


    it('should create instance of RabbitProfile class', ()=>{

        expect(RabbitFactory.createNewProfile('rabbitName') instanceof RabbitProfile).toBe(true);

    });


});
