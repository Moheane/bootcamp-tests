describe('findItemsOver20 test', function(){
    it('should return total 3 when given "I, am, Ramahadi" as an argument', function(){
        assert.equal(3, findItemsOver20('13,44,63,22,14,15,20'))
    });
    it('should return total 7 when given "This, is, a, count, register, number, funtion" as an argument', function(){
        assert.equal(7, findItemsOver20('This, is, a, count, register, number, funtion" as an argument'))
    });
    it('should return total 1 when given no argument', function(){
        assert.equal(1,findItemsOver20(''))
    })
})