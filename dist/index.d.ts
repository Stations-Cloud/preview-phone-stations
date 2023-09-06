import React from "react";
import './App.css';
export declare type IProps = {
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
declare function App({ title, description, barText, buttonLink, buttonText, code, discountRules, logo, notificationDescription, notificationTitle, pageTitle, }: IProps): React.JSX.Element;
export default App;
