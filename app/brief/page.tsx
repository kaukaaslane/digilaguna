export default function BriefPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <div className="mx-auto w-full max-w-4xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">

        {/* HEADER */}
        <header className="mb-20 border-b border-white/20 pb-12">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-white">
            SAUNUM.COM
          </p>

          <h1 className="max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-5xl md:text-6xl">
            Veebiarenduse brief
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-white sm:text-lg">
            Saunumi olemasoleva veebikogemuse järgmine arenguetapp:
            selgem müügiteekond, parem kasutajakogemus ja lihtsam viis
            leida sobiv lahendus.
          </p>
        </header>

        {/* INTRO */}
        <section className="mb-20">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-white">
            Põhiidee
          </p>

          <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-[-0.025em] sm:text-4xl">
            Saunumi veeb ei vaja rohkem infot, vaid paremat teekonda.
          </h2>

          <p className="mt-7 max-w-3xl text-base leading-7 text-white">
            Saunumi veebis on juba tugev bränd, hea visuaal, eristuv
            tehnoloogia, tooted, kalkulaator, kliendid ja palju sisumaterjali.
            Fookus võiks olla selle sisu müüma panek.
          </p>

          <p className="mt-5 max-w-3xl text-base leading-7 text-white">
            Fookus on olemasoleva veebikogemuse paremaks muutmisel: inimene
            peab kiiremini aru saama, mida Saunum talle annab, milline lahendus
            talle sobib ja mida ta edasi tegema peaks.
          </p>
        </section>

        {/* 01 */}
        <BriefSection
          number="01"
          title="Avalehe esimene ekraan"
        >
          <p>
            Hero peab ütlema kiiresti kolme asja: millist probleemi Saunum
            lahendab, millist väärtust see annab ja mida kasutaja saab
            järgmisena teha.
          </p>

          <div className="mt-8 border-l border-white/30 pl-5">
            <p className="font-medium">
              Saunum lahendab sauna ebaühtlase kuumuse probleemi.
            </p>
            <p className="mt-2 font-medium">
              Leia enda saunale sobiv lahendus.
            </p>
          </div>

          <h3 className="mt-8 text-sm font-medium uppercase tracking-[0.16em]">
            Põhitegevus
          </h3>

          <ul className="mt-4 space-y-2">
            <li>→ LEIA OMA SAUNUM</li>
            <li>→ VAATA, KUIDAS SEE TÖÖTAB</li>
          </ul>
        </BriefSection>

        {/* 02 */}
        <BriefSection
          number="02"
          title="Product Finder tuuakse toodetest ettepoole"
        >
          <p>
            Saunumi veebis on juba sauna kerise kalkulaator, kus kasutaja
            sisestab sauna mõõdud ja omadused ning saab sobivate keriste
            valiku. See on väga hea alus.
          </p>

          <p className="mt-5">
            Selle asemel, et kasutaja ei peaks kõigepealt toodete vahel
            orienteeruma, tõstaks valikuabi avalehe keskmesse.
          </p>

          <h3 className="mt-8 text-xl font-medium">
            Milline Saunum sobib sulle?
          </h3>

          <ul className="mt-5 space-y-3">
            <li>• Mul on olemasolev saun</li>
            <li>• Ehitame uut sauna</li>
            <li>• Soovin olemasolevat sauna täiustada</li>
            <li>• Mul on spa või äriline saun</li>
          </ul>

          <p className="mt-6">
            Seejärel sauna suurus, kerise olemasolu ja muud olulised
            parameetrid.
          </p>

          <p className="mt-6 font-medium">
            Lõpus saab inimene konkreetse soovituse, mitte lihtsalt nimekirja.
          </p>

          <p className="mt-5">
            See lahendab ühe suurema UX-probleemi: kasutaja ei pea ise
            Saunumi tootevalikut tundma.
          </p>
        </BriefSection>

        {/* 03 */}
        <BriefSection
          number="03"
          title="Tooted jäävad alles, aga nende roll muutub"
        >
          <p>
            Praegusel avalehel on nähtavad näiteks Saunum Base, Experience ja
            Luxury ning nende juures lühikirjeldus ja „Vaata lisaks“.
          </p>

          <p className="mt-6 font-medium">
            Tootekaardid peaksid vastama neljale kiirele küsimusele:
          </p>

          <ul className="mt-4 space-y-2">
            <li>• Kellele?</li>
            <li>• Millisele saunale?</li>
            <li>• Miks see?</li>
            <li>• Mis on järgmine samm?</li>
          </ul>

          <div className="mt-8 border border-white/20 p-6">
            <h3 className="text-xl font-medium">Saunum Base</h3>

            <p className="mt-3">
              Olemasoleva sauna uuendamiseks.
            </p>

            <p className="mt-2">
              Lisa Saunumi kliimafunktsioon ilma olemasolevat kerist välja
              vahetamata.
            </p>

            <p className="mt-5 font-medium">
              → Vaata Base&apos;i
            </p>
          </div>

          <p className="mt-6">
            Eesmärk on muuta tootekaardid paremini skannitavaks ja vähendada
            vajadust iga toodet eraldi avada.
          </p>
        </BriefSection>

        {/* 04 */}
        <BriefSection
          number="04"
          title="CTA-d muutuvad konkreetseks"
        >
          <p>
            Tegevuskutse ei pea kasutajat kohe ostma sundima. See peab andma
            talle selge järgmise sammu.
          </p>

          <ul className="mt-6 space-y-3 font-medium">
            <li>• LEIA OMA SAUNUM</li>
            <li>• VAATA, KUIDAS SEE TÖÖTAB</li>
            <li>• VÕRDLE LAHENDUSI</li>
            <li>• KÜSI HINNAPAKKUMIST</li>
            <li>• VAATA JUHENDEID</li>
          </ul>
        </BriefSection>

        {/* 05 */}
        <BriefSection
          number="05"
          title="Navbar muutub kasutaja jaoks arusaadavamaks"
        >
          <p>
            Praegune menüü on tugevalt tootekategooriate keskne. See sobib
            hästi inimesele, kes juba teab, mida ta otsib.
          </p>

          <p className="mt-6">
            Uue kasutaja jaoks peab menüü andma selgema teekonna.
          </p>

          <div className="mt-8 space-y-3 border-y border-white/20 py-6 font-medium">
            <p>TOOTED</p>
            <p>MIKS SAUNUM?</p>
            <p>LEIA OMA SAUNUM</p>
            <p>TEADMISTEBAAS</p>
            <p>MEIST</p>
            <p>E-POOD</p>
          </div>

          <p className="mt-7 text-xl font-medium">
            „Sa ei pea teadma, mida osta. Me aitame sul valida.“
          </p>
        </BriefSection>

        {/* 06 */}
        <BriefSection
          number="06"
          title="KKK / küsimused ja vastused"
        >
          <p>
            Saunumil on juba palju küsimustele vastavat sisu blogis ja muudel
            lehtedel. See teadmistepagas tuleb muuta kasutajale lihtsamini
            leitavaks.
          </p>

          <h3 className="mt-8 text-xl font-medium">
            Millised küsimused vajavad kiiret vastust?
          </h3>

          <ul className="mt-5 space-y-3">
            <li>• Milline Saunum sobib minu sauna?</li>
            <li>• Kas saan oma olemasolevat sauna uuendada?</li>
            <li>• Mis vahe on mudelitel?</li>
            <li>• Kui suur peab saun olema?</li>
            <li>• Kuidas toimub paigaldus?</li>
            <li>• Kuidas Saunumit hooldada?</li>
          </ul>

          <p className="mt-6">
            See annab väärtust korraga müügile, klienditoele ja SEO-le.
          </p>

          <p className="mt-5">
            Saunumi enda sisus on juba palju selliseid küsimusi käsitlevaid
            teemasid, näiteks sauna suurus, ventilatsioon, kerise võimsus,
            kivide maht ja õhuringlus.
          </p>
        </BriefSection>

        {/* 07 */}
        <BriefSection
          number="07"
          title="Tehnoloogia peab olema inimese keeles"
        >
          <p>
            Praegune tehnoloogiaosa on tugev. Seda sisu ei pea ära võtma.
            Muuta tuleb selle esitamise järjekorda.
          </p>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-xl font-medium">
                Mis probleem lahendatakse?
              </h3>
              <p className="mt-3">
                Liiga kuum üleval. Liiga külm all.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">
                Kuidas Saunum seda lahendab?
              </h3>
              <p className="mt-3">
                Saunum segab kuuma ja jahedama õhu ning suunab selle
                ühtlasemalt tagasi sauna.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">
                Tõendus
              </h3>
              <p className="mt-3">
                Temperatuurivõrdlus, tehniline info, uuringud ja patent.
              </p>
            </div>
          </div>

          <p className="mt-8">
            Nii muutub keeruline tehnoloogia arusaadavaks nii tavakasutajale
            kui ka tehnilisemale külastajale.
          </p>
        </BriefSection>

        {/* 08 */}
        <BriefSection
          number="08"
          title="Saunumi efekt muutub tugevamaks tõestuseks"
        >
          <p>
            Olemasolevad näitajad on tugevad usaldusargumendid. Need tuleb
            siduda selgemalt küsimusega:
          </p>

          <p className="mt-6 text-xl font-medium">
            Miks ma peaksin Saunumi uskuma?
          </p>

          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            <Stat
              value="7000+"
              title="klienti"
              text="Saunumi kogemust kasutavad tuhanded inimesed."
            />

            <Stat
              value="1000+"
              title="ohutustesti"
              text="Tehnoloogia on põhjalikult testitud."
            />

            <Stat
              value="2024"
              title="Golden Wave"
              text="Spa Session võitis innovaatilise tehnoloogia kategoorias esikoha."
            />
          </div>
        </BriefSection>

        {/* 09 */}
        <BriefSection
          number="09"
          title="Olemasolev sisu saab paremini müüa"
        >
          <p>
            Saunum avaldab aktiivselt harivaid artikleid. Teemad ulatuvad sauna
            sisekliimast ja õhusegamisest kuni kerise võimsuse, ventilatsiooni
            ja kivimahuni.
          </p>

          <p className="mt-6 font-medium">
            Iga sisu peab viima loomuliku järgmise sammuni:
          </p>

          <div className="mt-6 space-y-5">
            <p>
              Lugesid sauna suurusest?
              <br />
              <span className="font-medium">→ Leia sobiv keris.</span>
            </p>

            <p>
              Lugesid olemasoleva sauna uuendamisest?
              <br />
              <span className="font-medium">→ Vaata Saunum Base&apos;i.</span>
            </p>

            <p>
              Lugesid õhuringlusest?
              <br />
              <span className="font-medium">
                → Vaata, kuidas Saunumi tehnoloogia töötab.
              </span>
            </p>
          </div>

          <p className="mt-7">
            Nii muutub sisuturundus otseselt müügiteekonna osaks.
          </p>
        </BriefSection>

        {/* 10 */}
        <BriefSection
          number="10"
          title="Juhendid ja PDF-id muutuvad kasutajasõbralikumaks"
        >
          <p>
            Tehnilised PDF-id jäävad alles ametlike dokumentidena. Nende
            kõrvale tuleb veebipõhine struktuur, mis aitab kasutajal vajalikuni
            kiiremini jõuda.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            <li>• Paigaldus</li>
            <li>• Kasutamine</li>
            <li>• Hooldus</li>
            <li>• Veaotsing</li>
            <li>• KKK</li>
            <li>• Video</li>
          </ul>

          <p className="mt-7">
            See teeb info kliendile kiiremini leitavaks ja annab ettevõttele
            ühe paremini hallatava teadmistekihi.
          </p>
        </BriefSection>

        {/* ROADMAP */}
        <section className="border-t border-white/20 pt-16 sm:pt-20">
          <p className="text-xs font-medium uppercase tracking-[0.22em]">
            Soovituslik uus avalehe loogika
          </p>

          <h2 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.025em] sm:text-4xl">
            Üks loogiline kasutajateekond
          </h2>

          <div className="mt-10 divide-y divide-white/20 border-y border-white/20">
            <RoadmapItem number="01" text="HERO — Saunumi väärtus + Leia oma Saunum" />
            <RoadmapItem number="02" text="PRODUCT FINDER — Aita mul valida" />
            <RoadmapItem number="03" text="TOOTED — Neile, kes juba teavad, mida otsivad" />
            <RoadmapItem number="04" text="MIKS SAUNUM? — Probleem → lahendus → tehnoloogia" />
            <RoadmapItem number="05" text="TÕESTUS — Kliendid, testid, auhinnad, tulemused" />
            <RoadmapItem number="06" text="SAUNUM BASE / EXPERIENCE / LUXURY — Peamised lahendused" />
            <RoadmapItem number="07" text="KKK — Enne ostu tekkivad küsimused" />
            <RoadmapItem number="08" text="TEADMISTEBAAS / JUHENDID" />
            <RoadmapItem number="09" text="KÜSI HINNAPAKKUMIST / VÕTA ÜHENDUST" />
          </div>
        </section>

        {/* CONCLUSION */}
        <section className="mt-20 border-t border-white/20 pt-16 sm:mt-24 sm:pt-20">
          <p className="text-xs font-medium uppercase tracking-[0.22em]">
            Kokkuvõte
          </p>

          <h2 className="mt-5 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.025em] sm:text-4xl">
            Saunumi veeb ei vaja rohkem infot. Vaid vajab paremat teekonda
            kliendile.
          </h2>

          <p className="mt-7 max-w-3xl text-base leading-7">
            Olemas on tugev bränd, hea visuaal, eristuv tehnoloogia, tooted,
            kalkulaator, kliendid ja palju sisumaterjali.
          </p>

          <p className="mt-5 max-w-3xl text-base leading-7">
            Arenduse fookus on muuta need elemendid üheks loogiliseks
            kasutajateekonnaks.
          </p>

          <div className="mt-8 border-l border-white/30 pl-5 text-lg font-medium leading-8">
            Mõistan → leian sobiva → saan küsimustele vastused → usaldan →
            võtan ühendust / ostan
          </div>

          <p className="mt-10 font-medium">
            Esimese etapina võiks keskenduda kolmele kõige suurema mõjuga muudatusele:
          </p>

          <ol className="mt-5 space-y-3">
            <li>1. Leia oma Saunum</li>
            <li>2. Selgemad CTA-d ja navbar</li>
            <li>3. KKK / teadmistebaas</li>
          </ol>

          <p className="mt-7">
            Seejärel saab sama loogikat rakendada toodetele, juhenditele,
            sisule ja ülejäänud veebilehele.
          </p>
        </section>

        {/* METHODOLOGY */}
        <section className="mt-20 border-t border-white/20 pt-16 sm:mt-24 sm:pt-20">
          <p className="text-xs font-medium uppercase tracking-[0.22em]">
            Kuidas seda hinnati?
          </p>

          <h2 className="mt-5 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.025em] sm:text-4xl">
            See ülevaade ei põhine ainult visuaalsel hinnangul.
          </h2>

          <p className="mt-7 max-w-3xl text-base leading-7">
            Saunumi veebikogemus on läbi vaadatud levinud UX/UI kasutatavuse
            põhimõtete järgi, mida kasutatakse selleks, et hinnata, kui
            lihtsalt inimene veebis infot leiab, valikuid teeb ja järgmise
            sammuni jõuab.
          </p>

          <p className="mt-5 max-w-3xl text-base leading-7">
            Üheks lähtekohaks on kasutatud Nielsen Norman Groupi 10 kasutatavuse
            põhimõtet – rahvusvaheliselt laialt kasutatavat UX-raamistikku.
          </p>

          <p className="mt-7 font-medium">
            Lihtsamalt öeldes on vaadatud:
          </p>

          <ul className="mt-5 space-y-3">
            <li>• Kas kasutaja saab kiiresti aru, kus ta on ja mida teha saab?</li>
            <li>• Kas järgmine samm on selgelt nähtav?</li>
            <li>• Kas vajalik info on lihtsasti leitav?</li>
            <li>• Kas valikute tegemine on liiga keeruline või koormav?</li>
            <li>• Kas veeb kasutab inimesele arusaadavat keelt?</li>
            <li>• Kas sisu on lihtsalt skannitav?</li>
            <li>• Kas kasutaja saab piisavalt abi ja juhiseid?</li>
            <li>• Kas veeb aitab kasutajal otsuseni jõuda?</li>
          </ul>

          <p className="mt-7 max-w-3xl text-base leading-7">
            Lisaks on vaadtud Saunumi veebikogemust müügi- ja kasutajateekonna
            vaatenurgast – kuidas olemasolevad tooted, tehnoloogia, sisu,
            juhendid ja CTA-d aitavad kasutajal liikuda järgmise sammuni.
          </p>
        </section>

        {/* END */}
        <div className="mt-20 border-t border-white/20 pt-8 text-xs uppercase tracking-[0.18em]">
          SAUNUM.COM — Veebiarenduse brief
        </div>
      </div>
    </main>
  );
}

function BriefSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-white/20 py-16 sm:py-20">
      <div className="grid gap-8 sm:grid-cols-[64px_1fr] sm:gap-10">
        <div className="text-sm font-medium">{number}</div>

        <div>
          <h2 className="text-3xl font-medium leading-tight tracking-[-0.025em] sm:text-4xl">
            {title}
          </h2>

          <div className="mt-7 max-w-3xl text-base leading-7">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  title,
  text,
}: {
  value: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border-t border-white/20 pt-5">
      <div className="text-3xl font-medium">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-[0.18em]">{title}</div>
      <p className="mt-4 text-sm leading-6">{text}</p>
    </div>
  );
}

function RoadmapItem({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div className="grid gap-3 py-5 sm:grid-cols-[64px_1fr] sm:items-center">
      <div className="text-sm font-medium">{number}</div>
      <div className="text-base font-medium">{text}</div>
    </div>
  );
}