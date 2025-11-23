const Button = ({value, onClick}) => {
    return(
        <button className="p-3 bg-red-700 text-bold text-white rounded-md" onClick={()=>onClick()}>{value}</button>
    )
}

export default Button;