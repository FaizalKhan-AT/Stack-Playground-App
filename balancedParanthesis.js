import { delay } from "./utils.js";

const checkStackContainer = document.querySelector(".check-stack");

let stack = [];
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
  checkStackContainer.innerHTML = html;
};
export const checkParenthesis = async (str) => {
  let n = str.length;
  for (let i = 0; i < n; i++) {
    if (str[i] == "(" || str[i] == "{" || str[i] == "[") stack.push(str[i]);
    else if (str[i] == ")" || str[i] == "}" || str[i] == "]") {
      if (
        !isPairMatching(stack[stack.length - 1], str[i]) ||
        stack.length === 0
      )
        return false;
      else stack.pop();
    }
    renderStack();
    await delay(1000);
  }
  return stack.length === 0 ? true : false;
};
const isPairMatching = (top, ch) => {
  if (top == "(" && ch == ")") return true;
  else if (top == "{" && ch == "}") return true;
  else if (top == "[" && ch == "]") return true;
  else false;
};
