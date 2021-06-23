class CartPage {

    getCheckoutButton() {

        return cy.get('.button-fancy-large')

    }

    getCommentBox() {

        return cy.get('#dwfrm_cart_comment')
    }

    getNavCategoryFoldingChairs() {
        
        return cy.get('#navLink-folding-chairs > .screenreader-open-sub-menu')

    }

    getCheckoutAsGuest() {

        return cy.get('.col-1 > .login-box > .login-box-content > :nth-child(2) > fieldset > .form-row > button')

    }
}

export default CartPage