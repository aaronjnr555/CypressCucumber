import { Before, After, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Before(()=>{
    cy.reload()
})

After(()=>{
    cy.reload()
})

Given("open newtours application", ()=>{
    cy.visit("https://demo.guru99.com/test/newtours/index.php")
})

When("I log in as Following", (datatable)=>{
    datatable.hashes().forEach(element => {
        cy.get('[userName=mercury]').type(element.userName)
        cy.get('[password=mercury]').type(element.password) 
    });
})

Then("click on submit button", ()=>{
    cy.get('[name=submit]').click()
})

And("verify title should be {string}",(title)=>{
    cy.title().should('eq', title)
})



