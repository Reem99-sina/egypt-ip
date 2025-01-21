import { algoliasearch } from "algoliasearch";

export default function AlgoliasearchConfig() {
  const client = algoliasearch(
    "BYOYYZCKQD",
    "0699d4c11b1b4e3a0465dcb0091da661"
  );

  return client;
}
// data/defaultData.js
export const defaultData = [
  {
    category: ["Electronics", "Mobile Phones"],
    objectID: "1",
    title: "WIPO Lex",
    desc: "WIPO Lex... battery jars 9 battery boxes 9 battery chargers 9 batting gloves [accessories ... photovoltaic cells 9 chemical preparations for treating phylloxera 5 ...",
  },
  {
    category: ["Electronics", "Mobile Phones", "alarm"],
    objectID: "2",
    title: "WIPO Lex",
    desc: "WIPO Lex... battery jars 9 battery boxes 9 battery chargers 9 batting gloves [accessories ... photovoltaic cells 9 chemical preparations for treating phylloxera 5 ...",
  },
  {
    category: ["Electronics", "Mobile Phones", "light"],
    objectID: "3",
    title: "WIPO Lex",
    desc: "WIPO Lex... battery jars 9 battery boxes 9 battery chargers 9 batting gloves [accessories ... photovoltaic cells 9 chemical preparations for treating phylloxera 5 ...",
  },
];
