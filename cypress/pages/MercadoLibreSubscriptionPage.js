class MercadoLibreSubscriptionPage
{
    webElements = {
        elementSectionSubscriptionQuestion: (index) => cy.get('.andes-list__item-anchor').eq(index),
    };
  
    serviceSubscriptionQuestionIsVisible()
    {
        this.webElements.elementSectionSubscriptionQuestion(0).should('be.visible');
    }

    serviceClickSubscriptionQuestion()
    {
        this.webElements.elementSectionSubscriptionQuestion(0).click();
    }
}

export const mercadoLibreSubscriptionPage = new MercadoLibreSubscriptionPage();