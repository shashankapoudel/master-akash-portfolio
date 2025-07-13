

import React, { useState } from "react";

const blogs = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet consectetur.",
        content:
            "Lorem ipsum dolor sit amet consectetur. Consequat fringilla adipiscing Lorem ipsum dolor sit amet consectetur. Consequat fringilla adipiscing...Lorem ipsum dolor sit amet consectetur. Consequat fringilla adipiscing...Lorem ipsum dolor sit amet consectetur. Consequat fringilla adipiscing...Lorem ipsum dolor sit amet consectetur. Consequat fringilla adipiscing..",
        image: "/Images/homePhoto.jpg",
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet consectetur.",
        content:
            "Lorem ipsum dolor sit amet consectetur. Consequat fringilla adipiscing...Lorem ipsum dolor sit amet consectetur. Consequat fringilla adipiscing...Lorem ipsum dolor sit amet consectetur. Consequat fringilla adipiscing",
        image: "/Images/homePhoto.jpg",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit amet consectetur.",
        content:
            "Lorem ipsum dolor sit amet consectetur. Consequat fringilla adipiscing...Lorem ipsum dolor sit amet consectetur. Consequat fringilla adipiscing...Lorem ipsum dolor sit amet consectetur. Consequat fringilla adipiscing",
        image: "/Images/homePhoto.jpg",
    },
    {
        id: 4,
        title: "Lorem ipsum dolor sit amet consectetur.",
        content:
            "Lorem ipsum dolor sit amet consectetur. Consequat fringilla adipiscing...",
        image: "/Images/homePhoto.jpg",
    },
];


const BlogPage = () => {
    const [selectedBlog, setSelectedBlog] = useState(null)
    const [active, setActive] = useState('Sound Healing')

    const categories = ['Sound Healing', 'Spiritual Guides', 'Living & self-Transformation']


    return (
        <div className="p-4 lg:p-12 min-h-screen m-2 lg:m-4">
            <div className="flex gap-4 items-center justify-center">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActive(cat)}
                        className={'pb-1 relative font-semibold capitalize text-sm md:text-base transition'}
                    >
                        {cat}
                        {active === cat && (
                            <div className='absolute bottom-0 left-0 w-full h-[3px] bg-[#bb2821] rounded-full' />
                        )}
                    </button>
                ))}
            </div>

            {
                selectedBlog ? (
                    <div className=" w-full lg:w-1/2  mx-auto rounded-lg  p-3 lg:p-6">
                        <button
                            onClick={() => setSelectedBlog(null)}
                            className="text-blue-500 mb-4 hover:underline"
                        >
                            &larr; Back to blogs
                        </button>
                        <h1 className="text-2xl font-bold mb-4">{selectedBlog.title}</h1>
                        <img
                            src={selectedBlog.image}
                            alt={selectedBlog.title}
                            className="w-full rounded-md mb-4 object-contain"
                            loading="lazy"
                        />
                        <p className="text-gray-700">{selectedBlog.content}</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className=" rounded-lg p-3 lg:p-4">
                            <img
                                src={blogs[0].image}
                                alt={blogs[0].title}
                                className="w-full rounded-md mb-4"
                                loading="lazy"
                            />
                            <h2
                                onClick={() => setSelectedBlog(blogs[0])}
                                className="text-xl font-bold text-gray-900 mb-2 cursor-pointer">
                                {blogs[0].title}
                            </h2>
                            <p className="text-gray-600">{blogs[0].content}</p>
                        </div>


                        <div className="grid gap-2">
                            {blogs.slice(1).map((blog) => (
                                <div
                                    key={blog.id}
                                    className="flex flex-col lg:flex-row rounded-lg p-4 items-start"
                                >
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className=" w-full lg:w-1/3 rounded-md mr-4 object-cover"
                                        loading="lazy"
                                    />
                                    <div>
                                        <h3
                                            onClick={() => setSelectedBlog(blog)}
                                            className="text-lg font-bold text-gray-900 mb-2 cursor-pointer">
                                            {blog.title}
                                        </h3>
                                        <p className="text-gray-600">{blog.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
        </div>
    );
};

export default BlogPage;
