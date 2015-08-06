import underscore, {random} from 'underscore';

export class RSampling {
    constructor(mindensity, maxdensity){
        this.mindensity = mindensity;
        this.maxdensity = maxdensity;
    }

    //Apply parameters
    //where q is a density function
    //n - number of samples
    fit(q, n){
        let i = 0;
        let result = [];
        while (i != n) {
            let x = random(this.mindensity, this.maxdensity);
            let u = Math.random();
            if(u * this.maxdensity <= q(x)){
                i += 1;
                result.push(x);
            }
        }

        return result;
    }


    //Another rejection sampling method
    fit2(f, g, m, n) {
        let i = 0;
        let result = [];
        while(i != n) {
            let x = random(this.mindensity, this.maxdensity);
            let prob = f(x)/(m * g(x));
            let u = Math.random();
            if(prob > u ) {
                result.push(x);
                i += 1;
            }

        }

        return result
    }
}
