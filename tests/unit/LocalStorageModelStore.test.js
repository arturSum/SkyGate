
import LocalStorageModelStore from './../../ModelStore/LocalStorageModelStore';
import ModelStoreStrategy from './../../ModelStore/ModelStoreStrategy';



var localStorageModelStore = new LocalStorageModelStore(),
    localStorageName = 'RabbitKingdomModel';




var addRandomData = idString=>{

        for(var i=0; i<idString.length; i++){

            localStorageModelStore.add(
                idString[i],
                {
                    name:idString[i],
                    pickedStock : {
                        id:'#carrot',
                        qnt : Math.floor(Math.random()*idString.length)
                    }
                }
            );

        }

    },
    getStorageData = ()=>{

        return JSON.parse(localStorage.getItem(localStorageName));

    };



//###################################



describe('LocalStorageModelStore', ()=>{


    beforeEach(()=>{

        localStorageModelStore.deleteAll();
    });


    it('should be instance of ModelStoreStrategy', ()=>{

        expect(localStorageModelStore instanceof ModelStoreStrategy).toBe(true);

    });


   describe('add', ()=>{


       it('should add to local store data in format: [[profileId, profileObj]]', ()=>{

           var rabbitId = 'x',
               rabbitObj = {
                   name:'x',
                   pickedStock : []
               };

           localStorageModelStore.add(rabbitId, rabbitObj);
           var rabbitProfileStore = getStorageData();


           expect(rabbitProfileStore).toContain([rabbitId, rabbitObj]);
           expect(rabbitProfileStore.length).toBe(1);


           localStorageModelStore.add('marian', {name:'marian', pickedStock:[{id:'#carrot', qnt: 20}]});
           rabbitProfileStore = getStorageData();

           expect(rabbitProfileStore).toContain(['marian', {name:'marian', pickedStock:[{id:'#carrot', qnt: 20}]}]);
           expect(rabbitProfileStore.length).toBe(2);

       });

   });


   describe('delete', ()=>{

      it('should delete data from local store depends on dataID', ()=>{

          localStorageModelStore.add('x', {});
          localStorageModelStore.add('y', {name:'y', pickedStock:[{}, {}, {id:'#carrot', qnt:1}]});
          localStorageModelStore.add('1', []);

          var rabbitProfileStore = getStorageData();

          expect(rabbitProfileStore.length).toBe(3);


          localStorageModelStore.delete('x');
          rabbitProfileStore = getStorageData();

          expect(rabbitProfileStore.length).toBe(2);
          expect(rabbitProfileStore).toContain(['y', {name:'y', pickedStock:[{}, {}, {id:'#carrot', qnt:1}]}]);
          expect(rabbitProfileStore).toContain(['1', []]);

          localStorageModelStore.delete('y');
          rabbitProfileStore = getStorageData();

          expect(rabbitProfileStore.length).toBe(1);
          expect(rabbitProfileStore).toContain(['1', []]);

          localStorageModelStore.delete('1');
          rabbitProfileStore = getStorageData();

          expect(rabbitProfileStore.length).toBe(0);

          localStorageModelStore.delete('12345');
          rabbitProfileStore = getStorageData();

          expect(rabbitProfileStore.length).toBe(0);

      });

   });

   describe('update', ()=>{

       it('should update data in local storage depends on dataID', ()=>{

            localStorageModelStore.add(
                    'x',
                    {
                        name:'x',
                        pickedStock : {
                            id:'#carrot',
                            qnt: 9
                        }
                    }
            );

            localStorageModelStore.add('y', {});


            localStorageModelStore.update('y', []);

            var rabbitProfileStore = getStorageData();


            expect(rabbitProfileStore).toContain(['y', []]);

            expect(rabbitProfileStore).toContain([
                'x',
                {
                    name:'x',
                    pickedStock : {
                        id:'#carrot',
                        qnt: 9
                    }
                }
            ]);

            expect(rabbitProfileStore.length).toBe(2);

       })

   });


   describe('deleteAll', ()=>{


       it('should delete all data from local storage', ()=>{

           var letters = 'abcdefghijklmnoprstuwxyz';

           addRandomData(letters);


           var rabbitProfileStore = getStorageData();

           expect(rabbitProfileStore.length).toBe(letters.length);



           localStorageModelStore.deleteAll();

           rabbitProfileStore = getStorageData();

           expect(rabbitProfileStore.length).toBe(0);



       });

   });


   describe('get', ()=>{



       it('should get single data element depends on correct existing dataID', ()=>{

           var letters = 'abcdefghijklmnoprstuwxyz';

           addRandomData(letters);

           var rabbitProfileStore = getStorageData(),

               singleData = JSON.parse(localStorageModelStore.get('a'));

           expect(singleData.length).toBe(1);
           expect(singleData[0][0]).toBe('a');


           singleData = JSON.parse(localStorageModelStore.get('z'));
           expect(singleData.length).toBe(1);
           expect(singleData[0][0]).toBe('z');


           singleData = JSON.parse(localStorageModelStore.get('j'));
           expect(singleData.length).toBe(1);
           expect(singleData[0][0]).toBe('j');


       });


       it('should return false if dataId not exist in storage', ()=>{

           var letters = 'abcdefghijklmnoprstuwxyz';

           addRandomData(letters);


           var singleData = JSON.parse(localStorageModelStore.get('0'));

           expect(singleData).toBe(false);


           singleData = JSON.parse(localStorageModelStore.get('abc'));
           expect(singleData).toBe(false);

       });



   });



});