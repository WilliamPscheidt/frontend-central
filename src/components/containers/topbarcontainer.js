import './container.css'

export default function TopContainer(props) {
    return (
        <div className='top_container'>
            {props.children}
        </div>
    )
}