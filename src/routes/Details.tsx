import ConnectedCardDetails from "../connectedComponents/ConnectedCardDetails";
import ConnectedMapDetails from "../connectedComponents/ConnectedMapDetails";

export default function Details() {
  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <ConnectedCardDetails />
        </div>
        <div className="col-span-1">
          <ConnectedMapDetails />
        </div>
      </div>
    </>
  );
}
