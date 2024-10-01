import { When, Then }
    from "@badeball/cypress-cucumber-preprocessor";
import { mercadoLibreGeneralPage } from "@pages/MercadoLibreGeneralPage";
import { mercadoLibreHelpPage } from "@pages/MercadoLibreHelpPage";
import { mercadoLibreHomePage } from "@pages/MercadoLibreHomePage";
import { mercadoLibreSubscriptionPage } from "@pages/MercadoLibreSubscriptionPage";
import { mercadoLibreTopicHelpPage } from "@pages/MercadoLibreTopicHelpPage";

When('The user selects the "Help" button from the browser', () => {
    mercadoLibreHomePage.serviceSelectBottomHelp();
});

When('The user identifies the "Frequently Questions" section', () => {
    mercadoLibreHelpPage.serviceFrequentlyQuestionsIsVisible();
    mercadoLibreHelpPage.serviceClickFrequentlyQuestions();
})

When('The user views the "Subscription" section', () => {
    mercadoLibreTopicHelpPage.serviceSubscriptionIsVisible();
    mercadoLibreTopicHelpPage.serviceClickSubscription();
})

When('The user selects the option "How do I subscribe?"', () => {
    mercadoLibreSubscriptionPage.serviceSubscriptionQuestionIsVisible();
    mercadoLibreSubscriptionPage.serviceClickSubscriptionQuestion();
})
Then('The user view title {string}', (messageSubscription) => {
    mercadoLibreGeneralPage.serviceResponseIsVisible(messageSubscription);
})

Then('The user verifies if the information was useful', () => {
    mercadoLibreGeneralPage.serviceButtomYesIsVisible();
})