interface TechObject {
  title: string;
  experience: number;
}

interface CreateUser {
  name?: string; //interrogação é pra deixar o valor opcional
  email: string;
  password: string;
  techs: Array<string | TechObject>; //array de strings tb pode ser assim: string[]. O sinal "|" funciona como "ou"
}

export default function createUsers({
  name = "",
  email,
  password,
}: CreateUser) {
  const user = {
    name,
    email,
    password,
  };

  return user;
}
