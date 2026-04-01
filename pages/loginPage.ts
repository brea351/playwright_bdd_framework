import { BasePage } from './basePage';

export class LoginPage extends BasePage {

  async navigate() {
    await super.navigate('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.fill('[data-test="username"]', username);
    await this.fill('[data-test="password"]', password);
    await this.click('[data-test="login-button"]');
  }

}