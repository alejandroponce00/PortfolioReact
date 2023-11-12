import React from 'react'
import PostPage from '../Api/page'

async function loadPosts(id){
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    const data = await res.json()
    return data    
}



async function Page({params }) {
   const post = await loadPosts(params.id)
  return (
    <div className='text-white text-center'>
        <h1>{post.id}<br />{post.title}</h1>
        <p>{post.thumbnailUrl}</p>
        <hr />
        <h3>Otras Publicaciones</h3>
        <PostPage />
        </div>
  )
}

export default Page