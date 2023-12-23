

const PostId = async ({params }) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const postData = await data.json()

    return (
    <div>
        <h1>{params.id}</h1>
        <p className="font-bold">{postData.title}</p>
    </div>
  )
}

export default PostId