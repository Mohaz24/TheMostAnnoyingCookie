const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const upLoadText = document.querySelector(".modal-info");
const info = document.querySelector(".modal-content");
const form = document.getElementById("form");
const declineBtn = document.getElementById("decline");
const reverse = document.querySelector(".modal-btns");

setTimeout(() => {
  modal.style.display = "inline";
}, 1000);

declineBtn.addEventListener("mouseenter", () => {
  reverse.classList.toggle("switch");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const name = formData.get("fullName");

  setTimeout(() => {
    upLoadText.innerHTML = `
        <div class="content">
            <img class="loading" src="./images/loading.svg"  />
            <p class="info">Uploading your data to the dark web...</p>
        </div>
        `;
  }, 1000);

  setTimeout(() => {
    document.querySelector(".info").innerHTML = `
        <div class="content">
            <p class="content">Loading data...☠️</p>
        </div>
        `;
  }, 2500);

  setTimeout(() => {
    info.innerHTML = `
    <div class="content"> 
    <h2 class="message">Thank you 
    <span>${name}</span> for your data!
    </h2>
    <img class="gif" src="./images/giphy.gif"  />
    </div>
     `;
    modalCloseBtn.disabled = false;
  }, 5500);
});

modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});
