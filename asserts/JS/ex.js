// console.log(document.body instanceof EventTarget);
// console.log(document.body instanceof Node);
// console.log(document.body instanceof Element);
// console.log(document.body instanceof Element);
// console.log(document.body instanceof HTMLElement);
// console.log(document.body instanceof HTMLBodyElement);

// console.log(document.body.nodeType);

/*Global Variables*/
let inputName = document.getElementById('input-field');
let inputButton = document.getElementById('input-btn');
let familyContent = document.getElementById('family');
let main = document.querySelector('.main')
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

// creating HTML Elements(Alert of the app)
/* <div class="alert ">✅ Successfully updated your content</div> */

const div = document.createElement('div');

// creating HTML className

div.className = "alert";
// creating HTML innerTextNode
const TextNode = document.createTextNode('✅ Successfully updated your content');

div.prepend(TextNode);

/*Getting lists from input value*/
inputButton.addEventListener("click", () => {
  let inputName = document.getElementById('input-field');
  // familyContent.innerHTML += `<li class="family-name">${inputName.value} </li>`

  const li = document.createElement("li");
  li.className = 'family-name';
  const liTextNode = document.createTextNode(`${inputName.value}`)
  li.append(liTextNode); s
  familyContent.append(li);
  main.prepend(div)

})

//looping the List

//with Fragment
console.time("fragement-Time:")
for (i = 1; i <= 1000; i++) {
  let fragLiEl = document.createElement('li');
  fragLiEl.className = "family-name";
  let fragLiElText = document.createTextNode(`New List :${i}`);
  fragLiEl.append(fragLiElText);
  fragment.append(fragLiEl);
  familyContent.append(fragment);

}
console.timeEnd("fragement-Time:")





//Geting and setting
//Resetting Heading content
head1.innerHTML = "NAME REGISTERING APP"



