import { CloudUpload, HardDrive, Lock } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-primary-400">
                Enhance Communication
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Enterprise Chat Solutions
              </p>
              <p className="mt-6 text-lg/8 text-muted-foreground">
                Our enterprise chat app streamlines communication, boosts
                productivity, and ensures secure data exchange within your
                organization.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-muted-foreground lg:max-w-none">
                <div>
                  <dt className="flex gap-2 font-semibold text-white">
                    <CloudUpload className="text-primary-400" />
                    Instant Messaging.
                  </dt>
                  <dd className="inline">
                    Communicate in real-time with team members, ensuring quick
                    decision-making and collaboration.
                  </dd>
                </div>
                <div>
                  <dt className="flex gap-2 font-semibold text-white">
                    <Lock className="text-primary-400" />
                    Secure Channels.
                  </dt>
                  <dd className="inline">
                    Ensure your conversations are protected with end-to-end
                    encryption and secure data storage.
                  </dd>
                </div>
                <div>
                  <dt className="flex gap-2 font-semibold text-white">
                    <HardDrive className="text-primary-400" />
                    File Sharing.
                  </dt>
                  <dd className="inline">
                    Share documents, images, and other files seamlessly within
                    the chat, enhancing collaboration.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <img
            src="/logo.jpeg"
            alt="Enterprise chat app screenshot"
            className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-muted-foreground sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width="2432"
            height="1442"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
