import { useEffect, useState } from "react";
import { useAppSelector } from "../../api/hooks";
import {
  CardForShow,
  ICardForShow,
} from "../../components/cardForShow/cardForShow";
import "./oracleAdvicePage.css";
import {
  ISelectedCards,
  randomIndexForSpreads,
  fillCards,
} from "../../api/data/helpers";
import {
  IOracleAdviceDefinition,
  oracleAdviceDefinitions,
} from "../../api/data/consts";

export const OracleAdvicePage = () => {
  const { majorArcanes, minorArcanes } = useAppSelector((state) => state.cards);

  const majorArcanesCards = majorArcanes.cards;
  const minorArcanesCards = minorArcanes.cards;

  const [selectedCards, setSelectedCards] = useState<ISelectedCards>({
    iterator: -1,
    cards: [],
  });

  const [spreadItems, setSpreadItems] = useState<ICardForShow[]>([]);

  const clearCards = () => {
    setSelectedCards({
      iterator: -1,
      cards: [],
    });
    setSpreadItems([]);
  };

  const handleOracleBtnClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    clearCards();
    let intervalId = setInterval(() => {
      setSelectedCards((prev) => {
        return {
          iterator: prev.iterator + 1,
          cards: [
            ...prev.cards,
            randomIndexForSpreads(prev.cards, [
              ...majorArcanesCards,
              ...minorArcanesCards,
            ]),
          ],
        };
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(intervalId);
    }, 6000);
  };

  useEffect(() => {
    if (selectedCards.iterator >= 0 && selectedCards.iterator < 6)
      fillCards(selectedCards, setSpreadItems);
  }, [selectedCards, selectedCards.iterator]);

  return (
    <div className="oracle-page">
      <div className="oracle-content">
        <div className="oracle-title">Совет Оракула</div>
        <div className="oracle-btn" onClick={handleOracleBtnClick}>
          <div className="oracle-btn-txt">Разложить карты</div>
        </div>
        <div className="oracle-deck">
          {oracleAdviceDefinitions.map((item: IOracleAdviceDefinition) => (
            <div className="oracle-item">
              <div className="item-txt">
                <div className="item-title">{item.title}</div>
                <div className="item-description arcane">
                  {item.description}
                </div>
              </div>
              <CardForShow
                card={
                  spreadItems[item.index]
                    ? spreadItems[item.index]
                    : {
                        title: "",
                        description: "",
                      }
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
