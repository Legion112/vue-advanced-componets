let price = 5;
let quantity = 2;
let total = price * quantity;
let target = null;
let storage = [];

target = () => { total = price * quantity};


function record() { storage.push(target) }
function replay() { storage.forEach(run => run()) }

record();
replay();