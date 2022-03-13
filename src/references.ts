export const references = [
    {
        element: "describe",
        description: "Creates a screen reader accessible description for the canvas. The first parameter should be a string with a description of the canvas. The second parameter is optional. If specified, it determines how the description is displayed.",
        code: "describe(text, [display])",
        insert: "describe(${1:text})",
        syntax: [
            {
                parameter: "text: String",
                description: "description of the canvas"
            },
            {
                parameter: "display: Constant",
                description: "either LABEL or FALLBACK (Optional)"
            },          
        ]
    },
    {
        element: "describeElement",
        description: "This function creates a screen-reader accessible description for elements —shapes or groups of shapes that create meaning together— in the canvas. The first paramater should be the name of the element. The second parameter should be a string with a description of the element. The third parameter is optional. If specified, it determines how the element description is displayed.",
        code: "describeElement(name, text, [display])",
        insert: "describeElement(${1:name}, ${2:text})",
        syntax: [
            {
                parameter: "name: String",
                description: "name of the element"
            },
            {
                parameter: "text: String",
                description: "description of the element"
            },
            {
                parameter: "display: Constant",
                description: "either LABEL or FALLBACK (Optional)"
            },          
        ]
    },
    {
        element: "textOutput",
        description: "Creates a screenreader accessible output that describes the shapes present on the canvas. The general description of the canvas includes canvas size, canvas color, and number of elements in the canvas.",
        code: "textOutput([display])",
        insert: "textOutput()",
        syntax: [
            {
                parameter: "display: Constant",
                description: "either LABEL or FALLBACK (Optional)"
            },          
        ]
    },
    {
        element: "gridOutput",
        description: "Lays out the content of the canvas in the form of a grid (html table) based on the spatial location of each shape. A brief description of the canvas is available before the table output. This description includes: color of the background, size of the canvas, number of objects, and object types.",
        code: "gridOutput([display])",
        insert: "gridOutput()",
        syntax: [
            {
                parameter: "display: Constant",
                description: "either LABEL or FALLBACK (Optional)"
            },          
        ]
    },
    {
        element: "print",
        description: "This function writes to the console area of your browser. This function is often helpful for looking at the data a program is producing. This function creates a new line of text for each call to the function.",
        code: "print(contents)",
        insert: 'print(${1:contents})',
        syntax: [
            {
                parameter: "contents: Any",
                description: "combination of Number, String, Object, Boolean, Array to print"
            },          
        ]
    },
    {
        element: "frameCount",
        description: "The system variable frameCount contains the number of frames that have been displayed since the program started. ",
        code: "frameCount",
        insert: 'frameCount',
        syntax: []
    },
    {
        element: "deltaTime",
        description: "The system variable deltaTime contains the time difference between the beginning of the previous frame and the beginning of the current frame in milliseconds.",
        code: "deltaTime",
        insert: 'deltaTime',
        syntax: []
    },
    {
        element: "focused",
        description: "Confirms if the window a p5.js program is focused, meaning that the sketch will accept mouse or keyboard input. This variable is true if the window is focused and false if not.",
        code: "focused",
        insert: 'focused',
        syntax: []
    },
    {
        element: "cursor",
        description: "Sets the cursor to a predefined symbol or an image, or makes it visible if already hidden.",
        code: "cursor(type, [x], [y])",
        insert: "cursor(${1:type})",
        syntax: [
            {
                parameter: "type: String|Constant",
                description: "Built-In: either ARROW, CROSS, HAND, MOVE, TEXT and WAIT Native CSS properties: 'grab', 'progress', 'cell' etc. External: path for cursor's images"
            },
            {
                parameter: "x: Number",
                description: "the horizontal active spot of the cursor (must be less than 32) (Optional)"
            },
            {
                parameter: "y: Number",
                description: "the vertical active spot of the cursor (must be less than 32) (Optional)"
            },          
        ]
    },
    {
        element: "frameRate",
        description: "Specifies the number of frames to be displayed every second. Setting the frame rate within setup() is recommended.",
        code: "frameRate(fps), frameRate()",
        insert: 'frameRate(${1:fps})',
        syntax: [
            {
                parameter: "fps: Number",
                description: "number of frames to be displayed every second"
            },          
        ]
    },
    {
        element: "noCursor",
        description: "Hides the cursor from view.",
        code: "noCursor()",
        insert: 'noCursor()',
        syntax: []
    },
    {
        element: "displayWidth",
        description: "System variable that stores the width of the screen display according to the default pixelDensity. ",
        code: "displayWidth",
        insert: 'displayWidth',
        syntax: []
    },
    {
        element: "displayHeight",
        description: "System variable that stores the height of the screen display according to the default pixelDensity.",
        code: "displayHeight",
        insert: 'displayHeight',
        syntax: []
    },
    {
        element: "windowWidth",
        description: "System variable that stores the width of the inner window, it maps to window.innerWidth.",
        code: "windowWidth",
        insert: 'windowWidth',
        syntax: []
    },
    {
        element: "windowHeight",
        description: "System variable that stores the height of the inner window, it maps to window.innerHeight.",
        code: "windowHeight",
        insert: 'windowHeight',
        syntax: []
    },
    {
        element: "windowResized",
        description: "The windowResized() function is called once every time the browser window is resized. This is a good place to resize the canvas or do any other adjustments to accommodate the new window size.",
        code: "windowResized([event])",
        insert: 'windowResized()',
        syntax: [
            {
                parameter: "event: Object",
                description: "Object: optional Event callback argument. (Optional)"
            },          
        ]
    },
    {
        element: "width",
        description: "System variable that stores the width of the drawing canvas. This value is set by the first parameter of the createCanvas() function.",
        code: "width",
        insert: 'width',
        syntax: []
    },
    {
        element: "height",
        description: "System variable that stores the height of the drawing canvas. This value is set by the second parameter of the createCanvas() function.",
        code: "height",
        insert: 'height',
        syntax: []
    },
    {
        element: "fullscreen",
        description: "If argument is given, sets the sketch to fullscreen or not based on the value of the argument. If no argument is given, returns the current fullscreen state.",
        code: "fullscreen([val])",
        insert: 'fullscreen()',
        syntax: [
            {
                parameter: "val: Boolean",
                description: "whether the sketch should be in fullscreen mode or not (Optional)"
            },          
        ],
        return: {
            type: "Boolean",
            description: "current fullscreen state"
        }
    },
    {
        element: "pixelDensity",
        description: "Sets the pixel scaling for high pixel density displays. By default pixel density is set to match display density, call pixelDensity(1) to turn this off.",
        code: "pixelDensity(val), pixelDensity()",
        insert: 'pixelDensity(${1:val})',
        syntax: [
            {
                parameter: "val: Number",
                description: "whether or how much the sketch should scale"
            },          
        ]
    },
    {
        element: "displayDensity",
        description: "Returns the pixel density of the current display the sketch is running on.",
        code: "displayDensity()",
        insert: 'displayDensity()',
        syntax: [],
        return: {
            type: "Number",
            description: "current pixel density of the display"
        }
    },
    {
        element: "getURL",
        description: "Gets the current URL.",
        code: "getURL()",
        insert: 'getURL()',
        syntax: [],
        return: {
            type: "String",
            description: "url"
        }
    },
    {
        element: "getURLPath",
        description: "Gets the current URL path as an array.",
        code: "getURLPath()",
        insert: 'getURLPath()',
        syntax: [],
        return: {
            type: "String[]",
            description: "path components"
        }
    },
    {
        element: "getURLParams",
        description: "Gets the current URL params as an Object.",
        code: "getURLParams()",
        insert: 'getURLParams()',
        syntax: [],
        return: {
            type: "Object",
            description: "URL params"
        }
    },
];