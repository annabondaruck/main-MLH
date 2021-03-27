import sel from '../../data/selectors';
import exp from '../../data/expected.json';


describe('Labels are correct', function () {
        before("Open App", function () {
            browser.url('');
        });

        it('TC-015 Header = "My Little Hero"', function () {
            let header = $(sel.header).getText();
            expect(header).toEqual(exp.header);
        });
        it('TC-016 Instruction = "Let\'s create your own HERO! It\'s super easy with our application!" ', function () {
            let instruction = $(sel.instruction).getText();
            expect(instruction).toEqual(exp.instruction);
        });
        /* commented until bug fix
        it('TC-017 Name Field Label = "What is your HERO\'s name?" ', function () {
            let label = $$(sel.requiredLabel)[0].getText();
            expect(label).toEqual(exp.nameLabel);
        });
        it('TC-018 Gender field Label = "2. Please choose a gender" ', function () {
            let GenderLabel = $$(sel.requiredLabel)[1].getText();
            expect(GenderLabel).toEqual(exp.genderLabel);
        });

         */

        it('TC-019 The first button label = "he" ', function () {
            let buttonHe = $$(sel.radioButtonsLabel)[0].getText();
            expect(buttonHe).toEqual(exp.heLabel);
        });
        it('TC-020 The second button label = "she" ', function () {
            let buttonShe = $$(sel.radioButtonsLabel)[1].getText();
            expect(buttonShe).toEqual(exp.sheLabel);
        });
        it('TC-021 The third button label = "it" ', function () {
            let buttonIt = $$(sel.radioButtonsLabel)[2].getText();
            expect(buttonIt).toEqual(exp.itLabel);
        });

        /*
        it('TC-022 Age field label = "3. How old is your hero?" ', function () {
            let label = $$(sel.requiredLabel)[2].getText();
            expect(label).toEqual(exp.ageLabel);
        });

         */
        it('TC-023 Story Type field label = "4. What type of story would you like to read?" ', function () {
            let label = $$(sel.requiredLabel)[3].getText();
            expect(label).toEqual(exp.storyLabel);
        });
        it('TC-024 Image field label = "5. Upload an image (optional)" ', function () {
            let label = $$(sel.imageLabel)[4].getText();
            expect(label).toEqual(exp.imageLabel);
        });
        /*
        it('TC-025 Submit button label = "Create!"', function () {
            let submit = $(sel.submit).getText();
            expect(submit).toEqual(exp.submitText);
        });

         */


});
