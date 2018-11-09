import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

    getToken(): String {
        return this.currentSession;
    }

    get currentUser() {
        if (!this.currentSession) { return null; }
        return {
            IdTaiKhoan: this.currentSession.IdTaiKhoan,
            UserName: this.currentSession.UserName,
            Pass: this.currentSession.Pass,
            IdQuyen: this.currentSession.IdQuyen,
        };
    }

    get currentSession() {
        if (!window.sessionStorage['session']) { return null; }
        return JSON.parse(window.sessionStorage['session']);
    }

    saveSession(session: String) {
        window.sessionStorage['session'] = JSON.stringify(session);
    }

}
