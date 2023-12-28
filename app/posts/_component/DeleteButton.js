"use client"

import { useRouter } from 'next/navigation';
import React from 'react'

const DeleteButton = ({id}) => {
    const router = useRouter();

    
    const handleDelete = async() => {

        if(!confirm('Are you sure you want to delete this')) return;

        const response = await fetch(`http://localhost:3000/api/post/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
            console.log("Post submitted successfully");
      
            router.push("/posts");
            router.refresh();
          } else {
            console.error("Error submitting post");
          }
    }

  return (
    <div>
      <button onClick={handleDelete} className="text-red-600 hover:text-red-900">
        Delete
      </button>
    </div>
  );
}

export default DeleteButton