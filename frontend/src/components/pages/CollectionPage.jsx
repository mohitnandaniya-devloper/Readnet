import React from "react"
import ButtonAtom from "@/components/atoms/ButtonAtom"

import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function CollectionPage() {
  return (
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
    </div>
    <div class="flex flex-wrap -m-4">
              <Carousel
                opts={{ align: "start" }}
                className="w-full max-w-6xl"
              >
                <CarouselContent>
                  {Array.from({ length: 10 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
                      <Dialog>
                        <DialogTrigger asChild>
                            <Card className="p-0 border border-gray-200 rounded-3xl shadow-none">
                            <div className="relative w-full h-72 overflow-hidden rounded-2xl">
                                <img
                                src="https://dummyimage.com/720x900"
                                alt="Collection Preview"
                                className="absolute inset-0 w-full h-full object-cover"
                                />
                                <span className="absolute inset-0 flex items-start justify-end p-4 text-white text-6xl font-bold bg-black/30">
                                {index + 1}
                                </span>
                            </div>
                            </Card>
                        </DialogTrigger>
                        <DialogContent className="w-full sm:max-w-screen-sm md:max-w-xl lg:max-w-3xl h-[90vh] overflow-auto">
                          <DialogHeader>
                            <DialogTitle>Collection Item {index + 1}</DialogTitle>
                          </DialogHeader>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <img
                              src="https://dummyimage.com/720x400"
                              alt="Collection Preview"
                              className="w-full h-full object-cover rounded-lg overflow-auto"
                            />
                            <div className="space-y-4">
                              <p className="text-sm uppercase tracking-wider text-muted-foreground">
                                CATEGORY
                              </p>
                              <h2 className="text-xl font-semibold">
                                The Catalyzer
                              </h2>
                              <p className="text-muted-foreground">
                                Photo booth fam kinfolk cold-pressed sriracha leggings
                                jianbing microdosing tousled waistcoat.
                              </p>
                              <div className="flex flex-wrap items-center gap-4">
                                <ButtonAtom children="Start Reading" className="bg-red-600 text-white text-sm font-medium rounded hover:bg-red-700" />
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

                    <Carousel
                      opts={{ align: "start" }}
                      className="w-full max-w-6xl top-20"
                    >
                      <CarouselContent>
                        {Array.from({ length: 10 }).map((_, index) => (
                          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
                            <Dialog>
                              <DialogTrigger asChild>
                                  <Card className="p-0 border border-gray-200 rounded-3xl shadow-none">
                                  <div className="relative w-full h-72 overflow-hidden rounded-2xl">
                                      <img
                                      src="https://dummyimage.com/720x900"
                                      alt="Collection Preview"
                                      className="absolute inset-0 w-full h-full object-cover"
                                      />
                                      <span className="absolute inset-0 flex items-start justify-end p-4 text-white text-6xl font-bold bg-black/30">
                                      {index + 1}
                                      </span>
                                  </div>
                                  </Card>
                              </DialogTrigger>
                              <DialogContent className="w-full sm:max-w-screen-sm md:max-w-xl lg:max-w-3xl h-[90vh] overflow-auto">
                                <DialogHeader>
                                  <DialogTitle>Collection Item {index + 1}</DialogTitle>
                                </DialogHeader>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <img
                                    src="https://dummyimage.com/720x400"
                                    alt="Collection Preview"
                                    className="w-full h-full object-cover rounded-lg overflow-auto"
                                  />
                                  <div className="space-y-4">
                                    <p className="text-sm uppercase tracking-wider text-muted-foreground">
                                      CATEGORY
                                    </p>
                                    <h2 className="text-xl font-semibold">
                                      The Catalyzer
                                    </h2>
                                    <p className="text-muted-foreground">
                                      Photo booth fam kinfolk cold-pressed sriracha leggings
                                      jianbing microdosing tousled waistcoat.
                                    </p>
                                    <div className="flex flex-wrap items-center gap-4">
                                      <ButtonAtom children="Start Reading" className="bg-red-600 text-white text-sm font-medium rounded hover:bg-red-700" />
                                    </div>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
        </div>
    </div>
</section>
)
}
