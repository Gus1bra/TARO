import { useAppSelector } from "../../api/hooks";
import { ICardsState } from "../../api/slices/cardsSlice";
import { Card } from "../../components/card/card";
import "./cardsListPage.css";

export const CardsListPage = () => {
  const cardsData: ICardsState = useAppSelector((state) => state.cards);
  return (
    <div className="cards-page">
      <div className="cards-block">
        <div className="cards-title">{cardsData.majorArcanes.title}</div>
        <div className="cards-items">
          {cardsData.majorArcanes.cards.map((item) => (
            <Card card={item} />
          ))}
        </div>
      </div>
      <div className="cards-block">
        <div className="cards-title">{cardsData.minorArcanes.title}</div>
        <div className="cards-items">
          {cardsData.minorArcanes.cards.map((item) => (
            <Card card={item} />
          ))}
        </div>
      </div>
      <div className="cards-block">
        <div className="cards-title">{cardsData.oracles.title}</div>
        <div className="cards-items">
          {cardsData.oracles.cards.map((item) => (
            <Card card={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
