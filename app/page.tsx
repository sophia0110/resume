import List from "./components/List/List";
import ProjectList from "./components/List/ProjectList";
import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* NAVBAR */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-sm">
          <span className="font-medium">Sophia Su</span>
          <nav className="flex gap-8 text-gray-600">
            <a href="#about" className="hover:text-gray-900 transition">About</a>
            <a href="#experience" className="hover:text-gray-900 transition">Experience</a>
            <a href="#projects" className="hover:text-gray-900 transition">Projects</a>
            <a
              href="https://github.com/sophia0110"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-40 pb-32 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
          Sophia Su
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Frontend Engineer specializing in scalable and maintainable web systems.
        </p>

        <p className="mt-4 text-gray-500 text-sm">
          Experienced in enterprise systems and API-driven architectures.
        </p>

        <div className="mt-10 flex justify-center gap-4 text-sm text-gray-500">
          <span>React</span>
          <span>•</span>
          <span>Next.js</span>
          <span>•</span>
          <span>TypeScript</span>
          <span>•</span>
          <span>System Architecture</span>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-20 pb-32">

        {/* Profile Card */}
        <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center">
          <Image
            src="/imgs/sophia.jpg"
            alt="Sophia Su"
            width={160}
            height={160}
            className="rounded-full mx-auto"
          />

          <h2 className="text-xl font-semibold mt-6">Sophia Su</h2>
          <p className="text-sm text-gray-500 mt-2">
            Frontend Engineer
          </p>

          <div className="mt-6 text-sm text-gray-600 space-y-1">
            <div>銘傳大學 都市規劃與防災學系</div>
            <div>資策會 前端工程師養成班</div>
          </div>

          <div className="mt-8 text-sm">
            <p className="text-gray-500">Email</p>
            <p className="break-words">0110sophiasu@gmail.com</p>
          </div>
        </div>

        {/* About Text */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-semibold mb-8 tracking-tight">
            About Me
          </h2>

          <div className="space-y-8 text-gray-600 text-lg leading-relaxed">
            <p>
              具備都市規劃背景，培養系統化思維與結構分析能力，轉職投入前端工程領域。
              專注於建構具可維護性與高擴充性的前端架構，熟悉 React 與 Next.js 生態系。
            </p>

            <p>
              在專案開發中，不僅著重功能實作，更重視系統穩定性、
              效能優化與長期維運成本，並能與跨部門團隊有效協作，
              以工程品質支撐產品成長。
            </p>
          </div>

          {/* Skills */}
          <div className="mt-14">
            <h3 className="text-xl font-semibold mb-6">Core Skills</h3>

            <div className="flex flex-wrap gap-3">
              {[
                "Component Architecture",
                "Performance Optimization",
                "React",
                "Next.js",
                "TypeScript",
                "RESTful API",
                "Git Workflow",
                "Tailwind CSS"
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-50 border border-gray-200 text-gray-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-6xl mx-auto px-6 pb-32">
        <h2 className="text-3xl font-semibold mb-16 tracking-tight">
          Experience
        </h2>

        <div className="rounded-2xl border border-gray-100 p-12">
          <List />
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 pb-32">
        <h2 className="text-3xl font-semibold mb-16 tracking-tight">
          Selected Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <ProjectList />
        </div>
      </section>

      <footer className="text-center py-20 text-gray-400 text-sm border-t border-gray-100">
        © 2026 Sophia Su — Built with Next.js
      </footer>
    </main>
  );
}
