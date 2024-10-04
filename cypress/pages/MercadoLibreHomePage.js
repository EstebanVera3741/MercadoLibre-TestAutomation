class MercadoLibreHomePage
{
    webElements = {
        elementSectionCarousel: () => cy.get('[aria-label="Tus accesos dinámicos"]'),
        elementMainInput: () => cy.get('input.nav-search-input'),
        elementBottomSearch: () => cy.get('.nav-icon-search'),
        elementBottomNav: (index) => cy.get('.nav-menu-item-link').eq(index),
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

    serviceSelectBottomNav(numberNav)
    {
        this.webElements.elementBottomNav(numberNav).click();
    }
}

export const mercadoLibreHomePage = new MercadoLibreHomePage();