class MercadoLibreListProductsPage
{
    webElements = {
      elementMainTitle: () => cy.get('.ui-search-breadcrumb__title'),
      elementProductSearch: (index) => cy.get('h2.poly-component__title > a').eq(index),
    };
  
    serviceListProductsPageIsVisible()
    {
        this.webElements.elementMainTitle().should('be.visible');
    }

    serviceSearchProduct()
    {
        this.webElements.elementProductSearch(0).click();
    }
}

export const mercadoLibreListProductsPage = new MercadoLibreListProductsPage();