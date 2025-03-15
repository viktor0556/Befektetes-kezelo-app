const terms = [
  {
    "ETF (Exchange Traded Fund)": {
      description:
        "Olyan befektetési alap, amely több részvényből áll, és egyetlen részvényként vásárolható meg.",
      related: ["VUSA ETF (Vanguard S&P 500)", "Diverzifikáció", "Alapok"],
    },
    "VUSA ETF (Vanguard S&P 500)": {
      description:
        "Az 500 legnagyobb amerikai cég részvényét tartalmazza, pl. Apple, Microsoft, Tesla, Amazon.",
      related: [
        "ETF (Exchange Traded Fund)",
        "Portfólió összetétel",
        "Szektor súlyozás",
      ],
    },
    "ETF előnyei (Diverzifikáció)": {
      description:
        "Egy ETF sok részvényt tartalmaz, így csökkenti a kockázatot. Hosszú távon stabil hozamot ad (évi 8-10%).",
      related: ["ETF (Exchange Traded Fund)", "Kockázatkezelés"],
    },
    "Portfólió összetétel (Holdings, Assets)": {
      description:
        "Megmutatja, hogy az ETF pénzének hány %-a van egyes cégek részvényeiben. Pl. Apple a VUSA 6,97%-át teszi ki, így ha az Apple jól teljesít, a VUSA is emelkedik.",
      related: ["VUSA ETF (Vanguard S&P 500)", "Szektor súlyozás"],
    },
    "Szektor súlyozás (Sector Weightings)": {
      description:
        "Megmutatja, hogy az ETF milyen iparágakban van jelen. Pl. a VUSA-ban a technológiai szektor dominál (31,97%). Ha a tech iparág esik, az ETF is veszít az értékéből.",
      related: ["Portfólió összetétel", "Piaci trendek"],
    },
    "Költségek (TER - Total Expense Ratio)": {
      description:
        "Az ETF fenntartási költsége, általában 0,05-0,2%. Pl. a VUSA esetében 0,07%, ami alacsony költségnek számít.",
      related: ["ETF (Exchange Traded Fund)"],
    },
    "Piaci értékeltség mutatók (P/E, P/B, P/S stb.)": {
      description:
        "Ezeket a mutatókat részvényeknél és ETF-eknél is figyeljük. ETF-eknél az összes benne lévő cég átlagértékeit kapjuk meg.",
      related: [
        "P/E (Price/Earnings)",
        "P/B (Price/Book)",
        "P/S (Price/Sales)",
      ],
    },
    "P/E (Price/Earnings) - Ár/Nyereség": {
      description:
        "A részvény árát viszonyítja a cég egy részvényre jutó nyereségéhez. • Magas (30+) → Drága részvény, a befektetők növekedést várnak. • Alacsony (10-20) → Olcsóbb lehet, de figyelni kell az iparági átlagot.",
      related: ["PEG Ratio", "P/B (Price/Book)", "P/S (Price/Sales)"],
    },
    "P/B (Price/Book) - Ár/Könyv szerinti érték": {
      description:
        "Megmutatja, hogy a részvény ára hogyan viszonyul a cég eszközeihez. • 1 alatt → A cég eszközei többet érnek, azaz olcsó lehet. • 1 felett → A piac többre értékeli a céget, ami növekedési várakozást jelenthet.",
      related: ["P/S (Price/Sales)", "P/E (Price/Earnings)"],
    },
    "P/S (Price/Sales) - Ár/Bevétel": {
      description:
        "A részvény árát viszonyítja a cég bevételeihez. • 1 alatt → A részvény olcsó a bevételéhez képest. • 10+ → Extrém növekedési várakozást jelenthet, ami kockázatos lehet.",
      related: ["P/B (Price/Book)", "P/E (Price/Earnings)"],
    },
    "PEG Ratio - Ár/Nyereség és növekedés": {
      description:
        "A P/E mutatót osztja a növekedési ütemmel. • 1 alatt → Olcsó a jövőbeni növekedéshez képest. • 1 felett → Drágább lehet, de gyorsan növekvő cégeknél elfogadható.",
      related: ["P/E (Price/Earnings)", "Növekedési részvények"],
    },
    "Részvények értékelése: Drága vagy olcsó?": {
      description:
        "• Ha a P/E magas, a részvény drága lehet. • Ha a P/B 1 alatt van, lehet alulértékelt. • Ha a P/S alacsony, a részvény olcsónak számít a bevételhez képest.",
      related: [
        "P/E (Price/Earnings)",
        "P/B (Price/Book)",
        "P/S (Price/Sales)",
      ],
    },
    "Mit árul el a növekedési ütem?": {
      description:
        "• A PEG Ratio 1 alatt jó jel → A cég drága, de a növekedése igazolja az árát. • Ha a PEG Ratio is magas, akkor túlértékelhetik a növekedési várakozásokat.",
      related: ["PEG Ratio", "P/E (Price/Earnings)"],
    },
    "Kockázat és stabilitás": {
      description:
        "• Ha P/E, P/B és P/S mind magas, az részvény kockázatos lehet. • Ha egy cégnek nagy adóssága van, az extra kockázatot jelenthet.",
      related: [
        "P/E (Price/Earnings)",
        "P/B (Price/Book)",
        "P/S (Price/Sales)",
      ],
    },
    "Mikor lehet jó vétel egy részvény?": {
      description:
        "• Ha a P/E alacsony, de a cég stabilan növekszik. • Ha a P/B és P/S alacsony, de nincs csökkenő trend. • Ha a PEG Ratio 1 alatt van, az jó vételi lehetőség lehet.",
      related: ["Részvények értékelése: Drága vagy olcsó?", "Piaci trendek"],
    },
    "Árfolyamnyereség": {
      description:
        "Az az összeg, amit akkor realizálsz, ha egy részvényt vagy más értékpapírt drágábban adsz el, mint amennyiért vetted.",
      related: ["Árfolyamveszteség", "ROI (Return on Investment)"],
    },
    "IPO (Initial Public Offering)": {
      description:
        "Az a folyamat, amikor egy vállalat először válik nyilvánosan elérhetővé a tőzsdén, és befektetők számára értékesíti részvényeit.",
      related: ["Értékpapír-piac", "Részvények értékelése: Drága vagy olcsó?"],
    },
    "Volatilitás": {
      description:
        "Az árfolyamok ingadozásának mértéke egy adott időszakban. Nagyobb volatilitás magasabb kockázatot jelez.",
      related: ["Árfolyamnyereség", "Árfolyamveszteség"],
    },
    "EPS (egy részvényre jutó nyereség)": {
      description:
        "Megmutatja, hogy egy vállalat mekkora profitot termel egyetlen részvényre vetítve. Magas EPS pozitív jel.",
      related: ["P/E mutató", "ROE (Return on Equity)"],
    },
    "ROE (Return on Equity)": {
      description:
        "A saját tőke megtérülése, amely megmutatja, hogy a vállalat mennyire hatékonyan használja a saját tőkéjét nyereségtermelésre.",
      related: [
        "ROI (Return on Investment)",
        "EPS (egy részvényre jutó nyereség)",
      ],
    },
    "ROI (Return on Investment)": {
      description:
        "A befektetés megtérülési mutatója, amely százalékosan kifejezi, hogy egy adott befektetés milyen hatékonyan termel profitot.",
      related: ["ROE (Return on Equity)", "Árfolyamnyereség"],
    },
    "Kötvény": {
      description:
        "Egy hitelviszonyt megtestesítő értékpapír, amely rendszeres kamatfizetést ígér a befektetők számára.",
      related: ["Értékpapír-piac", "Kamatemelés hatása a befektetésekre"],
    },
    "Árfolyamveszteség": {
      description:
        "Amikor egy befatketés értéke csökken, és kevesebb pénzért tudod eladni, mint amennyiért vetted.",
      related: ["Árfolyamnyereség", "Volatilitás"],
    },
    "Értékpapír-piac": {
      description:
        "Az a hely, ahol a befektetők értékpapírokkal, például részvényekkel és kötvényekkel kereskednek.",
      related: ["IPO (Initial Public Offering)", "Day trading"],
    },
    "Day trading": {
      description:
        "Olyan kereskedési stratégia, amikor a befektető aznap vesz és ad el értékpapírokat profit elérése érdekében.",
      related: ["Volatilitás", "Értékpapír-piac"],
    },
    "Infláció": {
      description:
        "Az árak általános és tartós emelkedése, ami a pénz értékének csökkenéséhez vezet.",
      related: ["Kamatemelés", "Stagfláció"],
    },
    "Befektetés-politika": {
      description:
        "Egy vállalat irányelve, amely meghatározza, milyen stratégiát követ a befektetések kezelésében.",
      related: ["Osztalékfizetés", "Kötvények"],
    },
    "Long pozíció": {
      description:
        "Részvény vagy eszköz vásárlása annak reményében, hogy annak ára növekedni fog, és profit realizálható a későbbi magasabb áron való eladással.",
      related: ["Portfólió diverzifikáció", "ETF", "Befektetési alapok"],
    },
    "Short pozíció": {
      description:
        "Egy eszköz kölcsönvétele és eladása azzal a céllal, hogy később alacsonyabb áron visszavásárolva nyereséget realizáljunk az árcsökkenésből.",
      related: [
        "Opciók (Call, Put)",
        "Forward, Future szerződések",
        "Derivatívák",
      ],
    },
    "Portfólió diverzifikáció": {
      description:
        "A befektetések kockázatának csökkentése érdekében különböző típusú és iparágakban működő eszközökbe való befektetés.",
      related: ["ETF", "Befektetési alapok", "Blue-chip részvények"],
    },
    "Blue-chip részvények": {
      description:
        "Nagy, stabil, jól ismert és megbízható cégek részvényei, amelyek általában stabil bevételt és osztalékot biztosítanak.",
      related: [
        "Piaci kapitalizáció",
        "Long pozíció",
        "Portfólió diverzifikáció",
      ],
    },
    "OTC (Over the Counter) piac": {
      description:
        "Olyan decentralizált piac, ahol a kereskedések közvetlenül a piaci szereplők között zajlanak, nem pedig központosított tőzsdén.",
      related: ["Derivatívák", "Hedge fundok", "Forward, Future szerződések"],
    },
    "Befektetési alapok": {
      description:
        "Sok befektető pénzét összegyűjtve, egy profi alapkezelő irányításával diverzifikált befektetési portfólióba fektető pénzügyi eszközök.",
      related: ["ETF", "Portfólió diverzifikáció", "Long pozíció"],
    },
    "Margin Trading": {
      description:
        "Kölcsönzött pénz használata befektetéshez, hogy nagyobb nyereséget érhessünk el, miközben magasabb a kockázata is.",
      related: ["Short pozíció", "Long pozíció", "Derivatívák"],
    },
    "Piaci kapitalizáció": {
      description:
        "A vállalat piaci értéke, amelyet a részvényárfolyam és a forgalomban lévő részvények számának szorzata ad.",
      related: ["Blue-chip részvények", "ETF", "Részvényértékelés"],
    },
    "Fundamentális elemzés": {
      description:
        "Befektetési módszer, amely a vállalat pénzügyi és gazdasági mutatóit vizsgálja a belső értékének meghatározására.",
      related: ["P/E Ratio", "P/B Ratio", "Portfólió diverzifikáció"],
    },
    "Technikai elemzés": {
      description:
        "A részvények ármozgásának és kereskedési volumenének grafikonokon történő elemzése, múltbeli adatok alapján történő előrejelzéshez.",
      related: ["Short pozíció", "Long pozíció", "Opciók"],
    },
    "Makro- és mikroökonómia": {
      description:
        "Makrogazdaság: országok gazdasági teljesítményét és globális gazdasági folyamatokat vizsgál. Mikroökonómia: egyének, vállalatok gazdasági döntéseinek elemzése.",
      related: [
        "Fundamentális elemzés",
        "Technikai elemzés",
        "Portfólió diverzifikáció",
      ],
    },
    "Derivatívák (származtatott ügyletek)": {
      description:
        "Értéküket más, alaptermék (pl. részvény, árutermék, valuta) értékéből származtató pénzügyi eszközök.",
      related: ["Opciók", "Forward, Future szerződések", "Margin Trading"],
    },
    "Forward, Future szerződések": {
      description:
        "Határidős ügyletek, amelyekben a felek előre rögzített áron és időpontban kötelesek kereskedni.",
      related: ["Opciók", "Short pozíció", "Derivatívák"],
    },
    "Opciók (Call, Put)": {
      description:
        "Szerződések, amelyek jogot adnak (de nem kötelezettséget) egy eszköz vételére (Call) vagy eladására (Put) egy meghatározott áron és időpontban.",
      related: ["Derivatívák", "Margin Trading", "Technikai elemzés"],
    },
  },
];

export default terms;
