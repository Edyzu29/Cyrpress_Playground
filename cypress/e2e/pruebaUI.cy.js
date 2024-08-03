const url = "https://demoqa.com/";

describe("probar UI", () => {
  it("tocar boton", () => {
    cy.visit(url);

    cy.url().should("include", ".com");

    cy.title().should("include", "DEMOQA");

    cy.get("header > a > img").should("be.visible");

    cy.get(
      "svg[stroke='currentColor'][fill='currentColor'][stroke-width='0'][viewBox='0 0 448 512']"
    ).should("be.visible");
  });
});
