import Introduction from "@components/introduction";
import About from "@components/about";
import MyProjects from "@components/my-projects";
import SectionDivider from "@components/section-divider";
import MySkills from "@components/my-skills";
import Experience from "@components/experience";
import Contact from "@components/contact/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Introduction/>
      <SectionDivider/>
      <About/>
      <MyProjects/>
      <MySkills/>
      <Experience/>
      <Contact/>
    </main>
  );
}
