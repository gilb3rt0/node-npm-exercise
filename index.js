const cowsay    =   require("cowsay");
const myObject  =   require('./information.js');
// console.log(myObject)
const name = myObject.name;
const campus = myObject.campus;


console.log(cowsay.say({
    text: `hi, my name is ${name} and I'm from the ${campus} campus`,
    e : "òÓ",
    T : "√V"
}));
