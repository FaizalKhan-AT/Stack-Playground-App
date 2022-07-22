const stackContainer = document.querySelector(".stack");
const message = document.querySelector(".msg-box");
const pushInput = document.getElementById("push-inp");
const pushBtn = document.getElementById("push-btn");
const popBtn = document.getElementById("pop-btn");
const peepBtn = document.getElementById("peep-btn");

let stack = [];

document.addEventListener("DOMContentLoaded", () => {
  pushBtn.addEventListener("click", pushElement);
  popBtn.addEventListener("click", popElement);
  peepBtn.addEventListener("click", peepElement);
});
const renderStack = () => {
  let html = stack
    .map((val) => {
      return ` <div
              class="element d-flex align-items-center my-1 justify-content-center fs-4 fw-bold py-4"
            >
              ${val}
            </div>`;
    })
    .join("");
  stackContainer.innerHTML = html;
};
const pushElement = () => {
  if (pushInput.value === "") {
    message.innerHTML =
      "<span class='text-danger'>Error: Input field is empty!!</span>";
    return;
  }
  if (stack.length === 9) {
    message.innerHTML =
      "<span class='text-danger'>Error: Stack Overflow Cannot push Element</span>";
    pushInput.value = "";
    return;
  }
  message.innerText = "";
  stack.push(pushInput.value);
  pushInput.value = "";
  pushInput.focus();
  renderStack();
};
const popElement = () => {
  if (stack.length === 0) {
    message.innerHTML =
      "<span class='text-danger'>Error: Stack Underflow Cannot Pop Element</span>";
    return;
  }
  message.innerText = "";
  let elm = stack.pop();
  message.innerText = `Popped Element is ${elm}`;
  renderStack();
  pushInput.focus();
};
const peepElement = () => {
  message.innerText = "";
  message.innerText = `Popped Element is ${stack[stack.length - 1]}`;
  renderStack();
  pushInput.focus();
};
