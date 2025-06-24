import terms from "../data/terms";
import React from "react";
import { useState } from "react";

const ConceptFinder = () => {
  // We convert the `terms` object into an array, where each element is a `[key, value]` pair.
  const termEntries = Object.entries(terms[0]);

  // `query` will be the search text entered by the user.
  // We update the state with `setQuery` when the user types.
  const [query, setQuery] = useState("");

  return (
    /* Search field - The user can enter the search term here */
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <input
        type="text"
        placeholder="Search concept..."
        value={query} //  The input value is always the current `query`
        onChange={(event) => setQuery(event.target.value)} // We update the status as you type.
        className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <h2 className="text-xl font-bold mb-3">Concepts</h2>

      <ul className="space-y-3">
        {termEntries
          .filter(
            ([key, _]) => key.toLowerCase().includes(query.toLowerCase()) // Only keys containing `query` remain
          )
          .map(([key, value], index) => (
            <li key={index} className="border-b pb-2">

              <p className="font-semibold text-blue-600">{key}</p>
              {/* Terms explanation */}
              <p className="text-gray-700">{value.description}</p>

              {/* If there is a related indicator, we will display it */}
              {value.related.length > 0 && (
                <div className="mt-2 text-sm text-gray-600">
                  <p className="font-semibold text-gray-800">
                    Kapcsolodó mutatók
                  </p>
                  <ul className="list-disc ml-4">
                    {value.related.map((relatedTerm, idx) => (
                      <li
                        key={idx}
                        className="text-blue-500 cursor-pointer hover:underline"
                      >
                        {relatedTerm}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
      </ul>

      {/* If there is no result a message will be displayed */}
      {query &&
        termEntries.filter(([key]) =>
          key.toLowerCase().includes(query.toLowerCase())
        ).length === 0 && (
          <p className="text-gray-500">No results found for this term.</p>
        )}
    </div>
  );
};

export default ConceptFinder;
