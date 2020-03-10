const assert = require('assert')
const ganache = require('ganache-cli');
const Web3 = require('web3'); //web3 imports constructor thats why it is capital W
const web3 = new Web3(ganache.provider()); //ganache is netwrok and web3 is interface ganeche provider is intermediatery
/* mocha
it - run a test and make an assertion (assertion means assumption in progrM must be valid)
describe - groups together 'it' functions
beforeEach - Execute some general setup code. 
like if all it are using some functionality then add there so that all can use
*/

class Car{
    park(){
        return 'stopped';
    }
    drive(){
        return 'vroom';
    }
}
let car;
beforeEach(()=>{
     car = new Car();  

});
describe('CAR class',()=>{
    it('can park function',()=>{
        //const car = new Car();
        assert.equal(car.park(),'stopped');

    })
    it('can drive function',()=>{
       // const car = new Car();
        assert.equal(car.drive(),'vroom');

    })

})
/* contract is created through transcation*/