import { ICard } from "../../api/slices/cardsSlice";
import "./card.css";

interface ICardProps {
  card: ICard;
}

export const Card: React.FC<ICardProps> = (props) => {
  const { card } = props;
  return (
    <div className="card">
      <div className="card-row title">{card.title}</div>
      <div className="card-row description">{card.description}</div>
      {card.values.length > 1 &&
        card.values.map((value) => (
          <div className="cardForShow-row">{value}</div>
        ))}
      {card.values.length === 1 && (
        <div className="card-row">
          <span className="keyword">Значения: </span> {card.values[0]}
        </div>
      )}
      {card.cardAdvice && (
        <div className="card-row">
          <span className="keyword">Совет карты: </span> {card.cardAdvice}
        </div>
      )}
      {card.flippedCard && (
        <div className="card-row">
          <span className="keyword">Перевернутая карта:</span>{" "}
          {card.flippedCard}
        </div>
      )}
      {card.warning && (
        <div className="card-row">
          <span className="keyword">Предостережение: </span> {card.warning}
        </div>
      )}
      {card.answer && (
        <div className="card-row">
          <span className="keyword">Ответ на вопрос: </span> {card.answer}
        </div>
      )}
    </div>
  );
};
