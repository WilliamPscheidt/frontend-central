import "./top.css"
import Button from "../../resources/btn"

import UserIcon from "../../../icons/user-icon.svg"
import RefreshIcon from "../../../icons/refresh-icon.svg"
import CalendarIcon from "../../../icons/calendar-icon.svg"

export default function TopMenu() {
    return (
        <>
            <div className="logo">
                <span className="logo_text">Empresa</span><h1 className="text_bold">ABC</h1>
            </div>
            <div className="right_container">
                <div className="left_inside">
                    <span className="text_atualization">Dados atualizando em 5:59</span>
                    <Button image_url={RefreshIcon} text={"Atualizar Dados Agora"} width={215}  />
                </div>
                <div className="right_inside">
                    <Button image_url={CalendarIcon} text={"Mar 03,2023 - Mar 09,2023"} width={270} arrow_button={true} margin={5}/>
                    <Button image_url={UserIcon} text={"William Pscheidt"} width={210} arrow_button={true} margin={5}/>
                    <div className="checkbox-container">
                        <input type="checkbox"/>
                    </div>
                </div>
            </div>
        </>
    )
}   