const past = new Date("May 1 2020 7:47:00");
const present = new Date();

const difference = present.getTime() - past.getTime();
console.log(difference);

const seconds = Math.round(difference / 1000);
console.log({ seconds });

const minutes = Math.round(seconds / 60);
console.log({ minutes });

const hours = Math.round(minutes / 60);
console.log({ hours });

const days = Math.round(hours / 24);
console.log({ days });

const months = Math.round(days / 30);
console.log({ months });

const years = Math.round(months / 12);
console.log({ years });

console.log(`Escrito à ${days} dias`)

const timeStamp = difference
console.log(new Date(timeStamp))


// console.log(typeof present, present);

// console.log("getFullYear:", present.getFullYear());
// console.log("getMonth:", present.getMonth());
// console.log("getDate:", present.getDate());
// console.log("getDay:", present.getDay());
// console.log("getHours:", present.getHours());
// console.log("getMinutes:", present.getMinutes());
// console.log("getSeconds:", present.getSeconds());

// console.log("timeStamp:", present.getTime());

// console.log("toDateString:", present.toDateString());
// console.log("toTimeString:", present.toTimeString());
// console.log("toLocaleString:", present.toLocaleString());
