"use client";
import Footer from "@/components/Footer";
import Resource from "@/components/Resource";
import SearchBar from "@/components/SearchBar";
import React, { useEffect, useState } from "react";
import Searchbox from "@/components/searchbox";
import { BiCategory } from "react-icons/bi";
import Loainding from "@/components/Loainding";
import Erro from "@/components/Erro";

// Define resource type more precisely
type ResourceType = {
  title: string;
  views: number;
  description: string;
  rating: number; // Changed from 'Number' to 'number'
  _id: string;
  thumbnail: string;
};

const Page: React.FC = () => {
  const [keyword, setKeyword] = useState<{
    searchWord: string;
    category: string[];
  }>({
    searchWord: "",
    category: [],
  });

  const [data, setData] = useState<ResourceType[]>([]); // Specify the type of data
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch data from backend when keyword or category changes
  useEffect(() => {
    fetchData();
  }, [keyword]);

  // Fetch data from the backend API with query params for keyword and category
  const fetchData = async () => {
    try {
      setLoading(true); // Start loading when fetching
      const res = await fetch(
        `http://localhost:3001/resources?keyword=${encodeURIComponent(
          keyword.searchWord
        )}&category=${encodeURIComponent(keyword.category.join())}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setData(data);
      setError(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // Render resources as components
  const elementResource = data.map((resource) => (
    <Resource
      key={resource._id}
      thumbnail={resource.thumbnail}
      views={resource.views}
      id={resource._id}
      title={resource.title}
      rating={resource.rating}
    />
  ));

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      {/* Header Section */}
      <header className="px-6 py-8 bg-gray-800 border-b border-gray-700">
        <h1 className="text-lg font-medium text-gray-100 mb-2">
          Explore Resources
        </h1>
        <p className="text-sm text-gray-400">
          Find curated content and tools tailored to your needs.
        </p>
      </header>

      {/* Search Section */}
      <section className="px-6 py-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <SearchBar setKeyword={setKeyword} />
          <div className="mt-4">
            <Searchbox setKeyword={setKeyword} />
          </div>
        </div>
      </section>

      {/* Main Content */}
      {loading ? (
        <Loainding />
      ) : error ? (
        <Erro />
      ) : (
        <main className="px-6 py-10 bg-gray-900">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {elementResource}
          </div>
        </main>
      )}

      {/* Footer */}
      {/* <Footer className="mt-auto" /> */}
    </div>
  );
};

export default Page;
