import Project from "@/app/components/Projects/Project";
import HomeBanner from "@/app/components/HomeBanner/HomeBanner";
import About from "@/app/components/About/About";
import Skills from "@/app/components/Skills/Skills";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <About />
      <Project/>
      <Skills/>
    </div>
  )
}
