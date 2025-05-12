"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useState, useEffect } from "react";

type carouselItem = {
  imageUrl: string;
  imageAlt: string;
  title?: string;
  description?: string;
  linkPath?: string;
};

interface HomeCarouselProps {
  carouselItems: Array<carouselItem>;
}

export function HomeCarousel({ carouselItems }: HomeCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType>();

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div
      className="
    flex flex-col justify-center items-center relative 
    w-full max-w-[1200px] mx-auto my-6 px-4
    "
    >
      <Carousel
        setApi={setEmblaApi}
        plugins={[Autoplay({ delay: 6000 })]}
        opts={{ loop: true }}
        className="rounded-3xl overflow-hidden"
      >
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} className="basis-full">
              <a href={item.linkPath || "#"} className="block group relative">
                <Image
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  width={1200}
                  height={400}
                  className="w-full h-[240px] md:h-[400px] object-cover"
                  priority
                />
                {/* Optional overlay for title/CTA */}
                {(item.title || item.description) && (
                  <div className="absolute bottom-6 left-10 bg-foreground/50 p-4 rounded-lg text-background max-w-[80%]">
                    {item.title && (
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    )}
                    {item.description && (
                      <p className="text-sm mt-1">{item.description}</p>
                    )}
                    <button className="mt-3 bg-white text-black px-4 py-1.5 rounded-full text-sm font-medium group-hover:bg-gray-200 transition">
                      Learn more
                    </button>
                  </div>
                )}
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-2 bg-white/80 hover:bg-white text-black shadow-sm" />
        <CarouselNext className="right-2 bg-white/80 hover:bg-white text-black shadow-sm" />
      </Carousel>

      {/* Navigation Dots */}
      <div
        className="
      flex justify-center items-center 
      mt-4 gap-2 bg-accent size-fit p-2
      rounded-xl"
      >
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === selectedIndex ? "bg-muted-foreground" : "bg-background"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
