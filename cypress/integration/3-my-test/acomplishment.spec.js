/// <reference types="cypress" />

describe("acomplishment form testing", () => {

    beforeEach(() => {
        cy.visit("/accomplishments")
    })

    it("Should showcase error if info missing", () => {
        cy.get('[data-cy="accomplishment-title-input"]').type("My Programing Acomplishment")
        cy.get('[data-cy="accomplishment-input"]').type("My Programing Acomplishment is that i got the job in a company that")
        cy.get(".Accomplishment-btn").click();
        cy.get(".Accomplishment-error-container").should("be.visible")
        cy.contains("Complete the items").should("be.visible")
    })

    it("Mici flex", () => {
        cy.get(".Accomplishment-input").type("Jako sam pametan!")
    })

    it('Should show accomlishment img', () => {
        cy.get('[data-cy="accomplishment-title-input"]').type("My Programing Acomplishment")
        cy.get('[data-cy="accomplishment-input"]').type("My Programing Acomplishment is that i got the job in a company that")
        cy.get('[type="checkbox"]').click();
        cy.get(".Accomplishment-btn").click();
        cy.contains("This Accomplisment").should("be.visible")
    })

    it("Check if go back button works", () => {
        cy.get('[data-cy="accomplishment-title-input"]').type("My Programing Acomplishment")
        cy.get('[data-cy="accomplishment-input"]').type("My Programing Acomplishment is that i got the job in a company that")
        cy.get('[type="checkbox"]').click();
        cy.get(".Accomplishment-btn").click();
        cy.contains("This Accomplisment").should("be.visible")
        cy.contains("Go Back").click()
        cy.get('[data-cy="accomplishment-title-input"]').should("have.value", "")
        cy.get('[data-cy="accomplishment-input"]').should("have.value", "")
        cy.get('[type="checkbox"]').should("not.be.checked")
    })
}) 