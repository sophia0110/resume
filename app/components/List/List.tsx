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
    title: "工程師",
    company: "緯創資通股份有限公司 (Wistron)",
    period: "2022 - Present",
    description: [
      "1.使用敏捷式開發 scrum",
      "2.參與開發公司數位轉型專案及電網管理專案，主要負責前端開發，部分專案也有進行後端開發。",
      "3.運用React.js/Tailwind 前後分離進行開發及Next.js進行開發，並支援其他專案開發，使用Angular.js sass 進行開發",
      "4.測試工具: Jest、Vitest、playwright",
      "5.運用git 進行版本控制",
    ],

    skills: "Next.js React Angular TypeScript JavaScript HTML CSS",
  },
  {
    id: 2,
    title: "前端工程師",
    company: "研鼎智能股份有限公司（GOYOURLIFE INC.）",
    period: "2021 - 2022",
    description: [
      "1. 地圖平台前端功能維護與新功能研發",
      "- 資料視覺化、炫目之向量地圖運用功能",
      "- 各項圖資運用、地理運算、 地點/門牌搜尋 API 介接",
      "- 各項客製化專案功能開發與維護",
      "2.規劃執行介面架構及模組之設計，並控管介面設計進度。",
      "3.RWD 響應式網頁設計",
      "4.同時與 PM、設計師、Back-End 共同合作，串接API。",
      "5.運用git 進行版本控制",
      "6.參與過16個專案，同時執行2個專案並維護專案網頁",
      "7. 使用 Linux系統及Docker",
    ],
    skills: "Linux Docker HTML CSS JQuery PHP Yii Git",
  },
  {
    id: 3,
    title: "規劃師(PM)",
    period: "2018-2020",
    company: "惇陽工程顧問有限公司",
    description: [
      "參與超過25個專案投標，撰寫書面研究報告及規劃內容，能有條理的區分事件的輕重緩急，具備專案控管得能力、溝通協調能力及擁有8個獨立執行專案的經驗，並且同時負責的5個專案。",
    ],
    skills: "專案控管 跨領域溝通協調 AutoCAD ArcGis",
  },
];

const List: React.FC = () => (
  <ul>
    {works.map(({ id, title, company, period, description, skills }) => (
      <li key={id} className="mb-4 p-4 bg-slate-400/20 rounded-lg shadow">
        <div className="text-lg font-semibold pb-2">
          {title} {company}
        </div>
        <div>{period}</div>
        <div className="mt-2 space-y-2">
          {description.map((desc, index) => (
            <div key={index}>{desc}</div>
          ))}
        </div>
        <div className="flex  mt-2">
          <div className="font-semibold">Skills: </div> {skills}
        </div>
      </li>
    ))}
  </ul>
);

export default List;
