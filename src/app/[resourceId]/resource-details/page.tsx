"use client";
import Erro from "@/components/Erro";
import HeaderCostum from "@/components/HeaderCostum";
import Loainding from "@/components/Loainding";
import Viewer from "@/components/view";
import React, { useEffect, useState } from "react";

type param = {
  resourceId: string;
};
function page({ params }: { params: { resourceId: string } }) {
  const { resourceId } = React.use(params);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fixedImage, setFixedImage] = useState(true);

  useEffect(() => {
    fetchData(resourceId);
    alert(resourceId);
  }, [resourceId]);

  async function fetchData(id: string) {
    try {
      const res = await fetch(`http://localhost:3001/details/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setData(data);
      console.log(data);
      setError(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <HeaderCostum text={data ? data.title : "Resource Details"} />
      {loading ? (
        <Loainding />
      ) : error ? (
        <Erro />
      ) : (
        <div className="min-h-screen bg-gray-900 text-gray-200">
          <div className="px-6 py-8">
            {/* Profile Section */}
            <div className="flex items-center gap-6 bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-700">
                <img
                  src="/default-profile.jpg"
                  alt="Profile"
                  className="object-cover w-full h-full "
                />
              </div>
              <div>
                <p className="text-2xl font-semibold">{data.title}</p>
              </div>
            </div>

            {/* Description Section */}
            <div className="bg-gray-800 p-6 rounded-xl mt-6 shadow-md">
              <p className="text-lg leading-relaxed">{data.description}</p>
            </div>

            {/* Image Gallery */}
            <div className=" flex flex-col gap-4 pt-2 ">
              {data.gallery?.map((image: string, index: number) => (
                <Viewer key={index} file={image} />
              ))}
            </div>
          </div>

          {/* Floating Download Button */}
          {"HELLO WORLD"}
        </div>
      )}
    </>
  );
}

export default page;
