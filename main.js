// // Detta är Arrys (din clon arme, som vi även kan kalla divisoner)
// const armyNumber = ["army2", "army26", "army27", "army27", "army22", "army35"];

// // Uppgift 1: Hämta första elementet från arrya (din clone arme (divisoner) - som du ser ovanför)
// // Array med namnet firstArmy - skriv i [för att välja arme divison] [0] betyder att du börjar med den siffran som är först i din arry A,2 A26, A27 osv (din arme) - exempler vill då åt army divison 12, så skriver du const armyNumber[2]
// const firstArmy = armyNumber[0];
// //Här kollar du så att du hämntar rätt arme (division)
// console.log(
//   "here is your army, what division do you want to command?" +
//     " i want to command",
//   firstArmy
// );
// // betydelse vad du gör - Det första elementet i arrayen(`2`) lagras i variablen "firstArmy" och loggas sedan i consolen.

// // Uppgift 2: Hämta sista elementet från arryen (Ta commando över sista clon armen(Army35))
// // För att göra det måste vi skapa en order (Ge commando) - Lengt betyder hur lång är din arry (- 1 betyder att du börjar från start - men hamnar i slutet av listan)

// // Vi har förlorat en arme i yttre rymden - Armen på dagoba är borta - Ta bort den från listan.
// const ourArmy = ["NabooArmy", "CorusantArmy", "DagobhaArmy"];

// // Använd pop() för att ta bort och returnera det sista elementet i arrayen
// // Vi säger till JS att göra något const removedArmy och den ska leta i ourArmy
// const removedArmy = ourArmy.pop();
// console.log("Removed Army:", removedArmy);

// // Använd shift() för att ta bort och returnera det första elementet i arrayen
// const lookForArmy = ourArmy.shift();
// console.log("Look for Army:", lookForArmy);

// // Nu kommer ourArmy att vara ["CorusantArmy"]
// console.log("Remaining Armies:", ourArmy);

// // uppgift 3

// const numbers = [1, 2, 3, 4, 5];
// const store4thelement = numbers[3];
// console.log("stored number", store4thelement);

// //uppgift 4

// // skapa array
// const numbers2And5 = [1, 2, 3, 4, 5];
// // Vilka ska vi kolla (store) efter
// const storeNrTwo = numbers[1];
// const storeNrFive = numbers[4];
// // Skapa en ny function (array) och säg vad det finns i den
// const show2And5 = [storeNrTwo, storeNrFive];
// // här säger vi att vi enbart vill se det vi har sparat (store) och vi vill enbart visa 2 och 5
// console.log("logged NRTWO and NRFIVE", show2And5);

// // Uppgift 5
// // Här skapar vi en arry och bestämger hur långt den ska vara för lenght som är i uppgiften
// const lengthNumbers = [1, 2, 3, 4, 5];
// // hör skapar vi en function och säger att den ska använda length numbers och använd lenght. (stored)
// const findLenghtNumbers = lengthNumbers.length;
// // Här ska den hitta nr 5
// console.log("Found arrys length numbers", findLenghtNumbers);

//uppgift 6
// let numbers = [1, 2, 3, 4, 5];

// let newNumber = 10;
// let newLenght = numbers.push(newNumber);

// console.log("ny arry"), newNumber;
// console.log("ny längd"), newLenght;

// //upggift 7

// let numbers = [1, 2, 3, 4, 5];
// let arbitraryNumberBe = 0;
// let newLenght = numbers.unshift(arbitraryNumberBe);
// // vi ska hämta det ifrån

// console.log("new arry"), numbers;
// console.log("new lenght"), newLenght;

let numbers = [1, 2, 3, 4, 5];

let removedElement = numbers.pop();

console.log("updated arrays", numbers);
console.log("Removed element", removedElement);
