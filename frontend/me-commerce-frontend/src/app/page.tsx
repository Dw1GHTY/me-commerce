import { HomeCarousel } from "@/components/custom-components/Carousel/HomeCarousel";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <HomeCarousel
        carouselItems={[
          {
            imageUrl: "/stock1.jpg",
            imageAlt: "7800x3d",
            title: "Best FPS per $ on the PLANET",
          },
          {
            imageUrl: "/stock2.jpg",
            imageAlt: "Intel arc b580",
            title: "12 VRAM for 250$",
            description: "Counter lazy game optimization with less money",
          },
        ]}
      />
      {/*//? Todays deals */}

      {/*//? */}
    </div>
  );
}
