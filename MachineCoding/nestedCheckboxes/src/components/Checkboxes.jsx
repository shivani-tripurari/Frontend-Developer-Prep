import React,{useState} from "react";

const Checkboxes = (props) => {

    const {localData, globalData, checked, setChecked} = props
    // console.log("what is parent sending ", checked, setChecked);



    //handler functions
    const handleOnChange = (e,item) => {

        //what is the logic ? 
        //1. if item has children -> mark all its children as checked
        //2. if children nodes are checked -> its parent node should also be checked (bottom-up)


        // console.log("event after clicking checkbox", e.target.checked, item?.id);
        setChecked((prev)=>{
            const newCheckedState = {...prev, [item?.id] : e.target.checked};
            //applied recurssion
            const updateChildren = (item) => {
               
                item?.children && item?.children?.forEach((child)=>{
                    newCheckedState[child?.id] = e.target.checked;
                    updateChildren(child);
                })
            }
            updateChildren(item);

            //bottom-up recursion -> if all children are checked -> mark parent as checked
           const checkChildren = (node) => {
                console.log("node ", node);
               //if current node's children also has children
               if(!node.children){
                return ;
               }

               //if it has children, go to the deepest level
               node?.children.forEach((child)=>checkChildren(child));

               //compute isAllChecked -> true if all children of that node are checked
               const isAllChecked = node.children.every((child)=>newCheckedState[child?.id] === true);
               console.log("all checked ", isAllChecked);

               //marking parent node according to isAllChecked
               newCheckedState[node?.id] = isAllChecked;
               console.log("new state ", newCheckedState);
              

           }
        
        
           //checkChildren will be called for evry node in data
            globalData.forEach((root)=>{
                console.log("root", root)
                checkChildren(root)
            }
        );


            return newCheckedState;
        })

    }

    return(
        <div className="flex flex-col justify-start pl-6">
            {localData.map((item)=>(
                    <div key={item?.id}>
                        <input 
                            type="checkbox"
                            checked={checked[item?.id] || false}
                            onChange={(e)=>handleOnChange(e,item)}    
                        />
                        <span>{item?.name}</span>
                        {item?.children && (
                            <Checkboxes localData={item?.children} globalData={globalData} checked={checked} setChecked={setChecked}/>
                        )}
                    </div>
                )
            )}
        </div>
    )
}

export default Checkboxes


/**
 * Approach  :
 * - build basic ui with nested structure
 * - think about state -> it should come from parent level, checking of checkboxes
 * - if a parent node is checked -> all it's children should be checked
 * - if all children nodes of a parent node are checked -> parent node should also be checked
 */