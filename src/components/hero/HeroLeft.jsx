import ButtonSecondary from "../buttons/ButtonSecondary"
import ButtonPrimary from "../buttons/buttonPrimary"

function HeroLeftText() {
  return (
    <>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Discover Your Next <span className="text-blueThree">Adventure</span>
      </h1>
      <p className="text-lg mb-8">
        Dive into a world of knowledge with our extensive collection of books. From fiction to
        non-fiction, there's something for everyone.
      </p>
    </>
  )
}

function HeroLeftButtons() {
  return (
    <div className="flex flex-row gap-3">
      <ButtonPrimary text="Explore Now"/>
      <ButtonSecondary text="Learn More" />
      
    </div>
  )
}

export default function HeroLeft() {
  return (
    <div className="md:w-1/2 text-center md:text-left">
      <HeroLeftText />
      <HeroLeftButtons />
    </div>
  )
}
