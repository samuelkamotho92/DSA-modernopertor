
  const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
    fans:{
      name:"messi",
      age:32
    }
    };


  //code challege
//correction 
const [player1,player2] = game.players;
console.log(player1,player2);
//destructure and use rest operator to assign rest values to one array(pack to one array)
const [gk,...fieldplayers] = player1;
console.log(gk,fieldplayers);
//spread operator to unpack entire array
const players1Final = [...player1,...player2];
console.log(players1Final);

const playersscored  = game.scored;
//destruct arrays/object to get variables in it
const {team1,x:draw,team2} = game.odds;
console.log(team1,draw,team2);

const socredgoal  =  game.score;

//rest operator packs them to one array
const printGoals = (...winner)=>{
  console.log(winner);
console.log(`scored by ${winner.length}  won by ${socredgoal}`);
}
printGoals('Davies', 'Muller', 'Lewandowski','Kimmich');
//rest operator packs to one array
const printGoals2 = (...winner)=>{
  console.log(winner);
  console.log(`scored by ${winner.length}  won by ${socredgoal}`);
  }
  //spread operator unpack
  //fail to unpack deeper nested array is created upon packing
  printGoals2(...playersscored);


// for (const [key,values] of Object.entries(game.fans)) {
//   console.log(key,values);
// }