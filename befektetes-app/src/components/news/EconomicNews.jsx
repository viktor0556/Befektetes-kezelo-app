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
      <h1 className="text-2xl font-bold mb-4">Economic News and Their Impact</h1>

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
        <h2 className={`text-xl font-semibold mb-2 transition duration-300 p-2 rounded-lg ${
          selected === "jegybank" ? "bg-yellow-200" : ""
        }`}>
          Central Bank
        </h2>
        <p className="text-gray-700">
          Central banks make decisions on interest rates and monetary policy, such as tightening or easing.
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>
            <strong>What happens?</strong> The central bank changes interest rates or the money supply.
          </li>
          <li>
            <strong>How do markets react?</strong> When rates rise, stocks and risky assets may fall; with easing, prices may increase.
          </li>
        </ul>
      </section>

      <section id="kamatemeles" className="mb-6">
        <h2 className={`text-xl font-semibold mb-2 transition duration-300 p-2 rounded-lg ${
          selected === "kamatemeles" ? "bg-yellow-200" : ""
        }`}>
          Interest Rate Hike
        </h2>
        <p className="text-gray-700">
          The economy may slow down and the appeal of stocks may decrease.
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>
            <strong>What happens?</strong> Loans become more expensive, reducing consumption.
          </li>
          <li>
            <strong>How do markets react?</strong> Stock markets typically respond negatively, but bank stocks may perform well.
          </li>
          <li>
            <strong>What should you do?</strong> Reduce stock exposure or shift to defensive stocks.
          </li>
        </ul>
      </section>

      <section id="inflacio" className="mb-6">
        <h2 className={`text-xl font-semibold mb-2 transition duration-300 p-2 rounded-lg ${
          selected === "inflacio" ? "bg-yellow-200" : ""
        }`}>
          Inflation
        </h2>
        <p className="text-gray-700">
          Money loses value, and product prices rise.
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>
            <strong>What happens?</strong> Inflation reduces purchasing power.
          </li>
          <li>
            <strong>How do markets react?</strong> Stocks respond mixed; commodities like gold may rise.
          </li>
          <li>
            <strong>What should you do?</strong> Invest in inflation-protected assets (e.g., indexed bonds, commodities).
          </li>
        </ul>
      </section>

      <section id="tech" className="mb-6">
        <h2 className={`text-xl font-semibold mb-2 transition duration-300 p-2 rounded-lg ${
          selected === "tech" ? "bg-yellow-200" : ""
        }`}>
          Technology
        </h2>
        <p className="text-gray-700">
          New technologies emerge that accelerate or reshape how the economy works.
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>
            <strong>What happens?</strong> Innovations like AI and automation affect the markets.
          </li>
          <li>
            <strong>How do markets react?</strong> Stocks in growing sectors may rise, while others may fall.
          </li>
          <li>
            <strong>What should you do?</strong> Look for investments in growth sectors (e.g., AI, green energy).
          </li>
        </ul>
      </section>

      <section id="zold" className="mb-6">
        <h2 className={`text-xl font-semibold mb-2 transition duration-300 p-2 rounded-lg ${
          selected === "zold" ? "bg-yellow-200" : ""
        }`}>
          Technological Changes: Green Energy
        </h2>
        <p className="text-gray-700">
          Growth opportunities in renewables as the appeal of fossil fuels declines.
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>
            <strong>What happens?</strong> Sustainability strengthens, and capital flows into green energy.
          </li>
          <li>
            <strong>How do markets react?</strong> Green energy stocks rise, while fossil fuel companies may lose value.
          </li>
          <li>
            <strong>What should you do?</strong> Invest in eco-friendly ETFs or stocks.
          </li>
        </ul>
      </section>

      <section id="hasznalat">
        <h2 className={`text-xl font-semibold mb-2 transition duration-300 p-2 rounded-lg ${
          selected === "hasznalat" ? "bg-yellow-200" : ""
        }`}>
          How to Use This Information
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Diversify your portfolio when facing uncertainty.</li>
          <li>Avoid overvalued stocks during risky periods.</li>
          <li>Take advantage of low prices for long-term investing.</li>
        </ul>
      </section>
    </div>
  );
};

export default EconomicNews;
