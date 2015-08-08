# rsampling

Implementation of rejection sampling

### Usage

```javascript

var rsampling = require('rsampling');
var res = new rsampling.RSampling(0,100);
console.log(res.fit(function(x){ return Math.random() + x;}, 10)); //Get 10 samples from density

```


