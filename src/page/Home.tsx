import React from 'react'
import { useEffect } from "react";
import {getPosts} from '../features/postSlice'
import {getComments} from '../features/commentSlice'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from '../store/store';
import { Navigation } from '../components/Navigation';
import PostItem from '../components/PostItem';
import { Accordion, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export interface Post{
        title:string,
        body:string,
        userId:number,
        id:number,
        post:any
    }
    
export default function Home(){
    

    const dispatch = useDispatch<AppDispatch>()
    //записал все посты в переменную типа Post[]
    let posts:Post[] = useSelector((state:Post)=>state.post.posts)
  //вызвал функцию получения постов
    useEffect(()=> {
      dispatch(getPosts())
    }, [dispatch])

    return(
        <div>
            <Navigation></Navigation>
            <Accordion defaultActiveKey="0">
                {//выгрузил в посты в ввиде компонента PostItem
                posts?.map((post:Post)=>(  
                <Accordion.Item key={post.id} eventKey={post.id.toString()}>
                    <PostItem key={post.id} post={post} />
                </Accordion.Item>))}      
            </Accordion>     
        </div>
    )

}
