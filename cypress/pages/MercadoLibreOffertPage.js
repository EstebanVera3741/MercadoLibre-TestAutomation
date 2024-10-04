class MercadoLibreOffertPage
{
    webElements = {
      elementIconNavCarousel: () => cy.get('[data-slider="3"] div'),
      elementFilterMinValue: () => cy.get('#min_input'),
      elementFilterMaxValue: () => cy.get('#max_input'),
      elementBottomFilter: () => cy.get('[class="price-filter__action-link active"]'),
      elementListProducts: (index) => cy.get('.poly-component__title').eq(index),
      elementTitleOffert: () => cy.get('h1.title'),
    };
  
    serviceIconPageIsVisible()
    {
      this.webElements.elementIconNavCarousel().should('be.visible');
    }

    serviceSelectIconImg()
    {
      this.webElements.elementIconNavCarousel().click();
      this.webElements.elementTitleOffert().should('be.visible', { timeout: 10000 });
      this.webElements.elementTitleOffert()
        .invoke('text')
        .then((actualTitle) => {
            expect(actualTitle.trim()).to.equal('Celulares y Smartphones'.trim());
        });
    }

    serviceInputBottomFilterIsVisible()
    {
      this.webElements.elementFilterMinValue().should('be.visible');
      this.webElements.elementFilterMaxValue().should('be.visible');
    }

    serviceAddValueFilter(minValue, maxValue)
    {
      this.webElements.elementFilterMinValue().type(minValue);
      this.webElements.elementFilterMaxValue().type(maxValue);
      this.webElements.elementBottomFilter().should('be.visible');
      this.webElements.elementBottomFilter().click();
    }

    serviceVerifityListMobile(product)
    {
      this.webElements.elementListProducts(product).should('be.visible');
    }

    serviceSelectProduct(product)
    {
      
      this.webElements.elementListProducts(product).click();
    }
}

export const mercadoLibreOffertPage = new MercadoLibreOffertPage();