/*Global Variables*/
let inputName = document.getElementById('input-field');
let inputButton = document.getElementById('input-btn');
let familyContent = document.getElementById('family');
let familyContentLi = document.querySelectorAll('.family li')
let familyContentFirstEl = document.querySelector('.family li')
let main = document.querySelector('.main')
let rightArrow = document.getElementsByClassName("replace-btn")
let fragment = document.createDocumentFragment();


//creating heading of the app
/* <h1 class="head ">NAME ENTERING APP</h1> */


const head1 = document.createElement('h1');

head1.className = "head"

const head1Text = document.createTextNode("NAME ENTERING APP")

head1.append(head1Text);

fragment.append(head1);

console.log();
main.prepend(fragment);



//Geting and setting
//Resetting Heading content
head1.innerHTML = "company REGISTERING APP"

// creating HTML Elements(Alert of the app)
// /* <div class="alert ">✅ Successfully updated your content</div> */
const div = document.createElement('div');
div.className = "alert";
const TextNode = document.createTextNode('✅ Successfully updated your content');

div.prepend(TextNode);

inputButton.addEventListener("click", () => {
  let inputName = document.getElementById('input-field');
  // familyContent.innerHTML += `<li class="family-name">${inputName.value} </li>`


  const li = document.createElement("li");
  let divtext = document.createElement("div")
  let divI = document.createElement("div")
  let i = document.createElement("i")


  li.className = 'family-name';
  divI.setAttribute("onclick", "removeItem(event)")
  i.className = "fa-solid fa-xmark";
  //text
  const liTextNode = document.createTextNode(`${inputName.value}`)
  divtext.append(liTextNode);
  //fa icon
  familyContent.prepend(li);
  li.append(divtext, divI)
  divI.append(i);
  main.prepend(div)

  console.log(li);

})

//Company Name removing Effect

function removeItem(event) {
  let removeEl = event.target.parentElement.parentElement;
  removeEl.remove();
}

var ageField = document.querySelector("#input-age")
parseInt(ageField.value, 10)

//setting inline  css by js

//set attributes

// ageField.setAttribute("style", "background-color: rgba(194, 209, 209, 0.614); padding: 15px 50px; border-radius: 5px;outline: none;margin: 20px;")


//2. ageField.style.padding = "20px 50px"
// ageField.style.backgroundColor = "red"


ageField.style.cssText = "background-color: rgba(194, 209, 209, 0.614); padding: 15px 50px; border-radius: 5px;outline: none;margin: 20px; ";


//Creating the Factorial Formulae
// let promptValue = prompt("Enter your Age Here")
// ageField.setAttribute("value", promptValue)


let promtValue = prompt("Enter the Factorial Number")

let n = promtValue;

function factorial(n) {
  if (n < 1) {
    return "Enter the positive Number"
  }
  else if (n == 0 || n == 1) {

    return 1;

  }
  else {
    return n * factorial(n - 1);
  }


}

answer = factorial(n);

ageField.setAttribute("value", answer)
console.log("The Value of Factorial is " + n + ":" + answer);





//testing
// function factorial(n) {
//   if (n < 0) {
//     return "number has to be positive."
//   }

//   //base case
//   if (n == 0 || n == 1) {
//     return 1;
//     //recursive case
//   } else {
//     return n * factorial(n - 1);
//   }
// }
// let n = -1;
// answer = factorial(n)
// console.log("Factorial of " + n + " : " + answer);

