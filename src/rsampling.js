import underscore, {random} from 'underscore';

export class RSampling {
    constructor(mindensity, maxdensity){
        this.mindensity = mindensity;
        this.maxdensity = maxdensity;
    }

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
}
