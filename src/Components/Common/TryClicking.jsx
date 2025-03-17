import { CurvedArrow } from "./SVG";

export default function TryClicking() {
  return (
    <div className="flex absolute -top-10 -right-10 opacity-30">
      <p className="font-secondary w-25 relative">Try clicking</p>
      <CurvedArrow className="rotate-240 absolute -right-4 top-4.5" />
    </div>
  );
}
