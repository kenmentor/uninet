const Download = () => {
  return (
    <div className="flex items-center justify-between p-4  rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Thumbnail */}
      <div className="flex items-center gap-4">
        <img
          src="/wallpaper2you_171801.jpg"
          alt="Resource Thumbnail"
          className="h-16 w-16 rounded-md object-cover"
        />
        <div>
          <h3 className="text-lg font-medium">Maths Textbook</h3>
          <p className="text-sm text-gray-400">Downloaded on 01 Dec 2024</p>
        </div>
      </div>

      {/* Actions */}
      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
        View
      </button>
    </div>
  );
};

export default Download;
