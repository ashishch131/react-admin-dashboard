import "./widgetsm.css"
import VisibilityIcon from '@mui/icons-material/Visibility';

const WidgetSm = () => {
  return (
    <div className="widgetSmall">
      <span className="smWidgetTitle">New Join Member</span>

      <ul className="widgetList">

        <li className="widgetListItems">
          <img className="widgetPrflImg" src="https://images.pexels.com/photos/813940/pexels-photo-813940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div className="widgetprflInfo">
            <span className="prflname">Anna Watson</span>
            <span className="prflworkinfo">Software Engineer</span>
          </div>
          <button className="smWidgetBtn">
            <VisibilityIcon className="smIcon"/>
            <span className="smBtntext">Display</span>
          </button>
        </li>
        <li className="widgetListItems">
          <img className="widgetPrflImg" src="https://images.pexels.com/photos/813940/pexels-photo-813940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div className="widgetprflInfo">
            <span className="prflname">Anna Watson</span>
            <span className="prflworkinfo">Software Engineer</span>
          </div>
          <button className="smWidgetBtn">
            <VisibilityIcon className="smIcon"/>
            <span className="smBtntext">Display</span>
          </button>
        </li>
        <li className="widgetListItems">
          <img className="widgetPrflImg" src="https://images.pexels.com/photos/813940/pexels-photo-813940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div className="widgetprflInfo">
            <span className="prflname">Anna Watson</span>
            <span className="prflworkinfo">Software Engineer</span>
          </div>
          <button className="smWidgetBtn">
            <VisibilityIcon className="smIcon"/>
            <span className="smBtntext">Display</span>
          </button>
        </li>
        <li className="widgetListItems">
          <img className="widgetPrflImg" src="https://images.pexels.com/photos/813940/pexels-photo-813940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div className="widgetprflInfo">
            <span className="prflname">Anna Watson</span>
            <span className="prflworkinfo">Software Engineer</span>
          </div>
          <button className="smWidgetBtn">
            <VisibilityIcon className="smIcon"/>
            <span className="smBtntext">Display</span>
          </button>
        </li>

      </ul>
    </div>
  )
}

export default WidgetSm