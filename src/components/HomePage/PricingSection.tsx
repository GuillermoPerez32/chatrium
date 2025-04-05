import { Check } from "lucide-react";

const PricingSection = () => {
  return (
    <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        aria-hidden="true"
      ></div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-primary-600">Pricing</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-muted-foreground sm:text-6xl">
          Choose the right plan for your enterprise chat app
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
        Choose an affordable plan that’s packed with the best features for
        engaging your team, enhancing communication, and driving productivity.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        <div className="bg-slate-50 rounded-3xl rounded-t-3xl p-8 ring-1 ring-muted-foreground sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-tr-none lg:rounded-bl-3xl">
          <h3
            id="tier-hobby"
            className="text-base/7 font-semibold text-primary-600"
          >
            Basic
          </h3>
          <p className="mt-4 flex items-baseline gap-x-2">
            <span className="text-5xl font-semibold tracking-tight text-muted-foreground">
              $29
            </span>
            <span className="text-base text-muted-foreground">/month</span>
          </p>
          <p className="mt-6 text-base/7 text-muted-foreground">
            Ideal for small teams getting started with our chat app.
          </p>
          <ul
            role="list"
            className="mt-8 space-y-3 text-sm/6 text-muted-foreground sm:mt-10"
          >
            <li className="flex gap-x-3">
              <Check className="text-primary" />
              50 users
            </li>
            <li className="flex gap-x-3">
              <Check className="text-primary" />
              10 GB storage
            </li>
            <li className="flex gap-x-3">
              <Check className="text-primary" />
              Basic analytics
            </li>
            <li className="flex gap-x-3">
              <Check className="text-primary" />
              Email support
            </li>
          </ul>
          <a
            href="#"
            aria-describedby="tier-hobby"
            className=" mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-primary-600 ring-1 ring-primary ring-inset hover:ring-primary-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 sm:mt-10"
          >
            Get started today
          </a>
        </div>
        <div className="relative rounded-3xl bg-gray-900 p-8 ring-1 shadow-2xl ring-muted-foreground sm:p-10">
          <h3
            id="tier-enterprise"
            className="text-base/7 font-semibold text-primary-400"
          >
            Enterprise
          </h3>
          <p className="mt-4 flex items-baseline gap-x-2">
            <span className="text-5xl font-semibold tracking-tight text-white">
              $99
            </span>
            <span className="text-base text-muted-foreground">/month</span>
          </p>
          <p className="mt-6 text-base/7 text-muted-foreground">
            Comprehensive features and support for large teams.
          </p>
          <ul
            role="list"
            className="mt-8 space-y-3 text-sm/6 text-muted-foreground sm:mt-10"
          >
            <li className="flex gap-x-3">
              <Check className="text-primary-400" />
              Unlimited users
            </li>
            <li className="flex gap-x-3">
              <Check className="text-primary-400" />1 TB storage
            </li>
            <li className="flex gap-x-3">
              <Check className="text-primary-400" />
              Advanced analytics
            </li>
            <li className="flex gap-x-3">
              <Check className="text-primary-400" />
              24/7 support
            </li>
            <li className="flex gap-x-3">
              <Check className="text-primary-400" />
              Custom integrations
            </li>
            <li className="flex gap-x-3">
              <Check className="text-primary-400" />
              Priority support
            </li>
          </ul>
          <a
            href="#"
            aria-describedby="tier-enterprise"
            className="mt-8 block rounded-md bg-primary-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-primary-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 sm:mt-10"
          >
            Get started today
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
