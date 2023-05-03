/// <reference types="cypress" />

describe("habbit dashboard", () => {

    beforeEach(() => {
        cy.visit("/habits")
    })

    it("should toggle icon on card clicked", () => {
        cy.get("#habit-add-btn").click()
        cy.get("input[placeholder='Habit']").type("Drink a cup of water")
        cy.contains("Save Changes").click()
        cy.get(".HabitCard__completion-icon")
        cy.get('[src="/static/media/close.fa7e5ead5078dad970c8de0491992cf5.svg"]').should("be.visible")
        cy.contains("Drink a cup").click()
        cy.get('[src="/static/media/check.9e8832df330a1f2d4855cadd8e342e84.svg"]').should("be.visible")
    })
})