 /*takes in a string calls made and sms's sent.
  Calculate the total bill for the data provided.
*/
describe('totalPhoneBill test', function(){
    it('returns R7.45 when given call, sms, call, sms, sms as arguments', function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'))
    });
    it('returns R0.00 when given no arguments', function(){
        assert.equal('R0.00', totalPhoneBill(''))
    });
})