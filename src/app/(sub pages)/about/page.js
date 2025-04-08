import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import ItemLayout from "@/components/about/ItemLayout";

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>
      {/* Background Image */}
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website&#39;s about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />
      {/* Hero Section */}
      <div className="relative pb-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-bold text-5xl xs:text-6xl sm:text-7xl text-white">
            Hello, I&#39;m <span className="text-yellow-200">Vanshika</span>
          </h1>
          <p className="font-light text-gray-200 text-lg mt-4 max-w-2xl">
            As a Full Stack Developer, I create complete web solutions — from
            designing beautiful interfaces to writing efficient backend code,
            making sure everything works smoothly together.
          </p>
        </div>
      </div>

      {/* About Me Section */}
      <section className="flex items-center justify-center min-h-screen px-4">
        <div className="max-w-3xl w-full text-center">
          <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>

          <div className="custom-bg p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8 col-span-full w-full max-w-7xl">
            <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-4 text-center">
              I&#39;m a passionate Full Stack Developer with expertise in modern web
              technologies. My journey in software development began with a
              curiosity about how things work on the web, and has evolved into a
              career building impactful applications.
              <br />
              <br />
              I focus on creating clean, efficient, and user-friendly solutions
              that solve real-world problems. Whether it&#39;s frontend development
              with React and Next.js or backend work with Node.js and databases,
              I enjoy the full spectrum of web development.
              <br />
              <br />
              When I&#39;m not coding, you might find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="flex flex-col items-center justify-center px-4 py-12">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">
          My Skills
        </h2>
        <ItemLayout className="col-span-full w-full max-w-7xl">
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=aws,bootstrap,css,docker,figma,firebase,git,github,graphql,html,js,linux,mongodb,mysql,nextjs,nodejs,npm,react,redux,replit,tailwind,threejs,vercel,vite,vscode`}
            loading="lazy"
            alt="My Skills"
          />
        </ItemLayout>
      </section>

      {/* LeetCode Section */}
      <section className="relative z-20 max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-white text-center mb-10">
          LeetCode Profile
        </h2>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            {/* Stats Box */}
            <div className="md:w-1/3">
              <div className="p-6 bg-yellow-100/10 border border-yellow-400/30 rounded-2xl shadow-inner">
                <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                  Problems Solved
                </h3>
                <p className="text-4xl font-bold text-yellow-400">200+</p>
              </div>
            </div>

            {/* Description Box */}
            <div className="md:w-2/3 text-white/90">
              <h3 className="text-2xl font-semibold mb-3">
                My LeetCode Journey
              </h3>
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                I consistently practice coding problems on LeetCode to
                strengthen my algorithms and data structures knowledge. My focus
                areas include dynamic programming, graph algorithms, and
                optimization techniques.
              </p>
              <a
                href="https://leetcode.com/u/vanshikaduggal13/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-lg shadow-md hover:opacity-90 transition duration-300"
              >
                View My Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LinkedIn Section */}
      <section className="relative z-20 max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-white text-center mb-10">
          LinkedIn Profile
        </h2>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            {/* Stats Box */}
            <div className="md:w-1/3">
              <div className="p-6 bg-blue-100/10 border border-blue-400/30 rounded-2xl shadow-inner">
                <h3 className="text-xl font-semibold text-blue-200 mb-2">
                  Connections
                </h3>
                <p className="text-4xl font-bold text-blue-400">1000+</p>
              </div>
            </div>

            {/* Description Box */}
            <div className="md:w-2/3 text-white/90">
              <h3 className="text-2xl font-semibold mb-3">
                Professional Journey
              </h3>
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                I actively network and share professional updates,
                accomplishments, and insights on LinkedIn. It’s where I connect
                with like-minded individuals, recruiters, and industry
                professionals while growing my digital presence.
              </p>
              <a
                href="https://www.linkedin.com/in/vanshika-duggal13/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2.5 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition duration-300"
              >
                View My LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="relative z-20 max-w-6xl mx-auto px-4 py-12 mb-20">
        <h2 className="text-4xl font-bold text-white text-center mb-10">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-2xl text-white/90">
            <h3 className="text-xl font-semibold mb-2">
              IBM Applied DevOps Engineering
            </h3>
            <p className="text-sm text-white/70 mb-1">Issued by: IBM</p>
            <p className="text-sm text-white/70 mb-4">
              Date: February 25, 2025
            </p>
            <p className="text-base leading-relaxed">
              Covered DevOps tools, CI/CD, Docker, Kubernetes, and cloud-native
              engineering practices.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-2xl text-white/90">
            <h3 className="text-xl font-semibold mb-2">
              Coding Interview Preparation
            </h3>
            <p className="text-sm text-white/70 mb-1">Issued by: Meta</p>
            <p className="text-sm text-white/70 mb-4">Date: March 12, 2025</p>
            <p className="text-base leading-relaxed">
              Mastered data structures, algorithms, and behavioral interview
              strategies from Meta experts.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-2xl text-white/90">
            <h3 className="text-xl font-semibold mb-2">
              The Art of the Job Interview
            </h3>
            <p className="text-sm text-white/70 mb-1">
              Issued by: BigInterview
            </p>
            <p className="text-sm text-white/70 mb-4">Date: March 12, 2025</p>
            <p className="text-base leading-relaxed">
              Techniques to ace job interviews, improve confidence, and craft
              impactful answers.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-2xl text-white/90">
            <h3 className="text-xl font-semibold mb-2">
              AI Foundations for Everyone
            </h3>
            <p className="text-sm text-white/70 mb-1">Issued by: IBM</p>
            <p className="text-sm text-white/70 mb-4">Date: October 15, 2024</p>
            <p className="text-base leading-relaxed">
              Learned AI basics, ethics, real-world use-cases, and its impact on
              industries.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-2xl text-white/90">
            <h3 className="text-xl font-semibold mb-2">
              Blockchain Revolution in Financial Services
            </h3>
            <p className="text-sm text-white/70 mb-1">Issued by: INSEAD</p>
            <p className="text-sm text-white/70 mb-4">Date: February 7, 2024</p>
            <p className="text-base leading-relaxed">
              Insights into how blockchain is transforming the finance world
              with decentralized tech.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-2xl text-white/90">
            <h3 className="text-xl font-semibold mb-2">Blockchain</h3>
            <p className="text-sm text-white/70 mb-1">
              Issued by: University at Buffalo & SUNY
            </p>
            <p className="text-sm text-white/70 mb-4">Date: March 22, 2024</p>
            <p className="text-base leading-relaxed">
              Studied blockchain architecture, consensus mechanisms, and
              decentralized applications in-depth.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-2xl text-white/90">
            <h3 className="text-xl font-semibold mb-2">IBM Machine Learning</h3>
            <p className="text-sm text-white/70 mb-1">Issued by: IBM</p>
            <p className="text-sm text-white/70 mb-4">Date: March 7, 2024</p>
            <p className="text-base leading-relaxed">
              Gained knowledge on supervised/unsupervised learning, model
              validation, and ML pipelines.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-2xl text-white/90">
            <h3 className="text-xl font-semibold mb-2">
              Leading People and Teams
            </h3>
            <p className="text-sm text-white/70 mb-1">
              Issued by: University of Michigan
            </p>
            <p className="text-sm text-white/70 mb-4">
              Date: September 22, 2023
            </p>
            <p className="text-base leading-relaxed">
              Strategies for leadership, motivation, team building, and conflict
              resolution.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

// Certification Card Component
function CertificationCard({ title, issuer, date, description }) {
  return (
    <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md border-l-4 border-blue-500 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <div className="flex justify-between items-center mb-3">
        <span className="text-gray-600">{issuer}</span>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
