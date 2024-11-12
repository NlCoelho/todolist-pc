document.addEventListener("dblclick", () => {
  console.log(document.activeElement);
});

const eventDblClick = (id) => {
  console.log("Deu certo! " + "O elemento " + id + " chamou a função!");
};

const el = document.querySelectorAll("td");

/*
for (let i = 0; i < el.length; i++) {
  el[i].addEventListener("click", () => {});
}
*/

const textareas = document.querySelectorAll("textarea");

for (let i = 0; i < textareas.length; i++) {
  textareas[i].addEventListener("keydown", (e) => {
    const x = document.activeElement.value;
    document.activeElement.value = x.replaceAll("\n", "");

    if (e.key === "Enter") {
      for (let j = 0; j < textareas.length - 1; j++) {
        if (textareas[j] == document.activeElement) {
          textareas[j + 1].focus();
          return false;
        }
      }
      textareas[0].focus();
    }
  });
}

for (let i = 0; i < textareas.length; i++) {
  textareas[i].addEventListener("dblclick", () => {
    console.log("okara");
    document.activeElement.removeAttribute("disabled", "");
    return false;
  });
}

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

const tes = document.getElementById("fts");
tes.addEventListener("blur", () => {
  val = tes.value;
  console.log("valor " + val.indexOf("s"));

  if (val.indexOf(0) == "\t") {
    console.log(val.indexOf(0) == " " + val.indexOf(0));
    val = val.indexOf(1, val.length);
    console.log(val.length);
  }

  return 0;
});

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

const Pesq = (keyPesq) => {
  const el = document.getElementsByClassName("campoProduto");
  let j = 0;
  for (let i = 0; el.length; i++) {
    textInput = keyPesq;
    textInput = textInput.toUpperCase();
    textElement = el[i].textContent || el[i].innerHTML;
    textElement = textElement.toUpperCase();
    if (textElement.indexOf(textInput) > -1) {
      el[i].parentNode.style.display = "table-row";
      console.log(el[i].textContent);
      if (j % 2 == 0) {
        el[i].parentNode.style.backgroundColor = "#ffffff10";
      } else {
        el[i].parentNode.style.backgroundColor = "#ffffff00";
      }
      j = j + 1;
    } else {
      el[i].parentNode.style.display = "none";
    }
  }
};

const testChange = (val) => {
  console.log(val);
};

const cmdEditar = (el) => {
  el.parentNode.parentNode.addEventListener("blur", () => {
    if (confirmaEditar()) {
      console.log("Muito Bom");
    }
    console.log(el.parentNode.parentNode);
  });
};

const confirmaEditar = () => {
  console.log("Boa");
  return 1; 
};
