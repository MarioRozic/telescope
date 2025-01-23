import ConnectedCardList from "../connectedComponents/ConnectedCardList";
import ConnectedMap from "../connectedComponents/ConnectedMap";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <ConnectedCardList />
        </div>
        <div className="col-span-1">
          <ConnectedMap />
        </div>
      </div>
    </>
  );
}
