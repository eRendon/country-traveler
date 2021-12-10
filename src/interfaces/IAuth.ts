export interface IAuth {
    isLogged: boolean
}

export interface IAuthStore {
    auth: IAuth
}

export interface IFormLogin {
    email: string
    password: string
}