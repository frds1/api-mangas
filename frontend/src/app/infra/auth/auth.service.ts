import { Injectable } from '@angular/core';
import { UserEntity } from 'src/app/domain/entities/user/user-entity';

const credentialsKey = 'credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuario!: UserEntity;

  constructor() {
    const savedCredentials = localStorage.getItem(credentialsKey);

    if (savedCredentials) {
      this.usuario = JSON.parse(savedCredentials);
    }
  }

  isAuthenticated(): boolean {
    return !!this.credentials.token;
  }

  get credentials(): UserEntity {
    return this.usuario;
  }

  set credentials(credentials: UserEntity) {
    this.usuario = credentials || null;

    if (credentials) {
      localStorage.setItem(credentialsKey, JSON.stringify(credentials));
    } else {
      localStorage.removeItem(credentialsKey);
    }
  }
}
