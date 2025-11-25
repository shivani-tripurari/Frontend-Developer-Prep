export interface CommentType {
    id : number,
    text : string,
    reply : CommentType[],
}

//initial data
const initialComments: CommentType[] = [
    {
        id : 1,
        text : "First comment",
        reply : [
            {
                id : 2,
                text : "Reply 1 to first comment",
                reply : []
            }
        ]
    },
    {
        id : 5,
        text : "Second comment",
        reply : []
    }
]

export {initialComments} ;