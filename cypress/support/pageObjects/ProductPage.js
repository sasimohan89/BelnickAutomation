class ProductPage
{

    getPrice()
    {
        return cy.get('.price-sales')
    }

    getQuantity()
    {
        return cy.get('#Quantity')
    }

    getQuantityPlus()
    {
        return cy.get('#add-quantity')
    }

    getFirstSwatch()
    {
        return cy.get(':nth-child(1) > .swatchanchor > img')
    }
    
    getAddToCart()
    {
        return cy.get('#add-to-cart')
    }

    getViewCart() {

        return cy.get('.mini-cart-link-cart')

    }

}
export default ProductPage;
