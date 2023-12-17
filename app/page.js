import Image from 'next/image'
import Link from "next/link"
export default async function Home() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    const dataPost = await data.json()
  return (
    <div className="gap-4">
      {dataPost.map((post) => (
        <div key={post.id} className="flex flex-col space-y-2">
          <Link
            href={`/posts/${post.id}`}
            className="list-item text-gray-900 font-medium"
          >
            {post.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
