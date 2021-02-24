const app = {
    name: "Twice Concentration",
    description: "The classical card game that revolves around Twice.",
    keywords: [
        "Kris Torres",
        "Twice",
        "K-pop",
        "concentration",
        "memory",
        "card game",
        "web app"
    ],
    themeColor: "#FF4081"
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
        <meta name="description" content="${app.description}"/>
        <meta name="keywords" content="${app.keywords.join(", ")}"/>

        <!-- Google Chrome for Android toolbar color -->
        <meta name="theme-color" content="${app.themeColor}"/>

        <!-- Web page title -->
        <title>${app.name}</title>

        <!-- Google Fonts CSS -->
        <link rel="stylesheet" type="text/css" href="${URL.Rubik}"/>
        <link rel="stylesheet" type="text/css" href="${URL.MaterialIcons}"/>

        <!-- Global styles -->
        <style>
            :root {
                color-scheme: light dark;
            }
            body {
                margin: 0;
            }
        </style>

    </head>

    <body>
        <script src="${options.files.js[0].fileName}"></script>
    </body>

</html>
`;

export default htmlTemplate;
