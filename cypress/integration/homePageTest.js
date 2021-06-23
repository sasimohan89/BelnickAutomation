/// <reference types="Cypress" />
import HomePage from "../support/pageObjects/HomePage";
import ProductPage from "../support/pageObjects/ProductPage";
import CartPage from "../support/pageObjects/CartPage"
import CheckoutPage from "../support/pageObjects/CheckoutPage"

    describe('Bizchair.com Regression Suite', function() 
    {
        before(function() {
            // runs once before all tests in the block
            cy.fixture('example').then(function(data)
            {
              this.data=data
            })

            Cypress.on('uncaught:exception', (err, runnable) => {
              // returning false here prevents Cypress from
              // failing the test
              return false
            })

          })

        it('Open Homepage, search for Chair and open the first search result',function() {

            const homePage = new HomePage()
            
            // Open HomePage URL
            cy.visit(Cypress.env('url')+"/default/Home-Show")

            homePage.getPopUpBox().click()
            homePage.getSearchBox().type('chair')
            cy.wait(2000)
            homePage.getFirstSearchResult().click()

        }  )

        it('Add Items to Cart & Go to checkout as Guest User',function() {

          //const homePage = new HomePage()
          const productPage=new ProductPage()
          const cartPage=new CartPage()

          productPage.getQuantityPlus().click()
          productPage.getFirstSwatch().click()
          cy.wait(2000)
          productPage.getAddToCart().click()
          productPage.getViewCart().click()

          cartPage.getCommentBox().type('test order')
          cartPage.getCheckoutButton().first().click()
          cy.wait(2000)
          cartPage.getCheckoutAsGuest().click()

          

        }  )

        it('Checkout Page validation', function() {

          const checkoutPage = new CheckoutPage()

          checkoutPage.getShippingLocation().select('Residential').should('have.value', 'RESIDENTIAL')
          checkoutPage.getEmail().type('sasikumar.mohan@simplus.com')
          checkoutPage.getFirstName().type('Billy')
          checkoutPage.getLastName().type('Tester')
          checkoutPage.getAddress1().type('3050 Jackson Ave')
          checkoutPage.getCity().type('Ann Arbor')
          checkoutPage.getZIPcode().type('48103')
          checkoutPage.getState().select('Michigan').should('have.value','MI')
          checkoutPage.getPhone().type('5138868686')
          checkoutPage.getAddressSameAsBilling().check().should('be.checked')
          //checkoutPage.getCheckoutContinue().click()

        })


    }  )