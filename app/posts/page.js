import React from 'react'
import Link from "next/link"
import ListItems from './_component/ListItems';

const PostsPage = async () => {

    const post = await fetch(`http://localhost:3000/api/post`, {
      cache: "no-cache",
    });
    const postData = await post.json()
 
  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Posts
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all posts from the json file
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Link
            href={"/posts/new"}
            type="button"
            className="block rounded-md bg-rose-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
          >
            Add Posts
          </Link>
        </div>

      </div>
      <ListItems />
    </div>
  );
}

export default PostsPage