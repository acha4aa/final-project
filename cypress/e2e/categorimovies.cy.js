describe("Halaman CategoriMovies", () => {
  it("Kunjungi CategoriMovies", () => {
    cy.visit("/kategori");
    cy.get("#kategori button").first().click();
    cy.get("#Kategori", { timeout: 10000 }).scrollIntoView();
    cy.contains("Amaran").should("be.visible");
    cy.contains("Amaran");
  });
});
