class MercadoLibreHomePage
{
    webElements = {
      elementSectionCarousel: () => cy.get('[aria-label="Tus accesos dinámicos"]'),
      elementMainInput: () => cy.get('input.nav-search-input'),
      elementBottomSearch: () => cy.get('.nav-icon-search'),
    };
  
    serviceHomePageIsVisible()
    {
        this.webElements.elementSectionCarousel().should('be.visible');
    }

    serviceAddProduct(searchProduct)
    {
        this.webElements.elementMainInput().type(searchProduct);
    }

    serviceSearchProduct()
    {
        this.webElements.elementBottomSearch().click();
    }
}

export const mercadoLibreHomePage = new MercadoLibreHomePage();