import IntroCard from "@/components/shared/IntroCard";
import Posts from "@/components/shared/Posts";

export const revalidate = 86400

export default function HomePage() {
  return (
    <>
      <section className="flex-coloum-center gap-6 mt-24 mb-20 mx-auto w-full max-w-screen-xl px-6 xs:px-8 sm:px-16">
        <IntroCard />
        
        {/* @type-expect-error Server Component */}
        <Posts />
      </section>
    </>
  )
}
