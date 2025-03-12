import React from "react";

const EconomicNews = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Gazdasági hírek és hatásuk</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Háború és geopolitikai konfliktusok</h2>
        <p className="text-gray-700">
          A konfliktus érintette régió cégeinek részvényei általában esnek. Nyertes szektorok: hadipar, energiaipar.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Kamatemelés</h2>
        <p className="text-gray-700">
          Lassítja a gazdaság növekedését, drágítja a hitelfelvételt, ami negatívan hat a részvényekre, de pozitív lehet a pénzügyi szektor számára.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Infláció</h2>
        <p className="text-gray-700">
          Csökken a pénz vásárlóereje. Érdemes lehet inflációvédett eszközökbe (állampapír, arany) befektetni.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Gazdasági válság</h2>
        <p className="text-gray-700">
          Erős kockázatkerülés, befektetések áthelyezése biztonságosabb eszközökbe (pl. államkötvény, készpénz).
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Gazdasági fellendülés</h2>
        <p className="text-gray-700">
          Jó lehetőség növekedési szektorokba (pl. technológia, ingatlan) fektetni.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Hogyan használd ezeket az infókat?</h2>
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
