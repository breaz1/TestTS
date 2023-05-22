import { Post } from "../page/Home"
import { useEffect, useState } from "react";
import { getComments } from '../features/commentSlice'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import CommentItem from "./CommentItem";
import { Accordion, Card, ListGroup, Placeholder } from "react-bootstrap";
import { Link } from "react-router-dom";


export interface Comment{
    comment: any;
    postId:number,
    id:number,
    name:string,
    email:string,
    body:string,
}

const PostItem = ({ post }:{post:Post}) => {

    const dispatch = useDispatch<AppDispatch>()

    const [loading, setLoading] = useState(false);


    let comments:Comment[] = useSelector((state:Comment)=>state.comment.comments)

    const commentaries = comments.filter(
        (comment) => comment.postId == post.id)
        .map((comment) => 
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <CommentItem key={comment.id} data={comment} />
                </ListGroup.Item>
            </ListGroup>
          )

        useEffect(() => {
            dispatch(getComments()).then(() => {
                setLoading(true);
            });
        }, [dispatch]);

    return (
        <div>
            {loading ?(
            <div>
                <div>
                <Accordion.Header>
                    <Card.Body>
                        <div>
                        <Link to={`/user?userId=${post.userId}`}><img src='/user.png' /></Link>
                            <Card.Title><h1>{post.title}</h1></Card.Title>
                            <Card.Text>{post.body}</Card.Text>
                        </div>
                    </Card.Body>        
                </Accordion.Header>
                <Accordion.Body>
                {commentaries}
                </Accordion.Body>
                </div>
            </div> ):(
            <div>
                <div>
                <Accordion.Header>
                    <Card.Body>
                        <div>
                            <Link to={`/user?userId=${post.userId}`}><img src='/user.png' /></Link>
                            <Placeholder as={Card.Title} animation="glow">
                                <Placeholder xs={3} />
                            </Placeholder>
                            <Placeholder as={Card.Text} animation="glow">
                                <Placeholder xs={7} />
                            </Placeholder>
                        </div>
                    </Card.Body>        
                </Accordion.Header>

                </div>
            </div>
            )}
        </div>
    )
}

export default PostItem

