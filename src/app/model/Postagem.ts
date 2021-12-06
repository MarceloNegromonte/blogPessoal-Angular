import { Tema } from "./Tema";
import { Usuario } from "./Usuario";

export class Postagem{
    public id: number;
    public titulo: string;
    public date: Date;
    public criador: Usuario;
    public texto: string;
    public tema: Tema;

}