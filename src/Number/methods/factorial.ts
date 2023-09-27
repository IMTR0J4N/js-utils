function factorial(this: number): number {
    let res = 1
    for(let i = 1; i < this; i++) {
        res *= i
    }
    
    return res;
}

Number.prototype.factorial = factorial