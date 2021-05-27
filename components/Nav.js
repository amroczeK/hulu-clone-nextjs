import requests from "../utils/requests";
import { useRouter } from "next/router";

// Notes: space-x-10 padding on x axis, last:pr-24 last element has padding right of 24
function Nav() {
  const router = useRouter();

  const routeHandler = (key) => {
    router.push(`/?genre=${key}`);
  };

  return (
    <nav id="nav-container" className="relative">
      <div
        className="flex px-10 sm:px-20 text-2xl whitespace-nowrap
      space-x-10 sm:space-x-20 overflow-x-scroll overflow-y-hidden scrollbar-hide"
      >
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => routeHandler(key)}
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-red active:text-blue-300"
          >
            {title}
          </h2>
        ))}
      </div>
      <div
        id="nav-fade"
        className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12"
      />
    </nav>
  );
}

export default Nav;
