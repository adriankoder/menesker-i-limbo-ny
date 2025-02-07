const hovedside = document.getElementById("hovedside");
const omArbeidet = document.getElementById("omArbeidet");
const meneskerILombo = document.getElementById("beskrivelse");
const VaneligeSpørsmål = document.getElementById("VaneligeSpørsmål");
const liID = document.getElementById("liID");
const KontaktOss = document.getElementById("Kontakt");
const folk = document.getElementById("folk");
const HvaBetyrLimbo = document.getElementById("HvaBetyrLimbo");
let bildeSomByttes = document.getElementById("president");

hovedside.addEventListener("click", () => {
  console.log("hovedside clicked");
  bildeSomByttes.src = "./image copy.png";
  bildeSomByttes.alt = "presidenten";
  meneskerILombo.innerHTML = `<p>Mennesker i limbo Bergen er en organisasjon for lengeværende asylsøkere med endelig avslag. 
  Vi kjemper for å bedre vår situasjon.
  Gruppen vår består av både kvinner og menn.
  Noen av oss har barn, andre kom til Norge som mindreårige.
  Vi kommer fra forskjellige land og har ulik bakgrunn.
  Det vi har felles, er at vi lever i Norge uten rett til:</p>`;
  liID.style.display = "block";
});

omArbeidet.addEventListener("click", () => {
  meneskerILombo.innerHTML = `<p> Hvem er vi?
  Gruppen består av lengeværende papirløse asylsøkere, inkludert kvinner, menn og barn, som har flyktet til Norge. De kjemper for:</p>

<p><li>Arbeid</li><br>
<li>Skolegang</li><br>
<li>Helsehjelp</li><br>
<li>Økonomiske velferdstjenester</p>
</li>


Papirløse eller irregulære migranter er personer som oppholder seg i Norge uten lovlig opphold. Mange er asylsøkere med endelig avslag. Flere i denne gruppen bor på asylmottak, særlig barnefamilier.

De irregulære migrantene som, i frykt for tvangsretur eller av andre årsaker, velger å ikke bo på asylmottak – eller som ikke har rett til mottaksplass – lever på kanten av det norske samfunnet. De livnærer seg på uformell sosial støtte eller illegalt arbeid og er ekskludert fra det offentlige støtteapparatet.<br><br>


Risikoen for utnyttelse er stor, både når det gjelder menneskehandel, andre overgrep og utnyttelse i det svarte arbeidsmarkedet (underbetaling, manglende arbeidsrettigheter og fravær av arbeidskontrakt).
Både psykisk og somatisk helse kan være dårlig.
De kan ha helsetilstander som kunne vært behandlet,
men som utvikler seg til kroniske eller livstruende tilstander fordi de forblir ubehandlet.
I mange tilfeller dreier det seg om omfattende psykososiale og helsemessige utfordringer.`;

  liID.style.display = "none"; // Skjul liID
  bildeSomByttes.src = "./stand 19 okt 24 Torgallmenning.jpg";
  bildeSomByttes.alt = "stand 19 okt 24 Torgallmenning";
  folk.style.display = "none";
});

VaneligeSpørsmål.addEventListener("click", () => {
  console.log("VaneligeSpørsmål clicked");
  meneskerILombo.innerHTML = meneskerILombo.innerHTML = `
  <button id='vaneligSpørsmålHvorfor'>Hvorfor reiser de ikke bare tilbake?</button>
  <button id='hvaVilDeOppnå'>Hva vil de oppnå i Norge?</button>
`;
  // const vaneligSpørsmålHvorfor = document.getElementById(
  //   "vaneligSpørsmålHvorfor"
  // );
  folk.style.display = "none";
  liID.style.display = "none"; // Skjul liID

  vaneligSpørsmålHvorfor.addEventListener("click", () => {
    meneskerILombo.innerHTML =
      "<p><li>Det er grove brudd på menneskerettigheter der jeg kommer fra.</li></p>" +
      "<p><li>Som kvinne mangler jeg rettigheter i hjemlandet mitt.</li></p>" +
      "<p><li>Mitt land er styrt av diktatur, og jeg er i fare for å bli satt i fengsel og torturert.</li></p>";
    folk.style.display = "none";
    meneskerILombo.style.padding = "25px";
  });
  hvaVilDeOppnå.addEventListener("click", () => {
    meneskerILombo.innerHTML = `
    <li>De vil arbeide for maten og betale skatt til fellesskapet</li>
    <li>De vil ha rett til utanning</li>
    <li>De vil ha rett til helsehjelp</li>
    <li>De vil ha stemmerett</li>
    <li>Rett til å leve som du og jeg</li>
    <li> De vil ha rett til menneskeverd</li>`;
    meneskerILombo.style.padding = "25px";
  });
});
HvaBetyrLimbo.addEventListener("click", () => {
  meneskerILombo.innerHTML = `Limbo beskrives som en mellomtilstand eller en tilstand av lammelse,
  hvor papirløse asylsøkere verken kan reise tilbake til hjemlandet eller starte et nytt liv i Norge. 
  Det oppleves som håpløst og uten mulighet for endring.
  <a href= https://yemane.no/1> hvordan oppleves limbo </a>`;
  liID.style.display = "none";
});

KontaktOss.addEventListener("click", () => {
  console.log("KontaktOss clicked");
  meneskerILombo.innerHTML =
    "<p>Kontakt oss på telefon: <a href='tel:+4790038238233'>90038238233</a></p>" +
    "<p>Eller e-post: <a href='mailto:ketil_hindenes@hotmail.com'>ketil_hindenes@hotmail.com</a></p>" +
    "<p>Støtt oss på <a href='https://vipps.no/checkout?merchantId=642997&amount=100' target='_blank'>Vipps </a></p>";
  liID.style.display = "none"; // Skjul liID
});
