import PulsatingButton from "@/components/magicui/pulsating-button";
import Ripple from "@/components/magicui/ripple";

export default function Home() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center bg-background">
      <h1 className="z-5 text-center text-4xl font-bold text-black">
      Find Your Ideal Role with <span className="text-violet-500">AI</span>
      </h1>
      <p className="z-5 text-center text-gray-500">Unlock new career opportunities with our AI-powered job matching platform.</p>
      <PulsatingButton className="mt-5">Get Started</PulsatingButton>
      <Ripple />
    </div>
  );
}
