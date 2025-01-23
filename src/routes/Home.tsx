import ConnectedCardList from "../connectedComponents/ConnectedCardList";
import ConnectedMap from "../connectedComponents/ConnectedMap";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-3 gap-6 h-screen">
        <div className="col-span-2 overflow-auto">
          <ConnectedCardList />
        </div>
        <div className="col-span-1">
          <ConnectedMap />
        </div>
      </div>
    </>
  );
}
