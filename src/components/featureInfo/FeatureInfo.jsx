import "./featureInfo.css";
import SouthIcon from "@mui/icons-material/South";
const FeatureInfo = () => {
  return (
      <div className="featureInfo">
          
      <div className="infoItems">
        <span className="infoTitle">Revanue</span>
        <div className="infoContainer">
          <span className="infoMoney">$4,125</span>
          <span className="infoRate">-12.5</span>
          <SouthIcon className="infoIcon" />
              </div>
              <span className="infoDesc">Compared to last month</span>
          </div>

          <div className="infoItems">
        <span className="infoTitle">Sales</span>
        <div className="infoContainer">
          <span className="infoMoney">$6,125</span>
          <span className="infoRate">-2.5</span>
          <SouthIcon className="infoIcon" />
              </div>
              <span className="infoDesc">Compared to last month</span>
          </div>

          <div className="infoItems">
        <span className="infoTitle">Cost</span>
        <div className="infoContainer">
          <span className="infoMoney">$4,060</span>
          <span className="infoRate">+2.5</span>
          <SouthIcon style={{rotate:"180deg", color: "green"}} className="infoIcon" />
              </div>
              <span className="infoDesc">Compared to last month</span>
          </div>
          
    </div>
  );
};

export default FeatureInfo;
