import { useMemo } from "react";
import "./Link.css";

const Link = ({
  d706514c51af627b9c97HowBt,
  divbtnRightArrowIcon,
  propPadding,
  propFlex,
  propMinWidth,
}) => {
  const linkStyle = useMemo(() => {
    return {
      padding: propPadding,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propPadding, propFlex, propMinWidth]);

  return (
    <div className="link14" style={linkStyle}>
      <img
        className="d706514c51af627b9c97-how-btn-i-icon"
        alt=""
        src={d706514c51af627b9c97HowBt}
      />
      <div className="get-started-for1">Get started for free</div>
      <img
        className="divbtn-right-arrow-icon4"
        alt=""
        src={divbtnRightArrowIcon}
      />
    </div>
  );
};

export default Link;
