import List from "./components/List/List";
import ProjectList from "./components/List/ProjectList";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-gray-100">
      <div className="grid grid-cols-4 gap-4 mt-4 grow">
        <div className="col-span-1 rounded-lg shadow  bg-sky-300/20 p-4 space-x-2">
          <Image
            src="/imgs/sophia.jpg"
            alt="me"
            width={300}
            height={300}
            className="rounded-lg mt-4 mx-auto"
          />
          <div className="border-b border-gray-300 p-2 text-lg font-semibold">
            姓名：Sophia Su
          </div>
          <div className="border-b border-gray-300 p-2 text-lg font-semibold">
            學歷：銘傳大學
          </div>
          <div className="p-2 text-lg font-semibold">資策會前端工程師課程</div>
        </div>
        <div className="col-span-2">
          <div className="pb-2 font-bold text-xl">工作經歷：</div>
          <List />
        </div>
        <div className="col-span-1">
          <div className="pb-2 font-bold text-xl">專案Dome ：</div>
          <ProjectList />
        </div>
      </div>
    </main>
  );
}
