import Project from "@/app/components/Projects/Project";
import HomeBanner from "@/app/components/HomeBanner/HomeBanner";
import About from "@/app/components/About/About";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <About />
      <Project/>
    </div>
  )
}
