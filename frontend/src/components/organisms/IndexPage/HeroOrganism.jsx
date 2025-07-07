import React from "react"
import VideoTextAtom from "@/components/atoms/VideoTextAtom"
import ButtonAtom from "@/components/atoms/ButtonAtom"

export default function HeroOrganism() {
  return (
  <section class="body-font">
    <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <div className="relative h-[300px] w-full overflow-hidden">
        <VideoTextAtom children="Readnet" src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
      </div>
      <div class="text-center lg:w-2/3 w-full">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium">Discover Limitless Reading. Anytime, Anywhere.</h1>
        <p class="mb-8 leading-relaxed">Readnet transforms how you explore books and knowledge. With secure online access, personalized libraries, and a clean reading experience — dive into the world of books without downloads or distractions. Whether you're a student, casual reader, or lifelong learner, Readnet is your digital reading companion.</p>
        <div class="flex justify-center">
          <ButtonAtom children="Get Started" />
        </div>
      </div>
    </div>
  </section>
  )
}