import { CDN_URL } from "../config";

const services = [
  {
    content:
      "Creating easy to use web apps or sites, designed to work on any screen, that give the user a wonderful experience.",
    image: {
      alt: "Desktop Computer",
      src: `${CDN_URL}/services_1.png`
    },
    title: "Web Apps and Websites"
  },
  {
    content:
      "Providing cloud hosting and support for your site so you can worry about other things.",
    image: {
      alt: "Cloud hosting",
      src: `${CDN_URL}/services_2.png`
    },
    title: "Hosting and Support"
  },
  {
    content: "Let's see what we can do together to make things easier for you.",
    image: {
      alt: "Consulting",
      src: `${CDN_URL}/services_3.png`
    },
    title: "Technical Consulting"
  }
];

export default services;
