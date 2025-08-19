import BlogPost from "./Components/DashboardContents/BlogPost";
import Experience from "./Components/DashboardContents/Experience";
import Projects from "./Components/DashboardContents/Projects";
import DashboardLayout from "./Components/DashboardLayout";

export default function Home() {
  return (
    <DashboardLayout
      blogPost="Blog Post"
      blogComponent={<BlogPost />}
      experience="Experience"
      experienceComponent={<Experience />}
      projects="Projects"
      projectsComponent={<Projects />}
    />
  );
}
