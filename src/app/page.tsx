import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageGallery from "./components/ImageGallery";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import Testimonials from "./components/Testimonials";
import Socials from "./components/Socials";

export default function Home() {
  return (
    <main >
      <Body />
      <Footer />
      <ImageGallery />
      <Testimonials />
    </main>
  );
}
