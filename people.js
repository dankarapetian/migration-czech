const users = {
  "ramil alekberov": {
    name: "RAMIL ALEKBEROV",
    dob: "20.09.1998",
    pob: "Moskva / Rusko",
    sex: "M",
    nationality: "Česká republika",
    issue: "27.03.2025",
    expiry: "27.03.2035",
    doc: "283359730",
    photo: "ramil.jpg"
  },
  "natalia garinova": {
    name: "NATALIA GARINOVA",
    dob: "15.09.1995",
    pob: "Jaroslavl / Rusko",
    sex: "F",
    nationality: "Česká republika",
    issue: "27.01.2025",
    expiry: "27.01.2035",
    doc: "260735219",
    photo: "natalia.jpg"
  }
};

const params = new URLSearchParams(window.location.search);
const fullName = `${params.get("first")?.toLowerCase()} ${params.get("last")?.toLowerCase()}`;

const user = users[fullName];
const container = document.getElementById("content");

if (user) {
  container.innerHTML = `
    <h2>${user.name}</h2>
    <img src="${user.photo}" alt="photo" width="200"><br><br>
    <p><strong>Datum narození:</strong> ${user.dob}</p>
    <p><strong>Místo narození:</strong> ${user.pob}</p>
    <p><strong>Pohlaví:</strong> ${user.sex}</p>
    <p><strong>Státní příslušnost:</strong> ${user.nationality}</p>
    <p><strong>Datum vydání:</strong> ${user.issue}</p>
    <p><strong>Platnost do:</strong> ${user.expiry}</p>
    <p><strong>Číslo dokumentu:</strong> ${user.doc}</p>
  `;
} else {
  container.innerHTML = `<p style="color:red;">Uživatel nenalezen.</p>`;
}
