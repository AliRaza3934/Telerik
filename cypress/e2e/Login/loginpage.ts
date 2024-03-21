class Login{
    loginPageLocator={
        loginButton:()=> cy.get("#js-tlrk-nav-drawer-button"),
        cookieButton:()=>cy.get("#onetrust-accept-btn-handler"),
        singupButton:()=>cy.get("#js-tlrk-nav-not-auth-container > a > span"),
        emailField:()=>cy.get("#email"),
        nextButton:()=>cy.get("button[type='submit']"),
        passwordField:()=>cy.get("#password"),
        firstNameField:()=>cy.get("#fist-name"),
        lastNameField:()=>cy.get("#last-name"),
        compnayField:()=>cy.get("#company"),
        phoneField:()=>cy.get("#phone"),
        countryOFResidence:()=>cy.get("kendo-combobox[id='country'] span[class='k-button-icon k-icon k-i-caret-alt-down']"),
        typeFilter:()=>cy.get("#country > kendo-searchbar"),
        createButton:()=>cy.get('#registerForm > div:nth-child(4) > button'),
        agreedOption:()=>cy.get('#optInOutField'),
        createButtons:()=>cy.get('#registerForm > div:nth-child(4) > button'),
        verifyButton:()=>cy.get('#challenge-stage > div > label > span.ctp-label')

    }
  loginUser(){
 this.loginPageLocator.loginButton().click()
 this.loginPageLocator.cookieButton().click()
 this.loginPageLocator.singupButton().click()
 this.loginPageLocator.emailField().type('arureshi.3934@gmail.com')
 this.loginPageLocator.nextButton().click()
 this.loginPageLocator.passwordField().type('Ippiqureshi')
 this.loginPageLocator.firstNameField().type('Ali')
 this.loginPageLocator.lastNameField().type('Raza')
 this.loginPageLocator.compnayField().type('ETA+')
 this.loginPageLocator.phoneField().type('+00924567892')
 this.loginPageLocator.countryOFResidence().click()
 this.loginPageLocator.typeFilter().type('Germany')
 this.loginPageLocator.createButton().click()
 this.loginPageLocator.agreedOption().click()
 this.loginPageLocator.createButton().click()
 .wait(4000)
 this.loginPageLocator.verifyButton().click()

  }
}
export let login = new Login()