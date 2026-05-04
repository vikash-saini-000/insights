import React from "react";
import { useParams } from "react-router-dom";

const ResultPage = () => {
  const { username } = useParams();

  // Fake data (for now)
  const data = {
    followers: "12.4K",
    following: "320",
    posts: "87",
    engagement: "5.6%",
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white px-6 py-10">

      <h1 className="text-3xl font-bold text-center mb-10">
        @{username} Insights
      </h1>

      <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">

        <div className="bg-[#1a1a1a] p-6 rounded-2xl text-center">
          <h2 className="text-2xl font-bold">{data.followers}</h2>
          <p className="text-gray-400">Followers</p>
        </div>

        <div className="bg-[#1a1a1a] p-6 rounded-2xl text-center">
          <h2 className="text-2xl font-bold">{data.following}</h2>
          <p className="text-gray-400">Following</p>
        </div>

        <div className="bg-[#1a1a1a] p-6 rounded-2xl text-center">
          <h2 className="text-2xl font-bold">{data.posts}</h2>
          <p className="text-gray-400">Posts</p>
        </div>

        <div className="bg-[#1a1a1a] p-6 rounded-2xl text-center">
          <h2 className="text-2xl font-bold">{data.engagement}</h2>
          <p className="text-gray-400">Engagement</p>
        </div>

      </div>

    </div>
  );
};

export default ResultPage;