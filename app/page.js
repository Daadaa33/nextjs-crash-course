import Image from 'next/image'

export default async function Home() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    const dataPost = await data.json()
  return (
    <div className="gap-4">
         <h1 className='text-lg font-medium'>Posts current Time {new Date().toLocaleTimeString()}</h1>
      {dataPost.map((post) => (
        <div key={post.id} className="flex flex-col space-y-2">
          <p className="list-item text-gray-90 my-2 bg-gray-50 p-2 rounded-md font-medium">
            {post.title}
          </p>
        </div>
      ))}
    </div>
  );
}
