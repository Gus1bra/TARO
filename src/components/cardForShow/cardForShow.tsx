import "./cardForShow.css";

interface ICardForShowProps {
  card?: ICardForShow;
}

export interface ICardForShow {
  title: string;
  description: string;
  value?: string;
}

export const CardForShow: React.FC<ICardForShowProps> = (props) => {
  const { card } = props;
  return (
    <div className="cardForShow">
      {card && (
        <div className="cardForShow-content">
          <div className="cardForShow-row title">{card.title}</div>
          <div className="cardForShow-row description">{card.description}</div>
          <div className="cardForShow-row value">{card.value}</div>
        </div>
      )}
    </div>
  );
};
