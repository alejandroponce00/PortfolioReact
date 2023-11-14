'use client'
import React from 'react';
import Link from 'next/link';


//React client component
function PostCard( { post}) {
  return (<div>
   <Link href={`/posts/${post.id}`}> 
   <h3 className='text-warning'>{post.id}.{post.title}</h3></Link>
<p className='text-warning'>{post.url}</p>
<button onClick={() => {
    alert('click funcionando')
}} className='text-white'>
    click
</button>

</div>
  )
}

export default PostCard