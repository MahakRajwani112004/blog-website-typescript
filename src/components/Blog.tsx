

import React from 'react';

interface BlogProps {
    title: string;
    author: string;
    date: string;
    content: string;
    imgUrl: string;
}


export default function Blog(props : BlogProps) {
    const { title, author, date, content, imgUrl } = props;
    return (
        <div className="border p-4 rounded-lg shadow-md mb-4   ">
            <img src={imgUrl} alt={title} className="w-full h-[300px] object-cover rounded-t-lg" />
            <h3 className="font-bold text-xl font-edu-dots">{title}</h3>
            <p className="text-gray-600 font-roboto-slab ">By {author} on {date}</p>
            <p>{content}</p>
        </div>
    );
}


