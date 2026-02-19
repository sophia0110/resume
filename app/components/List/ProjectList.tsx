import React from "react";

type Project = {
  id: number;
  name: string;
  description: string[];
  tech: string[];
  url?: string;
};

const ProjectList = () => {
  const projects: Project[] = [
    {
      id: 1,
      name: "智能電網管理系統",
      description: [
        "負責前端架構設計與功能實作，建構即時監控與數據分析介面。",
        "串接 RESTful API（Redfish）處理設備狀態與資料呈現。",
        "優化資料渲染效能，提升即時數據更新流暢度。"
      ],
      tech: ["React", "Next.js", "TypeScript", "RESTful API","React Flow"],
      url: "https://smartgrid.cloudcleanenergy.com/",
    },
    {
      id: 2,
      name: "高空風能 Dashboard",
      description: [
        "建構風能設備監控與管理後台系統。",
        "設計模組化元件架構，提升功能擴充性。",
        "實作資料視覺化圖表與即時狀態呈現。"
      ],
      tech: ["React", "Tailwind", "Chart Integration"],
      url: "https://wpms.cloudcleanenergy.com/en",
    },
    {
      id: 3,
      name: "原住民族傳統智慧創作保護資訊網",
      description: [
        "參與前端功能維護與優化。",
        "協助改善 RWD 與跨裝置使用體驗。",
        "進行 API 串接與資料呈現優化。"
      ],
      tech: ["HTML", "CSS", "jQuery"],
      url: "https://www.titic.cip.gov.tw/",
    },
    {
      id: 4,
      name: "台北找房+",
      description: [
        "開發房價查詢與地圖互動功能。",
        "整合政府公開資料 API 並進行資料處理。",
        "實作 RWD 與搜尋優化。"
      ],
      tech: ["Map", "API Integration", "RWD"],
      url: "https://househunt.land.gov.taipei/"
    }
  ];

  return (
    <div className="space-y-16">
      {projects.map((project) => (
        <div key={project.id} className="border-b border-neutral-200 pb-12">

          <div className="text-xl font-semibold tracking-tight">
            {project.name}
          </div>

          <ul className="mt-6 space-y-3 text-neutral-600 leading-relaxed">
            {project.description.map((desc, index) => (
              <li key={index}>• {desc}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-sm text-neutral-500 hover:text-neutral-900 transition"
            >
              查看專案 →
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
