import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Especialidades",
  desc: "Aqui você vai entender como você pode ter uma operação extremamente especialista para te ajudar",
  image: benefitOneImg,
  bullets: [
    {
      title: "Branding & Briefing",
      desc: "Realizamos um bate-papo para entender melhor sobre você, sua empresa e seu projeto, para posicionarmos sua empresa ou solucionarmos da melhor forma sua necessidade.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Marketing & Tráfego pago",
      desc: "Você terá disponível para você um time especializado capaz de analisar, estudar e aplicar as melhores estratégicas para alavancagem do seu negócio.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Desenvolvimento de softwares & Sites & Apps",
      desc: "Nosso time especialista em tecnologia irá descobrir qual melhor maneira de construir e distribuir ao mundo seu projeto.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Temos muito mais para você",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Aplicações responsivas e escaláveis ao mundo",
      desc: "Todas nossas soluções são desenvolvidas para plataformas Mobile, Web, e Tablets. Também contamos com especialistas em arquitetura de software escalável para evolução constante.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Produto baseado em dados",
      desc: "Todos nossos produtos são planejados e desenvolvidos com base em resultados a partir de dados para maior precisão.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Equipe e suporte constante para seu projeto",
      desc: "Temos um time sempre atento para atender você.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
