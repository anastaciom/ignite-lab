import Lesson from "./Lesson";

export default function SideBar() {
  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma das aulas
      </span>
      <div className="flex flex-col gap-8">
        <Lesson title={'Aula 1'} slug={'aula-1'} type={'class'} availableAt={new Date()}/>

      </div>
    </aside>
  );
}
