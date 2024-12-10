type views = {
  file: any;
};
import { File } from "buffer";
import React from "react";
import { BsDownload } from "react-icons/bs"; // Import the download icon

const Viewer = ({ file }: views) => {
  if (!file || !file.type || !file.url) {
    return (
      <div className="flex items-center justify-center h-64 text-red-500 border border-red-300 rounded-lg">
        No file provided
      </div>
    );
  }

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = file.url;
    link.download = file.url.split("/").pop() || "download"; // Use the file name from the URL or default to "download"
    link.click();
  };

  const renderFile = () => {
    switch (file.type) {
      case "image":
        return (
          <img
            src={file.url}
            alt="File content"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        );
      case "pdf":
        return (
          <iframe
            src={file.url}
            title="PDF Viewer"
            className="w-full p-1 rounded-lg flex-1 h-screen"
          />
        );
      case "text":
        return (
          <iframe
            src={file.url}
            title="Text Viewer"
            className="w-full h-80 rounded-lg"
          />
        );
      case "video":
        return (
          <video
            controls
            className="max-w-full max-h-full rounded-lg outline-none"
          >
            <source src={file.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        );
      case "audio":
        return (
          <audio controls className="w-full rounded-lg outline-none">
            <source src={file.url} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
        );
      default:
        return <div className="text-red-500">Unsupported file type</div>;
    }
  };

  return (
    <div className="relative flex items-center justify-center w-full border bg-gray-900 text-gray-300 p-6 shadow-md max-w-4xl mx-auto border-gray-600 rounded-l h-full">
      {renderFile()}

      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="absolute top-4 right-4 bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700"
      >
        <BsDownload size={20} />
      </button>
    </div>
  );
};

export default Viewer;
