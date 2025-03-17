import "boxicons";

export default function InstituteInfo({ course }) {
  return (
    <div>
      <p className="text-lg mt-4 flex items-center">
        <span>{course.institute}</span>
        <box-icon type="solid" name="school" className="opacity-60 ms-2" />
      </p>
      <p className="opacity-60 text-sm pe-5">{course.instituteInfo}</p>
    </div>
  );
}
