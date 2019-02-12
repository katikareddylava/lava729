import { addPercentage, addCurrencyName } from "./common.pipe";

describe('Common Pipe',()=>{
  
    it('should add percentage symbol',()=>{
        let pipe= new addPercentage();
        expect(pipe.transform(5)).toEqual("5 %")
    });
    
    it('should add currency symbol', ()=>{
        let pipe= new addCurrencyName();
        expect(pipe.transform(5)).toEqual("5.0 USD")
    })
});