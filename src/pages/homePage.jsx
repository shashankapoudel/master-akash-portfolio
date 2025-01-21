// import React from 'react'

// const Home = () => {
//     return (
//         <div className=' flex flex-col lg:flex-row mx-10 my-4 p-2 '>

//             <div className='w-2/3 flex flex-col justify-center items-center text-end p-2'>
//                 <p className='text-center p-3 mt-0 mb-4 text-3xl  font-semibold tracking-widest bg-[#C38E82] text-[#3c5551] font-playfair-display '>Himalaya's YOGI AKASH</p>
//                 <p className='text-white font-semibold  text-2xl font-playfair-display tracking-widest text-justify max-w-4xl'>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente doloribus recusandae, saepe vitae corrupti officiis veniam illum? Non eius laboriosam, fugiat fugit tenetur eaque incidunt deleniti repellendus atque recusandae alias.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, praesentium? Dolore numquam vitae, ratione iusto consequatur impedit eius obcaecati reprehenderit pariatur, nihil repellat aspernatur esse, blanditiis nostrum excepturi similique aperiam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquam voluptates est deleniti. Blanditiis, ipsa molestias fugit nam eos inventore debitis beatae exercitationem non culpa ad doloremque alias corporis sapiente Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique velit eaque incidunt adipisci repellat asperiores? Maiores necessitatibus maxime ratione nisi amet, vel modi dolorum et quam cupiditate inventore eaque sit?
//                 </p>
//             </div>

//             <div className='flex items-start justify-start w-1/3 mx-2 py-4 rounded-full'>
//                 <img
//                     src="../public/images/homePhoto.jpg"
//                     alt="Company Logo"
//                     className="w-auto h-full object-cover"
//                 />
//             </div>
//         </div>
//     )
// }

// export default Home


import React from 'react';


const Home = () => {
    return (
        <div className="flex flex-col lg:flex-row mx-8 my-4 p-2">

            <div className="flex items-center justify-center w-full lg:w-1/3 order-none lg:order-1 py-4">
                <img
                    src="../public/images/homePhoto.jpg"
                    alt="HomePage photo"
                    className="w-auto h-full object-cover lg:rounded-none "
                />
            </div>

            <div className="w-full lg:w-2/3 flex flex-col justify-center items-center  text-start lg:text-end">

                <p className="p-2 mt-0 mb-4 text-3xl font-semibold tracking-widest bg-[#C38E82] text-[#3c5551] font-playfair-display text-center ">
                    Himalaya's YOGI AKASH
                </p>
                <p className="text-white lg:font-semibold font-medium lg:text-2xl text-sm font-playfair-display lg:tracking-widest tracking-normal text-justify max-w-4xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente doloribus recusandae, saepe vitae corrupti officiis veniam illum? Non eius laboriosam, fugiat fugit tenetur eaque incidunt deleniti repellendus atque recusandae alias.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, praesentium? Dolore numquam vitae, ratione iusto consequatur impedit eius obcaecati reprehenderit pariatur, nihil repellat aspernatur esse, blanditiis nostrum excepturi similique aperiam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquam voluptates est deleniti. Blanditiis, ipsa molestias fugit nam eos inventore debitis beatae exercitationem non culpa ad doloremque alias corporis sapiente Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique velit eaque incidunt adipisci repellat asperiores? Maiores necessitatibus maxime ratione nisi amet, vel modi dolorum et quam cupiditate inventore eaque sit?
                </p>
            </div>
        </div>
    );
};

export default Home;

