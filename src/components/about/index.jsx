import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            About Me
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            I’m a passionate and detail-oriented Computer Science student with a strong foundation in full-stack development, cloud computing, and data-driven decision-making. I specialize in crafting intuitive digital experiences and building scalable, secure systems. With a focus on continuous learning and innovation, I thrive at the intersection of technology and problem-solving. Welcome to my portfolio — where creativity meets code.
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            200+ <sub className="font-semibold text-base">DSA problems solved</sub>
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            5+ <sub className="font-semibold text-base">certifications</sub>
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">Languages & Tools I Use</p>
        </ItemLayout>

        <ItemLayout className="col-span-full">
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=aws,bootstrap,cloudflare,css,d3,figma,firebase,git,github,graphql,html,js,jquery,linux,mongodb,mysql,nextjs,nodejs,npm,react,redux,threejs,vercel,vite,vscode`}
            alt="Skills"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className="col-span-full md:col-span-6 !p-0">
        </ItemLayout>

        <ItemLayout className="col-span-full md:col-span-6 !p-0">
          <Link
            href="https://github.com/Vanshikaduggal/3JS-portfolio"
            target="_blank"
            className="w-full"
          >
            {/* You can add a featured repo or portfolio badge here */}
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
