import dividerIcon from "../../assets/Images/divider.png";

export default function FancyDivider({ className }) {
  return (
    <div>
      <img
        className={`opacity-25 ${className}`}
        src={dividerIcon}
        alt="Divider Icon"
      />
    </div>
  );
}
