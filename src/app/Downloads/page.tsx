import Download from "@/components/Download";
import HeaderCostum from "@/components/HeaderCostum";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Header */}
      <HeaderCostum />

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-2xl font-semibold mb-6">Downloaded Resources</h1>

        {/* Download List */}
        <div className="flex flex-col gap-6">
          <Download />
          <Download />
          <Download />
          <Download />
          <Download />
        </div>
      </div>
    </div>
  );
};

export default Page;
