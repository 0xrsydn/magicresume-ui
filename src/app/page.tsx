import PulsatingButton from "@/components/magicui/pulsating-button";
import Ripple from "@/components/magicui/ripple";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background">
      <h1 className="z-5 text-center text-5xl font-bold text-black mb-4">
        Find Your Ideal Role with <span className="text-violet-500">AI</span>
      </h1>
      <p className="z-5 text-center text-xl text-gray-500 max-w-2xl mb-8">
        Unlock new career opportunities with our AI-powered job matching platform. 
      </p>
      <div className="flex space-x-4">
        <Link href="/resume-ai">
          <PulsatingButton className="text-lg">Try Now</PulsatingButton>
        </Link>
      </div>
      <div className="mt-16 text-center">
        <p className="text-sm text-gray-400">Powered by Llama3</p>
      </div>
      <Ripple />
    </div>
  );
}