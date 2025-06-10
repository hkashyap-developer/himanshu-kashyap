import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <section className="w-full min-h-[84vh] flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            We are{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Builder XI
            </span>
            , the lightning-fast builder
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl md:text-2xl max-w-2xl leading-relaxed">
            Transform your ideas into reality at unprecedented speed. Build,
            deploy, and scale your applications with the power of
            next-generation development tools.
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-6 h-auto font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
          >
            Start Building Now
          </Button>
        </div>
      </div>
    </section>
  );
}
