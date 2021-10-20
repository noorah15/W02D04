//1

//2
const header = document.createElement("h1");
header.innerHTML = "Todo List";
document.body.append(header);

const UnList = document.createElement("ul");
UnList.id = "toDo";
document.body.append(UnList);

//3

let toDos = ["wake up", "eat breakfast", "code"];

//4

const deleteListItem = (event) => {
  console.log(event.target.id);
  let ind = event.target.id;
  toDos.splice(ind, 1);
  renderList();
};

const updateListItem = (event) => {
  let value = prompt("Please enter your name");
  let ind = event.target.id;
  toDos[ind] = value;
  renderList();
};

function renderList() {
  const toDo = document.querySelector("#toDo");
  toDo.innerHTML = "";

  for (let i = 0; i < toDos.length; i++) {
    const ValueUnList = document.createElement("li");
    ValueUnList.innerHTML = toDos[i];
    ValueUnList.id = "li" + i;
    toDo.append(ValueUnList);

    //document.body.append(ValueUnList);
    const b = document.createElement("button");
    b.innerHTML = "delete";
    b.id = i;
    b.className = "delete";
    b.addEventListener("click", deleteListItem);
    ValueUnList.append(b);

    const b2 = document.createElement("button");
    b2.innerHTML = "update";
    b2.id = i;
    b2.className = "update";
    b2.addEventListener("click", updateListItem);
    ValueUnList.append(b2);
  }
}

renderList();

//5

const input = document.createElement("input");
input.type = "text";
input.id = "input1";
document.body.append(input);

const btn = document.createElement("button");
btn.id = "btn1";
btn.innerHTML = "add To List";
document.body.append(btn);

const addToList = function addToList() {
  const inputValue = document.querySelector("#input1");
  let str = inputValue.value;
  if (str === "") alert("Not entered anything");
  else {
    toDos.push(str);
    renderList();
  }
};

const btnClick = document.querySelector("#btn1");
btnClick.addEventListener("click", addToList);

//6
