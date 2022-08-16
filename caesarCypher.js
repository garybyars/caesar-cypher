// YOUR CODE BELOW

// loop thru string using ASCII //
// wrap around for shifts after z with if statement// 
// change ASCII '-' values to ' ' values with if statement// 
// push values into an array //
// join new array into string // 

let caesarCypher = (secret, shift) => {
    let codeWord = [];

     for (let i = 0; i < secret.length; i++) {
       let numASCII = secret.charCodeAt(i) + shift
         if (numASCII > 122) {numASCII = numASCII - 122 + 96}
         if (numASCII === 45) {numASCII = numASCII - 13}
       codeWord.push(String.fromCharCode(numASCII))
   }
 return codeWord.join('') 
 }



describe('Caesar Cypher', () => {

 it('is a function?', () => {
   expect(typeof caesarCypher).toEqual('function');
 });

 it('rotates a letter by the number passed in', () => {
   let returnedValue = caesarCypher('a', 2);
   expect(returnedValue).toEqual('c');
 });

 it('rotates every letter in the string by the supplied letter', () => {
   let returnedValue = caesarCypher('doggo', 7);
   expect(returnedValue).toEqual('kvnnv');
 });

 it('wraps around to the beginning of the alphabet when necessary', () => {
   let returnedValue = caesarCypher('hello', 13);
   expect(returnedValue).toEqual('uryyb');
 });

 it('retains spaces between encrypter world', () => {
   let returnedValue = caesarCypher('hello world', 13);
   expect(returnedValue).toEqual('uryyb jbeyq');
 });

});