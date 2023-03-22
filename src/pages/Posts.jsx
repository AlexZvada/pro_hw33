import { useState, useEffect } from "react";


const Posts = () => {
    const [posts, setPosts] = useState([]);

     useEffect(() => {
       const reqest = async () => {
         const responce = await fetch(
           "https://jsonplaceholder.typicode.com/posts"
         );
         const list = await responce.json();
         setPosts(list);
       };
       reqest();
     }, []);
    return <div className="posts">
        {posts.map(({id, title, body}) => {
            return <div key={id} className='post'>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        })}
    </div>
}

export default Posts;