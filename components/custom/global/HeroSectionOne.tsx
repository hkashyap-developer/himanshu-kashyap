import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <section className="z-10   relative bg-[url('/hero-bg-1.jpg')] bg-cover bg-center w-full ">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="z-0 absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="z-20 absolute top-0 left-0 w-full h-full object-cover bg-gradient-to-br from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.4)]"></div>

      <div>
        <div className="z-50 min-h-[84vh] flex items-end justify-start">
          <div className="flex flex-col items-left space-y-6 text-left max-w-3xl ml-[40px]">
            <h1 className="z-50 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-22">
              We are{" "}
              <span className="bg-gradient-to-r from-blue-700 to-purple-800 bg-clip-text text-transparent">
                Builder XI
              </span>
              , the lightning-fast builder
            </h1>
            <p className="z-50 text-black text-lg  sm:text-xl md:text-3xl max-w-2xl leading-relaxed">
              Transform your ideas into reality!
            </p>
            <div className="z-50 mb-8">
              <Button
                size="md"
                className="z-50 max-w-min text-lg px-8 py-6 h-auto font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Building Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
