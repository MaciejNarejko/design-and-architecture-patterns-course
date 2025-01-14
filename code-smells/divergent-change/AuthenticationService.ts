import { UserAccount } from './UserAccount';

export class AuthenticationService {
    login(user: UserAccount, username: string, password: string): void {
        if (user.username === username && user.password === password) {
            console.log(`${user.username} logged in.`);
        } else {
            console.log("Invalid credentials.");
        }
    }

    logout(user: UserAccount): void {
        console.log(`${user.username} logged out.`);
    }
}