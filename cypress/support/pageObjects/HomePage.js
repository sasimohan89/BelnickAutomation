class HomePage
{

    getSearchBox()
    {
        return cy.get('#mainSearch > .form-block-2 > .form-2 > fieldset > #q')
    }

    getPopUpBox()
    {
        return cy.get('.ltkpopup-close > svg')
    }

    getFirstSearchResult()
    {
        return cy.get('#results > .first')
    }
    


}
export default HomePage;
