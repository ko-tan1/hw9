
const assert = require('assert');

describe('Your Playground test suite', () => {


    //KEYBOARD ACTIONS: 
    //1. Ctrl - done
    it('Should display CTRL-button-name when clicked', () => {
        browser.url('https://dineshvelhal.github.io/testautomation-playground/keyboard_events.html');
        const textArea = $('textarea#area');
        const resultArea = $('#ctrl');
        textArea.setValue(['Control']);
        assert.equal(resultArea.isDisplayed(), true);
    });

    //2. Alt - done
    it('Should display ALT-button-name when clicked', () => {
        browser.url('https://dineshvelhal.github.io/testautomation-playground/keyboard_events.html');
        const textArea = $('textarea#area');
        const resultArea = $('#alt');
        textArea.setValue(['Alt']);
        assert.equal(resultArea.isDisplayed(), true);
    });
    //3. Meta - done
    it('Should display META-button-name when clicked', () => {
        browser.url('https://dineshvelhal.github.io/testautomation-playground/keyboard_events.html');
        const textArea = $('textarea#area');
        const resultArea = $('#meta');
        textArea.setValue(['Meta']);
        assert.equal(resultArea.isDisplayed(), true);
    });


    //WAIT CONDITIONS: 
    //1. Wait for element to be enabled / Wait for an attribute to contain certain text - done
    it('Should wait for element to be enabled, should wait for an attribute to contain certain text', () => {
        browser.url('https://dineshvelhal.github.io/testautomation-playground/expected_conditions.html');
        const triggerBtn = $('#enabled_trigger');
        const resultBtn = $('#enabled_target');
        triggerBtn.click();
        resultBtn.waitForEnabled(5000);
        assert.equal(resultBtn.isEnabled(), true);

        resultBtn.click();
        const label1 = $('div > h3.popover-header');
        const label2 = $('div.popover-body');
        assert.equal(label1.getText(), 'Yay! I am super active now!')
        assert.equal(label2.getText(), 'See, you just clicked me!!')
        
    });

    //2. Wait for text/value to have specific values - done
    it('Should wait for text/value to have specific values', () => {
        browser.url('https://dineshvelhal.github.io/testautomation-playground/expected_conditions.html');
        const triggerBtn = $('#text_value_trigger');
        const inputArea = $('#wait_for_value');
        const submitBtn = $('#wait_for_text');
        triggerBtn.click();
        
        //submitBtn.wairForExist({ timeout:10000});
        browser.pause(10000);

        assert.equal(submitBtn.isEnabled(), true);
        assert.equal(submitBtn.getText(), 'SUBMIT');
        assert.equal(inputArea.getValue(), 'Dennis Ritchie');
    });

    //MOUSE CLICK ACTIONS: 
    //1. Click - done
    it('Should show CLICK answer near the click area when clicked', () => {
        browser.url('https://dineshvelhal.github.io/testautomation-playground/mouse_events.html');
        const clickArea = $('#click_area');
        const clickLabel = $('#click_type');
        clickArea.click();
        assert.equal(clickLabel.getText(), 'Click');
    });

    //2. Double-Click - done
    it('Should show DOUBLE-CLICK answer when double-clicked', () => {
        browser.url('https://dineshvelhal.github.io/testautomation-playground/mouse_events.html');
        const clickArea = $('#click_area');
        const clickLabel = $('#click_type');
        clickArea.doubleClick();
        assert.equal(clickLabel.getText(), 'Double-Click');
    });

    //3. Right-Click - done
    it('Should show RIGHT-CLICK answer when right-clicked', () => {
        browser.url('https://dineshvelhal.github.io/testautomation-playground/mouse_events.html');
        const clickArea = $('#click_area');
        const clickLabel = $('span#click_type');
        clickArea.click({ button: 'right'});
        assert.equal(clickLabel.getText(), 'Right-Click');
    });

    //MOUSE HOVER - done
    it('Should show language dropdown menu when hovered', () => {
        browser.url('https://dineshvelhal.github.io/testautomation-playground/mouse_events.html');
        const choiceBtn = $('button.dropbtn');
        const dropdown_list = $('div.dropdown-content');
        choiceBtn.moveTo();
        dropdown_list.waitForDisplayed();
        assert.equal(dropdown_list.isDisplayed(), true);
    });

    //DRAG & DROP - не делаем из-за бага самой функции
    xit('Should inform about successful drop when Drop button is drag & dropped to the drop area', () => {
        browser.url('https://dineshvelhal.github.io/testautomation-playground/mouse_events.html');
        const dropButton = $('#drag_source');
        const dropArea = $('#drop_target');
        const dropAreaText = $('#drop_target > h3');
        dropButton.dragAndDrop(dropArea, 5000);
        browser.pause(10000);
        assert.equal(dropAreaText.getText, 'Drop is successful!');
        assert.equal(dropArea.getColor(), 'red');
    });


});


