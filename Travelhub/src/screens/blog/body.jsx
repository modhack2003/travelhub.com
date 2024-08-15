import React from 'react';
import { featuredPosts, editorsPicks, otherBlogs } from '../../constants/BlogList';

const Body = () => {
  return (
    <div className="font-Poppins text-neutral-900 md:px-32">
      {/* Featured Posts Section */}
      <section className="mt-10 px-4 md:px-8 lg:px-16">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-8">Featured Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {featuredPosts.map((post, index) => (
            <div key={index} className="relative bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <img src={post.image} alt={post.title} className="object-cover w-full h-48 sm:h-56 md:h-64" />
              <div className="p-4 sm:p-6 absolute bottom-0 left-0 bg-black bg-opacity-50 w-full">
                <h3 className="text-lg sm:text-xl md:text-2xl text-white font-bold truncate">{post.title}</h3>
                <p className="text-white mt-2 truncate-line">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editor's Picks Section */}
      <section className="mt-12 px-4 md:px-10 lg:px-10">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-8">Editor's Picks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {editorsPicks.map((pick, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-4">
              <img src={pick.image} alt={pick.title} className="object-cover w-full sm:w-1/3 h-32 sm:h-40 rounded-md" />
              <div className="flex flex-col justify-center w-full">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold truncate">{pick.title}</h3>
                <p className="text-neutral-600 mt-2 truncate-line">{pick.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Blogs Section */}
      <section className="mt-12 px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-8">Other Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {otherBlogs.map((blog, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-4">
              <img src={blog.image} alt={blog.title} className="object-cover w-full sm:w-1/3 h-32 sm:h-40 rounded-md" />
              <div className="flex flex-col justify-center w-full">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold truncate">{blog.title}</h3>
                <p className="text-neutral-600 mt-2 truncate-line">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Body;
