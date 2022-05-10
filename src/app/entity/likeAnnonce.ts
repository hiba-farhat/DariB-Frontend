
export class UserAnnonce {
    id?: number;
    username?: string;
    email?: string;
    resetPasswordToken?: string;
    confirmPasswordUser?: string;
    password?: string;
    address?: string;
    tel?: string;
    nom?: string;
    prenom?: string;
    accountVerified?: number;
    enabled?: boolean;
}

export class LikeAnnonce {
    idLike?: number;
    dateCreation?: Date;
    typeLike?: string;
    idAnnonce?: number;
    user?: UserAnnonce;
    idUser?: number;
}