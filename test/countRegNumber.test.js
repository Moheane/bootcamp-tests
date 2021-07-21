descibe('countRegNumber test', function(){
    it('should return total 3 when given "I, am, Ramahadi" as an argument', function(){
        assert.equal(3, 'I, am, Ramahadi')
    });
    it('should return total 0 when given no argument', function(){
        assert.equal(0, 'I, am, Ramahadi')
    })
})