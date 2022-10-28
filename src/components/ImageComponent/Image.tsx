import React, { useRef, useEffect, useState } from "react";
import { ArrowUpTrayIcon, MinusIcon } from "@heroicons/react/24/outline";

const Images = () => {
  const uploadInputRef = useRef<any>();
  const [imageFiles, setImageFiles] = useState<string[]>([]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    const filesArr: string[] = [];

    if (files) {
      for (let i = 0; i < files?.length; i++) {
        filesArr.push(URL.createObjectURL(files[i]));
      }
    }
    setImageFiles([...imageFiles, ...filesArr]);
  };

  const handleClickUpload = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    uploadInputRef.current.click();
  };

  const handleRemoveFile = (e: number) => {
    const filtered = imageFiles.filter((item, index) => index !== e);
    setImageFiles(filtered);
  };

  useEffect(() => {
    console.log(imageFiles);
  }, [imageFiles]);

  return (
    <>
      <div className="xl:w-1/2 lg:w-2/3 sm:w-full intro-y box">
        <div className="p-5">
          <form className="flex items-center">
            <input
              type="file"
              name="Image Upload"
              id="image-upload"
              multiple
              onChange={handleUpload}
              ref={uploadInputRef}
              className="hidden"
            />
            <button
              className="btn btn-warning w-30 h-8"
              onClick={handleClickUpload}
            >
              <ArrowUpTrayIcon className="w-5 h-5 mr-2" /> Upload
            </button>
          </form>
          <div className="image-gallery-wrapper mt-6">
            <div className="flex flex-wrap -m-1 md:-m-3">
              {!!imageFiles.length &&
                imageFiles.map((image, index) => (
                  <div
                    className="flex flex-wrap lg:w-full xl:w-full"
                    key={`${image}_${index}`}
                  >
                    <div className="w-full p-1 md:p-3 relative">
                      <img
                        alt="gallery"
                        data-action="zoom"
                        className=" object-cover object-center w-full h-32 xl:h-44 rounded-lg"
                        src={image}
                      />

                      <button
                        className="rounded-full border-2 border-red-600 absolute right-2 top-2"
                        onClick={() => handleRemoveFile(index)}
                      >
                        <MinusIcon className="w-6 h-6 text-red-600" />
                      </button>
                    </div>
                  </div>
                ))}

              {!imageFiles.length && (
                <div className="w-full p-1 md:p-3">
                  <p>No Uploaded Images!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Images;
