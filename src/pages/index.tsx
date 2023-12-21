import CardUsuario from "@/components/CardUsuario/CardUsuario";
import Loading from "@/components/Loading/Loading";
import { User } from "@/types/User";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const [users, setUsers] = useState([] as User[]);
  const [loading, setLoading] = useState(false);

  // Definindo a função getUsers com useCallback para evitar recriação desnecessária
  const getUsers = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://random-data-api.com/api/v2/users?size=20");
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
      toast.error("Erro ao carregar usuários");
    }
  }, []);

  // Chamando getUsers no componente montado
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex justify-center mb-8">
        {loading ? (
          <button className="btn btn-primary" disabled>
            <Loading />
          </button>
        ) : (
          <button className="btn btn-primary" onClick={getUsers}>
            Gerar novos usuários
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {users.map((user) => (
          <CardUsuario {...user} key={user.uid} />
        ))}
      </div>
    </div>
  );
}
