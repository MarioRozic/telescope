import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";

type CardFormType = {
  formData: {
    propertyName: string;
    address: string;
    zipCode: string;
    city: string;
    coordinates: string;
    estimatedValue: number;
    totalRisk: number;
    handledRisks: number;
    relevantRisks: number;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function CardForm({
  formData,
  handleChange,
  handleSubmit,
}: CardFormType) {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg space-y-4"
    >
      <h2 className="text-xl font-bold mb-4">Add New Property</h2>
      <div>
        <Label htmlFor="propertyName">Property Name</Label>
        <Input
          id="propertyName"
          name="propertyName"
          value={formData.propertyName}
          onChange={handleChange}
          placeholder="Enter property name"
        />
      </div>
      <div>
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter address"
        />
      </div>
      <div>
        <Label htmlFor="zipCode">Zip Code</Label>
        <Input
          id="zipCode"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          placeholder="Enter zip code"
        />
      </div>
      <div>
        <Label htmlFor="city">City</Label>
        <Input
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Enter city"
        />
      </div>
      <div>
        <Label htmlFor="coordinates">Coordinates (lat-lng)</Label>
        <Input
          id="coordinates"
          name="coordinates"
          value={formData.coordinates}
          onChange={handleChange}
          placeholder="Enter coordinates"
        />
      </div>
      <div>
        <Label htmlFor="estimatedValue">Estimated Value (NOK)</Label>
        <Input
          id="estimatedValue"
          name="estimatedValue"
          type="number"
          value={formData.estimatedValue}
          onChange={handleChange}
          placeholder="Enter estimated value"
        />
      </div>
      <div>
        <Label htmlFor="totalRisk">Total Financial Risk (NOK)</Label>
        <Input
          id="totalRisk"
          name="totalRisk"
          type="number"
          value={formData.totalRisk}
          onChange={handleChange}
          placeholder="Enter total risk"
        />
      </div>
      <div>
        <Label htmlFor="handledRisks">Handled Risks</Label>
        <Input
          id="handledRisks"
          name="handledRisks"
          type="number"
          value={formData.handledRisks}
          onChange={handleChange}
          placeholder="Enter handled risks"
        />
      </div>
      <div>
        <Label htmlFor="relevantRisks">Relevant Risks</Label>
        <Input
          id="relevantRisks"
          name="relevantRisks"
          type="number"
          value={formData.relevantRisks}
          onChange={handleChange}
          placeholder="Enter relevant risks"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-blue-500 text-white hover:bg-blue-600"
      >
        Submit
      </Button>
    </form>
  );
}
