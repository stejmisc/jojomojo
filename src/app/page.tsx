import Body from "./components/Body";
import Footer from "./components/Footer";
import ImageGallery from "./components/ImageGallery";
import Testimonials from "./components/Testimonials";
import Preview from "./components/Preview";
import ResearchAndWritingsPreview from "./components/ResearchAndWritingsPreview";
import { projects } from "./data/projects";
import { researchAndWritings } from "./data/researchAndWritings";

export default function Home() {
  return (
    <main >
      <Body />
      <Footer />
      <ImageGallery />
      <Preview infoArray={projects} title={'Past Projects'}/>
      <Preview infoArray={researchAndWritings} title={'Research & Writings'}/>
      <Testimonials />
    </main>
  );
}
