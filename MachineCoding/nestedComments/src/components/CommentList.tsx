import React, { FC } from "react";
import { CommentType } from "../data/data";
import Comments from "./Comments";

interface CommentListPropsType {
    commentsData: CommentType[],
    addNewComments: (parentID : number, text : string) => void,
}

const CommentList : FC<CommentListPropsType> = ({commentsData, addNewComments}) => {
    console.log("comments list ", commentsData);
    return (
        <div className="m-24 mt-10">
            {commentsData.map((item)=>{
                return(
                    <div key={item?.id}>
                        <Comments data={item} addNewComments={addNewComments}/>
                    </div>
                )
            })}
        </div>
    )
}

export default CommentList;