import Image from "next/image";
import React from "react";
import { TbPlayerPlayFilled } from "react-icons/tb";
import HERO_IMG from "@/assets/image/hero_img.png";
const HeroImage = () => {
  return (
    <div className="relative">
      <Image src={HERO_IMG} alt="Hero Image" className="w-full" />

      <div className="p-2 lg:p-4 rounded-full border-2 lg:border-4 border-dashed rotate-dashed border-primary absolute bottom-8 right-8">
        <div className="w-30 h-30 lg:w-60 lg:h-60 flex justify-center items-center bg-secondary rounded-full relative">
          {/* Ripple only around the play icon */}
          <div className="w-16 h-16 bg-primary rounded-full flex justify-center items-center relative ripple rotate-static">
            <TbPlayerPlayFilled size={32} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
