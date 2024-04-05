import "./sidebar.css";
import BusinessIcon from "@mui/icons-material/Business";
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailIcon from '@mui/icons-material/Mail';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import WorkIcon from '@mui/icons-material/Work';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import { Link } from "react-router-dom";



const Sidebar = () => {
  return (
    <div className="sidebar">
      
      <div className="sidebarPallete">
        <span className="palleteTitle">Dashboard</span>


        <Link className="palleteBox active" to="/">
          <BusinessIcon className="palleteIcon"/>
          <span className="palleteText">Home</span>
        </Link>
        <div className="palleteBox">
          <TimelineIcon className="palleteIcon"/>
          <span className="palleteText">Analytics</span>
        </div>
        <div className="palleteBox">
          <TrendingUpIcon className="palleteIcon"/>
          <span className="palleteText">Sales</span>
        </div>

        </div>

      
      <div className="sidebarPallete">
        <span className="palleteTitle">Quick Menu</span>

        <Link className="palleteBox" to="/users">
          <PersonIcon className="palleteIcon"/>
          <span className="palleteText">Users</span>
        </Link>
        <Link to={"/products"} className="palleteBox">
          <StorefrontIcon className="palleteIcon"/>
          <span className="palleteText">Products</span>
        </Link>
        <div className="palleteBox">
          <AttachMoneyIcon className="palleteIcon"/>
          <span className="palleteText">Transactions</span>
        </div>
        <div className="palleteBox">
          <BarChartIcon className="palleteIcon"/>
          <span className="palleteText">Reports</span>
        </div>

      </div>
      <div className="sidebarPallete">
        <span className="palleteTitle">Notification</span>

        <div className="palleteBox">
          <MailIcon className="palleteIcon"/>
          <span className="palleteText">Mail</span>
        </div>
        <div className="palleteBox">
          <DynamicFeedIcon className="palleteIcon"/>
          <span className="palleteText">Feedback</span>
        </div>
        <div className="palleteBox">
          <ChatBubbleIcon className="palleteIcon"/>
          <span className="palleteText">Messages</span>
        </div>

      </div>
      
      <div className="sidebarPallete">
        <span className="palleteTitle">Staff</span>

        <div className="palleteBox">
          <WorkIcon  className="palleteIcon"/>
          <span className="palleteText">Manage</span>
        </div>
        <div className="palleteBox">
          <TimelineIcon className="palleteIcon"/>
          <span className="palleteText">Analytics</span>
        </div>
        <div className="palleteBox">
          <ReportGmailerrorredIcon className="palleteIcon"/>
          <span className="palleteText">Reports</span>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
