export default function sum(a:number,b:number) {
    const result = a + b
    return result % 2 === 0 ? 0 : result
}