import PostCard from '@/app/components/PostCard/PostCard';
import React from 'react'
//ejecuta la peticion a la api
async function loadPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await res.json()
    return data
}


//React server component

async function PostPage() {
  const posts = await loadPosts();
  console.log(posts)
  return (
  <div  >
        {posts.map((post) =>(
         <PostCard post={post} key={post.id} className='container '/>  
        ))}
    </div>
  );
}

export default PostPage