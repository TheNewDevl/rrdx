const FA = document.createElement('link')
FA.rel = 'stylesheet'
FA.href = 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
document.head.appendChild(FA)
import "../src/styles/globalStyles.scss";

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    viewMode: 'docs',
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}