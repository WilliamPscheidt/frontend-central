import "./container.css"

export default function SidebarContainer(props) {
    return (
        <div className="sidebar_container">
            {props.children}
        </div>
    )
}