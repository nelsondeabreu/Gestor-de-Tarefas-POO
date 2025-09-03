import { AuthContext } from '../context/AuthContext';

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

export const handleLogin = async (data: DataForm) => {
    try {
        await useAuth.login(data);
    } catch (error) {
        throw new Error(`Erro ao fazer login: ${error as string}`);
    }
}