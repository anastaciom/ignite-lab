import { FormEvent, useState } from "react";
import { IgniteLogo } from "../../assets/IgniteLogo";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "../../graphql/generated";
import ImageBackground from "../../../src/assets/imageBackground.png";
interface IFormData {
  name: string;
  email: string;
}

export default function SubscribePage() {
  const [formData, setFormData] = useState<IFormData>({ email: "", name: "" });
  const navigate = useNavigate();

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();
  async function handleSubmit(event: FormEvent) {
    event?.preventDefault();

    if (formData.email === "" && formData.email === "") {
      return toast.dark("Preencha os dados antes de enviar.");
    }
    await createSubscriber({
      variables: { name: formData?.name, email: formData?.email },
    });

    navigate("/event");
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <IgniteLogo />
          <h1 className="mt-8 text-[2.5rem] leading-tight ">
            Construa uma{" "}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React JS</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>
          <form
            className="flex flex-col gap-2 w-full"
            onSubmit={handleSubmit}
            method={"POST"}
          >
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              name="email"
              placeholder="Seu melhor e-mail"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors"
            >
              {loading ? "Carregando..." : "Garantir minha vaga"}
            </button>
          </form>
        </div>
      </div>
      <img src={ImageBackground} className="mt-10" alt="background" />
    </div>
  );
}
