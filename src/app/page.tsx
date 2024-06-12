import Body from "./components/Body";
import Footer from "./components/Footer";
import ImageGallery from "./components/ImageGallery";
import Testimonials from "./components/Testimonials";
import ProjectsPreview from "./components/ProjectsPreview";
import ResearchAndWritingsPreview from "./components/ResearchAndWritingsPreview";

export default function Home() {
  return (
    <main >
      <Body />
      <Footer />
      <ImageGallery />
      <ProjectsPreview />
      <ResearchAndWritingsPreview />
      <Testimonials />
    </main>
  );
}
