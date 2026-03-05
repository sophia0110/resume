import React from "react";

type Work = {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
  skills?: string;
};


const works: Work[] = [
  {
    id: 1,
    title: "高級軟體工程師",
    company: "緯創資通股份有限公司",
    period: "2022/8 – 在職中",
    description: [
      "主導電網管理系統與風能管理系統前端架構從 0 到 1 建置，建立專案結構、開發環境與程式碼規範，制定團隊開發流程標準，使後續功能擴充效率提升約 20%。",
      "設計前後端分離架構（React.js / Next.js），統一資料流管理與模組化設計，降低跨模組耦合度，顯著提升系統可維護性與長期擴展能力。",
      "支援 Angular.js 專案開發與維護，透過 Tailwind CSS / Sass 建立樣式系統規範。",
      "與 PM、設計師與後端工程師協作，成功實現 PM 所規劃的操作流程與功能需求，採 Scrum 敏捷流程進行需求迭代與版本交付。",
      "導入自動化測試流程，使用 Jest、Vitest 與 Playwright 建立單元測試與 E2E 測試。",
      "參與系統管理平台功能開發，實作與調整 RESTful API（Redfish）以支援設備狀態管理。",
      "具備跨層問題排查能力，能從前端介面追蹤至 API 與服務端狀態。"
    ],
    skills: "React.js · Next.js · Angular.js · TypeScript · Tailwind CSS · Sass · Git · Jest · Vitest · Playwright · RESTful API",
  },
  {
    id: 2,
    title: "前端工程師",
    company: "研鼎智能股份有限公司",
    period: "2021/6 – 2022/8",
    description: [
      "負責地圖平台前端開發與功能維護，包含資料視覺化與互動式地圖操作。",
      "串接地理資訊 API，實作地點搜尋、圖資顯示與地理運算功能。",
      "規劃前端模組架構，提升專案可讀性與可維護性。",
      "與 PM、設計師與後端工程師協作完成客製化專案。",
      "實作 RWD 響應式設計，優化跨裝置使用體驗。",
      "參與 16+ 專案開發，同時負責多專案維護與版本迭代。",
      "於 Linux 環境與 Docker 架構下進行開發與部署。"
    ],
    skills: "HTML · CSS · JavaScript · jQuery · Git · Docker · Linux",
  },
  {
    id: 3,
    title: "規劃師",
    company: "惇陽工程顧問有限公司",
    period: "2018/8 – 2020/8",
    description: [
      "參與 25+ 專案投標與研究規劃報告撰寫。",
      "獨立負責 8 專案執行與跨部門協調。",
      "培養專案管理、時程控管與跨團隊溝通能力。"
    ],
    skills: "AutoCAD · ArcGIS · Illustrator · 專案管理",
  },
];


const List: React.FC = () => (
  <div className="space-y-16">
    {works.map(({ id, title, company, period, description, skills }) => (
      <div key={id} className="border-b border-neutral-200 pb-12">

        <div className="text-xl font-semibold tracking-tight">
          {company}
        </div>

        <div className="text-neutral-500 mt-1">
          {title} · {period}
        </div>

        <ul className="mt-6 space-y-3 text-neutral-600 leading-relaxed">
          {description.map((desc, index) => (
            <li key={index}>• {desc}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-6">
          {skills?.split(" · ").map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    ))}
  </div>
);

export default List;
