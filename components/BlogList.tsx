import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

interface BlogListProps {
  onReadPost: (id: string) => void;
}

const BlogList: React.FC<BlogListProps> = ({ onReadPost }) => {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Blog</h2>
          <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
            Latest Articles
          </p>
        </div>

        <div className="space-y-8">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <div className="p-6 sm:p-8">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors cursor-pointer" onClick={() => onReadPost(post.id)}>
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Tag className="h-4 w-4 text-gray-400" />
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => onReadPost(post.id)}
                    className="inline-flex items-center text-primary font-medium hover:text-blue-800 transition-colors"
                  >
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;