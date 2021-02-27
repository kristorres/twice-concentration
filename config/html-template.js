import {description, homepage} from "../package.json";

const app = {
    name: "Twice Concentration",
    keywords: [
        "Kris Torres",
        "Twice",
        "K-pop",
        "concentration",
        "memory",
        "card game",
        "web app"
    ],
    twitter: {
        handle: "@ohayoukris",
        bannerURL: `${homepage}/images/banner.png`
    },
    themeColor: "#FF4081",
    iconURL: "images/logo.png"
};

const viewportAttributes = [
    "minimum-scale=1",
    "initial-scale=1",
    "width=device-width",
    "shrink-to-fit=no"
];

const Domain = Object.freeze({
    GoogleFonts: "https://fonts.googleapis.com"
});

const URL = Object.freeze({
    Rubik: `${Domain.GoogleFonts}/css?family=Rubik:400,700&display=swap`,
    MaterialIcons: `${Domain.GoogleFonts}/icon?family=Material+Icons`
});

const htmlTemplate = (options) => `<!DOCTYPE html>

<html lang="en">

    <head>

        <!-- Required meta tags -->
        <meta charset="UTF-8"/>
        <meta name="viewport" content="${viewportAttributes.join(", ")}"/>

        <!-- Basic info -->
        <meta name="author" content="Kris Torres"/>
        <meta name="description" content="${description}"/>
        <meta name="keywords" content="${app.keywords.join(", ")}"/>

        <!-- Twitter Cards -->
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:creator" content="${app.twitter.handle}"/>
        <meta name="twitter:title" content="${app.name}"/>
        <meta name="twitter:image" content="${app.twitter.bannerURL}"/>
        <meta name="twitter:description" content="${description}"/>

        <!-- Open Graph protocol -->
        <meta property="og:title" content="${app.name}"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="${homepage}"/>
        <meta property="og:image" content="${app.twitter.bannerURL}"/>
        <meta property="og:description" content="${description}"/>

        <!-- Google Chrome for Android toolbar color -->
        <meta name="theme-color" content="${app.themeColor}"/>

        <!-- Web page title -->
        <title>${app.name}</title>

        <!-- Google Fonts CSS -->
        <link rel="stylesheet" type="text/css" href="${URL.Rubik}"/>
        <link rel="stylesheet" type="text/css" href="${URL.MaterialIcons}"/>

        <!-- Global styles -->
        <link rel="stylesheet" type="text/css" href="global.css"/>

        <!-- Icons -->
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico"/>
        <link rel="apple-touch-icon" type="image/png" href="${app.iconURL}"/>

    </head>

    <body>
        <script src="${options.files.js[0].fileName}"></script>
    </body>

</html>
`;

export default htmlTemplate;
