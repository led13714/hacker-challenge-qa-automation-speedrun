import { Page } from "@playwright/test";

export class ChallengeTen {
  readonly heading = this.page.getByRole("heading", { name: "Challenge #10: Fetch the password from the \"Network\" tab" });
  readonly url = "http://localhost:8000/challenges/normal/jellyfish.html";
  readonly passwordInput = this.page.getByPlaceholder("Enter password");
  readonly submit = this.page.getByRole("button", { name: "Submit" });

  constructor(public readonly page: Page) {}

  async openPage() {
    await this.page.goto(this.url);
    await this.page.waitForLoadState("domcontentloaded");
  }
}
