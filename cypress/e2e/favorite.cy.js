describe("Halaman Favorite", () => {
    it("Kunjungi Favorite", () => {
        cy.visit("/favorites");
        cy.contains("The Wild Robot");
        cy.get('#favorite').scrollIntoView();
        cy.wait(1000)
        cy.contains("The Wild Robot").click()
    })
})