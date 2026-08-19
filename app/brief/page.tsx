export default function BriefPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-28">

        {/* HEADER */}
        <header className="border-b border-white/20 pb-16 sm:pb-20">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em]">
            SAUNUM.COM
          </p>

          <h1 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            Veebiarenduse
            <br />
            brief
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-8 sm:text-xl sm:leading-9">
            Saunumi olemasoleva veebikogemuse järgmine arenguetapp:
            selgem müügiteekond, parem kasutajakogemus ja lihtsam viis
            leida sobiv lahendus.
          </p>
        </header>

        {/* CORE IDEA */}
        <section className="border-b border-white/20 py-16 sm:py-20 lg:py-24">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em]">
            Põhiidee
          </p>

          <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-[-0.025em] sm:text-5xl">
            Saunumi veeb ei vaja rohkem infot,
            <br />
            vaid vajab paremat teekonda.
          </h2>

          <p className="mt-8 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">
            Saunumi veebis on juba tugev bränd, hea visuaal, eristuv
            tehnoloogia, tooted, kalkulaator, kliendid ja palju sisumaterjali.
            Fookus võiks olla selle sisu müüma panek.
          </p>

          <p className="mt-6 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">
            Fookus on olemasoleva veebikogemuse paremaks muutmisel:
            inimene peab kiiremini aru saama, mida Saunum talle annab,
            milline lahendus talle sobib ja mida ta edasi tegema peaks.
          </p>
        </section>

        {/* 01 HERO */}
        <section className="border-b border-white/20 py-16 sm:py-20 lg:py-24">
          <SectionNumber number="01" title="Avalehe esimene ekraan" />

          <p className="mt-8 max-w-3xl text-lg leading-8">
            Hero peab ütlema kiiresti kolm asja: millist probleemi Saunum
            lahendab, millist väärtust see annab ja mida kasutaja saab
            järgmisena teha.
          </p>

          <div className="mt-10 border-l-2 border-white pl-6">
            <p className="text-xl font-medium leading-8 sm:text-2xl">
              Saunum lahendab sauna ebaühtlase kuumuse probleemi.
            </p>

            <p className="mt-3 text-xl font-medium leading-8 sm:text-2xl">
              Leia enda saunale sobiv lahendus.
            </p>
          </div>

          <div className="mt-10">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.16em]">
              Põhitegevus
            </p>

            <ul className="space-y-3 text-lg">
              <li>→ LEIA OMA SAUNUM</li>
              <li>→ VAATA, KUIDAS SEE TÖÖTAB</li>
            </ul>
          </div>
        </section>

        {/* 02 PRODUCT FINDER */}
        <section className="border-b border-white/20 py-16 sm:py-20 lg:py-24">
          <SectionNumber number="02" title="Product Finder tuuakse toodetest ettepoole" />

          <p className="mt-8 max-w-3xl text-lg leading-8">
            Saunumi veebis on juba sauna kerise kalkulaator, kus kasutaja
            sisestab sauna mõõdud ja omadused ning saab sobivate keriste
            valiku. See on väga hea alus.
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8">
            Selle asemel, et kasutaja peaks kõigepealt toodete vahel
            orienteeruma, tõstaks valikuabi avalehe keskmesse.
          </p>

          <h3 className="mt-12 text-2xl font-medium sm:text-3xl">
            Milline Saunum sobib sulle?
          </h3>

          <ul className="mt-6 space-y-4 text-lg leading-8">
            <li>• Mul on olemasolev saun</li>
            <li>• Ehitame uut sauna</li>
            <li>• Soovin olemasolevat sauna täiustada</li>
            <li>• Mul on spa või äriline saun</li>
          </ul>

          <p className="mt-8 max-w-3xl text-lg leading-8">
            Seejärel sauna suurus, kerise olemasolu ja muud olulised
            parameetrid.
          </p>

          <div className="mt-10 border border-white/20 p-6 sm:p-8">
            <p className="text-lg font-medium leading-8 sm:text-xl">
              Lõpus saab inimene konkreetse soovituse, mitte lihtsalt
              nimekirja.
            </p>
          </div>

          <p className="mt-8 max-w-3xl text-base leading-7">
            See lahendab ühe suurema UX-probleemi: kasutaja ei pea ise
            Saunumi tootevalikut tundma.
          </p>
        </section>

        {/* 03 PRODUCTS */}
        <section className="border-b border-white/20 py-16 sm:py-20 lg:py-24">
          <SectionNumber number="03" title="Tooted jäävad alles, aga nende roll muutub" />

          <p className="mt-8 max-w-3xl text-lg leading-8">
            Praegusel avalehel on nähtavad näiteks Saunum Base, Experience
            ja Luxury ning nende juures lühikirjeldus ja „Vaata lisaks“.
          </p>

          <p className="mt-8 text-lg font-medium">
            Tootekaardid peaksid vastama neljale kiirele küsimusele:
          </p>

          <ul className="mt-6 space-y-3 text-lg">
            <li>• Kellele?</li>
            <li>• Millisele saunale?</li>
            <li>• Miks see?</li>
            <li>• Mis on järgmine samm?</li>
          </ul>

          <div className="mt-10 border-l-2 border-white pl-6">
            <p className="text-xl font-medium">
              Saunum Base
            </p>
            <p className="mt-3 text-lg leading-8">
              Olemasoleva sauna uuendamiseks.
            </p>
            <p className="mt-2 text-lg leading-8">
              Lisa Saunumi kliimafunktsioon ilma olemasolevat kerist
              välja vahetamata.
            </p>
            <p className="mt-4 text-lg font-medium">
              → Vaata Base&apos;i
            </p>
          </div>

          <p className="mt-8 max-w-3xl text-base leading-7">
            Eesmärk on muuta tootekaardid paremini skannitavaks ja vähendada
            vajadust iga toodet eraldi avada.
          </p>
        </section>

        {/* 04 CTA */}
        <section className="border-b border-white/20 py-16 sm:py-20 lg:py-24">
          <SectionNumber number="04" title="CTA-d muutuvad konkreetseks" />

          <p className="mt-8 max-w-3xl text-lg leading-8">
            Tegevuskutse ei pea kasutajat kohe ostma sundima. See peab andma
            talle selge järgmise sammu.
          </p>

          <ul className="mt-8 grid gap-3 text-lg sm:grid-cols-2">
            <li>• LEIA OMA SAUNUM</li>
            <li>• VAATA, KUIDAS SEE TÖÖTAB</li>
            <li>• VÕRDLE LAHENDUSI</li>
            <li>• KÜSI HINNAPAKKUMIST</li>
            <li>• VAATA JUHENDEID</li>
          </ul>
        </section>

        {/* 05 NAVBAR */}
        <section className="border-b border-white/20 py-16 sm:py-20 lg:py-24">
          <SectionNumber number="05" title="Navbar muutub kasutaja jaoks arusaadavamaks" />

          <p className="mt-8 max-w-3xl text-lg leading-8">
            Praegune menüü on tugevalt tootekategooriate keskne. See sobib
            hästi inimesele, kes juba teab, mida ta otsib.
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8">
            Uue kasutaja jaoks peab menüü andma selgema teekonna.
          </p>

          <div className="mt-8 space-y-3 text-lg font-medium">
            <p>TOOTED</p>
            <p>MIKS SAUNUM?</p>
            <p>LEIA OMA SAUNUM</p>
            <p>TEADMISTEBAAS</p>
            <p>MEIST</p>
            <p>E-POOD</p>
          </div>

          <div className="mt-10 border border-white/20 p-6 sm:p-8">
            <p className="text-xl font-medium leading-8">
              „Sa ei pea teadma, mida osta. Me aitame sul valida.“
            </p>
          </div>
        </section>

        {/* 06 FAQ */}
        <section className="border-b border-white/20 py-16 sm:py-20 lg:py-24">
          <SectionNumber number="06" title="KKK / küsimused ja vastused" />

          <p className="mt-8 max-w-3xl text-lg leading-8">
            Saunumil on juba palju küsimustele vastavat sisu blogis ja
            muudel lehtedel. See teadmistepagas tuleb muuta kasutajale
            lihtsamini leitavaks.
          </p>

          <h3 className="mt-10 text-2xl font-medium sm:text-3xl">
            Millised küsimused vajavad kiiret vastust?
          </h3>

          <ul className="mt-6 space-y-4 text-lg leading-8">
            <li>• Milline Saunum sobib minu sauna?</li>
            <li>• Kas saan oma olemasolevat sauna uuendada?</li>
            <li>• Mis vahe on mudelitel?</li>
            <li>• Kui suur peab saun olema?</li>
            <li>• Kuidas toimub paigaldus?</li>
            <li>• Kuidas Saunumit hooldada?</li>
          </ul>

          <p className="mt-8 max-w-3xl text-lg leading-8">
            See annab väärtust korraga müügile, klienditoele ja SEO-le.
          </p>

          <p className="mt-6 max-w-3xl text-base leading-7">
            Saunumi enda sisus on juba palju selliseid küsimusi käsitlevaid
            teemasid, näiteks sauna suurus, ventilatsioon, kerise võimsus,
            kivide maht ja õhuringlus.
          </p>
        </section>

        {/* 07 TECHNOLOGY */}
        <section className="border-b border-white/20 py-16 sm:py-20 lg:py-24">
          <SectionNumber number="07" title="Tehnoloogia peab olema inimese keeles" />

          <p className="mt-8 max-w-3xl text-lg leading-8">
            Praegune tehnoloogiaosa on tugev. Seda sisu ei pea ära võtma.
            Muuta tuleb selle esitamise järjekorda.
          </p>

          <div className="mt-12 space-y-10">
            <Step
              title="Mis probleem lahendatakse?"
              text="Liiga kuum üleval. Liiga külm all."
            />

            <Step
              title="Kuidas Saunum seda lahendab?"
              text="Saunum segab kuuma ja jahedama õhu ning suunab selle ühtlasemalt tagasi sauna."
            />

            <Step
              title="Tõendus"
              text="Temperatuurivõrdlus, tehniline info, uuringud ja patent."
            />
          </div>

          <p className="mt-10 max-w-3xl text-lg leading-8">
            Nii muutub keeruline tehnoloogia arusaadavaks nii tavakasutajale
            kui ka tehnilisemale külastajale.
          </p>
        </section>

        {/* 08 PROOF */}
        <section className="border-b border-white/20 py-16 sm:py-20 lg:py-24">
          <SectionNumber number="08" title="Saunumi efekt muutub tugevamaks tõestuseks" />

          <p className="mt-8 max-w-3xl text-lg leading-8">
            Olemasolevad näitajad on tugevad usaldusargumendid. Need tuleb
            siduda selgemalt küsimusega:
          </p>

          <div className="mt-8 border-l-2 border-white pl-6">
            <p className="text-2xl font-medium">
              Miks ma peaksin Saunumi uskuma?
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <Proof
              number="7000+"
              title="klienti"
              text="Saunumi kogemust kasutavad tuhanded inimesed."
            />

            <Proof
              number="1000+"
              title="ohutustesti"
              text="Tehnoloogia on põhjalikult testitud."
            />

            <Proof
              number="2024"
              title="Golden Wave"
              text="Spa Session võitis innovaatilise tehnoloogia kategoorias esikoha."
            />
          </div>
        </section>

        {/* 09 CONTENT */}
        <section className="border-b border-white/20 py-16 sm:py-20 lg:py-24">
          <SectionNumber number="09" title="Olemasolev sisu saab paremini müüa" />

          <p className="mt-8 max-w-3xl text-lg leading-8">
            Saunum avaldab aktiivselt harivaid artikleid. Teemad ulatuvad
            sauna sisekliimast ja õhusegamisest kuni kerise võimsuse,
            ventilatsiooni ja kivimahuni.
          </p>

          <p className="mt-8 text-lg font-medium">
            Iga sisu peab viima loomuliku järgmise sammuni:
          </p>

          <div className="mt-8 space-y-5 text-lg leading-8">
            <p>
              Lugesid sauna suurusest?
              <br />
              <strong>→ Leia sobiv keris.</strong>
            </p>

            <p>
              Lugesid olemasoleva sauna uuendamisest?
              <br />
              <strong>→ Vaata Saunum Base&apos;i.</strong>
            </p>

            <p>
              Lugesid õhuringlusest?
              <br />
              <strong>→ Vaata, kuidas Saunumi tehnoloogia töötab.</strong>
            </p>
          </div>

          <p className="mt-10 max-w-3xl text-lg leading-8">
            Nii muutub sisuturundus otseselt müügiteekonna osaks.
          </p>
        </section>

        {/* 10 GUIDES */}
        <section className="border-b border-white/20 py-16 sm:py-20 lg:py-24">
          <SectionNumber number="10" title="Juhendid ja PDF-id muutuvad kasutajasõbralikumaks" />

          <p className="mt-8 max-w-3xl text-lg leading-8">
            Tehnilised PDF-id jäävad alles ametlike dokumentidena.
            Nende kõrvale tuleb veebipõhine struktuur, mis aitab kasutajal
            vajalikuni kiiremini jõuda.
          </p>

          <ul className="mt-8 space-y-4 text-lg">
            <li>• Paigaldus</li>
            <li>• Kasutamine</li>
            <li>• Hooldus</li>
            <li>• Veaotsing</li>
            <li>• KKK</li>
            <li>• Video</li>
          </ul>

          <p className="mt-8 max-w-3xl text-lg leading-8">
            See teeb info kliendile kiiremini leitavaks ja annab ettevõttele
            ühe paremini hallatava teadmistekihi.
          </p>
        </section>

        {/* USER JOURNEY */}
        <section className="border-b border-white/20 py-16 sm:py-20 lg:py-24">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em]">
            Soovituslik uus avalehe loogika
          </p>

          <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-[-0.025em] sm:text-5xl">
            Üks loogiline kasutajateekond
          </h2>

          <div className="mt-12 space-y-0">
            {[
              "HERO — Saunumi väärtus + Leia oma Saunum",
              "PRODUCT FINDER — Aita mul valida",
              "TOOTED — Neile, kes juba teavad, mida otsivad",
              "MIKS SAUNUM? — Probleem → lahendus → tehnoloogia",
              "TÕESTUS — Kliendid, testid, auhinnad, tulemused",
              "SAUNUM BASE / EXPERIENCE / LUXURY — Peamised lahendused",
              "KKK — Enne ostu tekkivad küsimused",
              "TEADMISTEBAAS / JUHENDID",
              "KÜSI HINNAPAKKUMIST / VÕTA ÜHENDUST",
            ].map((item, index) => (
              <div
                key={item}
                className="border-b border-white/20 py-5 text-base font-medium sm:text-lg"
              >
                <span className="mr-5 text-sm font-normal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* FINAL SUMMARY */}
        <section className="py-20 sm:py-24 lg:py-32">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em]">
          Kokkuvõte
          </p>

          <h2 className="max-w-4xl text-4xl font-medium leading-[1.02] tracking-[-0.03em] sm:text-6xl">
            Saunumi veeb ei vaja rohkem infot.
            <br />
            Vaid vajab paremat teekonda kliendile.
          </h2>

          <p className="mt-10 max-w-3xl text-lg leading-8">
            Olemas on tugev bränd, hea visuaal, eristuv tehnoloogia, tooted,
            kalkulaator, kliendid ja palju sisumaterjali.
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8">
            Arenduse fookus on muuta need elemendid üheks loogiliseks
            kasutajateekonnaks.
          </p>

          <div className="mt-12 border-y border-white/20 py-8">
            <p className="text-xl font-medium leading-9 sm:text-2xl">
              Mõistan
              <span className="mx-3">→</span>
              leian sobiva
              <span className="mx-3">→</span>
              saan küsimustele vastused
              <span className="mx-3">→</span>
              usaldan
              <span className="mx-3">→</span>
              võtan ühendust / ostan
            </p>
          </div>

          <div className="mt-12">
            <p className="text-lg font-medium">
              Esimese etapina keskendume kolmele kõige suurema mõjuga muudatusele:
            </p>

            <ol className="mt-6 space-y-4 text-lg">
              <li>
                <strong>1.</strong> Leia oma Saunum
              </li>
              <li>
                <strong>2.</strong> Selgemad CTA-d ja navbar
              </li>
              <li>
                <strong>3.</strong> KKK / teadmistebaas
              </li>
            </ol>
          </div>

          <p className="mt-10 max-w-3xl text-lg leading-8">
            Seejärel saab sama loogikat rakendada toodetele, juhenditele,
            sisule ja ülejäänud veebilehele.
          </p>
        </section>
      </div>
    </main>
  );
}

function SectionNumber({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.22em]">
        {number}
      </p>

      <h2 className="mt-4 max-w-4xl text-3xl font-medium leading-tight tracking-[-0.025em] sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}

function Step({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="border-t border-white/20 pt-6">
      <h3 className="text-xl font-medium sm:text-2xl">
        {title}
      </h3>

      <p className="mt-3 max-w-3xl text-lg leading-8">
        {text}
      </p>
    </div>
  );
}

function Proof({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border-t border-white/20 pt-6">
      <div className="text-4xl font-medium tracking-[-0.03em] sm:text-5xl">
        {number}
      </div>

      <h3 className="mt-2 text-lg font-medium">
        {title}
      </h3>

      <p className="mt-3 text-base leading-7">
        {text}
      </p>
    </div>
  );
}