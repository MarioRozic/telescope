import ConnectedCardList from "../connectedComponents/ConnectedCardList";
import ConnectedMap from "../connectedComponents/ConnectedMap";

export default function Home() {
  return (
    <>
      <div className="grid grid-row-2 gap-5">
        <div className="row-span-1 h-40">
          <ConnectedMap />
        </div>
        <div className="row-span-1">
          <ConnectedCardList />
        </div>
      </div>
    </>
  );
}
