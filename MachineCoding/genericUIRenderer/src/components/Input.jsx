const Input = ({value,placeholder,onChange}) => {
    return(
        <input
            className="p-1 font-medium text-medium text-slate-950 border border-red-300 rounded"
            placeholder={placeholder}
            value={value}
            onChange={(e)=>onChange(e.target.value)}
        />
    )
}

export default Input;