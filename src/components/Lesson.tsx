import { CheckCircle, Lock } from "phosphor-react";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "Live" | "class";
}

// parei 55:50 aula 2

export default function LessonLessonProps(props: LessonProps) {
  const test = false;
  return (
    <a href="#">
      <span className="text-gray-300">Terça • 15 de junho • 19h00</span>
      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          {test ? (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className="text-xs rounded px-2 py-[0.12rem] text-white border border-green-300 font-bold">
            {props.type === "Live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong className="text-gray-200 mt-5 block">{props.title}</strong>
      </div>
    </a>
  );
}
