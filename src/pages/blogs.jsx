import React, { useEffect, useState } from "react";
import BASE_URL from "../config/api";

const BlogPage = () => {
    const [selectedBlog, setSelectedBlog] = useState(null)
    const [blogs, setBlogs] = useState([])
    const [active, setActive] = useState('All')
    const [activeBlogs, setActiveBlogs] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const blogsPerPage = 9;

    const categories = ['All', 'Sound Healing', 'Spiritual Guides', 'Living & self-Transformation']

    const getBlogs = async () => {
        try {
            const res = await fetch(`${BASE_URL}/blogs/get-blogs`);
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            const data = await res.json();
            console.log(data)
            setBlogs(data.data);
        } catch (error) {
            console.error("Failed to fetch blogs:", error);
        }
    };

    console.log(blogs)

    useEffect(() => {

        getBlogs()
    }, [])

    useEffect(() => {

        const filtered = active === 'All' ? blogs : blogs.filter((blog) => blog.category === active)
        setActiveBlogs(filtered)

    }, [active, blogs])

    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = activeBlogs.slice(indexOfFirstBlog, indexOfLastBlog)
    const totalPages = Math.max(1, Math.ceil(activeBlogs.length / blogsPerPage));

    return (
        <div className="p-4 lg:p-12 min-h-screen m-2 lg:m-4">

            {selectedBlog ? (
                <div className="w-full lg:w-1/2 mx-auto rounded-lg p-3 lg:p-6 ">
                    <button
                        onClick={() => setSelectedBlog(null)}
                        className="text-[#bb2821] mb-4 hover:underline"
                    >
                        &larr; Back to blogs
                    </button>
                    <h1 className="text-2xl font-bold mb-4">{selectedBlog.title}</h1>
                    <img
                        src={selectedBlog.images[0]}
                        alt={selectedBlog.title}
                        className="w-full rounded-md mb-4 object-contain"
                        loading="lazy"
                    />
                    <div
                        className="text-gray-700 prose max-w-none"
                        dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                    />
                </div>
            ) : (

                <>
                    <div className="flex gap-8 items-center justify-center">
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                        {currentBlogs.map((blog) => {
                            const textContent = blog.content.replace(/<[^>]+>/g, "");
                            const snippet = textContent.length > 160
                                ? textContent.substring(0, 160) + "..."
                                : textContent;

                            return (
                                <div
                                    key={blog._id}
                                    onClick={() => setSelectedBlog(blog)}
                                    className="flex flex-col rounded-lg p-4 items-start cursor-pointer bg-[#ffffff] shadow-lg hover:text-[#bb2821] relative"
                                >
                                    <img
                                        src={blog.images[0]}
                                        alt={blog.title}
                                        className="w-full rounded-md object-cover transition-transform duration-300 transform hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="mt-3 p-2">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-[#bb2821]">
                                            {blog.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm">{snippet}</p>
                                        <span className="underline text-sm text-[#bb2821] absolute bottom-2 right-2">Read more</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex justify-center mt-6 space-x-2 flex-wrap">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 border rounded ${currentPage === 1
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                : 'bg-white text-[#333] hover:bg-[#bb2821] hover:text-white'}`}
                        >
                            Prev
                        </button>

                        {[...Array(totalPages).keys()].map((num) => {
                            const page = num + 1;
                            return (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`px-4 py-2 border rounded ${page === currentPage
                                        ? 'bg-[#bb2821] text-white'
                                        : 'bg-white text-[#333] hover:bg-[#bb2821] hover:text-white'}`}
                                >
                                    {page}
                                </button>
                            );
                        })}

                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className={`px-4 py-2 border rounded ${currentPage === totalPages
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                : 'bg-white text-[#333] hover:bg-[#bb2821] hover:text-white'}`}
                        >
                            Next
                        </button>

                    </div>

                </>
            )}

        </div >
    );
};

export default BlogPage;
