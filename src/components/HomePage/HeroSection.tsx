import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        ></div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="bg-white relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our new enterprise chat app features.
              <a href="#" className="font-semibold text-primary-600">
                <span className="absolute inset-0" aria-hidden="true"></span>
                <span className="ml-1">Read more</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
              Connect with your team instantly
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Experience seamless communication with our new enterprise chat
              app. Stay connected with your colleagues anytime, anywhere.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#">
                <Button>Get started</Button>
              </a>
              <a href="#">
                <Button variant="outline">
                  Learn more <span aria-hidden="true">→</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        ></div>
      </div>
    </div>
  );
};

export default HeroSection;
