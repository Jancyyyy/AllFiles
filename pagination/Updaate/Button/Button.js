const Button=(props)=>{
    return(
        <button type={props.type}  className={`btn btn-dark ${props.customClass}`} style={props.styleName}>{props.children}</button>
    )
}
export default Button