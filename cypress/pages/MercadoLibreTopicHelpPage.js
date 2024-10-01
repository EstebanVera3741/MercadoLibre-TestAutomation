class MercadoLibreTopicHelpPage
{
    webElements = {
        elementSectionSubscription: (index) => cy.get('.andes-list__item-anchor').eq(index),
    };
  
    serviceSubscriptionIsVisible()
    {
        this.webElements.elementSectionSubscription(4).should('be.visible');
    }

    serviceClickSubscription()
    {
        this.webElements.elementSectionSubscription(4).click();
    }
}

export const mercadoLibreTopicHelpPage = new MercadoLibreTopicHelpPage();