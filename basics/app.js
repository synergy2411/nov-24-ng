console.log("START");

setTimeout(() => {
  console.log("TIMER 1");
}, 0);

setTimeout(() => {
  console.log("TIMER 2");
}, 0);

Promise.resolve().then(() => console.log("PROMISE"));

console.log("END");

// START -> PROMISE -> END -> TIMER
// START -> END -> PROMISE -> TIMER
// START -> END  -> TIMER -> PROMISE
