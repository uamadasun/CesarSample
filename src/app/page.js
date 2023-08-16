import Image from "next/image";
import { roboto } from "./layout";
import heroImage from "./assets/heroImage.svg";
import ContactForm from "./components/ContactForm";
import House from "./assets/about.svg";
import Services from "./components/Services";
import Residential from "./assets/residential.png";
import ResidentialShade from "./assets/residentialShade.png";
import Commercial from "./assets/commercial.png";
import CommercialShade from "./assets/commercialShade.png";
import ProjectManagement from "./assets/projectManagement.png";
import ProjectManagementShade from "./assets/projectManagementShade.png";
import Map from "./components/Map";
import LoadMap from "./components/Map";

export default function Home() {
  return (
    <div className="h-screen mb-40">
      <div className="relative isolate overflow-hidden pt-14 border border-white mx-auto items-center">
        <Image
          src={heroImage}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          priority={true}
        />

        <div className=" max-w-full py-32 sm:py-48 lg:py-56 flex flex-col md:justify-center md:flex-row gap-2 items-center">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <h1 className="text-4xl font-bold  text-white sm:text-6xl font-mono">
              Residential & Commercial
            </h1>
            <p className="mt-6 text-xl leading-8 text-white bg-opacity-75">
              Transforming Visions into Architectural Marvels Discover Our
              Legacy of Excellence in Construction
            </p>
            {/* <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div> */}
          </div>
          <div className="hidden md:flex mx-10">
            <ContactForm />
          </div>
        </div>
      </div>
      {/* MOBILE CONTACT FORM */}
      <div className=" w-full  block md:hidden mt-10">
        <ContactForm />
      </div>
      {/* SERVICES SECTION */}
      <div className="flex flex-col">
        <section className="w-full h-96 mb-72  md:mb-0">
          <h2 className="text-black text-4xl pt-10 text-center font-serif font-black">
            OUR SERVICES
          </h2>
          <div className="p-5 w-full flex flex-col gap-0 md:gap-10 md:flex-row items-center justify-center ">
            <Services
              service={Residential}
              serviceShade={ResidentialShade}
              name={"Residential"}
            />
            <Services
              service={Commercial}
              serviceShade={CommercialShade}
              name={"Commercial"}
            />
            <Services
              service={ProjectManagement}
              serviceShade={ProjectManagementShade}
              name={"ProjectManagement"}
            />
          </div>
        </section>

        {/* GOOGLE MAPS */}
        <section className="relative h-3/4 mt-24 md:mt-32  bg-roman-coffee-300 bg-opacity-50 mb-10">
          <LoadMap />
          <div className="h-20 w-full mb-5">
            <h2 className=" text-3xl md:text-xl font-serif text-center mt-4 font-bold mb-1">
              Get a free quote today!
            </h2>
            <h2 className="text-2xl md:text-xl font-serif text-center">
              Call (832)277-7760
            </h2>
          </div>
        </section>
      </div>
    </div>
  );
}
