// console.log(document.body instanceof EventTarget);
// console.log(document.body instanceof Node);
// console.log(document.body instanceof Element);
// console.log(document.body instanceof Element);
// console.log(document.body instanceof HTMLElement);
// console.log(document.body instanceof HTMLBodyElement);

// console.log(document.body.nodeType);

/* <div class="alert ">✅ Successfully updated your content</div> */

let inputName = document.getElementById('input-field');
let inputButton = document.getElementById('input-btn');
let familyContent = document.getElementById('family');
let main = document.querySelector('.main')

// creating HTML Elements

const div = document.createElement('div');

// creating HTML className

div.className = "alert";
// creating HTML innerTextNode
const TextNode = document.createTextNode('✅ Successfully updated your content');

div.prepend(TextNode);


inputButton.addEventListener("click", () => {
  let inputName = document.getElementById('input-field');
  const li = document.createElement("li");
  li.className = 'family-name';
  const liTextNode = document.createTextNode(`${inputName.value}`)
  li.append(liTextNode);

  familyContent.prepend(li);


  // familyContent.innerHTML += `<li class="family-name">${inputName.value} </li>`
  main.prepend(div)
})


