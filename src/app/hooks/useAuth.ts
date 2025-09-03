import { AuthContext } from '../context/AuthContext';
import { UserLogin } from '../context/AuthContext';

interface DataForm{
    nome: string
    email: string
    password: string
}

const useAuth = new AuthContext();

export const handleRegister = async (data: DataForm) => {
    try {
        await useAuth.register(data);
    } catch (error) {
        throw new Error(`Erro ao registrar usuário: ${error as string}`);
    }
};

export const handleLogin = async (data: UserLogin) => {
    try {
        await useAuth.login(data);
    } catch (error) {
        throw new Error(`Erro ao fazer login: ${error as string}`);
    }
}

export const handleLogout = async () => {
    try {
        await useAuth.logout();
    } catch (error) {
        throw new Error(`Erro ao fazer logout: ${error as string}`);
    }
};
