import Image from "next/image";
import React from "react";

const Services = (props) => {
  const { service, serviceShade, name } = props;
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="relative w-1/2 md:w-fit">
      <a href="#">
        <Image
          src={service}
          alt={`image of service: ${name}`}
          className="mx-auto w-fit m-4 h-fit rounded-md absolute top-0 left-0 opacity-100 hover:opacity-0"
        />
      </a>
      <a href="#">
        <Image
          src={serviceShade}
          alt={`image of service: ${name}`}
          className="mx-auto w-fit m-4 h-fit rounded-md"
        />
      </a>

      </div>
      
    </div>
  );
};

export default Services;
