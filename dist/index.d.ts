import React from 'react';
export declare type IProps = {
    type: 'screen' | 'notifications';
    title: string;
    description: string;
    barText?: string;
    logo?: string;
    pageTitle?: string;
    notificationTitle?: string;
    notificationDescription?: string;
    code?: string;
    discountRules?: string;
    buttonText?: string;
    buttonLink?: string;
};
declare function App({ title, description, barText, buttonLink, buttonText, code, discountRules, logo, notificationDescription, notificationTitle, pageTitle, type }: IProps): React.JSX.Element;
export default App;
