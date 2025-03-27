import dividerIcon from "../../assets/Images/divider.png";

export default function FancyDivider({ className }) {
  return (
    <div id="FancyDivider">
      <img
        className={`opacity-25 ${className}`}
        src={dividerIcon}
        alt="Divider Icon"
      />
    </div>
  );
}

export function FancyDividerHidden({ className }) {
  return (
    <div id="FancyDividerHidden" className="opacity-0 scale-75">
      <img
        className={`opacity-25 ${className}`}
        src={dividerIcon}
        alt="Divider Icon"
      />
    </div>
  );
}
