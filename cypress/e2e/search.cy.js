describe("Halaman Search", () => {
  it("Kunjungi Search", () => {
    cy.visit("/");
    cy.get("#toggleSearch").click();
    cy.get("#searchBox").type("Ave");
    cy.wait(3000);
    cy.get("#searchBox").type("nger");
    cy.wait(3000);
    cy.contains("Avengers: Infinity War");
  });
});
