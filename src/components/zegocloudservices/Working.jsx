import React from "react";

function Working() {
  const steps = [
    {
      name: "Integrate the ZegoCloud SDK.",
      description:
        "Integrate the ZegoCloud SDK to enable real-time video and voice communication, live streaming, and interactive broadcasting with low latency and high reliability.",
    },
    {
      name: "Generate a token using a conference ID.",
      description:
        "Generate a token using a conference ID to ensure secure and authenticated access to the conference.",
    },
    {
      name: "Join the conference.",
      description:
        "Join the conference to participate in real-time discussions and collaborations.",
    },
  ];

  return (
    <div className="overflow-hidden ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight  sm:text-5xl">
                How it works?
              </p>
              <p className="mt-6 text-lg/8 ">
                The conference is a virtual meeting which allows you to connect
                with your fellows. It is build using the service provided by{" "}
                <strong>ZegoCloud</strong>. You can join the conference by
                entering the conference ID.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 lg:max-w-none">
                {steps.map((step) => (
                  <div key={step.name} className="relative pl-9">
                    <dt className="inline font-semibold ">{step.name}</dt>{" "}
                    <dd className="inline opacity-60">{step.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://www.zegocloud.com/_nuxt/img/img_solution_Virtual%20collaboration@2x.e7c963a.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Working;
