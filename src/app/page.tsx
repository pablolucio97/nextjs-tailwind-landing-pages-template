import CircularText from "@/components/animations-and-loading/CircularText";
import SplittedText from "@/components/animations-and-loading/SplittedText";
import UpFadeText from "@/components/animations-and-loading/UpFadeText";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col mt-24">
        <UpFadeText
          texts={["Texto 1", "Texto 2", "Texto 3"]}
          rotationInterval={5000}
        />
        <CircularText text=" Texto * Circular * Animado *" />
        <SplittedText text="Texto Dividido" />
      </main>
    </div>
  );
}
