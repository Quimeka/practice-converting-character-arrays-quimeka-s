/* Tasks
Task 1: Decode the Following Reversed Messages
Use .split(''), reverse.(‘’) and .join('') to convert messages between strings and
arrays dynamically. Then log the messages.
1. Message 1: " !yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks
gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam
gnidoC"
2. Message 2: "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw
gnitirw edoc tuB"
3. Message 3: "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI
.lanoisseforp a ekil leef ot evah t'nod uoY"
4. Message 4: ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom
tcefrep eht rof tiaw t'noD .yadot trats tsuJ"*/

let messageOne = ` !yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC`;

console.log(messageOne.split('').reverse().join(''));

let messageTwo = `!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB`;

console.log(messageTwo.split('').reverse().join(''));

let messageThree = `!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI .lanoisseforp a ekil leef ot evah t'nod uoY`;

console.log(messageThree.split('').reverse().join(''));

let messageFour = `.rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ`;

console.log(messageFour.split('').reverse().join(''));



/* Task 2: Write your own reverse messages
1. First, write your own short messages of inspiration (without reversing them).
2. Then, use .split(''), reverse.(‘’) and .join('') to convert messages between
strings and arrays dynamically so that you have a reverse output.
3. Then log the messages.*/

let inspOne = `Small progress is still progress keep moving forward.`;

console.log(inspOne.split('').reverse().join(''));

let inspTwo = `You don’t need perfect conditions to start, just a clear next step.`;

console.log(inspTwo.split('').reverse().join(''));

let inspThree = `Don’t wait to feel ready, clarity often shows up after you begin.`;

console.log(inspThree.split('').reverse().join(''));
