(() => {
  const refs = {
    openModalBtn: document.querySelector(".menu-open__btn"),
    closeModalBtn: document.querySelector(".menu-close__btn"),
    modal: document.querySelector(".mob-menu"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
