const indicatorDescriptions = {
  "P/E": {
    explanation:
      "A P/E mutató (Price-to-Earnings) azt mutatja meg, hogy a részvény árfolyama hányszorosát éri az egy részvényre jutó nyereségnek (EPS).",
    interpretation: [
      "Ha magas (30+), akkor a részvény drágának számíthat, és nagy növekedési várakozás van mögötte.",
      "Ha alacsony (10-20), akkor a részvény olcsóbb lehet, de fontos a cég jövőbeli kilátásait is figyelembe venni.",
      "Nagyon alacsony érték (pl. 5 alatt) arra utalhat, hogy a piac nem bízik a cég növekedésében.",
    ],
  },
  "P/B": {
    explanation:
      "A P/B mutató (Price-to-Book) megmutatja, hogy a részvény árfolyama hogyan viszonyul a vállalat könyv szerinti értékéhez.",
    interpretation: [
      "Ha 1 alatt van, akkor a részvény alulértékelt lehet, mert a cég eszközei többet érnek, mint a részvények összesített piaci értéke.",
      "Ha 1 felett van, akkor a piac többre értékeli a céget, de ha túl magas (10+), lehet, hogy túlértékelt a részvény.",
    ],
  },
  "P/S": {
    explanation: "A P/S (Price-to-Sales) mutató megmutatja, hogy a cég részvényének árfolyama hogyan viszonyul az egy részvényre jutó éves bevételhez.",
    interpretation: [
      "Alacsony érték (1 alatt) kedvező, jelezheti, hogy alulértékelt.",
      "Magas érték (10+) jelentős növekedési várakozásokat tükröz, de túlárazottságra is utalhat.",
    ],
  },
  "PEG Ratio": {
    explanation: "A PEG Ratio megmutatja, hogy a P/E érték mennyire van összhangban a cég várható növekedési ütemével.",
    interpretation: [
      "1 alatti PEG alulértékeltséget jelez.",
      "1 feletti érték magas növekedési várakozásokat mutat, drága lehet a részvény.",
    ],
  },
  "Dividend Yield (Osztalékhozam)": {
    explanation: "Az osztalékhozam azt jelzi, hogy egy részvény éves osztaléka hány százaléka a jelenlegi részvényárnak.",
    interpretation: [
      "Magas osztalékhozam (5%+) vonzó lehet passzív jövedelemre törekvő befektetőknek.",
      "Alacsony osztalékhozam növekedési részvényekre jellemző.",
    ],
  },
  "Debt-to-Equity Ratio (Adósság/saját tőke arány)": {
    explanation: "Ez a mutató a cég pénzügyi stabilitását és hitelállományát mutatja meg.",
    interpretation: [
      "Magas arány (2+) kockázatos lehet, túlzott eladósodottságra utalhat.",
      "Alacsony arány (1 alatt) stabil pénzügyi helyzetre utal.",
    ],
  },
  "EV/EBITDA": {
    explanation: "Az EV/EBITDA megmutatja, hogy a vállalat értéke hogyan viszonyul az éves üzemi eredményéhez (EBITDA).",
    interpretation: [
      "Alacsony érték (10 alatt) kedvező lehet, a vállalat alulértékelt.",
      "Magas érték (20+) a piac magas elvárásait tükrözi, és drága lehet.",
    ],
  },
};

export default indicatorDescriptions