import { BasePage } from './basePage';

export class InventoryPage extends BasePage {

  async addBackpackToCart() {
    await this.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  async getCartCount() {
    return await this.getText('.shopping_cart_badge');
  }

}