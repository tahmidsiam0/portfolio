import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import StudyCard from "./../Components/Education/StudyCard";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import { educationData } from "../Components/Education/educationData";
import InfiniteScroll from "react-infinite-scroll-component";
import { BookClose, BookOpen } from "akar-icons";

export default function EducationPage() {
  return (
    <>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.1,
          },
        }}
      >
        <InfiniteScroll
          height={320}
          dataLength={1}
          loader={<p className="text-center">Loading...</p>}
          endMessage={
            <p className="text-center">
              <b>This concludes my educational background</b>
            </p>
          }
        >
          {educationData.map((course, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent color="textSecondary">
                {course.year}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  className="bg-third! text-blue-500 m-1!"
                  variant="outlined"
                >
                  {typeof course.year === "number" ? (
                    <BookClose size={20} />
                  ) : (
                    <BookOpen size={20} />
                  )}
                </TimelineDot>
                <TimelineConnector className="bg-third!" />
              </TimelineSeparator>
              <TimelineContent>
                <StudyCard course={course} />
              </TimelineContent>
            </TimelineItem>
          ))}
        </InfiniteScroll>
      </Timeline>
    </>
  );
}
