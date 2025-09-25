import List from "./components/List/List";
import ProjectList from "./components/List/ProjectList";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-gray-100">
      <div className="grid grid-cols-4 gap-4 mt-4 grow">
        <div className="col-span-1 rounded-lg shadow  bg-primary-500/20 p-4 space-x-2">
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
            學歷：銘傳大學 都市規劃與防災學系、環境規劃與永續發展學分學程
          </div>
          <div className="p-2 text-lg font-semibold">
            財團法人資訊工業策進會 582個小時 前端工程師就業養成班
          </div>
          <div className="border-b border-gray-300 p-2 text-lg font-semibold">
            聯絡方式：
          </div>
          <div className="p-2 text-lg font-semibold flex-wrap">
            Email: 0110sophiasu@gmail.com
          </div>

          <div className="p-2 text-lg font-semibold flex-wrap">
            github: https://github.com/sophia0110
          </div>
        </div>
        <div className="col-span-3">
          <div className="pb-2 font-bold text-xl">工作經歷：</div>
          <List />
        </div>
        <div className="col-span-3 mt-4">
          <div className="pb-2 font-bold text-xl">專案Demo：</div>
          <ProjectList />
        </div>
      </div>
    </main>
  );
}
