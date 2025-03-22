import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const TrustPage = () => {
  return (
    <div className="h-full w-full p-4">
      <h1 className="font-semibold text-xl">SalesCaptain 10DLC Registration</h1>
      <div className="h-full w-full flex items-center justify-center">
        <div className="flex flex-col gap-4">
          <div>
            <span>
              Is the business entity you're registering located in the US and/or
              Canada?
            </span>
          </div>
          <div>
            <RadioGroup defaultValue="yes">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" />
                <Label htmlFor="no">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" />
                <Label htmlFor="no">No</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustPage;
