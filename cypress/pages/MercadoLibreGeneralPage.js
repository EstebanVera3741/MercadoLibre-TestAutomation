class MercadoLibreGeneralPage
{
    webElements = {
        elementResponseSubscriptionQuestion: () => cy.get('.cx-peach-content__title'),
        elementButtomYes: () => cy.get('[data-testid="yes-btn"]'),
    };
  
    serviceResponseIsVisible(messageSubscription)
    {
        this.webElements.elementResponseSubscriptionQuestion().should('be.visible');
        this.webElements.elementResponseSubscriptionQuestion()
            .invoke('text')
            .then((actualTitle) => {
                expect(actualTitle.trim()).to.equal(messageSubscription.trim());
        });
    }

    serviceButtomYesIsVisible()
    {
        this.webElements.elementButtomYes()
            .should('be.visible')
            .and('not.be.disabled')
            .click();
    }
}

export const mercadoLibreGeneralPage = new MercadoLibreGeneralPage();