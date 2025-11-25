
import { useState } from "react"
import CommentList from "./components/CommentList"
import { CommentType, initialComments } from "./data/data"
function App() {

  //local states 
  const [comments, setComments] = useState(initialComments); 
  //handler function to add comments

  const addCommentsToTree = (comments:CommentType[], parentID:number, text:string):CommentType[] => {
    //we will get individual nodes
    return comments.map((item)=>{
      //2 cases : if parentID = item.id -> top level comment
      // else : nested/child level comment -> call recursively

      if(parentID === item?.id){
        //
        return{
          ...item,
          //array of node objects that contain id, text, reply[]
          reply:[...item.reply, {id:Date.now(), text:text, reply:[]}]
        }
      }
      //if parentID not equal to item.id
      return{
        ...item,
        reply : addCommentsToTree(item?.reply, parentID, text)
      }

    })
  }

  //we need 3 things : parentId, text, 
  const handleAddNewComments = (parentId:number, text:string) => {
    //paasing comments stae, parentId, text
    const updatedComments = addCommentsToTree(comments, parentId, text);
    setComments(updatedComments);
  }
 
  return (
    <>
      <CommentList commentsData={comments} addNewComments={handleAddNewComments} />
    </>
  )
}

export default App
