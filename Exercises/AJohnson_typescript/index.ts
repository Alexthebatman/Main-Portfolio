let sport = 'football'
// let id = 5;
let id:number
id = 5;
let confirmed: string | boolean = 'yes';
confirmed = true;

let person = [false, 'John', 'Plumber'];
person[0] = true;
console.log(`${person[1]} is a ${person[2]}`);

console.log(id);

let origValue = {val01: 1, val02: 2};
let refPoint = origValue.val02;

if (origValue.val01 == refPoint) {
    console.log('They\'re equal.');
} else {
    console.log('Not even close');
}