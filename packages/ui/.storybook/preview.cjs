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
    parser: 'typescript',
}