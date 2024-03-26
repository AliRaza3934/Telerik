class Web{
   webLocator={
    webNavigator:()=>cy.get("a[aria-label='Web content']"),
    cookieButton:()=>cy.get("#onetrust-accept-btn-handler"),
    kendoUI:()=>cy.get("div[id='ContentPlaceholder1_C329_Col00'] li:nth-child(1) a:nth-child(1) span:nth-child(1)"),
    gridLocator:()=>cy.get("body > main > section.kd-components-most-popular > div > div > ul > li:nth-child(1) > a > div.kd-component-icon > svg"),
    chartLocator:()=>cy.get("body > main > section.kd-components-most-popular > div > div > ul > li:nth-child(2) > a > div.kd-component-icon > svg"),
    sheduleLocator:()=>cy.get("body > main > section.kd-components-most-popular > div > div > ul > li:nth-child(3) > a > div.kd-component-icon > svg > path")
    
   }
  webuser(){
     this.webLocator.cookieButton().click()
     .wait(2000)
     this.webLocator.webNavigator().click()
     this.webLocator.kendoUI().click()
     .wait(300)
     //this.webLocator.gridLocator().click()
     //this.webLocator.chartLocator().click()
     this.webLocator.sheduleLocator().click()
  } 
}
export let web = new Web()