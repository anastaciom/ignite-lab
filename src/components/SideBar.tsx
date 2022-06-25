import { useGetLessonsQuery } from "../graphql/generated";
import Lesson from "./Lesson";

export default function SideBar() {
  const { data } = useGetLessonsQuery();

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma das aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <div className="flex flex-col gap-8" key={lesson.id}>
              <Lesson
                title={lesson.title}
                slug={lesson.slug}
                type={lesson.lessonType}
                availableAt={new Date(lesson.availableAt)}
              />
            </div>
          );
        })}
      </div>
    </aside>
  );
}
