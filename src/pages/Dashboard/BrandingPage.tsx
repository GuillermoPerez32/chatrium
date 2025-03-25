import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";

const BrandingPage = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Subscription Details</h1>
        <Button>Save</Button>
      </div>

      <Separator className="my-4" />

      <div className="flex items-center gap-4">
        <div>
          <p className="font-bold">Preferred Dashboard Name</p>
          <p className="text-xs text-gray-600">
            This name will be used as your company name.
          </p>
        </div>
        <Input className="w-5xs" />
      </div>

      <p className="font-bold mt-8">Email and landing page headers</p>

      <div className="mt-20">
        <div className="flex flex-col gap-4 items-center md:flex-row md:gap-20">
          <div>
            <p>Logo:</p>
            <p className="text-xs text-gray-600">(250px x 250px)</p>
          </div>
          <div className="flex gap-2">
            <Button>Upload</Button>
            <Button>Remove</Button>
          </div>
          <div>
            <p>Header Color:</p>
            <p>Header Text:</p>
          </div>
          <div>
            <RadioGroup defaultValue="light">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="light" id="light" />
                <label htmlFor="light">#FFFFFF</label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="dark" id="dark" />
                <label htmlFor="dark">#000000</label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandingPage;
