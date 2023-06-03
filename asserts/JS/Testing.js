// console.log(document.body instanceof EventTarget);
// console.log(document.body instanceof Node);
// console.log(document.body instanceof Element);
// console.log(document.body instanceof Element);
// console.log(document.body instanceof HTMLElement);
// console.log(document.body instanceof HTMLBodyElement);

// console.log(document.body.nodeType);


//looping the List

//with Fragment
// console.time("fragement-Time:")
// for (i = 1; i <= 1000; i++) {
//     let fragLiEl = document.createElement('li');
//     fragLiEl.className = "family-name";
//     let fragLiElText = document.createTextNode(`New List :${i}`);
//     fragLiEl.append(fragLiElText);
//     fragment.append(fragLiEl);
//     familyContent.append(fragment);

// }
// console.timeEnd("fragement-Time:")

/*Global Variables*/
let inputName = document.getElementById('input-field');
let inputButton = document.getElementById('input-btn');
let familyContent = document.getElementById('family');
let main = document.querySelector('.main')
let fragment = document.createDocumentFragment();




// familyContent.before(textbofore);
