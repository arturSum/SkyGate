
import PickerRabbitProfile from './../../RabbitProfile/PickerRabbitProfile';
import ProductFactory from './../../Product/ProductFactory';



var pickerRabbitProfile,

    makeProduct = ()=>{

        return ProductFactory.createNew(
            '#carrot',
            Math.floor((Math.random()*50)+100)
        );
    };



describe('PickerRabbitProfile', ()=>{

    beforeEach(()=>{

        pickerRabbitProfile = new PickerRabbitProfile('rabbitName');

    });


    it('should can add product to picked stock', ()=>{

        expect(pickerRabbitProfile.getPickedStock().length).toBe(0);

        pickerRabbitProfile.addStock(makeProduct());
        pickerRabbitProfile.addStock(makeProduct());
        pickerRabbitProfile.addStock(makeProduct());

        var pickedStock = pickerRabbitProfile.getPickedStock();

        expect(pickedStock.length).toBe(3);

        expect(pickedStock[1].getId()).toBe('#carrot');


    });

    it('should remove product from picked stock', ()=>{

        var product,
            productQntBeforeRemove = 0,

            countProductQnt = ()=>{

                var pickedStock = pickerRabbitProfile.getPickedStock(),
                    productQntAfterRemove = 0;

                for(var product of pickedStock){

                    productQntAfterRemove += product.getQnt();

                }

                return productQntAfterRemove;
            };


        //--------------------------


        for(var x=0; x<30; x++){

            product = makeProduct();

            productQntBeforeRemove += product.getQnt();

            pickerRabbitProfile.addStock(product);
        }

        expect(pickerRabbitProfile.getPickedStock().length).toBe(30);


        //--------------------------

        pickerRabbitProfile.removeStock('#carrot', -10);
        expect(countProductQnt()).toBe(productQntBeforeRemove-10);


        pickerRabbitProfile.removeStock('#carrot', -30);
        expect(countProductQnt()).toBe(productQntBeforeRemove-10-30);


        pickerRabbitProfile.removeStock('#carrot', -(productQntBeforeRemove + 100));
        expect(countProductQnt()).toBe(0);


    });

    it('should can get all picked product list', ()=>{

        var productQnt = 10;

        while(productQnt--){

            pickerRabbitProfile.addStock(makeProduct());
        }

        var productList = pickerRabbitProfile.getPickedStock();

        expect(productList.length).toBe(10);

        expect(Array.isArray(productList)).toBe(true);

    });



});