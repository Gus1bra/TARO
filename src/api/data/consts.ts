interface IPath {
  startPage: string;
  cardListPage: string;
  oracleAdvicePage: string;
}

export const path: IPath = {
  startPage: "/",
  cardListPage: "/cards_list",
  oracleAdvicePage: "/oracle_advice",
};

export interface IOracleAdviceDefinition {
  title: string;
  description: string;
  index: number;
}

export const oracleAdviceDefinitions: IOracleAdviceDefinition[] = [
  {
    title: "Оракул",
    description: "Совет вселенной",
    index: 0,
  },
  {
    title: "«Прошлое»",
    description: "Показывает события, случившиеся до волнующей ситуации",
    index: 1,
  },
  {
    title: "«Настоящее»",
    description:
      "Описывает то, в каком состоянии пребывают ваши дела на данный момент",
    index: 2,
  },
  {
    title: "«Будущее»",
    description: "Какое возможное развитие событий, если вы ничего не измените",
    index: 3,
  },
  {
    title: "«Причина»",
    description: "Указывает на истинные сложившихся обстоятельств",
    index: 4,
  },
  {
    title: "«Блок»",
    description:
      "Говорит о том, что именно мешает вам успешно разрешиь ситуацию",
    index: 5,
  },
];
