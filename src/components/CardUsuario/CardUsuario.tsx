import React from "react";
import { User } from "@/types/User";
import { toast } from "react-toastify";

export default function CardUsuario(user: User) {
  const showInfo = () => {
    toast(`Olá, eu sou ${user.first_name} ${user.last_name}`, {
      position: "top-center",
      autoClose: 1250,
    });
  };

  return (
    <div key={user.id} className="card w-80 bg-base-100 shadow-xl hover:shadow-2xl transition duration-500 transform hover:scale-105 " onClick={showInfo}>
      <figure>
        <img src={user.avatar} alt="Avatar do usuário" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {user.first_name} {user.last_name}
          <div className="badge badge-secondary h-10">{user.employment.title}</div>
        </h2>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Telefone: {user.phone_number}</p>
        <p>
          Endereço: {user.address.street_address}, {user.address.city}
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{user.gender}</div>
          <div className="badge badge-outline">{user.subscription.plan}</div>
        </div>
      </div>
    </div>
  );
}
