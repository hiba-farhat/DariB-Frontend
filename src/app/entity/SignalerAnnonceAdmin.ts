import { Annonce } from "./annonce.model";

export class SignalerAnnonceAdmin{
    idAnnonce?:number;
    IdSignaler?: number;
    description?: string;
    dateCreation?: Date;
    annonce?:Annonce;
    nbre?:number;
}