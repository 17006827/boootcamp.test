describe('Greeting function:' , function(){
    it(': Hello, Basil', function(){
        assert.equal(greet('Basil'), 'Hello, Basil');
    });

    it(' : Hello, Mahoya', function() {
        assert.equal(greet('Mahoya'), 'Hello, Mahoya');
    })
});