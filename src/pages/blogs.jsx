// // Import necessary modules
// import React, { useState } from 'react';

// // Sample blog data
// const blogs = [
//     {
//         id: 1,
//         title: "Lorem ipsum dolor sit amet consectetur.",
//         content: "Full content of blog 1. Lorem ipsum dolor sit amet consectetur adipiscing elit. lorem Full content of blog 1. Lorem ipsum dolor sit amet consectetur adipiscing elit. loremFull content of blog 1. Lorem ipsum dolor sit amet consectetur adipiscing elit. loremFull content of blog 1. Lorem ipsum dolor sit amet consectetur adipiscing elit. loremFull content of blog 1. Lorem ipsum dolor sit amet consectetur adipiscing elit. loremFull content of blog 1. Lorem ipsum dolor sit amet consectetur adipiscing elit. loremFull content of blog 1. Lorem ipsum dolor sit amet consectetur adipiscing elit. loremFull content of blog 1. Lorem ipsum dolor sit amet consectetur adipiscing elit. loremFull content of blog 1. Lorem ipsum dolor sit amet consectetur adipiscing elit. loremFull content of blog 1. Lorem ipsum dolor sit amet consectetur adipiscing elit. loremFull content of blog 1. Lorem ipsum dolor sit amet consectetur adipiscing elit. loremFull content of blog 1. Lorem ipsum dolor sit amet consectetur adipiscing elit. loremFull content of blog 1. Lorem ipsum dolor sit amet consectetur adipiscing elit. loremFull content of blog 1. Lorem ipsum dolor sit amet consectetur adipiscing elit. loremFull content of blog 1. Lorem ipsum dolor sit amet consectetur adipiscing elit. lorem",
//         preview: "Lorem ipsum dolor sit amet consectetur. Consequat fringilla adipiscing...",
//         image: "/Images/homePhoto.jpg", // Replace with your actual image URL
//     },
//     {
//         id: 2,
//         title: "Consequat fringilla adipiscing.",
//         content: "Full content of blog 2. Lorem ipsum dolor sit amet consectetur adipiscing elit.",
//         preview: "Lorem ipsum dolor sit amet consectetur. Consequat fringilla adipiscing...",
//         image: "/Images/homePhoto.jpg",
//     },
//     {
//         id: 3,
//         title: "Tempus placerat tellus ornare nisl.",
//         content: "Full content of blog 3. Lorem ipsum dolor sit amet consectetur adipiscing elit.",
//         preview: "Lorem ipsum dolor sit amet consectetur. Consequat fringilla adipiscing...",
//         image: "/Images/homePhoto.jpg",
//     },
// ];

// export default function BlogPage() {
//     const [selectedBlog, setSelectedBlog] = useState(null);

//     return (
//         <div className="w-full p-6 bg-[#F1F1F1] min-h-screen">
//             {selectedBlog ? (

//                 <div className="w-1/2 mx-auto bg-white p-6 shadow-md rounded-lg">
// <button
//     onClick={() => setSelectedBlog(null)}
//     className="text-blue-500 mb-4 hover:underline"
// >
//     &larr; Back to blogs
// </button>
// <h1 className="text-2xl font-bold mb-4">{selectedBlog.title}</h1>
// <img
//     src={selectedBlog.image}
//     alt={selectedBlog.title}
//     className="w-full rounded-md mb-4 object-contain"
// />
// <p className="text-gray-700">{selectedBlog.content}</p>
//                 </div>
//             ) : (
//                 <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-6">
//                     {/* First blog taking full width */}
//                     <div className=" w-1/2 col-span-1 md:col-span-2 flex">
//                         <div className="w-1/2 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow mr-6">
//                             <img
//                                 src={blogs[0].image}
//                                 alt={blogs[0].title}
//                                 className="w-full object-contain rounded-md mb-4"
//                             />
//                             <h2
//                                 className="text-lg font-bold text-gray-900 cursor-pointer hover:text-blue-500"
//                                 onClick={() => setSelectedBlog(blogs[0])}
//                             >
//                                 {blogs[0].title}
//                             </h2>
//                             <p className="text-gray-600 mt-2">{blogs[0].preview}</p>
//                         </div>

//                         {/* Column with three blogs */}
//                         <div className="w-1/2 flex flex-col gap-6">
//                             {blogs.slice(1, 4).map((blog) => (
//                                 <div
//                                     key={blog.id}
//                                     className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
//                                 >
//                                     <img
//                                         src={blog.image}
//                                         alt={blog.title}
//                                         className="w-full object-contain rounded-md mb-4"
//                                     />
//                                     <h2
//                                         className="text-lg font-bold text-gray-900 cursor-pointer hover:text-blue-500"
//                                         onClick={() => setSelectedBlog(blog)}
//                                     >
//                                         {blog.title}
//                                     </h2>
//                                     <p className="text-gray-600 mt-2">{blog.preview}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Remaining blogs (if any) */}
//                     {blogs.slice(4).map((blog) => (
//                         <div
//                             key={blog.id}
//                             className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
//                         >
//                             <img
//                                 src={blog.image}
//                                 alt={blog.title}
//                                 className="w-full object-contain rounded-md mb-4"
//                             />
//                             <h2
//                                 className="text-lg font-bold text-gray-900 cursor-pointer hover:text-blue-500"
//                                 onClick={() => setSelectedBlog(blog)}
//                             >
//                                 {blog.title}
//                             </h2>
//                             <p className="text-gray-600 mt-2">{blog.preview}</p>
//                         </div>
//                     ))}
//                 </div>
//             )
//             }
//         </div >
//     );
// }


import React, { useState } from "react";

const blogs = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet consectetur.",
        content:
            "Lorem ipsum dolor sit amet consectetur. Consequat fringilla adipiscing...",
        image: "/Images/homePhoto.jpg", // Replace with your actual image
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet consectetur.",
        content:
            "Lorem ipsum dolor sit amet consectetur. Consequat fringilla adipiscing...",
        image: "/Images/homePhoto.jpg",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit amet consectetur.",
        content:
            "Lorem ipsum dolor sit amet consectetur. Consequat fringilla adipiscing...",
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
    return (
        <div className="p-12 min-h-screen">
            {
                selectedBlog ? (
                    <div className="w-1/2  mx-auto shadow-md rounded-lg p-6">
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
                        />
                        <p className="text-gray-700">{selectedBlog.content}</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="bg-white rounded-lg shadow-md p-4">
                            <img
                                src={blogs[0].image}
                                alt={blogs[0].title}
                                className="w-full rounded-md mb-4"
                            />
                            <h2
                                onClick={() => setSelectedBlog(blogs[0])}
                                className="text-xl font-bold text-gray-900 mb-2 cursor-pointer">
                                {blogs[0].title}
                            </h2>
                            <p className="text-gray-600">{blogs[0].content}</p>
                        </div>


                        <div className="grid gap-4">
                            {blogs.slice(1).map((blog) => (
                                <div
                                    key={blog.id}
                                    className="flex  bg-white rounded-lg shadow-md p-4 items-start"
                                >
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-1/3 rounded-md mr-4"
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
