import { Comment } from "./PostItem"

const CommentItem = ({ data }:{data:Comment}) => {

    return (
        <>
            <h1>{data.email}</h1>
            {data.body}

        </>
    )
}

export default CommentItem
