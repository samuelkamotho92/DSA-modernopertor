const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [61, '� Substitution'],
    [64, '� Yellow card'],
    [69, '� Red card'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '� Yellow card'],
    ]);

    const events = [...new Set(gameEvents.values())];
 console.log(events);
// gameEvents.delete(64);
// console.log(gameEvents);
const duration = [...gameEvents.keys()].pop();
console.log(duration);
const time = Math.trunc(duration/gameEvents.size)
console.log(`"An event happened, on average, every${time} minutes`)

for (const [time,events] of gameEvents.entries()) {
    if (time < 45 ) {
        console.log(`[ first half]${time}: ${events}`);
    }else{
        console.log(`[ 2nd half]${time}: ${events}`);
    }
}