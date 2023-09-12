import { Request, Response } from "express";
import createUsers from "../services/createUser";

export function hello(req: Request, res: Response) {
  const user = createUsers({
    email: "andre@gmail.com",
    password: "12346",
    techs: ["Java", "PHP", "Node", { experience: 10, title: "PHP" }],
  });

  return res.send("Hello!");
}
