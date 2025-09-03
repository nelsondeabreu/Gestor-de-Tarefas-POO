import Cookies from "js-cookie";

interface AuthContextType {
    user: User | null;
    register: (user: User) => void;
    login: (user: UserLogin) => Promise<void>;
    logout: () => Promise<void>;
}
export interface User{
    nome: string
    email: string
    password: string
}
export interface UserLogin{
    email: string
    password: string
}
class AuthContext implements AuthContextType {
    constructor(public user: User | null = null) { this.user = user; }

    register(user: User){
        const stored = localStorage.getItem("tb_user");
        const users = stored ? JSON.parse(stored) : [];
        if (users.find((u: User) => u.email === user.email)) {
            throw new Error("Usuário já cadastrado");
        }
        users.push(user);
        localStorage.setItem("tb_user", JSON.stringify(users));
    }

    login(user: UserLogin): Promise<void> {
        const stored = localStorage.getItem("tb_user");
        const userLogged = stored ? JSON.parse(stored).find((u: UserLogin) => u.email === user.email && u.password === user.password) : null;
        if (userLogged) {
            this.user = userLogged;
            localStorage.setItem("userLogged", JSON.stringify(userLogged));
            const token = btoa(`${userLogged.email}-${Date.now()}`);
            Cookies.set("authToken", token, { expires: 1 });
            return Promise.resolve();
        }
         throw new Error("Credenciais inválidas");
    }

    logout(): Promise<void> {
        this.user = null;
        localStorage.removeItem("userLogged");
        Cookies.remove("authToken");
        return Promise.resolve();
    }
}
export { AuthContext };
