import { HomeCarousel } from "@/components/custom-components/Carousel/HomeCarousel";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <HomeCarousel
        carouselItems={[
          {
            imageUrl:
              "https://cdn.mos.cms.futurecdn.net/NG35cjoxuWeJfJpLoWtGB9.jpg",
            imageAlt: "7800x3d",
            title: "Best FPS per $ on the PLANET",
          },
          {
            imageUrl:
              "https://cdn.mos.cms.futurecdn.net/UurEAxyjqRQ88neRtE2unV.jpg",
            imageAlt: "Intel arc b580",
            title: "12 VRAM for 250$",
            description: "Counter lazy game optimization with less money",
          },
        ]}
      />
      <Separator
        className="flex justify-center items-center my-2
        max-w-1/3 min-h-2 
        bg-accent rounded-xl "
        orientation="horizontal"
      />
    </div>
  );
}
