export default function ContentContainer(props) {
    return (
        <div className="content_container">
            <div className="content_internal">
                {props.children}
            </div>
        </div>
    )
}