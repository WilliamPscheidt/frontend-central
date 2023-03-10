import "./resources.css"
import DropArrow from "../../icons/drop-arrow-icon.svg"

export default function Button(props) {
    return (
        <button className="Button" style={{ "width": props.width, "margin": props.margin }}>
            <img className="icon_button" src={props.image_url} alt="icon" />
            <span className="button_text">{props.text}</span>
            {props.arrow_button && <img src={DropArrow} alt="arrow" className="icon_button" />}
        </button>
    )
}