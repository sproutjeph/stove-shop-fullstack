import React from "react";
interface IProps {
  kitImg: string;
  kitMessage: string;
}

const StarterKit = ({ kitImg, kitMessage }: IProps) => {
  return (
    <div className="">
      <img alt="" src={kitImg} className="rounded-md" />
      <div className="mt-2">
        <h2>Get Started Fast</h2>
        <p className="">{kitMessage}</p>
      </div>
    </div>
  );
};

export default StarterKit;
