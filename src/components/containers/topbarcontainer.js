import './container.css'

export default function TopContainer(props) {
    return (
        <div className='topcontainer'>
            {props.children}
        </div>
    )
}