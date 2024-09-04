import PulsatingButton from "@/components/magicui/pulsating-button";
import Ripple from "@/components/magicui/ripple";

export default function Home() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center bg-background">
      <h1 className="z-5 text-center text-4xl font-bold text-gray-600">
      Find Your Ideal Role with <span className="text-violet-500">AI</span>
      </h1>
      <PulsatingButton className="mt-5">Get Started</PulsatingButton>
      <Ripple />
    </div>
  );
}
