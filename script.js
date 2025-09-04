// Modal for displaying a large form map
const modal = document.querySelector(".plans__modal");
const overlay = document.querySelector(".plans__overlay");
const openModalBtn = document.querySelector(".plans__btn--open");
const closeModalBtn = document.querySelector(".plans__btn--close");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

openModalBtn.addEventListener("click", openModal);

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

closeModalBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    modalClose();
  }
});
