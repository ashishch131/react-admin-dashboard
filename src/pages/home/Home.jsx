import Chart from "../../components/chart/Chart";
import FeatureInfo from "../../components/featureInfo/FeatureInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetsm/WidgetSm";
import WidgetLg from "../../components/widgetlg/WidgetLg";
const Home = () => {
  return (
    <div className="home">
      <FeatureInfo />
      <Chart
        data={userData}
        title={"User Analytics"}
        dataKey1={"X-axis"}
        dataKey2={"Y-axis"}
        grid
      />
      <div className="homeWidget">
        <WidgetSm />
        <WidgetLg/>
      </div>
    </div>
  );
};

export default Home;
