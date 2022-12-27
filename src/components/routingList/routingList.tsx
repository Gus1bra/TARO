import { Link } from "react-router-dom";
import "./routingList.css";
import { path } from "../../api/data/consts";

export const RoutingList = () => {
  return (
    <div className="routingList">
      <Link className="routingList-item" to={path.startPage}>
        Подробнее
      </Link>
      <div className="horizontal-line"></div>
      <Link className="routingList-item" to={path.cardListPage}>
        Карты
      </Link>
      <div className="horizontal-line"></div>
      <Link className="routingList-item" to={path.oracleAdvicePage}>
        Совет Оракула
      </Link>
    </div>
  );
};
