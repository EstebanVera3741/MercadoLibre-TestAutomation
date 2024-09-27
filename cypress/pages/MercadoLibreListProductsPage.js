class MercadoLibreListProductsPage
{
    webElements = {
      elementMainTitle: () => cy.get('.ui-search-breadcrumb__title'),
      elementProductSearch: () => cy.get('h2.poly-component__title:first-child > a'),
    };
  
    serviceListProductsPageIsVisible()
    {
        this.webElements.elementMainTitle().should('be.visible');
    }

    serviceSearchProduct()
    {
        this.webElements.elementProductSearch().click();
    }
}

export const mercadoLibreListProductsPage = new MercadoLibreListProductsPage();