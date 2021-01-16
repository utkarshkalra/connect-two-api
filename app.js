// const fetch = require("node-fetch");
const button1 = document.querySelector(".pressme");
//import {info} from 'env.js';


const wordarea = document.querySelector(".randword");
const definationarea = document.querySelector(".def");
const rw = document.createElement("pre");
wordarea.appendChild(rw);

const output = document.createElement("pre");
definationarea.appendChild(output);


output.classList.add('out');

const randomword = () => {
  fetch("https://random-word-api.herokuapp.com/word?number=1")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      word = response;
      rw.innerHTML = word;
      defination(word[0]);
    })
    .catch((err) => {
      console.log(err);
    });
};

const defination = (word) => {
  console.log(word);
  fetch(
    `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${info.key}`
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      // console.log(response)
      return response[0].shortdef;
    })
    .then((response) => {
      if (response) {
        const arrlength = Object.keys(response).length;
        var out = "";
        for (i = 0; i < arrlength; i++) {
          out = out + (i + 1) + ": " + response[i] + "\n";
        }
        console.log(out);
        output.innerHTML = out;
      } else {
        output.innerHTML = "Not found";
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
button1.addEventListener("click", randomword);
