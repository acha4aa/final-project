describe("Halaman Ratings", () => {
    it("Kunjungi Ratings", () => {
        cy.visit("/ratings");
        cy.contains("Smile 2");
        cy.get('#ratings').scrollIntoView();
    })
})