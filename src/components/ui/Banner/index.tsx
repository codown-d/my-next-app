import React from "react";
import Lace from "../Lace";
export default function () {
  let infoList = [{
    url: "http://ahjr.ah.gov.cn/zhjrfw/resource/newBanner/30c7e575-3c23-4939-8383-4a2db445237f.png",
    label: "我要融资",
  },
  {
    url: "http://ahjr.ah.gov.cn/zhjrfw/resource/newBanner/30c7e575-3c23-4939-8383-4a2db445237f.png",
    label: "我要担保",
  },
  {
    url: "http://ahjr.ah.gov.cn/zhjrfw/resource/newBanner/30c7e575-3c23-4939-8383-4a2db445237f.png",
    label: "应急转贷",
  },
  {
    url: "http://ahjr.ah.gov.cn/zhjrfw/resource/newBanner/30c7e575-3c23-4939-8383-4a2db445237f.png",
    label: "电子保函",
  },
  {
    url: "http://ahjr.ah.gov.cn/zhjrfw/resource/newBanner/30c7e575-3c23-4939-8383-4a2db445237f.png",
    label: "政策查询",
  },];
  return (
    <div className=" bg-slate-100" style={{ height: `calc(100vh - 3.5rem)` }}>
      <div className="relative">
        <img
        src="http://ahjr.ah.gov.cn/zhjrfw/resource/newBanner/a80755e4-ee2b-43be-8382-48d1e9e52b50.jpg"
        alt=""
        className="flex w-full"
      />
      <Lace></Lace>
      </div>
      <div className="main-wrap flex  justify-center">
        <div className="flex flex-wrap gap-10 p-10 py-5 max-w-6xl bg-white rounded-[20px] shadow shadow-blue-[rgb(144 164 174)]/50">
          {infoList.map((item) => {
            return (
              <div className="flex justify-center items-center flex-col ">
                <img src={item.url} alt="" className="w-[40px]" />
                <span className="my-2 ">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
