import { RoutingList } from "../../components/routingList/routingList";

export interface IParentLayoutPageProps {
  child?: JSX.Element;
}

const ParentLayout: React.FC<IParentLayoutPageProps> = (props) => {
  const { child } = props;
  return (
    <div className="parent-layout">
      <div className="header df bbgt">
        <div className="content"> Волшебное зеркало Таро Александр Рей</div>
      </div>
      <div className="container df">
        <div className="content">
          <RoutingList />
          <div className="content_container">{child}</div>
        </div>
      </div>
      <div className="footer df bbgt">
        <div className="content">
          <a
            href="https://www.labirint.ru/books/849801/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Приобрести набор
          </a>
        </div>
      </div>
    </div>
  );
};

export default ParentLayout;
