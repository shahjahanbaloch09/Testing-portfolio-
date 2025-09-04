import React from 'react';
import Section from './Section';
import { BLOG_POSTS } from '../constants';
import useFadeIn from '../useFadeIn';

const BlogPostCard: React.FC<{ post: typeof BLOG_POSTS[0], delay: number }> = ({ post, delay }) => {
  const [ref, isVisible] = useFadeIn<HTMLDivElement>();
  return (
    <div 
      ref={ref} 
      className={`fade-in ${isVisible ? 'visible' : ''} bg-white rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img src={post.image} alt={post.title} loading="lazy" className="w-full h-56 object-cover" />
      <div className="p-6">
        <p className="text-sm text-orange-500 font-semibold mb-2">{post.date}</p>
        <h3 className="text-xl font-bold text-slate-800 mb-3">{post.title}</h3>
        <p className="text-slate-600 line-clamp-3">{post.excerpt}</p>
      </div>
    </div>
  );
}

const Blog: React.FC = () => {
  return (
    <Section id="blog" title="Achievements & Life Updates">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post, index) => (
          <BlogPostCard key={index} post={post} delay={index * 100} />
        ))}
      </div>
    </Section>
  );
};

export default Blog;