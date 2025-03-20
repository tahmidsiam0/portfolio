export default function Field({ label, type, className = "" }) {
  return (
    <div className={`relative h-7 w-full mb-6 ${className}`}>
      {type === "textarea" ? (
        <textarea className="input peer" placeholder=" " />
      ) : (
        <input type={type} required className="input peer" placeholder=" " />
      )}
      <label className="label">{label}</label>
      <span className="underline"></span>
    </div>
  );
}
