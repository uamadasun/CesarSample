import Image from "next/image";
import React from "react";

const Services = (props) => {
  const { service, serviceShade, name } = props;
  return (
    <div className="relative">
        <a href="#">
      <Image
        src={service}
        alt={`image of service: ${name}`}
        className="mx-auto absolute top-0 w-fit m-4 h-fit left-0 opacity-100 hover:opacity-0 rounded-md"
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
  );
};

export default Services;
