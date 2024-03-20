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

  }
}
export let login = new Login()