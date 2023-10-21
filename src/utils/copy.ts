const icon =
  '<svg class="copy-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M316.665-213.333q-25.624 0-44.478-18.854-18.854-18.854-18.854-44.478V-810q0-25.625 18.854-44.479t44.478-18.854H730q25.625 0 44.479 18.854T793.333-810v533.335q0 25.624-18.854 44.478-18.854 18.854-44.479 18.854H316.665Zm0-63.332H730V-810H316.665v533.335ZM190-86.667q-25.625 0-44.479-18.854T126.667-150v-565.168q0-12.95 9.283-22.225 9.284-9.274 22.5-9.274t22.383 9.274Q190-728.118 190-715.168V-150h445.168q12.95 0 22.225 9.309 9.274 9.309 9.274 22.308 0 13.383-9.274 22.55-9.275 9.166-22.225 9.166H190Zm126.665-189.998V-810v533.335Z"/></svg>';
const check =
  '<svg class="copy-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M380-338.666 732.334-691q9.544-9.5 22.605-9.5t22.894 9.535q9.5 9.535 9.5 22.583 0 13.048-9.5 22.548L402.5-270.5q-9.833 9.833-22.5 9.833t-22.167-9.833l-176-176q-9.833-9.545-9.416-22.606.416-13.061 9.951-22.561t22.583-9.5q13.049 0 22.882 9.5L380-338.666Z"/></svg>';
export const setCopyButton = () => {
  let blocks = document.querySelectorAll("pre");
  blocks.forEach(async (block) => {
    if (navigator.clipboard) {
      let button = document.createElement("button");

      button.innerHTML = icon;
      button.className = "copy-button";
      block.appendChild(button);

      button.addEventListener("click", async () => {
        await copyCode(block, button);
      });
    }
  });
};
async function copyCode(block: any, button: any) {
  let code = block.querySelector("code");
  let text = code.innerText;
  await navigator.clipboard.writeText(text);
  button.innerHTML = check;
  setTimeout(() => {
    button.innerHTML = icon;
  }, 1000);
}
