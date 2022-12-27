import { useAppSelector } from "../../api/hooks";
import { IAboutContent, IAboutState } from "../../api/slices/aboutSlice";
import "./aboutPage.css";

export const AboutPage = () => {
  const aboutData: IAboutState = useAppSelector((state) => state.about);
  let aboutBlocksArray: IAboutContent[] = [];
  Object.entries(aboutData).map(
    (item) => (aboutBlocksArray = [...aboutBlocksArray, item[1]])
  );
  return (
    <div className="about-page">
      {aboutBlocksArray.map((block) => (
        <div className="about-block">
          <div className="about-title">{block.title}</div>
          {block.content.map((el) => (
            <div className="about-txt">{el}</div>
          ))}
        </div>
      ))}
    </div>
  );
};
