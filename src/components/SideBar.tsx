import { gql, useQuery } from "@apollo/client";
import Lesson from "./Lesson";

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`;

interface ILessonResponseData {
  lessons: [
    {
      availableAt: string;
      id: string;
      lessonType: "live" | "class";
      slug: string;
      title: string;
      __typename: string;
    }
  ];
}

export default function SideBar() {
  const { data } = useQuery<ILessonResponseData>(GET_LESSONS_QUERY);

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma das aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <div className="flex flex-col gap-8">
              <Lesson
                key={lesson.id}
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
