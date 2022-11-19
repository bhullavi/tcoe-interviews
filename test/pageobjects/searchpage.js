class SearchPage {
    /**
     * define selectors using getter methods
     */
    get inputSearch () {
        return $(".sc-bdVaJa");
    }

    get searchHeader (){
        return $("#header-search-bar");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async openSearch () {
        await expect(this.inputSearch).toBeClickable();
        await this.inputSearch.click();
    }

    async startSearch (searchTerm) {
        await this.searchHeader;
        await this.searchHeader.setValue("Narendra Modi");
    }

}

module.exports = new SearchPage();