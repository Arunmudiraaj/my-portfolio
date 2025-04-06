import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { ModeToggle } from "@/components/ui/ModeToggle";
import WorkExperience from "@/components/WorkExperience";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center px-5 mx-auto overflow-hidden dark:bg-black-100 bg-white">
      <div className="max-w-7xl w-full">
        <div className="fixed top-5 right-5 z-50">
          <ModeToggle />
        </div>
        <FloatingNav navItems={navItems} />
        <Hero />
        <RecentProjects />
        <Skills />
        <WorkExperience />
        <Grid />
        <Footer />
      </div>
    </main>
  );
}
