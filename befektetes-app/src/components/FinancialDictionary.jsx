const terms = [{
  "P/E (Price/Earnings)": {
    description: "Ár/Nyereség mutató • Magas → (30+) Drága részvény, növekedési várakozás van. • Alacsony (10-20) → Olcsóbb, lehet alulértékelt.",
    related: ["PEG Ratio"]
  },
  "P/B (Price/Book)": {
    description: "Ár/Könyv szerinti érték • 1 alatt → A részvény olcsó lehet, mert a cég eszközei többet érnek. 1 felett → A piac többre értékeli a céget.",
    related: ["P/S (Price/Sales)"]
  },
  "P/S (Price/Sales)": {
    description: "Ár/Bevétel mutató • 1 alatt → A részvény olcsó a bevételéhez képest. 10+ → Extrém növekedési várakozás.",
    related: ["P/B (Price/Book)"]
  },
  "PEG Ratio": {
    description: "Ár/Nyereség a növekedéshez viszonyítva • 1 alatt → Olcsó a növekedési kilátásokhoz képest. 1 felett → Drága.",
    related: ["P/E (Price/Earnings)"]
  }
}];

export default terms;
