import { Post } from "../page/Home"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import { Link, useLocation } from "react-router-dom";
import { getUsers } from "../features/userSlice";
import { Button, Table } from "react-bootstrap";
import { getPosts } from "../features/postSlice";
import PostItem from "./PostItem";


export interface User{
    user: any;
    id: number,
    name: string,
    username: string,
    email: string,
    address: object
}

const User = () => {


    const dispatch = useDispatch<AppDispatch>()


    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const userId = searchParams.get('userId');

    
    let getUser:User[] = useSelector((state:User)=>state.user.users)
   
    useEffect(()=> {
      dispatch(getUsers())
    }, [dispatch])
   
    useEffect(()=> {
      dispatch(getPosts())
    }, [dispatch])

    let posts:Post[] = useSelector((state:Post)=>state.post.posts)
    let users:User[] = getUser.filter(
        (user:User) => user.id.toString() == userId)

    return (
        <div>
            {users && (users.map((user)=>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Posts</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <th>{user.name}</th>
                    <th>{user.email}</th>
                    <th>{user.username}</th>
                    <th>{posts.filter((post)=>post.userId==user.id).map((item)=><div>
                        <PostItem key={item.id} post={item} />
                        <br></br>
                        </div>)}</th>
                    </tr>
                    </tbody>
                </Table>
                )
            )}
            <Link to='/'><Button variant="dark">Back to home page</Button></Link>
        </div>
    )
}

export default User
