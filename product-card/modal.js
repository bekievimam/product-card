class Modal {
  constructor(id, shouldCloseOnOverlay = true) {
    this.modal = document.getElementById(id);
    this.id = id;

    this.closeButton = this.modal.querySelector(".modal-close");
    this.overlay = document.querySelector(".overlay");

    this.closeButton.addEventListener("click", () => {
      this.close();
    });

    if (shouldCloseOnOverlay) {
      this.overlay.addEventListener("click", () => {
        if (this.isOpen()) {
          this.close();
        }
      });
    }
  }

  open() {
    this.modal.classList.add("modal-showed");
    this.overlay.classList.add("overlay-showed");
  }

  close() {
    this.modal.classList.remove("modal-showed");
    this.overlay.classList.remove("overlay-showed");
  }

  isOpen() {
    return this.modal.classList.contains("modal-showed");
  }
}

export default Modal;
