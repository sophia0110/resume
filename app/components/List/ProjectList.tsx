import React from "react";

type Project = {
  id: number;
  name: string;
  description: string;
  url?: string;
};

const ProjectList = () => {
  const projects: Project[] = [
    {
      id: 1,
      name: "智能電網管理系統",
      description: "透過中央大學場域實現電網管理系統，提供即時監控與數據分析。",
      url: "https://smartgrid.cloudcleanenergy.com/",
    },
    {
      id: 2,
      name: "高空風能Dashboard",
      description: "aiSails高空風能系統的監控與管理平台。",
      url: "https://wpms.cloudcleanenergy.com/en",
    },
    {
      id: 3,
      name: "原住民族傳統智慧創作保護資訊網",
      description: "提供原住民族傳統智慧創作的保護與推廣資訊。",
      url: "https://www.titic.cip.gov.tw/",
    },
  ];
  return (
    <ul className="list-disc list-inside  justify-between space-y-2 flex space-x-2 ">
      {projects.map((project) => (
        <div
          key={project.id}
          className="mb-2 border p-4 rounded-lg shadow w-full flex flex-col justify-between "
        >
          <div className="font-bold text-xl">{project.name}</div>
          <div>{project.description}</div>
          <div className="mt-2 justify-end flex">
            <button className="bg-secondary-400 text-white px-3 py-1  hover:bg-secondary-600 rounded-md">
              {project.url && (
                <a href={project.url} className=" hover:underline">
                  查看專案
                </a>
              )}
            </button>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default ProjectList;
