import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import { About } from "./pages/about/About";
import "./App.css";
import "./assets/utilities/responsive.css";
import { Techstack } from "./pages/techstack/Techstack";
import { Projects } from "./pages/projects/Projects";
import { Educations } from "./pages/educations/Educations";
import { Workexp } from "./pages/Workexp/Workexp";
import { Contact } from "./pages/contact/Contact";

function App() {
  return (
    <>
      <Layout>
        <Home />
        <About />
        <Educations />
        <Techstack />
        <Projects />
        <Workexp />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
