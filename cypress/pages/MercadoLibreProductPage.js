class MercadoLibreProductPage
{
    webElements = {
      elementMainTitle: () => cy.get('.ui-pdp-title'),
    };
  
    serviceProductPageIsVisible()
    {
        this.webElements.elementMainTitle().should('be.visible');
    }

    serviceTitleContainsExpectedText(titleProduct)
    {
        this.webElements.elementMainTitle().invoke('text').then((actualTitle) => {
            expect(actualTitle.trim()).to.include(titleProduct);
        });
    }
}

export const mercadoLibreProductPage = new MercadoLibreProductPage();