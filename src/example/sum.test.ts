import sum from "./sum"
/**
 * Example Unit tests
 */
it('should sum 2 numbers and return the correct result',()=>{
    // Given - prepare data
    const num1 = 2
    const num2 = 5
    // Execute - execute function call
    const result = sum(num1,num2);
    // Assert - verify if the result is correct
    expect(result).toBe(7)
})


it('return 0 if the result is pair',()=>{
    // Given - prepare data
    const num1 = 3
    const num2 = 5
    // Execute - execute function call
    const result = sum(num1,num2);
    // Assert - verify if the result is correct
    expect(result).toBe(0)
})