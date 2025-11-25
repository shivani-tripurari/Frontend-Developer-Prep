import React, { FC, useState } from "react";
import { CommentType } from "../data/data";
import CommentList from "./CommentList";

interface CommentsPropType {
    data : CommentType,
   addNewComments: (parentID : number, text : string) => void,
}

const Comments : FC<CommentsPropType> = ({data, addNewComments}) => {
    console.log("data ", data);

    //local states
    const[showReply, setShowReply] = useState(false);
    const[replyText, setReplyText] = useState("");


    //handler functions
    const handleShowReply = () => {
        setShowReply((prev)=>!prev)
    }

    const handleSetReplyText = (e) => {
        setReplyText(e.target.value);
    }

    const handleSendReply = () => {
        //add replyText to parent's state

        //this function takes parentID, comment text
        addNewComments(data?.id, replyText);

        //reset the replyText value
        setReplyText("");
        setShowReply(false);
    }


    return(
        <div>
            <div>{data?.text}</div>
            <button 
                className="border border-red-300 p-1 rounded"
                onClick={()=>handleShowReply()}
            >
                {showReply ? "Cancel" : "Reply"}
            </button>
            {showReply ? 
                <div>
                    <input
                        type="text"
                        className="border rounded p-3"
                        placeholder="Share your thoughts..."
                        value={replyText}
                        onChange={(e)=>handleSetReplyText(e)}
                    />
                    <button 
                        onClick={()=>handleSendReply()}
                        className="p-1 rounded text-white font-bold bg-red-600"
                    >Send</button>
                </div> 
            : <></>}
            {/* if the data node has reply -> call CommentList again */}
            {data?.reply.length > 0 && <CommentList commentsData={data?.reply} addNewComments={addNewComments} />}
        </div>
    )
}

export default Comments;