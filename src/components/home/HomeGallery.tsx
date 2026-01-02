import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

// ⚠️ Replace these URLs with your actual images (e.g., imports from assets)
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1470&auto=format&fit=crop",
    alt: "Interns collaborating in a meeting"
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop",
    alt: "Field work and site inspection"
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop",
    alt: "Team presentation session"
  },
  {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop",
    alt: "Group photo of Batch 15"
  },
];

export function HomeGallery() {
  return (
    <section className="py-12 bg-muted/30 w-full">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter text-primary">
            Life at IWM
          </h2>
          <p className="text-muted-foreground mt-2 text-lg">
            Glimpses from our previous cohorts and field visits
          </p>
        </div>

        <div className="flex justify-center">
          <Carousel
            plugins={[Autoplay({ delay: 3000 })]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl"
          >
            <CarouselContent>
              {galleryImages.map((img, index) => (
                // basis-1/2 means 2 images visible on tablet, basis-1/3 means 3 on desktop
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="p-1">
                    <Card className="border-0 shadow-md hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="flex aspect-video items-center justify-center p-0 overflow-hidden rounded-lg">
                        <img 
                          src={img.src} 
                          alt={img.alt} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}