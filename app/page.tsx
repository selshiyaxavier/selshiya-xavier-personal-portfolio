import Hero from "@/components/Hero";
import AboutStats from "@/components/AboutStats";
import Experience from "@/components/Experience";
import SkillsAchievements from "@/components/SkillsAchievements";
import Portfolio from "@/components/Portfolio";

export default function Home() {
    return (
        <div className="w-full">
            <Hero />
            <AboutStats />
            <Experience />
            <SkillsAchievements />
            <Portfolio />
        </div>
    );
}
