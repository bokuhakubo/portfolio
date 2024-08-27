import Image from "next/image";

export default function Home() {
  return (
    <div className="px-5 py-10 max-w-2xl m-auto">
      <div>
        <div className="w-24 rounded-full overflow-hidden mb-5">
          <img src="/profile.jpg" />
        </div>
        <h1 className="text-xl mb-5">Naoto Kubota</h1>
        <p>インターネットのサービスを作っています。</p>
        <span className="block w-12 h-0.5 bg-white mt-5"></span>
      </div>
      <div className="mt-20">
        <h2 className="text-3xl font-medium mb-5">Products</h2>
        <ul className="max-w-md">
          <li>
            <a href="" className="block p-4 bg-white text-black rounded-md relative">
              <h3 className="text-xl font-bold">Hotlist</h3>
              <p className="text-sm mt-2">愛用品を記録・共有できるサービス</p>
              <div className="text-center"><span className="text-sm bg-gray-200 text-gray-700 inline-block px-6 py-1 rounded-full mt-4">開発中</span></div>
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute top-0 bottom-0 right-5 m-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg> */}
            </a>
          </li>
        </ul>
      </div>
      {/* <div className="mt-20">
        <h2 className="text-3xl font-medium mb-5">Sub Project</h2>
        <ul className="max-w-md">
          <li>
            <a href="https://birth-journey.vercel.app/" target="_blank" rel="nofollow noopener" className="block p-4 bg-white text-black rounded-md relative">
              <h3 className="text-md font-normal">妊娠記録サービス</h3>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute top-0 bottom-0 right-5 m-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
}
