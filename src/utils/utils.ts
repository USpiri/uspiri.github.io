export const capitalize = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
export const setDialogs = () => {
  // Get "open-dialog" buttons
  const buttons = document.querySelectorAll("[open-dialog]");
  buttons.forEach((button) => {
    // Get "dialog-id" value
    const dialogId = button.getAttribute("dialog-id");
    if (!dialogId) {
      console.error(
        "open-dialog Buttons must have a valid dialog-id attribute"
      );
      return;
    }

    // Get "dialog-id" dialog element
    const dialog = document.querySelector(`#${dialogId}`) as HTMLDialogElement;
    if (!dialog || !(dialog instanceof HTMLDialogElement)) {
      console.error(`There is no <dialog> with id: "${dialogId}"`);
      return;
    }

    // Close off canvas
    dialog.addEventListener("click", (event) => {
      var rect = dialog.getBoundingClientRect();
      var isInDialog =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;
      if (!isInDialog) {
        dialog.close();
      }
    });

    // Set close event to all "dialog-close" buttons
    const closeButtons = dialog.querySelectorAll("[dialog-close]");
    closeButtons.forEach((close) =>
      close?.addEventListener("click", () => dialog.close())
    );

    // Open dialog
    button.addEventListener("click", () => {
      dialog.showModal();
    });
  });
};
