import PostForm from "../_component/PostForm";


const PostId = async ({params }) => {

    const data = await fetch(`http://localhost:3000/api/post/${params.id}`, { cache: "no-store" });
    const postData = await data.json()

    return <PostForm postData={postData} />;
} 

export default PostId

