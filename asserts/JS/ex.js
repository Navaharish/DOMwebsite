const client = {
  Name: "navaharish",
  place: "salem",
  work: "student",
  greetclients() {
    return `Hello "${this.Name}" nice to meet you from "${this.place}" ,Best of luck for your work as "${this.work}"`
  }

}
//prompt text

let promptName = prompt("your name here!");
let prompPlace = prompt("your place here!");
let promptProf = prompt("your proffesion here!")

//changing the input

client.Name = promptName;
client.place = prompPlace;
client.work = promptProf;

let greeting = client.greetclients();



let visiblity = document.write(greeting);

console.log(greeting);
