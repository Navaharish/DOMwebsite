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



//cloning it


let resyncBTN = document.querySelector(".resyncBtn")
let cloneElement = document.querySelector(".clone-elements")

resyncBTN.addEventListener("click", () => {

  cloneElement.innerHTML = "";

  let cloningName = familyContent.cloneNode(true)
  cloneElement.append(cloningName)

})


//Company Name removing Effect

function removeItem(event) {
  let removeEl = event.target.parentElement.parentElement;
  removeEl.remove();
}

