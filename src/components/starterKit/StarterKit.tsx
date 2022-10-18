import React from "react";
interface IProps {
  kitImg: string;
  kitMessage: string;
}

const StarterKit = ({ kitImg, kitMessage }: IProps) => {
  return (
    <div className=" md:w-[40rem] md:h-[25rem]">
      <img alt="" src={kitImg} className="rounded-md" />
      <div className="mt-2">
        <h2>Get Started Fast</h2>
        <p className="md:w-[35rem]">{kitMessage}</p>
      </div>
    </div>
  );
};

export default StarterKit;
