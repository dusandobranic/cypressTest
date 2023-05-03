/// <reference types="cypress" />

describe("Locators", () => {
    beforeEach(() => {
        cy.visit("/elements")
    })

    it("locating elements wtih the get command", () => {
        cy.get("button")
        cy.get("#btn-with-id")
        cy.get("button#btn-with-id")
        cy.getByTestId("btn-id-1")
    })
})