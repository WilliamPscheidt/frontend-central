import "./sidebar.css"
import MENU_ICON from "./../../../icons/menu-icon.svg"
import LOGOUT_ICON from "./../../../icons/logout-icon.svg"
import HELP_ICON from "./../../../icons/help-icon.svg"


export default function SidebarMenu() {
    return (
        <div className="menu_sidebar">
            <div className="top_menu">
                <img src={MENU_ICON} alt="menu icon" className="icon_open_menu "/>
            </div>
            <div className="bottom_menu">
                <img src={HELP_ICON} alt="menu icon" className="icon"/>
                <img src={LOGOUT_ICON} alt="menu icon" className="icon"/>
            </div>
        </div>
    )
}