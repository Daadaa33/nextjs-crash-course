

const PostId = async ({params }) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const postData = await data.json()

    console.log("postData", postData)
    return (
    <div>
        <h1>{params.id}</h1>
        <p>{postData.title}</p>
        <span>{postData.body}</span>
    </div>
  )
}

export default PostId