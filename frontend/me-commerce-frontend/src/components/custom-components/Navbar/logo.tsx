import Image from "next/image";
import React from "react";

interface LogoProps {
  imageSrc: string;
  imageAlt: string;
}

const Logo: React.FC<LogoProps> = (props) => {
  const { imageSrc, imageAlt } = props;
  return (
    <div
      className="hidden md:flex size-fit 
    rounded-full ring-1 ring-accent shrink-0 
    cursor-pointer hover:shadow-lg
    "
    >
      <Image
        className="rounded-full shadow-accent"
        src={imageSrc}
        alt={imageAlt}
        width={75}
        height={75}
      />
    </div>
  );
};

export default Logo;
