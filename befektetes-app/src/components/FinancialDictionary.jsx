const terms = [{
  "ETF (Exchange Traded Fund)": {
    description: "Olyan befektetési alap, amely több részvényből áll, és egyetlen részvényként vásárolható meg.",
    related: ["VUSA ETF (Vanguard S&P 500)", "Diverzifikáció", "Alapok"]
  },
  "VUSA ETF (Vanguard S&P 500)": {
    description: "Az 500 legnagyobb amerikai cég részvényét tartalmazza, pl. Apple, Microsoft, Tesla, Amazon.",
    related: ["ETF (Exchange Traded Fund)", "Portfólió összetétel", "Szektor súlyozás"]
  },
  "ETF előnyei (Diverzifikáció)": {
    description: "Egy ETF sok részvényt tartalmaz, így csökkenti a kockázatot. Hosszú távon stabil hozamot ad (évi 8-10%).",
    related: ["ETF (Exchange Traded Fund)", "Kockázatkezelés"]
  },
  "Portfólió összetétel (Holdings, Assets)": {
    description: "Megmutatja, hogy az ETF pénzének hány %-a van egyes cégek részvényeiben. Pl. Apple a VUSA 6,97%-át teszi ki, így ha az Apple jól teljesít, a VUSA is emelkedik.",
    related: ["VUSA ETF (Vanguard S&P 500)", "Szektor súlyozás"]
  },
  "Szektor súlyozás (Sector Weightings)": {
    description: "Megmutatja, hogy az ETF milyen iparágakban van jelen. Pl. a VUSA-ban a technológiai szektor dominál (31,97%). Ha a tech iparág esik, az ETF is veszít az értékéből.",
    related: ["Portfólió összetétel", "Piaci trendek"]
  },
  "Költségek (TER - Total Expense Ratio)": {
    description: "Az ETF fenntartási költsége, általában 0,05-0,2%. Pl. a VUSA esetében 0,07%, ami alacsony költségnek számít.",
    related: ["ETF (Exchange Traded Fund)"]
  },
  "Piaci értékeltség mutatók (P/E, P/B, P/S stb.)": {
    description: "Ezeket a mutatókat részvényeknél és ETF-eknél is figyeljük. ETF-eknél az összes benne lévő cég átlagértékeit kapjuk meg.",
    related: ["P/E (Price/Earnings)", "P/B (Price/Book)", "P/S (Price/Sales)"]
  },
  "P/E (Price/Earnings) - Ár/Nyereség": {
    description: "A részvény árát viszonyítja a cég egy részvényre jutó nyereségéhez. • Magas (30+) → Drága részvény, a befektetők növekedést várnak. • Alacsony (10-20) → Olcsóbb lehet, de figyelni kell az iparági átlagot.",
    related: ["PEG Ratio", "P/B (Price/Book)", "P/S (Price/Sales)"]
  },
  "P/B (Price/Book) - Ár/Könyv szerinti érték": {
    description: "Megmutatja, hogy a részvény ára hogyan viszonyul a cég eszközeihez. • 1 alatt → A cég eszközei többet érnek, azaz olcsó lehet. • 1 felett → A piac többre értékeli a céget, ami növekedési várakozást jelenthet.",
    related: ["P/S (Price/Sales)", "P/E (Price/Earnings)"]
  },
  "P/S (Price/Sales) - Ár/Bevétel": {
    description: "A részvény árát viszonyítja a cég bevételeihez. • 1 alatt → A részvény olcsó a bevételéhez képest. • 10+ → Extrém növekedési várakozást jelenthet, ami kockázatos lehet.",
    related: ["P/B (Price/Book)", "P/E (Price/Earnings)"]
  },
  "PEG Ratio - Ár/Nyereség és növekedés": {
    description: "A P/E mutatót osztja a növekedési ütemmel. • 1 alatt → Olcsó a jövőbeni növekedéshez képest. • 1 felett → Drágább lehet, de gyorsan növekvő cégeknél elfogadható.",
    related: ["P/E (Price/Earnings)", "Növekedési részvények"]
  },
  "Részvények értékelése: Drága vagy olcsó?": {
    description: "• Ha a P/E magas, a részvény drága lehet. • Ha a P/B 1 alatt van, lehet alulértékelt. • Ha a P/S alacsony, a részvény olcsónak számít a bevételhez képest.",
    related: ["P/E (Price/Earnings)", "P/B (Price/Book)", "P/S (Price/Sales)"]
  },
  "Mit árul el a növekedési ütem?": {
    description: "• A PEG Ratio 1 alatt jó jel → A cég drága, de a növekedése igazolja az árát. • Ha a PEG Ratio is magas, akkor túlértékelhetik a növekedési várakozásokat.",
    related: ["PEG Ratio", "P/E (Price/Earnings)"]
  },
  "Kockázat és stabilitás": {
    description: "• Ha P/E, P/B és P/S mind magas, az részvény kockázatos lehet. • Ha egy cégnek nagy adóssága van, az extra kockázatot jelenthet.",
    related: ["P/E (Price/Earnings)", "P/B (Price/Book)", "P/S (Price/Sales)"]
  },
  "Mikor lehet jó vétel egy részvény?": {
    description: "• Ha a P/E alacsony, de a cég stabilan növekszik. • Ha a P/B és P/S alacsony, de nincs csökkenő trend. • Ha a PEG Ratio 1 alatt van, az jó vételi lehetőség lehet.",
    related: ["Részvények értékelése: Drága vagy olcsó?", "Piaci trendek"]
  }
}];

export default terms;
