describe("Calculator", () => {
    it("Test addition", () => {
        cy.visit("http://localhost:5638");
        cy.contains("1").click();
        cy.contains("+").click();
        cy.contains("2").click();
        cy.contains("=").click();
        cy.get(".result").contains("3");
    });

    it("Test soustraction", () => {
        cy.visit("http://localhost:5638");
        cy.contains("2").click();
        cy.contains("-").click();
        cy.contains("1").click();
        cy.contains("=").click();
        cy.get(".result").contains("1");
    });

    it("Test square", () => {
        cy.visit("http://localhost:5638");
        cy.contains("4").click();
        cy.contains("√x").click();
        cy.contains("=").click();
        cy.get(".result").contains("2");
    });

    it("Test modulo", () => {
        cy.visit("http://localhost:5638");
        cy.contains("1").click();
        cy.contains("%").click();
        cy.contains("2").click();
        cy.contains("=").click();
        cy.get(".result").contains("1");
    });
});

