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

 
 //code challenge 2
  const betikaodds = game.odds;
  let sums = 0 ;
  let averageodd;
  for (const oddy of Object.values(betikaodds)) {
    sums += oddy;
  }
  averageodd = sums/Object.values(betikaodds).length;
  console.log(averageodd);
  for (const [i,mvp] of game.scored.entries()) {
    console.log(`goal ${i + 1} ${mvp}`);
  }
  // console.log(averageodd);
  
  //
  console.log( Object.entries(betikaodds));
  
  for(const [team,odds]of Object.entries(betikaodds)){
    let teamstring = team === "x" ? "draw" : `victory ${game[team]}`
    console.log(`${teamstring} and the odds is ${odds}`);
  }
  