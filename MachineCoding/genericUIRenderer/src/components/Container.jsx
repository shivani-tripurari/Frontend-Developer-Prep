const Container = ({direction, children}) => {
    return(
        <div className={`flex ${direction==="horizontal" ? "flex-row" : "flex-col"} gap-12 mb-12`}>{children}</div>
    )
}

export default Container;