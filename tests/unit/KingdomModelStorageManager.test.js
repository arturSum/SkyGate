
import KingdomModelStorageManager from './../../ModelStore/KingdomModelStorageManager';

import RabbitFactory from './../../RabbitProfile/RabbitFactory';
import ProductFactory from './../../Product/ProductFactory';
import RabbitProfile from './../../RabbitProfile/RabbitProfile';


describe('KingdomModelStorageManager', ()=>{


    beforeEach(()=>{

        localStorage.clear();
    });


    describe('getData', ()=>{


        it('should translate data from model storage to correct rabbit profile object', ()=>{

            var profileId = 'rabbit1',
                rabbitProfile = RabbitFactory.createNewProfile(profileId);

            rabbitProfile.addStock(
                ProductFactory.createNew('#carrot', 12)
            );

            KingdomModelStorageManager.addData(rabbitProfile);


            var profileFromStorage = KingdomModelStorageManager.getData(profileId);

            expect(profileFromStorage instanceof RabbitProfile).toBe(true);

            expect(profileFromStorage.getName()).toBe(profileId);

            expect(profileFromStorage.getPickedStock()[0].getId()).toBe('#carrot');


        });


    });

});