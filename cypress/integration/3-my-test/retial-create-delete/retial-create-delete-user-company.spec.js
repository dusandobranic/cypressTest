/// <reference types="cypress" />

describe("Login", () => {
    beforeEach(() => {
        cy.visit("https://admin.inform-technologies.com/")
    })

    it("Adding user to company", () => {
        cy.get("#Email").type("dedicit93@gmail.com")
        cy.get('[autocomplete="current-password"]').type("hello")
        cy.get('[type="submit"]').click()

        cy.get(`[onclick="location.href='/Company/GetCompanies'"]`).click()

        cy.contains("CypressCompany").click()
        cy.get(`[href="/User/GetUserList/533"]`).click()
        cy.get(`[onclick="location.href='/User/CreateUser'"]`).click()

        //const x = Math.floor(Math.random() * 1000)
        cy.get("#FirstName").type("Dusan")
        cy.get("#lastNameTxt").type("Dobranic")
        cy.get("#telephoneTxt").type("+381643047000")
        cy.get("#Email").type(`test@inform-technologies.com`)
        cy.get("#cityTxt").type("Novi Sad")
        cy.get("#Password").type("helloworld")
        cy.get("#zipCodeTxt").type("21000")
        cy.get("#SelectedRole").select("Administrator")
        cy.get("#addressTxt").type("Mihajla Pupina 14")
        cy.get("#Language").select("English")

        cy.contains("Save").click()
    })

    it("Delete last user", () => {
        cy.get("#Email").type("dedicit93@gmail.com")
        cy.get('[autocomplete="current-password"]').type("hello")
        cy.get('[type="submit"]').click()

        cy.get(`[onclick="location.href='/Company/GetCompanies'"]`).click()
        cy.contains("CypressCompany").click()
        cy.get(`[href="/User/GetUserList/533"]`).click()
        cy.get(`[class="ti-more"]`).last().click()
        cy.get(`[onclick="UserJSController.removeUserModal(this)"]`).last().click()
        cy.contains('YES').click()
    })
})