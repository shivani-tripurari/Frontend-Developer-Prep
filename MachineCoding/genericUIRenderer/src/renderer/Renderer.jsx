import ComponentMap from "./ComponentMap"; 

const Renderer = ({node, formState, onChangeHandler, onSubmit}) => {
    if(node.type === "text"){
        return ComponentMap(node);
    }
    if(node.type === "label"){
        return ComponentMap(node);
    }
    if(node.type === "input"){
        return ComponentMap(node, {
            value : formState[node.field] || "", 
            onChange :(v)=>onChangeHandler(node.field, v)
        });
    }
    if(node.type === "button"){
        return ComponentMap(node,{
            onClick : ()=>onSubmit()
        });
    }
    if(node.type === "container"){
        //if container contains children, iterate over each children and call <Renderer/> for each of them
        const children = node?.children.map((item, index)=>{
            return(
                <Renderer
                    key={index}
                    node={item}
                    formState={formState}
                    onChangeHandler={onChangeHandler}
                    onSubmit={onSubmit}
                />
            )
        })
        //After recursive call, we call the ComponentMap that points to Container component 
        return ComponentMap(node,{children} )
    }

}

export default Renderer;