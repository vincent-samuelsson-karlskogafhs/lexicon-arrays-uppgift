// Detta är Arrys (din clon arme, som vi även kan kalla divisoner)
const armyNumber = ["army2", "army26", "army27", "army27", "army22", "army35"];

// Uppgift 1: Hämta första elementet från arrya (din clone arme (divisoner) - som du ser ovanför)
// Array med namnet firstArmy - skriv i [för att välja arme divison] [0] betyder att du börjar med den siffran som är först i din arry A,2 A26, A27 osv (din arme) - exempler vill då åt army divison 12, så skriver du const armyNumber[2]
const firstArmy = armyNumber[0];
//Här kollar du så att du hämntar rätt arme (division)
console.log(
  "here is your army, what division do you want to command?" +
    " i want to command",
  firstArmy
);
// betydelse vad du gör - Det första elementet i arrayen(`2`) lagras i variablen "firstArmy" och loggas sedan i consolen.

// Uppgift 2: Hämta sista elementet från arryen (Ta commando över sista clon armen(Army35))
// För att göra det måste vi skapa en order (Ge commando) - Lengt betyder hur lång är din arry (- 1 betyder att du börjar från start - men hamnar i slutet av listan)
const giveOrderToLastArmy = armyNumber[armyNumber.length - 1];
// Här ger ger du iväg ordern och då ska det stå i console log arme35, då det är den sista armen i din lenght - lista.
console.log("Captain REX give this orders to the,", giveOrderToLastArmy);
