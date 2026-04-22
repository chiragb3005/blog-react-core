import React from "react";
import service from "../appwrite/conf";
import { Link } from "react-router-dom";

function PostCard ({$id, title, featuredImage}) {
    console.log("preview URL:", service.getFilePreview(featuredImage).toString())
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div className="w-full justify-center mb-4">
                    {featuredImage && (        // 👈 only call if featuredImage exists
                        <img src={service.getFilePreview(featuredImage)} alt={title}
                        className="rounded-xl" />
                        
                    )}
                </div>
                <h2 className="text-2xl font-bold">{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard;