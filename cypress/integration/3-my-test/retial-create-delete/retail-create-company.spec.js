/// <reference types="cypress" />

//https://azureadmin.inform-technologies.com/Account/Login
//https://admin.inform-technologies.com/

describe("Login", () => {
    beforeEach(() => {
        cy.visit("https://admin.inform-technologies.com/")
    })

    it("Test login", () => {
        cy.get("#Email").type("dedicit93@gmail.com")
        cy.get('[autocomplete="current-password"]').type("hello")
        cy.get('[type="submit"]').click()

        cy.get(`[onclick="location.href='/Company/GetCompanies'"]`).click()

        cy.get(`[data-original-title="Create"]`).click()

        cy.get("#Name").type("CypressCompanyDelete")
        cy.get("#CountryName").select("Serbia")
        cy.get("#VAT").type("22%")
        cy.get("#City").type("Novi Sad")
        cy.get("#Telephone").type("+381 64 304 7000")
        cy.get("#ZipCode").type("21000")
        cy.get("#Email").type("delete@inform-technologies.com")
        cy.get("#Address").type("Mihajla Pupina 2")
        cy.get("#DeviceNumber").type("10")
        cy.get("#DemoPeriod").type("2")
        cy.get(`[for="Active"]`).click()
        cy.get(`[for="EmailNotification"]`).click()
        cy.get("#NumberOfDays2").type("{selectall}{backspace}")
        cy.get("#NumberOfDays2").type("2")
        cy.get("#NumberOfDays3").type("{selectall}{backspace}")
        cy.get("#NumberOfDays3").type("10")

        cy.contains('Save').click()
    })

    it("Delete company", () => {
        cy.get("#Email").type("dedicit93@gmail.com")
        cy.get('[autocomplete="current-password"]').type("hello")
        cy.get('[type="submit"]').click()

        cy.get(`[onclick="location.href='/Company/GetCompanies'"]`).click()

        cy.contains("CypressCompanyDelete").parent('td').parent("tr").find("label").click()
        cy.get(`[onclick="CompanyJSController.onRemoveClicked()"]`).click()
    })
})