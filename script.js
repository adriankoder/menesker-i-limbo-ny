const hovedside = document.getElementById("hovedside");
const omArbeidet = document.getElementById("omArbeidet");
const meneskerILombo = document.getElementById("beskrivelse");
const VaneligeSpørsmål = document.getElementById("VaneligeSpørsmål");
const vaneligSpørsmålHvorfor = document.getElementById(
  "vaneligSpørsmålHvorfor"
);
const liID = document.getElementById("liID");
const KontaktOss = document.getElementById("Kontakt");
if (hovedside) {
  hovedside.addEventListener("click", () => {
    meneskerILombo.innerHTML =
      "<p>Mennesker i limbo Bergen er en organisasjon for lengeværende asylsøkere med endelig avslag. Vi kjemper for å bedre vår situasjon. Gruppen vår består av både kvinner og menn. Noen av oss har barn, andre kom til Norge som mindreårige. Vi kommer fra forskjellige land og har ulik bakgrunn. Det vi har felles, er at vi lever i Norge uten rett til:</p>";
    liID.style.display = "block";
  });
} else if (liID) {
  liID.style.display = "none";
}

omArbeidet.addEventListener("click", () => {
  meneskerILombo.innerHTML = "Dette er en test";
  liID.style.display = "none";
});

VaneligeSpørsmål.addEventListener("click", () => {
  meneskerILombo.innerHTML =
    "<button id='vaneligSpørsmålHvorfor'>Hvorfor reiser de ikke bare tilbake?</button>";
  const vaneligSpørsmålHvorfor = document.getElementById(
    "vaneligSpørsmålHvorfor"
  );
  liID.style.display = "none";

  vaneligSpørsmålHvorfor.addEventListener("click", () => {
    meneskerILombo.innerHTML =
      "<p>Det er grove brudd på menneskerettigheter der jeg kommer fra.</p>" +
      "<p>Som kvinne mangler jeg rettigheter i hjemlandet mitt.</p>" +
      "<p>Mitt land er styrt av diktatur, og jeg er i fare for å bli satt i fengsel og torturert.</p>";
    liID.style.display = "none";
  });
});

KontaktOss.addEventListener("click", () => {
  meneskerILombo.innerHTML =
    "<p>Kontakt oss på telefon: <a href='tel:+4790038238233'>90038238233</a></p>" +
    "<p>Eller e-post: <a href='mailto:example@gmail.com'>example@gmail.com</a></p>" +
    "<p>Støtt oss på <a href='https://www.vipps.no/fvgrt4gbt4'>Vipps</a></p>";
  liID.style.display = "none";
});
