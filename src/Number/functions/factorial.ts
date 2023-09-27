export function factorial(number: number): number {
    let res = 1
    for(let i = 1; i < number; i++) {
        res *= i
    }
    
    return res;
}