import Image from "next/image";
import { roboto } from "./layout";
import heroImage from "./assets/heroImage.svg";
import ContactForm from "./components/ContactForm";
import House from "./assets/about.svg" 

export default function Home() {
  return (
    <div>
      <div className="relative isolate overflow-hidden pt-14">
        <Image
          src={heroImage}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        
        <div className="mx-0 max-w-full py-32 sm:py-48 lg:py-56 flex flex-col md:justify-evenly md:flex-row   gap-2 items-center">
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
          <div className="hidden md:flex">
            <ContactForm />
          </div>
        </div>

        
      </div>
      {/* MOBILE CONTACT FORM */}
      <div className=" w-full  block md:hidden mt-10">
        <ContactForm />
        
      </div>
      <section className="w-full h-96 bg-roman-coffee-400">
        <h2 className="text-white text-4xl pt-10 text-center font-mono font-black">OUR SERVICES</h2>

      </section>
      
    </div>
  );
}
