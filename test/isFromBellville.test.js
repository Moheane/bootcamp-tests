describe('isFromBellville test', function(){
    it('Should return "true" if given "CJ" as an argument', function(){
        assert.equal('true', isFromBellville('CJ'))
    });
    it('Should return "false" if given "CF" or any value other than the rrequired as an argument', function(){
        assert.equal('true', isFromBellville('CF'))
    });
    it('Should return "false" if given no value is given', function(){
        assert.equal('false', isFromBellville(''))
    });

}

)