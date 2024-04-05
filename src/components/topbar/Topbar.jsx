import "./topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

const Topbar = () => {
  return (
      <div className="topbar">
          <div className="topbarLeft">
              <span className="logo">Ashish Chauhan</span>
          </div>
          <div className="topbarRight">
              <div className="iconBox">
                  <NotificationsNoneIcon className="topbarIcon" />
                  <span className="iconBadge">2</span>
              </div>
              <div className="iconBox">
                  <LanguageIcon className="topbarIcon" />
                  <span className="iconBadge">1</span>
              </div>
           
                  <SettingsIcon className="topbarIcon" />
             <img className="topbarProfileImg" src="https://images.pexels.com/photos/813940/pexels-photo-813940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      
          </div>
    </div>
  )
}

export default Topbar