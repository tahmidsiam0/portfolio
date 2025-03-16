export default function SkillCard({ children, slot, title }) {
  return (
    <div className="card-bg" data-swapy-slot={slot}>
      <div data-swapy-item={slot} className="card shadowSecondary">
        {children}
        <p className="opacity-60 pt-2">{title}</p>
      </div>
    </div>
  );
}
