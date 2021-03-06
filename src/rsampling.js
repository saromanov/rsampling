import underscore, {random} from 'underscore';

export class RSampling {
    constructor(mindensity=0, maxdensity=10){
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


    //Another rejection sampling method.
    //One difference is rejection criteria.
    fit2(f, g, m, n) {
        let i = 0;
        let result = [];
        while(i != n) {
            const x = random(this.mindensity, this.maxdensity);
            const prob = f(x)/(m * g(x));
            const u = Math.random();
            if(prob > u ) {
                result.push(x);
                i += 1;
            }

        }

        return result
    }
}
