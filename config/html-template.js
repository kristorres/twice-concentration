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
    ]
};

const viewportAttributes = [
    "minimum-scale=1",
    "initial-scale=1",
    "width=device-width",
    "shrink-to-fit=no"
];

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

        <!-- Web page title -->
        <title>${app.name}</title>

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
