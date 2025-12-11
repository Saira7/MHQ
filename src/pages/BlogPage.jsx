// pages/BlogPage.jsx
import React, { useState } from "react";
import BlogCard from "../components/blog/BlogCard";
import Pagination from "../components/blog/Pagination";
import { Helmet } from "react-helmet"; // For SEO/meta

// Sample blog data (MHQ UK Consultants related)
const samplePosts = [
  {
    id: 1,
    title: "Transforming Your Business with MHQ UK Consultants",
    excerpt: "Discover how MHQ UK Consultants help organizations navigate change and drive transformation effectively.",
    author: "Alice Brown",
    date: "2025-08-15",
    category: "Transformation",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80", // business team
  },
  {
    id: 2,
    title: "5 Key Strategies for Effective Project Management",
    excerpt: "Learn the best project management practices MHQ UK Consultants recommend to deliver projects on time and budget.",
    author: "Mark Johnson",
    date: "2025-08-22",
    category: "Project Management",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
  },
  {
    id: 3,
    title: "Leadership Lessons from Top MHQ Consultants",
    excerpt: "Explore leadership principles that MHQ UK Consultants embed in their coaching programs to build stronger leaders.",
    author: "Sophie Lee",
    date: "2025-09-05",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
  },
  {
    id: 4,
    title: "Driving Sustainable Growth in Competitive Markets",
    excerpt: "Learn how MHQ UK Consultants help businesses identify growth opportunities while maintaining sustainability.",
    author: "Emily Turner",
    date: "2025-09-20",
    category: "Growth",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
  },
  {
    id: 5,
    title: "How to Implement Agile in Your Organization",
    excerpt: "Step-by-step guidance from MHQ UK Consultants on adopting Agile methodology for faster results.",
    author: "David Collins",
    date: "2025-10-01",
    category: "Project Management",
    image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
  },
  {
    id: 6,
    title: "Building Resilient Teams in Times of Change",
    excerpt: "MHQ UK Consultants share techniques to strengthen team resilience and adaptability in dynamic environments.",
    author: "Rachel Adams",
    date: "2025-10-10",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
  },
  {
    id: 7,
    title: "Digital Transformation Trends for UK Businesses",
    excerpt: "A detailed overview of how digital innovation is reshaping industries with insights from MHQ UK Consultants.",
    author: "James Walker",
    date: "2025-10-18",
    category: "Transformation",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
  },
  {
    id: 8,
    title: "Effective Stakeholder Management Strategies",
    excerpt: "MHQ UK Consultants reveal techniques for engaging stakeholders and ensuring project success.",
    author: "Laura Mitchell",
    date: "2025-10-25",
    category: "Project Management",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
  },
  {
    id: 9,
    title: "Future of Leadership: Insights from MHQ UK Consultants",
    excerpt: "Explore the evolving skills leaders need to thrive, according to MHQ UK Consultants.",
    author: "Michael Scott",
    date: "2025-11-05",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
  },
  {
    id: 10,
    title: "Sustainable Business Models for Long-Term Growth",
    excerpt: "MHQ UK Consultants discuss building business strategies that balance profitability and sustainability.",
    author: "Sophia Turner",
    date: "2025-11-12",
    category: "Growth",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
  },
  {
    id: 11,
    title: "Optimizing Business Processes for Maximum Efficiency",
    excerpt: "Insights on process improvement from MHQ UK Consultants to save time and resources.",
    author: "Tom Richards",
    date: "2025-11-20",
    category: "Transformation",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
  },
  {
    id: 12,
    title: "Top Project Management Tools Recommended by MHQ Consultants",
    excerpt: "A curated list of tools and techniques to streamline project delivery in modern businesses.",
    author: "Emma Wilson",
    date: "2025-11-28",
    category: "Project Management",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
  },
];

const POSTS_PER_PAGE = 4;
const categories = ["All", "Transformation", "Project Management", "Leadership", "Growth"];

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter posts by category
  const filteredPosts = selectedCategory === "All"
    ? samplePosts
    : samplePosts.filter(post => post.category === selectedCategory);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    // Smooth scroll to blog list
  
  };

  return (
    <>
      {/* SEO / Meta */}
      <Helmet>
        <title>MHQ UK Consultants Blog | Insights & Updates</title>
        <meta name="description" content="Read insights, tips, and updates from MHQ UK Consultants on leadership, project management, business transformation, and more." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full h-64 md:h-96 bg-gradient-to-tr from-blue-900 via-black to-blue-900 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
          Insights & Updates
        </h1>
        <p className="text-white text-lg md:text-xl max-w-2xl">
          Read our latest thoughts on business transformation, leadership, and project management from MHQ UK Consultants
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => { setSelectedCategory(cat); setCurrentPage(1); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div id="blog-list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {currentPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>

      {/* Newsletter / CTA Section */}
<section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 mt-12 text-center rounded-xl shadow-md">
  <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-blue-900">
    Stay Updated with MHQ Insights
  </h2>
  <p className="mb-6 text-blue-800 max-w-xl mx-auto">
    Subscribe to get the latest articles, tips, and updates from MHQ UK Consultants directly in your inbox.
  </p>

  <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto">
    <div className="relative flex-1 w-full">
      <span className="absolute inset-y-0 left-3 flex items-center text-blue-400">
        📧
      </span>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full p-3 pl-10 rounded-l-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
    <button className="bg-blue-600 text-white px-8 py-3 rounded-r-lg font-medium hover:bg-blue-700 transition transform hover:scale-105">
      Subscribe
    </button>
  </div>

  <p className="mt-4 text-sm text-blue-600">
    We respect your privacy. Unsubscribe at any time.
  </p>
</section>

    </>
  );
};

export default BlogPage;
