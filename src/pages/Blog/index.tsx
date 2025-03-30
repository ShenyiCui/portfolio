import React, { useState } from 'react';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

import { blogPosts } from '@/data/blogposts';

// Define the available tags for filtering (include "All" for no filter)
const allTags = ['All', 'Tech4Good', 'Education', 'Community', 'Internship', 'Technical', 'Corporate'];

export default function BlogPage() {
  // Maintain an array of selected tags; default is "All"
  const [selectedTags, setSelectedTags] = useState(['All']);

  // Handle toggling tags in the filter
  const handleTagClick = (tag: string) => {
    if (tag === 'All') {
      // Reset to "All"
      setSelectedTags(['All']);
    } else {
      let updatedTags;
      if (selectedTags.includes('All')) {
        // Remove "All" if another tag is selected
        updatedTags = [tag];
      } else if (selectedTags.includes(tag)) {
        // Remove tag from selection if already selected
        updatedTags = selectedTags.filter(t => t !== tag);
        if (updatedTags.length === 0) {
          // If no tags remain, revert to "All"
          updatedTags = ['All'];
        }
      } else {
        // Add the new tag
        updatedTags = [...selectedTags, tag];
      }
      setSelectedTags(updatedTags);
    }
  };

  // Filter posts: if "All" is selected, display all posts;
  // otherwise, display posts that include every selected tag.
  const filteredPosts = selectedTags.includes('All')
    ? blogPosts
    : blogPosts.filter(post => selectedTags.every(tag => post.tags.includes(tag)));

  return (
    <>
      <NavBar />
      <div className='w-full h-full flex justify-center'>
        <div className='relative w-full max-w-7xl h-full grid grid-cols-1 px-5 md:px-12'>
          {/* Filter Bar */}
          <div className='mb-8'>
            <h2 className='font-montserrat text-2xl font-bold mb-4'>Filter by Tags</h2>
            <div className='flex flex-wrap gap-2'>
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset transition 
                  ${
                    selectedTags.includes(tag) ? 'bg-blue-100 text-blue-700 ring-blue-700/10' : 'bg-gray-50 text-gray-600 ring-gray-500/10'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {filteredPosts.map(post => (
              <div key={post.id} className='divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow'>
                {/* Post Image */}
                <img className='w-full h-36 md:h-60 object-cover' src={post.imageUrl} alt={post.title} />

                {/* Post Footer */}
                <div className='px-4 py-4 sm:px-6'>
                  <h3 className='font-montserrat text-lg font-bold'>{post.title}</h3>
                  <p className='mt-2 text-sm text-gray-500'>{post.subtitle}</p>

                  {/* Tags */}
                  <div className='mt-2 flex flex-wrap gap-2'>
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className='inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* FOOTER */}
      <Footer />
    </>
  );
}
