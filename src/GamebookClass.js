class GamebookClass {
    constructor() {
        this.pages =  [];
        this.listeners =new Set();
        this.lastId = 0;
        this.currentPageId = null;
        this.health = 100;

        
    }
    
    addPage() {
        const newPage = {
            id: ++this.lastId,
            text: "",
            choices: [],
            image: ""
        }
        this.pages.push(newPage);

        if (this.pages.length === 1) {
            this.currentPageId = newPage.id;
        }

        this.callListeners();
        return newPage;
    }

    getPage(pageId) {
        return this.pages.find(page => pageId === page.id);

    }

    getCurrentPage() {
        return this.getPage(this.currentPageId);
        
    }

    moveToNextPage(nextPageId) {
        const nextPage = this.getPage(nextPageId);

        if (nextPage) {
            this.currentPageId = nextPageId;
        }

        this.callListeners();
    }

    setChoice(pageId, choices) {
        const page = this.getPage(pageId);
        if (page) {
            page.choices = choices.map(choice => ({
                text: choice.text,
                nextPageId: choice.nextPageId
            }));
            this.callListeners();
        }
    }

    setPageText(pageId, MainText) {

        const setUpPage = this.getPage(pageId);

        if (setUpPage) {

            setUpPage.text = MainText;

            this.callListeners();

        }
    }

    setPageImage(pageId, imageUrl) {
        const page = this.getPage(pageId);
        if (page) {
            page.image = imageUrl;
            this.callListeners();
        }
    }

    getHealth() {
        return this.health;
    }

    changeHealth(amount) {
        this.health += amount;
        this.callListeners();
    }

    addListener(listener) {
        this.listeners.add(listener); 
        return () => {
            this.listeners.delete(listener);
        }
        
    }

    callListeners() {
        for (const listener of this.listeners) {
            listener();
        }
    }

}

export const CodeLiberty2050 = new GamebookClass();

window.CodeLiberty2050 = CodeLiberty2050;

export default CodeLiberty2050;