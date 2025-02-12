describe("Halaman HomePage", () => {
    it("Kunjungi HomePage", () => {
        cy.visit("/");
        cy.contains("Popular");
        cy.get('#popular').scrollIntoView();
        cy.wait(1000)
        cy.contains("Moana").click()
    })
})