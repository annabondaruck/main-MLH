import sel from '../../data/selectors';
import {name, gender, age, story} from '../../data/testData';
import inputValues4 from '../../helpers/methods';

 describe('Required fields and story created', function () {
    before("Open App", function () {
        browser.url('');
    });

    it('TC-026 Submit button is enabled after fields 1-4 filled with valid values', function () {
        $(sel.name).setValue(name.default);
        $$(sel.radioButtons)[gender.she].click();
        $(sel.age).setValue(age.default);
        $(sel.storyType).click();
        $$(sel.storyList)[story.comedy].click();

        browser.pause(2000);
        let submitBtn = $(sel.submit).isEnabled();
        expect(submitBtn).toEqual(true);
    });

    it('TC-027 User can create a story with valid values', function () {
        browser.refresh();
        inputValues4(name.default, gender.she, age.default, story.comedy);
        $(sel.submit).click();
        browser.pause(2000);
        let tryAgainBtn = $(sel.tryAgain).isDisplayed();
        expect(tryAgainBtn).toEqual(true);
    });


});
