import React, { useState, useEffect } from "react";
import Pagination from "../components/quote/Pagination"; // Import Pagination
import QuoteCard from "../components/quote/QuoteCard"; // Import QuoteCard
import { Helmet } from "react-helmet"; // For SEO/meta

// Sample quote data (MHQ UK Consultants related)
const sampleQuotes = [
  {
    id: 1,
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "Inspiration",
  },
  {
    id: 2,
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "Motivation",
  },
  {
    id: 3,
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
    category: "Sports",
  },
  {
    id: 4,
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
    category: "Innovation",
  },
  {
    id: 5,
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    category: "Wisdom",
  },
  {
    id: 6,
    quote: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
    category: "Inspiration",
  },
  {
    id: 7,
    quote: "Do not wait to strike till the iron is hot, but make it hot by striking.",
    author: "William Butler Yeats",
    category: "Motivation",
  },
  {
    id: 8,
    quote: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
    category: "Inspiration",
  },
  {
    id: 9,
    quote: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    category: "Innovation",
  },
  {
    id: 10,
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "Inspiration",
  },
  {
    id: 11,
    quote: "Leadership is not about being in charge. It's about taking care of those in your charge.",
    author: "Simon Sinek",
    category: "Leadership",
  },
  {
    id: 12,
    quote: "Change is the law of life. And those who look only to the past or present are certain to miss the future.",
    author: "John F. Kennedy",
    category: "Wisdom",
  },
  {
    id: 13,
    quote: "There are no shortcuts to any place worth going.",
    author: "Beverly Sills",
    category: "Motivation",
  },
  {
    id: 14,
    quote: "The measure of who we are is what we do with what we have.",
    author: "Vince Lombardi",
    category: "Sports",
  },
  {
    id: 15,
    quote: "If you can dream it, you can do it.",
    author: "Walt Disney",
    category: "Inspiration",
  },
  {
    id: 16,
    quote: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
    category: "Motivation",
  },
  {
    id: 17,
    quote: "The best revenge is massive success.",
    author: "Frank Sinatra",
    category: "Motivation",
  },
  {
    id: 18,
    quote: "Perseverance is not a long race; it is many short races one after the other.",
    author: "Walter Elliot",
    category: "Wisdom",
  },
  {
    id: 19,
    quote: "The road to success and the road to failure are almost exactly the same.",
    author: "Colin R. Davis",
    category: "Leadership",
  },
  {
    id: 20,
    quote: "Success is not how high you have climbed, but how you make a positive difference to the world.",
    author: "Roy T. Bennett",
    category: "Leadership",
  },
];


const QUOTES_PER_PAGE = 4;
const categories = ["All", "Inspiration", "Motivation", "Sports", "Innovation", "Wisdom"];

const QuotePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredQuotes, setFilteredQuotes] = useState(sampleQuotes);

  // This useEffect will re-run whenever the selectedCategory changes
  useEffect(() => {
    // Filter quotes based on selected category
    if (selectedCategory === "All") {
      setFilteredQuotes(sampleQuotes); // Reset to all quotes
    } else {
      const newFilteredQuotes = sampleQuotes.filter((quote) => quote.category === selectedCategory);
      setFilteredQuotes(newFilteredQuotes); // Filtered quotes by category
    }
    setCurrentPage(1); // Reset to page 1 when the category changes
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredQuotes.length / QUOTES_PER_PAGE);

  const currentQuotes = filteredQuotes.slice(
    (currentPage - 1) * QUOTES_PER_PAGE,
    currentPage * QUOTES_PER_PAGE
  );

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    // Smooth scroll to quote list
    const quoteSection = document.getElementById("quote-list");
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* SEO / Meta */}
      <Helmet>
        <title>Inspirational Quotes | Wisdom, Motivation & More</title>
        <meta
          name="description"
          content="Read inspiring and motivational quotes from famous personalities, thinkers, and leaders."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full h-64 md:h-96 bg-gradient-to-tr from-blue-900 via-black to-blue-900 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
          Inspirational Quotes
        </h1>
        <p className="text-white text-lg md:text-xl max-w-2xl">
          Explore a collection of quotes that inspire, motivate, and push you towards success and greatness.
        </p>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
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
      </section>

      {/* Quote Grid */}
      <section id="quote-list" className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {currentQuotes.map((quote) => (
            <QuoteCard key={quote.id} quote={quote.quote} author={quote.author} category={quote.category} />
          ))}
        </div>
      </section>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {/* Newsletter / CTA Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 mt-12 text-center rounded-xl shadow-md">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-blue-900">
          Stay Updated with the Latest Quotes
        </h2>
        <p className="mb-6 text-blue-800 max-w-xl mx-auto">
          Subscribe to get the latest quotes and inspiration delivered directly to your inbox.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto">
          <div className="relative flex-1 w-full">
            <span className="absolute inset-y-0 left-3 flex items-center text-blue-400">📧</span>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 pl-10 rounded-l-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition transform hover:scale-105">
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

export default QuotePage;
