class CheckoutPage {

    getShippingLocation() {

        return cy.get('#dwfrm_singleshipping_shippingAddress_addressFields_locationType')

    }

    getEmail() {

        return cy.get('#dwfrm_singleshipping_shippingAddress_addressFields_emailAddress')

    }

    getFirstName() {

        return cy.get('#dwfrm_singleshipping_shippingAddress_addressFields_firstName')

    }

    getLastName() {

        return cy.get('#dwfrm_singleshipping_shippingAddress_addressFields_lastName')

    }

    getAddress1() {

        return cy.get('#dwfrm_singleshipping_shippingAddress_addressFields_address1')

    }

    getCity() {

        return cy.get('#dwfrm_singleshipping_shippingAddress_addressFields_city')

    }

    getZIPcode() {

        return cy.get('#dwfrm_singleshipping_shippingAddress_addressFields_postal')

    }

    getState() {

        return cy.get('#dwfrm_singleshipping_shippingAddress_addressFields_states_state')

    }

    getPhone() {

        return cy.get('#dwfrm_singleshipping_shippingAddress_addressFields_phone')

    }

    getAddressSameAsBilling() {

        return cy.get('#dwfrm_singleshipping_shippingAddress_useAsBillingAddress')

    }

    getCheckoutContinue() {

        return cy.get('.form-row > button')
        
    }

}
export default CheckoutPage