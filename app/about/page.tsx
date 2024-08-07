import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="container mx-auto">
      <h1 className="mb-4 mt-6 text-center text-3xl tracking-tight font-extrabold lg:text-5xl text-blue-600 dark:text-blue-700">
        About Us
      </h1>
      <Image
        src={"/about.jpg"}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "400px" }}
        alt={"About us banner"}
      />
      <p className="p-4">
        Our company if formed by 4 people, we work together and want to change
        the ecommerce industry by giving always a good service and quality.
      </p>
    </div>
  );
};

export default About;
