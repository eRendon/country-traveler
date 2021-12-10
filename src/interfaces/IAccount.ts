export interface IAccount {
    email?: string;
    passwordHash?: string;
    title?: string;
    firstName?: string;
    lastName?: string;
    acceptTerms?: boolean;
    role?: string;
    verificationToken?: string | null;
    verified?: number | string;
    resetToken?: string | null;
    resetTokenExpires?: Date | string;
    passwordReset?: Date | number;
    password?: string;
    createAt?: Date;
    updateAt?: Date;
    isVerified?: IsVerified;
    id?: number;
    confirmPassword?: string
    jwtToken?: string
}

export interface IsVerified {
    type: string;
    get: Function;
}

export interface IUserStore {
    profile?: IAccount
}