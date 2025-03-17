import "boxicons";

export default function CourseInfo({ course }) {
  return (
    <div>
      <p className="text-2xl flex items-center">
        <span> {course.course}</span>
        <box-icon type="solid" name="graduation" className="opacity-60 ms-2" />
      </p>
      {typeof course.year === "number" ? (
        <p className="text-md">Passing Year: {course.year}</p>
      ) : (
        <p className="text-md">Session: 2022 - 2023</p>
      )}
      {typeof course.year === "number" && (
        <p className="opacity-80">
          GPA: <strong>{course.GPA}</strong>
        </p>
      )}
      <p className="opacity-60 text-sm pe-5">{course.description}</p>
    </div>
  );
}
