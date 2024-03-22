/// <reference types = "cypress"/>
import {login} from"./Login/loginpage"
import { web } from "./Web/web"
describe("",()=>{
    it("",()=>{
        cy.visit("https://www.telerik.com/support/demos")
        //login.loginUser()
        web.webuser()
})
})