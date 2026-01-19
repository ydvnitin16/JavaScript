/*
let CompGen = Math.floor(Math.random() * 11)
console.log(CompGen);

let user = prompt('Guess The Number Between 0 - 10', 5);
for(let i = 5; i>1; ){
    
    if(user == CompGen){
        console.log(`Great Guess`);
        break;
    }else{
        i--
        console.log(`Wrong Guess ${i} attempts are remaining`);
        user = prompt('Guess The Number Between 0 - 10', 5);
        if(user=='' || isNaN(user) || user == null){
            break;
        }
    }
}
*/

/*
for(let i = 1; i<=10; i++){
    console.log(`Table Of ${i}\n`);
        for(let j = 1; j<=10; j++){
            console.log(`${i} * ${j} = ${i*j}`);
        };
};
*/

/*
let str = ` A vowel is any sound with no audible noise produced by constriction in the vocal tract, and consonant is a sound with audible noise produced by a constriction`;

let vowels = 0;
let consonant = 0;

for(let i = 0; i< str.length; i++){
    let char = str[i].toLowerCase();
    if('aeiou'.includes(char)){
        vowels++
    }else if(char >= 'a' && char <= 'z'){
        consonant++
    }
}
console.log(`vowels : ${vowels} and consonant : ${consonant}`);
*/


