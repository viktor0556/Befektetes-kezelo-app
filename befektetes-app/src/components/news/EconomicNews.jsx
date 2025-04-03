import React, { useState } from "react";
import topics from "../../data/economicTopics";

const EconomicNews = () => {
  const [selected, setSelected] = useState(null);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setSelected(id);

    setTimeout(() => {
      setSelected(null);
    }, 1000);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Gazdasági hírek és hatásuk</h1>

      <nav className="mb-6 p-4 bg-gray-100 rounded-lg">
        <ul className="flex flex-wrap gap-4 justify-center">
          {topics.map((topic) => (
            <li key={topic.id}>
              <button
                onClick={() => scrollToSection(topic.id)}
                className={`px-4 py-2 font-medium rounded-lg transition-all duration-300 ${
                  selected === topic.id
                    ? "bg-blue-100 border border-blue-500 text-blue-700 shadow-md"
                    : "text-blue-500 hover:text-blue-700"
                }`}
              >
                {topic.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <section id="jegybank" className="mb-6">
        <h2
          className={`text-xl font-semibold mb-2 transition duration-300 p-2 rounded-lg ${
            selected === "jegybank" ? "bg-yellow-200" : ""
          }`}
        >
          Jegybank
        </h2>
        <p className="text-gray-700">
          A központi bankok döntéseket hoznak a kamatokról, monetáris
          politikáról, mint például lazítás vagy szigorítás.
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>
            <strong>Mi történik?</strong> A jegybank megváltoztatja a kamatlábat
            vagy pénzkínálatot.
          </li>
          <li>
            <strong>Hogyan reagálnak a piacok?</strong> Kamatemeléskor
            részvények és kockázatos eszközök ára eshet, lazításkor emelkedhet.
          </li>
        </ul>
      </section>

      <section id="kamatemeles" className="mb-6">
        <h2
          className={`text-xl font-semibold mb-2 transition duration-300 p-2 rounded-lg ${
            selected === "kamatemeles" ? "bg-yellow-200" : ""
          }`}
        >
          Kamatemelés
        </h2>
        <p className="text-gray-700">
          Lassulhat a gazdaság, csökkenhet a részvények vonzereje.
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>
            <strong>Mi történik?</strong> Drágulnak a hitelek, csökken a
            fogyasztás.
          </li>
          <li>
            <strong>Hogyan reagálnak a piacok?</strong> A részvénypiacok
            jellemzően negatívan, a banki részvények pozitívan reagálnak.
          </li>
          <li>
            <strong>Mit érdemes tenni?</strong> Csökkentsd a részvényarányt,
            vagy válts defenzív részvényekre.
          </li>
        </ul>
      </section>

      <section id="inflacio" className="mb-6">
        <h2
          className={`text-xl font-semibold mb-2 transition duration-300 p-2 rounded-lg ${
            selected === "inflacio" ? "bg-yellow-200" : ""
          }`}
        >
          Infláció
        </h2>
        <p className="text-gray-700">
          A pénz értéke csökken, drágulnak a termékek.
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>
            <strong>Mi történik?</strong> Az infláció csökkenti a vásárlóerőt.
          </li>
          <li>
            <strong>Hogyan reagálnak a piacok?</strong> A részvények vegyesen, a
            nyersanyagok (pl. arany, nyersanyagok) pozitívan reagálnak.
          </li>
          <li>
            <strong>Mit érdemes tenni?</strong> Vegyél inflációvédett
            befektetéseket (pl. inflációkövető állampapír, nyersanyag).
          </li>
        </ul>
      </section>

      <section id="tech" className="mb-6">
        <h2
          className={`text-xl font-semibold mb-2 transition duration-300 p-2 rounded-lg ${
            selected === "tech" ? "bg-yellow-200" : ""
          }`}
        >
          Tech
        </h2>
        <p className="text-gray-700">
          Megjelenik egy új technológia, ami gyorsítja vagy megváltoztatja a
          gazdaság működését.
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>
            <strong>Mi történik?</strong> Új technológiák (pl. mesterséges
            intelligencia, automatizálás) befolyásolják a piacokat.
          </li>
          <li>
            <strong>Hogyan reagálnak a piacok?</strong> Növekvő szektorok
            részvényei emelkedhetnek, más szektorok eshetnek.
          </li>
          <li>
            <strong>Mit érdemes tenni?</strong> Keress befektetéseket növekedési
            iparágakban (pl. AI, zöld energia).
          </li>
        </ul>
      </section>

      <section id="zold" className="mb-6">
        <h2
          className={`text-xl font-semibold mb-2 transition duration-300 p-2 rounded-lg ${
            selected === "zold" ? "bg-yellow-200" : ""
          }`}
        >
          Technológia változások: Zöld energia
        </h2>
        <p className="text-gray-700">
          Növekedési lehetőség a megújuló energiában, csökken a fosszilis
          üzemanyagok vonzereje.
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>
            <strong>Mi történik?</strong> Erősödik a fenntarthatóság, nő a zöld
            energiába áramló tőke.
          </li>
          <li>
            <strong>Hogyan reagálnak a piacok?</strong> Zöld energia részvények
            emelkednek, fosszilis cégek értéke csökkenhet.
          </li>
          <li>
            <strong>Mit érdemes tenni?</strong> Fektess környezetbarát ETF-ekbe
            vagy részvényekbe.
          </li>
        </ul>
      </section>

      <section id="hasznalat">
        <h2
          className={`text-xl font-semibold mb-2 transition duration-300 p-2 rounded-lg ${
            selected === "hasznalat" ? "bg-yellow-200" : ""
          }`}
        >
          Hogyan használd ezeket az infókat?
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Diverzifikálj, ha bizonytalanságot érzékelsz.</li>
          <li>Kerüld a túlértékelt részvényeket kockázatos időszakban.</li>
          <li>Használd ki az alacsony árakat hosszú távú befektetésként.</li>
        </ul>
      </section>
    </div>
  );
};

export default EconomicNews;
