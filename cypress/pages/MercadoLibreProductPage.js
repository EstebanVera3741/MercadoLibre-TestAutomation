class MercadoLibreProductPage
{
    webElements = {
      elementMainTitle: () => cy.get('.ui-pdp-title'),
      elementDescription: () => cy.get('.ui-pdp-description__title'),
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

    serviceDescriptionProduct()
    {
        this.webElements.elementDescription().scrollIntoView().should('be.visible', { timeout: 10000 });
    }
}

export const mercadoLibreProductPage = new MercadoLibreProductPage();