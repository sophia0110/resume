import List from "./components/List/List";
import ProjectList from "./components/List/ProjectList";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-secondary-400/20">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 grow">
        
        {/* 左側個人資訊區塊 */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-1 rounded-lg shadow bg-primary-500 p-4 w-full">
          <Image
            src="/imgs/sophia.jpg"
            alt="me"
            width={300}
            height={300}
            className="rounded-lg mt-4 mx-auto"
          />

          <div className="border-b border-gray-300 text-lg font-semibold mt-4">
            姓名：Sophia Su
          </div>

          <div className="border-gray-300 text-lg font-semibold mt-4">
            <div>學歷：</div>
            <div>銘傳大學</div>
            <div>都市規劃與防災學系、</div>
            <div>環境規劃與永續發展學分學程</div>
            <div>財團法人資訊工業策進會</div>
            <div className="text-base">
              582個小時 前端工程師就業養成班
            </div>
          </div>

          <div className="text-lg font-semibold mt-4">
            聯絡方式：
          </div>
          <div className="text-base break-words">
            Email: 0110sophiasu@gmail.com
          </div>

          <div className="text-base break-words mt-1">
            GitHub:{" "}
            <a
              href="https://github.com/sophia0110"
              className="text-blue-400 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/sophia0110
            </a>
          </div>
        </div>

        {/* 工作經歷 */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3">
          <div className="pb-2 font-bold text-xl">工作經歷：</div>
          <List />
        </div>

        {/* 專案區塊 */}
        <div className="col-span-1 sm:col-span-2 mt-4">
          <div className="pb-2 font-bold text-xl">專案 Demo：</div>
          <ProjectList />
        </div>
      </div>
    </main>
  );
}
