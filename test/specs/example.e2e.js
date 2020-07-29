
const assert = require('assert');

describe('Your Playground test suite', () => {
    it('Should show language dropdown menu when hovered', () =>{
        browser.url('https://dineshvelhal.github.io/testautomation-playground/mouse_events.html');
        const choiceBtn = $('button.dropbtn');
        const dropdown_list = $('div.dropdown-content');
        choiceBtn.moveTo();
        assert.equal(dropdown_list.waitToBeDisplayed(), dropdown_list.isDisplayed() == true);
    });

    it('Should show click answer when clicked', () =>{
        browser.url('https://dineshvelhal.github.io/testautomation-playground/mouse_events.html');
        const clickArea = $('div#click_area');
        const clickLabel = $('span#click_type');
        clickArea.click();
        assert.equal(clickLabel.innerHTML.value(), clickLabel.innerHTML = 'Click');
    });
});


