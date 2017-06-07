import ProductFactory from './../../Product/ProductFactory';
import Carrot from './../../Product/Carrot';
import Product from './../../Product/Product';


describe('ProductFactory', ()=>{

    var carrotProductId = '#carrot';

    it('should create correct product depends on product id', ()=>{

        expect(ProductFactory.createNew(carrotProductId, 20) instanceof Carrot);

    });

    it('should create carrot as default product', ()=>{

        expect(ProductFactory.createNew('', 20) instanceof Carrot);
        expect(ProductFactory.createNew(null, 20) instanceof Carrot);

    });

    it('each product should be instances of Product class', ()=>{

        expect(ProductFactory.createNew('', 20) instanceof Product);
        expect(ProductFactory.createNew(carrotProductId, 21240) instanceof Product);

    });

});