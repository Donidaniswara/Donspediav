katalog = [
  {
    id: 1,
    nama_produk: "GM - Epic V",
    harga: "150.999",
  },
  {
    id: 2,
    nama_produk: "Open Mythic Grading",
    harga: "149.999",
  },
  {
    id: 3,
    nama_produk: "Epic V - Legend V",
    harga: "149.999",
  },
  {
    id: 4,
    nama_produk: "Legend V - Mythic",
    harga: "184.999",
  },
  {
    id: 5,
    nama_produk: "Epic I - Mythic",
    harga: "214.999",
  },
  {
    id: 6,
    nama_produk: "Epic II - Mythic",
    harga: "244.999",
  },
  {
    id: 7,
    nama_produk: "GM V - Legend V",
    harga: "274.999",
  },
  {
    id: 8,
    nama_produk: "Epic III - Mythic",
    harga: "274.999",
  },
  {
    id: 9,
    nama_produk: "Mythic - Mythic 25",
    harga: "230.999",
  },
  {
    id: 10,
    nama_produk: "Epic IV - Mythic",
    harga: "304.999",
  },
  {
    id: 11,
    nama_produk: "Epic V - Mythic",
    harga: "334.999",
  },
  {
    id: 12,
    nama_produk: "GM V - Mythic",
    harga: "459.999",
  },
  {
    id: 13,
    nama_produk: "Mythic 25 - Mythic 50",
    harga: "375.999",
  },
  {
    id: 14,
    nama_produk: "Mythic 1 - Mythic 50",
    harga: "635.999",
  },
  {
    id: 15,
    nama_produk: "Mythic 50 - Mythic 100",
    harga: "1.100.000",
  },
];

const produkContainer = document.querySelector(".grid-select-booster");

katalog.forEach((product) => {
  const inputContainer = document.createElement("div");
  inputContainer.classList.add("input-container");

  const radioInput = document.createElement("input");
  radioInput.type = "radio";
  radioInput.name = "select-booster";
  radioInput.id = product.id;
  radioInput.value = product.nama_produk;

  const radioTile = document.createElement("div");
  radioTile.classList.add("radio-tile");

  const label = document.createElement("label");
  label.setAttribute("for", product.id);
  label.textContent = product.nama_produk;

  const hargaParagraph = document.createElement("p");
  hargaParagraph.textContent = `Rp ${product.harga}`;

  radioTile.appendChild(label);
  radioTile.appendChild(hargaParagraph);

  inputContainer.appendChild(radioInput);
  inputContainer.appendChild(radioTile);

  // Menambahkan elemen inputContainer ke dalam frame-container
  produkContainer.appendChild(inputContainer);
});

const loginViaInp = document.getElementById("loginVia");
const product = document.getElementById("product");
const harga = document.getElementById("harga");
const radioButtons = document.querySelectorAll('input[name="select-booster"]');
const notes = document.getElementById("notes");
let formData = {};

// Mengambil value pada pilihan paket
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", updateSelectedProduct);
});

// Track setiap perubahan pada option login via
loginViaInp.addEventListener("change", function () {
  const selectedValue = loginViaInp.value;

  const selectedLogin = selectedValue !== "default" ? selectedValue : "";
  document.querySelector('.modal-value[data-field="LoginVia"]').textContent =
    selectedLogin;

  formData.login = selectedLogin;
});

// Default value pilihan paket
let selectedProduct = null;

// Fungsi mengupdate value paket setelah user memilih
function updateSelectedProduct() {
  selectedProduct = document.querySelector(
    'input[name="select-booster"]:checked'
  );

  // Memastikan data sudah di update di DOM pilih produk
  if (selectedProduct) {
    // id hanya sebagai opsi jika mau di refactor
    const selectedProductId = selectedProduct.id;

    // mengambil isi dari isi elemen html
    const selectedProductName =
      selectedProduct.nextElementSibling.querySelector("label").innerHTML;
    const selectedProductPrice =
      selectedProduct.nextElementSibling.querySelector("p").innerHTML;

    // Memasukkan data ke inner html pada id yang di target
    product.innerHTML = selectedProductName;
    harga.innerHTML = selectedProductPrice;
  } else {
    selectedProduct = null;
  }
}

function openModal() {
  // Ketika pop up muncul input value akan diambil
  const emailInp = document.getElementById("email-noHp").value;
  const reqHeroInp = document.getElementById("request-hero").value;
  const userIdInp = document.getElementById("user-id").value;
  const passwordInp = document.getElementById("password").value;

  // Setelah input value di ambil, lalu data value di passing ke data-field yang di targetkan
  document.querySelector('.modal-value[data-field="EmailNoHp"]').textContent =
    emailInp;
  document.querySelector('.modal-value[data-field="RequestHero"]').textContent =
    reqHeroInp;
  document.querySelector('.modal-value[data-field="UserId"]').textContent =
    userIdInp;
  document.querySelector('.modal-value[data-field="Password"]').textContent =
    passwordInp;

  // manipulasi css dengan mengubah default modal menjadi visible
  var modal = document.getElementById("myModal");
  modal.style.visibility = "visible";
}

function closeModal() {
  // manipulasi css dengan mengubah menjadi default
  var modal = document.getElementById("myModal");
  modal.style.visibility = "hidden";
}

// Fungsi yang langsung mengarah ke WhatsApp
function handleSubmit() {
  const emailInp = document.getElementById("email-noHp").value;
  const reqHeroInp = document.getElementById("request-hero").value;
  const userIdInp = document.getElementById("user-id").value;
  const nicknameInp = document.getElementById("nickname").value;
  const passwordInp = document.getElementById("password").value;
  const notesVal = notes.value;
  const loginViaInp = document.getElementById("loginVia");
  const selectedValue = loginViaInp.value;
  const selectedLogin = selectedValue !== "default" ? selectedValue : "";
  const paketProduk = document.querySelector(
    'input[name="select-booster"]:checked'
  ).value;
  formData = {
    email_noHp: emailInp,
    request_hero: reqHeroInp,
    id_game: userIdInp,
    nickname: nicknameInp,
    password: passwordInp,
    notes: notesVal,
    login: selectedLogin,
    select_booster: paketProduk,
  };

  const noTelp = `6281219650938`;

  // Pesan yang akan otomatis terisi di clipboard text whatsapp
  const message =
    `Email/No. Handphone: ${emailInp}%0A` +
    `Request Hero: ${reqHeroInp}%0A` +
    `User ID: ${userIdInp}%0A` +
    `Nickname: ${nicknameInp}%0A` +
    `Password: ${passwordInp}%0A` +
    `Paket ${paketProduk}%0A`;

  window.open(`https://api.whatsapp.com/send?phone=${noTelp}&text=${message}`);
  closeModal();
}
