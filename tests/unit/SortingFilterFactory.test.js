
import SortingFilterFactory from './../../ModelFilter/SortingFilterFactory';

import SortingFilter from './../../ModelFilter/SortingFilter';
import CountingSortingFilter from './../../ModelFilter/CountingSortingFilter';


describe('SortingFilterFactory', ()=>{


    it('should create correct soring object depends on sorting method id', ()=>{

       var soringMethodId = 'counting';

       expect(SortingFilterFactory.createNew(soringMethodId) instanceof CountingSortingFilter).toBe(true);

       soringMethodId = '';
       expect(SortingFilterFactory.createNew(soringMethodId) instanceof SortingFilter).toBe(true);


       soringMethodId = 'default';
       expect(SortingFilterFactory.createNew(soringMethodId) instanceof SortingFilter).toBe(true);

    });


});