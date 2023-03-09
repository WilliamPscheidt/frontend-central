import "./top.css"

export default function TopMenu() {
    return (
        <>
            <div className="logo">
                <span className="logo_text">Empresa</span><h1 className="text_bold">ABC</h1>
            </div>
            <div className="right_container">
                <div className="left_inside">
                    <span>Dados atualizando em 5:59</span>
                    <button>Atualizar Dados Agora</button>
                </div>
                <div className="right_inside">
                    <button>Mar 03,2023 - Mar 09,2023</button>
                    <button>William Pscheidt</button>
                    <button>ON</button>
                </div>
            </div>
        </>
    )
}