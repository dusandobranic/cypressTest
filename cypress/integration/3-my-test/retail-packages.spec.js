/// <reference types="cypress" />

describe("Login", () => {
    beforeEach(() => {
        cy.visit("https://admin.inform-technologies.com/")
    })

    it("Delete user form company", () => {
        cy.get("#Email").type("dedicit93@gmail.com")
        cy.get('[autocomplete="current-password"]').type("hello")
        cy.get('[type="submit"]').click()
        cy.get(`[onclick="location.href='/Package/GetPackages'"]`).click()
    }
    )
})