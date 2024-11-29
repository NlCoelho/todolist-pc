const tr = document.querySelectorAll("tr");
for (let i = 0; i <= tr.length; i += 1) {
  let originColor;
  tr[i].addEventListener("mouseover", () => {
    originColor = tr[i].children[8].children[0].style.color;
    tr[i].children[8].children[0].style.color = "#fff";
  });
  tr[i].addEventListener("mouseout", () => {
    tr[i].children[8].children[0].style.color = originColor;
  });
}

const textInput = document.querySelectorAll("input");
for (let i = 0; i < textInput.length; i++) {
  textInput[i].addEventListener("keydown", (e) => {
    const x = document.activeElement.value;
    document.activeElement.value = x.replaceAll("\n", "");

    if (e.key === "Enter") {
      for (let j = 0; j < textInput.length - 1; j++) {
        if (textInput[j] == document.activeElement) {
          textInput[j + 1].focus();
          return false;
        }
      }
      textInput[0].focus();
    }
  });
}
/*
for (let i = 0; i < textareas.length; i++) {
  textareas[i].addEventListener("dblclick", () => {
    console.log("okara");
    document.activeElement.removeAttribute("disabled", "");
    return false;
  });
}*/

/*
document.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;
  console.log(`A posição atual do cursor do mouse é: (${x}, ${y})`);
});
*/

function copyIpPublisher() {
  let tl_sel = document.activeElement.textContent;

  navigator.clipboard.writeText(tl_sel);
  console.log("Copiado " + tl_sel + " para a Área de Trânsferência...");
}

let keySearch = "";

/*
document.getElementById("inputSearch").addEventListener("keypress", (e) => {
  if(e.key=="Enter"){
  }
  keySearch = keySearch + e.key;
  fetch("/searchProdutos/" + keySearch)
  .then(res => res.json())
  .then((json) => {
    json.forEach((item) => {
      console.log(item)
    })
    //return window.location.assign("/searchProdutos/" + keySearch);
  })
})
*/

const keyTest = (e) => {
  console.log(e);
  fetch("/" + e).then((res) => {
    console.log(res);
    //return window.location.assign("/" + e);
  });
};

/*const keyTest = (e) => {
  console.log(e);
  fetch("/" + e)
  .then(res => res.json())
  .then((json) => {
    json.forEach((item) => {
      console.log(item)
      return window.location("/" + e);

    })

})}
    */

function Pesq() {
  const keyPesq = document.getElementById("inputPesq").value;
  const el = document.getElementsByClassName("campoProduto");

  for (let i = 0; i < el.length; i++) {
    if (keyPesq == undefined) {
      keyPesq = "";
    }

    if (keyPesq || keyPesq == "") {
      let textInput = keyPesq.toUpperCase();
      let textElement = el[i].children[0].value;
      let j = 0;
      if (textElement.indexOf(textInput) > -1) {
        el[i].parentNode.style.display = "table-row";
      } else {
        el[i].parentNode.style.display = "none";
      }
    }
  }

  const elChecked = document.getElementById("radioDC");
  const valor = elChecked.checked ? "spring" : "DC";

  const el2 = document.getElementsByClassName(valor);
  [].forEach.call(el2, (elm) => {
    elm.style.display = "none";
  });
}
/*const textChange = (el) => {
  const tr = el.parentNode.parentNode;
  tr.children[8 - 1].setAttribute("class", "test");
};*/

function bttVex(el) {
  let nElements = el.parentNode.parentNode.children.length;
  for (let i = 1; i < nElements; i += 1) {
    let element = el.parentNode.parentNode.children[i].children[0];
    element.removeAttribute("disabled");
    if (i == 1) {
      element.focus();
    }
  }
  el.parentNode.innerHTML = `<button type="submit"><i class="bi bi-check2-circle"></i></button>`;
}

/*
    let attribSpan = element.getAttribute("name");
    let textSpan = document.createTextNode(element.value);
    let newInput = document.createElement("input");
    newInput.setAttribute("name", attribSpan);
    newInput.appendChild(textSpan);
    el.parentNode.parentNode.children[i].appendChild(newInput);
    el.parentNode.parentNode.children[i].children[0].remove();*/
/* }
  
}*/

