const sponsorer = [
    "Aalborg Kommune",
    "Bryghuset Vendia",
    "Skjold Burne Boulevarden",
    "Solo Grafisk",
    "Tuborg",
    "U3z vandrerhjem og hytteø",
    "Café Buddha",
    "Bog & Ide Legekæden Nørresundby",
    "Blues Heaven",
    "Quist Wine",
    "Skagen Smedeservice",
    "D`Wine Bar",
    "Kvickly Vestbyen",
    "John Bull Pub",
    "Salling",
    "Profox",
];

const liste = document.querySelector(".liste");

sponsorer.forEach(function (sponsor) {
    liste.innerHTML += `
    <ul>
        <li>${sponsor}</li>
    </ul>
    `
});