import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { topics } from "../utils/constants";

const Discover = () => {
  const router = useRouter();
  const { topic } = router.query;

  const activeTopicStyle =
    "xl:border-2 hover:bg-primary xl:border-[#F51997] px-3 py-2 rounded xl:rounded-full cursor-pointer text-[#ff1997] flex items-center gap-2 justify-center";
  const topicStyle =
    "xl:border-2 hover:bg-primary xl:border-gray-300 px-3 py-2 rounded xl:rounded-full cursor-pointer text-black flex items-center gap-2 justify-center";

  return (
    <div className="pb-6 xl:border-b-2 xl:border-gray-200">
      <p className="hidden m-3 mt-4 font-semibold text-gray-500 xl:block">
        Popular Topics
      </p>

      <div className="flex flex-wrap gap-3">
        {topics.map((item, i) => (
          <Link href={`/?topic=${item.name}`} key={i}>
            <div
              className={topic === item.name ? activeTopicStyle : topicStyle}
            >
              <span className="text-2xl font-bold xl:text-md">{item.icon}</span>
              <span className="hidden font-medium capitalize text-md xl:block">
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Discover;
