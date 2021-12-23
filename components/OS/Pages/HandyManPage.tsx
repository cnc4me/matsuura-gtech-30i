import React from "react";
import CurrentTime from "@/core/context/CurrentTime";

const HandyManPage = () => {
  const clock = CurrentTime.useContainer();

  return (
    <div className="grow bg-neutral-400">
      <div className="flex flex-row bg-neutral-300">
        <div className="flex-grow px-2 text-black font-lcd">HANDY MAN</div>
        <div className="px-2 text-green-700 bg-blue-900 font-lcd">MEM</div>
        <div className="px-2 text-black font-lcd">{clock.currentTime}</div>
      </div>
    </div>
  );
};

export default HandyManPage;
