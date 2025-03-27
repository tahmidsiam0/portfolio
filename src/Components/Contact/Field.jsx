export default function Field({ label, type, className = "" }) {
  return (
    <div className={`relative h-7 w-full mb-7 ${className}`}>
      {type === "textarea" ? (
        <textarea required className="input peer" placeholder=" " />
      ) : (
        <input type={type} required className="input peer" placeholder=" " />
      )}
      <label className="label">{label}</label>
      <span className="underline"></span>
    </div>
  );
}
