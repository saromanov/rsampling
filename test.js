var assert = require('assert');
var rsampling = require('./lib/rsampling');

it('should return length of n from sampling(case 1)', function() {
    var distr1 = function(x) {
        return x * Math.random();
    };

    var model = new rsampling.RSampling();
    var result = model.fit(distr1, 10);
    assert.equal(result.length, 10);
});

it('should return length of n from sampling(case 2)', function() {
    var distr1 = function(x) {
        return x * Math.random();
    };

    var distr2 = function(x) {
        return x + Math.random();
    };
    
    var model = new rsampling.RSampling();
    var result = model.fit2(distr1, distr2, 0.7, 10);
    assert.equal(result.length, 10);
});
