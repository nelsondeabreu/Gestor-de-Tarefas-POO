"use client";
import { Facebook, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { handleRegister } from "@/app/hooks/useAuth";
import { User } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<User>();

  const router = useRouter();

  const onSubmit: SubmitHandler<User> = (data) => {
    handleRegister(data);
    router.push('/sign-in');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-row bg-white rounded-lg shadow-lg w-4/5 h-4/5 overflow-hidden">

        <section className="flex flex-col w-1/3 bg-green-200 items-center justify-center gap-2">
          <h1 className="text-2xl font-bold mb-4 text-center mt-4">Bem-vindo de volta!</h1>
          <p className="text-center">To keep connected  with us <br /> please login with your personal</p>
          <Link href="/sign-in" className="text-black text-center hover:underline p-2 border-white border-2 w-30 rounded-3xl">
            Entrar
          </Link>
        </section>
        <form onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-2/3 items-center justify-center"
        >
          <ul className="flex gap-4">
            <li className="border rounded-full p-1.5"><Facebook /></li>
            <li className="border rounded-full p-1.5"><Linkedin /></li>
            <li className="border rounded-full p-1.5"><Github /></li>
          </ul>

          <input
            type="text"
            placeholder="Nome"
            {...register("nome", {
              required: "O nome é obrigatório",
            })}
            className="w-90 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.nome && <p style={{ color: "red" }}>{errors.nome.message}</p>}
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "O email é obrigatório",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Formato de email inválido",
              },
            })}
            className="w-90 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

          <input
            type="password"
            placeholder="Senha"
            {...register("password", { required: "A senha é obrigatório" })}
            className="w-90 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}

          <button type="submit"
            className="w-90 border border-gray-300 bg-green-300 rounded-3xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Enviar
          </button>
        </form>
      </div>
      
    </div>
  );
}
