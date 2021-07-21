describe('Greet test' , function(){
    it('should return "Hello, Ramahadi" when greeting Ramahadi' , function(){
        assert.equal('Hello, Lesego', greet('Ramahadi'));

    });
 
    it('should just return "Hello," when given no name' , function(){
        assert.equal('Hello', greet());

    });

});