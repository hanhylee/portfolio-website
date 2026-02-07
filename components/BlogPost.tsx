import React from 'react';
import { BLOG_POSTS } from '../constants';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

interface BlogPostProps {
  id: string;
  onBack: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ id, onBack }) => {
  const post = BLOG_POSTS.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <p className="text-xl text-gray-600">Post not found.</p>
        <button onClick={onBack} className="mt-4 text-primary">Back to Blog</button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="inline-flex items-center text-gray-500 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Articles
        </button>

        <article className="prose lg:prose-xl">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </span>
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4" />
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </header>
          
          <div className="mt-8 text-gray-700 leading-relaxed space-y-4" dangerouslySetInnerHTML={{ __html: post.content }} />
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="italic text-gray-500">
              Thanks for reading! Feel free to reach out on LinkedIn if you want to discuss this topic further.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;