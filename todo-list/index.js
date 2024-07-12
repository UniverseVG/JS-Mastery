const input = document.querySelector("#description");

const addItem = document.querySelector(".add-todo");

const list = document.querySelector(".list-container ul");

const listItem = document.querySelector(".list-item");

// window.addEventListener("beforeunload", function (e) {
//   e.preventDefault();
//   e.returnValue = "Are you sure you want to leave?";
// });

function disableButton() {
  addItem.disabled = true;
  addItem.style.opacity = "0.5";
  addItem.style.cursor = "not-allowed";
}

addItem.disabled = true;
addItem.style.opacity = "0.5";
addItem.style.cursor = "not-allowed";

input.addEventListener("input", (e) => {
  if (e.target.value.length > 0) {
    addItem.disabled = false;
    addItem.style.opacity = "1";
    addItem.style.cursor = "pointer";
  } else {
    disableButton();
  }
});

// document.addEventListener("DOMContentLoaded", () => {
//   getFromLocalStorage();
// });

document.addEventListener("DOMContentLoaded", () => {
  getFromLocalStorage();
});

function deleteItem(element) {
  const item = element.parentElement.parentElement.parentElement;
  item.classList.add("slide-out");
  item.addEventListener("animationend", () => {
    item.remove();
    saveToLocalStorage();
  });
}

function editElement(element) {
  console.log("clicked");
  const parent = element.parentElement.parentElement.parentElement;
  const textInput = parent.querySelector(".list-input>.list-value");

  let value = textInput.value;
  textInput.value = "";
  textInput.value = value;
}

list.addEventListener("click", (e) => {
  if (e.target.parentElement.classList.contains("delete")) {
    deleteItem(e.target);
  }
  if (e.target.parentElement.classList.contains("edit")) {
    const isChecked =
      e.target.parentElement.parentElement.parentElement.querySelector(
        ".list-input>.list-check"
      ).checked;

    if (!isChecked) {
      editElement(e.target);
      saveToLocalStorage();
    }
  }
  const parent = e.target.parentElement.querySelector(".list-value");
  const editIcon = e.target.parentElement.parentElement.querySelector(
    ".list-actions>.edit"
  );
  if (e.target.classList.contains("list-check")) {
    if (e.target.checked) {
      parent.disabled = true;
      parent.style.textDecoration = "line-through";
      parent.style.opacity = "0.5";
      editIcon.style.cursor = "not-allowed";
      editIcon.style.opacity = "0.5";
    } else {
      console.log(parent);
      parent.disabled = false;
      parent.style.textDecoration = "none";
      parent.style.opacity = "1";
      editIcon.style.cursor = "pointer";
      editIcon.style.opacity = "1";
    }
    saveToLocalStorage();
  }
});

function listItemCard(id, value = "", checked = false) {
  return `
    <li class="list-item  slide-in" key="${id}">
        <div class="list-input">
            <input
                type="checkbox"
                class="list-check"
                name="completed"
                ${checked ? "checked" : ""}

            />
            <input type="text" value="${value}" class="list-value" />
        </div>
        <div class="list-actions">
            <h5 class="edit" ><i class="fa-regular fa-pen-to-square"></i></h5>
            <h5 class="delete" ><i class="fa-solid fa-trash"></i></h5>
        </div>
    </li>
    `;
}

addItem.addEventListener("click", (e) => {
  console.log("clicked");
  e.preventDefault();
  if (input.value === "") {
    return;
  } else {
    list.insertAdjacentHTML(
      "afterbegin",
      listItemCard(crypto.randomUUID(), input.value, false)
    );
    saveToLocalStorage();
  }

  input.value = "";
  disableButton();
});

function saveToLocalStorage() {
  const items = [];
  document.querySelectorAll(".list-item").forEach((item) => {
    const id = item.getAttribute("key");
    const value = item.querySelector(".list-input>.list-value").value;
    const checked = item.querySelector(".list-input>.list-check").checked;
    items.push({ id, value, checked });
  });

  localStorage.setItem("items", JSON.stringify(items));
}

function getFromLocalStorage() {
  const items = JSON.parse(localStorage.getItem("items"));
  if (items?.length > 0) {
    items.forEach((item) => {
      const li = listItemCard(item.id, item.value, item.checked);
      list.insertAdjacentHTML("beforeend", li);
      if (item.checked) {
        const parent = document.querySelector(`[key="${id}"]`);
        parent.querySelector(".list-input>.list-check").checked = true;
        parent.querySelector(".list-input>.list-value").disabled = true;
        parent.querySelector(".list-input>.list-value").style.textDecoration =
          "line-through";
        parent.querySelector(".list-input>.list-value").style.opacity = "0.5";
        parent.querySelector(".list-actions>.edit").style.cursor =
          "not-allowed";
        parent.querySelector(".list-actions>.edit").style.opacity = "0.5";
      }
    });
  }
}
