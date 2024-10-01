class MercadoLibreHelpPage
{
    webElements = {
        elementSectionFrequentlyQuestions: (index) => cy.get('.andes-list__item-anchor').eq(index),
    };
  
    serviceFrequentlyQuestionsIsVisible()
    {
        this.webElements.elementSectionFrequentlyQuestions(2).should('be.visible');
    }

    serviceClickFrequentlyQuestions()
    {
        this.webElements.elementSectionFrequentlyQuestions(2).click();
    }
}

export const mercadoLibreHelpPage = new MercadoLibreHelpPage();