describe('1st tests', () => {
    it('true is true', function(){ expect(true).toEqual(true); });
    
    it('null is not the same thing as undefined',
       () => expect(null).toEqual(undefined)
    );    
});
