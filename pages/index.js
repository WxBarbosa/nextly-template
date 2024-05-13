import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Chantek Tecnologia e Inovação</title>
        <meta
          name="description"
          content="Chantek Tecnologia e Inovação"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Serviços"
        title=" Por que nós somos o parceiro ideal para seu negócio">
        Possuímos um time inteiramente disposto a ajudar você e seu negócio com o auxílio de anos de experiência, atuando de forma
        responsável e autêntica ao seu projeto. Conte com um pipeline de processos completo.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      {/* <SectionTitle
        pretitle="Assistir video"
        title="Vamos entender exatamente como podemos te ajudar">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video /> */}
      <SectionTitle
        pretitle="Testemunhos"
        title="Aqui apresentamos um pouquinho da experiência de nossos clientes">
      </SectionTitle>
      <Testimonials />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;