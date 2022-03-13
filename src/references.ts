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
        element: "alpha",
        description: "Extracts the alpha value from a color or pixel array.",
        code: "alpha(color)",
        insert: "alpha(${1:color})",
        syntax: [
            {
                parameter: "color: p5.Color|Number[]|String",
                description: "p5.Color object, color components, or CSS color"
            },
        ],
        return: {
            type: "Number",
            description: "the alpha value"
        }
    },
    {
        element: "blue",
        description: "Extracts the blue value from a color or pixel array.",
        code: "blue(color)",
        insert: "blue(${1:color})",
        syntax: [
            {
                parameter: "color: p5.Color|Number[]|String",
                description: "p5.Color object, color components, or CSS color"
            },
        ],
        return: {
            type: "Number",
            description: "the blue value"
        }
    },
    {
        element: "brightness",
        description: "Extracts the HSB brightness value from a color or pixel array.",
        code: "brightness(color)",
        insert: "brightness(${1:color})",
        syntax: [
            {
                parameter: "color: p5.Color|Number[]|String",
                description: "p5.Color object, color components, or CSS color"
            },
        ],
        return: {
            type: "Number",
            description: "the brightness value"
        }
    },
    {
        element: "color",
        description: "Creates colors for storing in variables of the color datatype. The parameters are interpreted as RGB or HSB values depending on the current colorMode(). The default mode is RGB values from 0 to 255.",
        code: "color(gray, [alpha]), color(v1, v2, v3, [alpha]), color(value), color(values), color(color)",
        insert: "color(${1:v1}, ${2:v2}, ${3:v3})",
        syntax: [
            {
                parameter: "gray: Number",
                description: "number specifying value between white and black."
            },
            {
                parameter: "alpha: Number",
                description: "alpha value relative to current color range (default is 0-255) (Optional)"
            },
            {
                parameter: "v1: Number",
                description: "red or hue value relative to the current color range"
            },
            {
                parameter: "v2: Number",
                description: "green or saturation value relative to the current color range"
            },
            {
                parameter: "v3: Number",
                description: "blue or brightness value relative to the current color range"
            },
            {
                parameter: "value: String",
                description: "a color string"
            },
            {
                parameter: "values: Number[]",
                description: "an array containing the red,green,blue & and alpha components of the color"
            },
            {
                parameter: "color: p5.Color",
                description: ""
            },
        ],
        return: {
            type: "p5.Color",
            description: "resulting color"
        }
    },
    {
        element: "green",
        description: "Extracts the green value from a color or pixel array.",
        code: "green(color)",
        insert: "green(${1:color})",
        syntax: [
            {
                parameter: "color: p5.Color|Number[]|String",
                description: "p5.Color object, color components, or CSS color"
            },
        ],
        return: {
            type: "Number",
            description: "the green value"
        }
    },
    {
        element: "hue",
        description: "Extracts the hue value from a color or pixel array. Hue exists in both HSB and HSL.",
        code: "hue(color)",
        insert: "hue(${1:color})",
        syntax: [
            {
                parameter: "color: p5.Color|Number[]|String",
                description: "p5.Color object, color components, or CSS color"
            },
        ],
        return: {
            type: "Number",
            description: "the hue"
        }
    },
    {
        element: "lerpColor",
        description: "Blends two colors to find a third color somewhere between them. The amt parameter is the amount to interpolate between the two values where 0.0 is equal to the first color, 0.1 is very near the first color, 0.5 is halfway in between, etc. An amount below 0 will be treated as 0. Likewise, amounts above 1 will be capped at 1.",
        code: "lerpColor(c1, c2, amt)",
        insert: "lerpColor(${1:c1}, ${2:c2}, ${3:amt})",
        syntax: [
            {
                parameter: "c1: p5.Color",
                description: "interpolate from this color"
            },
            {
                parameter: "c2: p5.Color",
                description: "interpolate to this color"
            },
            {
                parameter: "amt: Number",
                description: "number between 0 and 1"
            },
        ],
        return: {
            type: "p5.Color",
            description: "interpolated color"
        }
    },
    {
        element: "lightness",
        description: "Extracts the HSL lightness value from a color or pixel array.",
        code: "lightness(color)",
        insert: "lightness(${1:color})",
        syntax: [
            {
                parameter: "color: p5.Color|Number[]|String",
                description: "p5.Color object, color components, or CSS color"
            },
        ],
        return: {
            type: "Number",
            description: "the lightness"
        }
    },
    {
        element: "red",
        description: "Extracts the red value from a color or pixel array.",
        code: "red(color)",
        insert: "red(${1:color})",
        syntax: [
            {
                parameter: "color: p5.Color|Number[]|String",
                description: "p5.Color object, color components, or CSS color"
            },
        ],
        return: {
            type: "Number",
            description: "the red value"
        }
    },
    {
        element: "saturation",
        description: "Extracts the saturation value from a color or pixel array. Saturation is scaled differently in HSB and HSL. This function will return the HSB saturation when supplied with an HSB color object (or when supplied with a pixel array while the color mode is HSB), but will default to the HSL saturation otherwise.",
        code: "saturation(color)",
        insert: "saturation(${1:color})",
        syntax: [
            {
                parameter: "color: p5.Color|Number[]|String",
                description: "p5.Color object, color components, or CSS color"
            },
        ],
        return: {
            type: "Number",
            description: "the saturation value"
        }
    },
    {
        element: "saturation",
        description: "Extracts the saturation value from a color or pixel array. Saturation is scaled differently in HSB and HSL. This function will return the HSB saturation when supplied with an HSB color object (or when supplied with a pixel array while the color mode is HSB), but will default to the HSL saturation otherwise.",
        code: "saturation(color)",
        insert: "saturation(${1:color})",
        syntax: [
            {
                parameter: "color: p5.Color|Number[]|String",
                description: "p5.Color object, color components, or CSS color"
            },
        ],
        return: {
            type: "Number",
            description: "the saturation value"
        }
    },
    {
        element: "p5.Color",
        description: "Each color stores the color mode and level maxes that was applied at the time of its construction. These are used to interpret the input arguments (at construction and later for that instance of color) and to format the output e.g. when saturation() is requested.",
        code: "new p5.Color()",
        insert: "new p5.Color()",
        syntax: [
        ],
    },
    {
        element: "background",
        description: "The background() function sets the color used for the background of the p5.js canvas. The default background is transparent. This function is typically used within draw() to clear the display window at the beginning of each frame, but it can be used inside setup() to set the background on the first frame of animation or if the background need only be set once.",
        code: "background(color), background(colorstring, [a]), background(gray, [a]), background(v1, v2, v3, [a]), background(values), background(image, [a])",
        insert: "background(${1:color})",
        syntax: [
            {
                parameter: "color: p5.Color",
                description: "any value created by the color() function"
            },
            {
                parameter: "colorstring: String",
                description: "color string, possible formats include: integer rgb() or rgba(), percentage rgb() or rgba(), 3-digit hex, 6-digit hex"
            },
            {
                parameter: "a: Number",
                description: "opacity of the background relative to current color range (default is 0-255) (Optional)"
            },
            {
                parameter: "gray: Number",
                description: "specifies a value between white and black"
            },
            {
                parameter: "v1: Number",
                description: "red or hue value (depending on the current color mode)"
            },
            {
                parameter: "v2: Number",
                description: "green or saturation value (depending on the current color mode)"
            },
            {
                parameter: "v3: Number",
                description: "blue or brightness value (depending on the current color mode)"
            },
            {
                parameter: "values: Number[]",
                description: "an array containing the red, green, blue and alpha components of the color"
            },
            {
                parameter: "image: p5.Image",
                description: "image created with loadImage() or createImage(), to set as background (must be same size as the sketch window)"
            },
        ],
    },
    {
        element: "clear",
        description: "Clears the pixels within a buffer. This function only clears the canvas. It will not clear objects created by createX() methods such as createVideo() or createDiv(). Unlike the main graphics context, pixels in additional graphics areas created with createGraphics() can be entirely or partially transparent. This function clears everything to make all of the pixels 100% transparent.",
        code: "clear(r, g, b, a)",
        insert: "clear(${1:r}, ${2:g}, ${3:b}, ${4:a})",
        syntax: [
            {
                parameter: "r: Number",
                description: "normalized red val."
            },
            {
                parameter: "g: Number",
                description: "normalized green val."
            },
            {
                parameter: "b: Number",
                description: "normalized blue val."
            },
            {
                parameter: "a: Number",
                description: "normalized alpha val."
            },
        ],
    },
    {
        element: "colorMode",
        description: "colorMode() changes the way p5.js interprets color data. By default, the parameters for fill(), stroke(), background(), and color() are defined by values between 0 and 255 using the RGB color model. This is equivalent to setting colorMode(RGB, 255). Setting colorMode(HSB) lets you use the HSB system instead. By default, this is colorMode(HSB, 360, 100, 100, 1). You can also use HSL.",
        code: "colorMode(mode, [max]), colorMode(mode, max1, max2, max3, [maxA])",
        insert: "colorMode(${1:mode})",
        syntax: [
            {
                parameter: "mode: Constant",
                description: "either RGB, HSB or HSL, corresponding to Red/Green/Blue and Hue/Saturation/Brightness (or Lightness)"
            },
            {
                parameter: "max: Number",
                description: "range for all values (Optional)"
            },
            {
                parameter: "max1: Number",
                description: "range for the red or hue depending on the current color mode"
            },
            {
                parameter: "max2: Number",
                description: "range for the green or saturation depending on the current color mode"
            },
            {
                parameter: "max3: Number",
                description: "range for the blue or brightness/lightness depending on the current color mode"
            },
            {
                parameter: "maxA: Number",
                description: "range for the alpha (Optional)"
            },
        ],
    },
    {
        element: "fill",
        description: "Sets the color used to fill shapes. This color is either specified in terms of the RGB or HSB color depending on the current colorMode(). (The default color space is RGB, with each value in the range from 0 to 255). The alpha range by default is also 0 to 255. If a single string argument is provided, RGB, RGBA and Hex CSS color strings and all named color strings are supported. In this case, an alpha number value as a second argument is not supported, the RGBA form should be used.",
        code: "fill(v1, v2, v3, [alpha]), fill(value), fill(gray, [alpha]), fill(values), fill(color)",
        insert: "fill(${1:v1}, ${2:v2}, ${3:v3})",
        syntax: [
            {
                parameter: "v1: Number",
                description: "red or hue value relative to the current color range"
            },
            {
                parameter: "v2: Number",
                description: "green or saturation value relative to the current color range"
            },
            {
                parameter: "v3: Number",
                description: "blue or brightness value relative to the current color range"
            },
            {
                parameter: "alpha: Number",
                description: "Number: (Optional)"
            },
            {
                parameter: "value: String",
                description: "a color string"
            },
            {
                parameter: "gray: Number",
                description: "a gray value"
            },
            {
                parameter: "values: Number[]",
                description: "an array containing the red,green,blue & and alpha components of the color"
            },
            {
                parameter: "color: p5.Color",
                description: "the fill color"
            },
        ],
    },
    {
        element: "noFill",
        description: "Disables filling geometry. If both noStroke() and noFill() are called, nothing will be drawn to the screen.",
        code: "noFill()",
        insert: "noFill()",
        syntax: [
        ],
    },
    {
        element: "noStroke",
        description: "Disables drawing the stroke (outline). If both noStroke() and noFill() are called, nothing will be drawn to the screen.",
        code: "noStroke()",
        insert: "noStroke()",
        syntax: [
        ],
    },
    {
        element: "stroke",
        description: "Sets the color used to draw lines and borders around shapes. This color is either specified in terms of the RGB or HSB color depending on the current colorMode() (the default color space is RGB, with each value in the range from 0 to 255). The alpha range by default is also 0 to 255. If a single string argument is provided, RGB, RGBA and Hex CSS color strings and all named color strings are supported. In this case, an alpha number value as a second argument is not supported, the RGBA form should be used.",
        code: "stroke(v1, v2, v3, [alpha]), stroke(value), stroke(gray, [alpha]), stroke(values), stroke(color)",
        insert: "stroke(${1:v1}, ${2:v2}, ${3:v3})",
        syntax: [
            {
                parameter: "v1: Number",
                description: "red or hue value relative to the current color range"
            },
            {
                parameter: "v2: Number",
                description: "green or saturation value relative to the current color range"
            },
            {
                parameter: "v3: Number",
                description: "blue or brightness value relative to the current color range"
            },
            {
                parameter: "alpha: Number",
                description: "Number: (Optional)"
            },
            {
                parameter: "value: String",
                description: "a color string"
            },
            {
                parameter: "gray: Number",
                description: "a gray value"
            },
            {
                parameter: "values: Number[]",
                description: "an array containing the red,green,blue & and alpha components of the color"
            },
            {
                parameter: "color: p5.Color",
                description: "the stroke color"
            },
        ],
    },
    {
        element: "erase",
        description: "Disables drawing the stroke (outline). If both noStroke() and noFill() are called, nothing will be drawn to the screen.",
        code: "erase([strengthFill], [strengthStroke])",
        insert: "erase()",
        syntax: [
            {
                parameter: "strengthFill: Number",
                description: "A number (0-255) for the strength of erasing for a shape's fill. This will default to 255 when no argument is given, which is full strength. (Optional)"
            },
            {
                parameter: "strengthStroke: Number",
                description: "A number (0-255) for the strength of erasing for a shape's stroke. This will default to 255 when no argument is given, which is full strength. (Optional)"
            },
        ],
    },
    {
        element: "noErase",
        description: "Ends erasing that was started with erase(). The fill(), stroke(), and blendMode() settings will return to what they were prior to calling erase().",
        code: "noErase()",
        insert: "noErase()",
        syntax: [
        ],
    },
    {
        element: "ellipseMode",
        description: "Modifies the location from which ellipses are drawn by changing the way in which parameters given to ellipse(), circle() and arc() are interpreted. The default mode is CENTER, in which the first two parameters are interpreted as the shape's center point's x and y coordinates respectively, while the third and fourth parameters are its width and height.",
        code: "ellipseMode(mode)",
        insert: "ellipseMode(${1:mode})",
        syntax: [
            {
                parameter: "mode: Constant",
                description: "either CENTER, RADIUS, CORNER, or CORNERS"
            },
        ],
    },
    {
        element: "noSmooth",
        description: "Draws all geometry with jagged (aliased) edges. Note that smooth() is active by default in 2D mode, so it is necessary to call noSmooth() to disable smoothing of geometry, images, and fonts. In 3D mode, noSmooth() is enabled by default, so it is necessary to call smooth() if you would like smooth (antialiased) edges on your geometry.",
        code: "noSmooth()",
        insert: "noSmooth()",
        syntax: [
        ],
    },
    {
        element: "rectMode",
        description: "Modifies the location from which rectangles are drawn by changing the way in which parameters given to rect() are interpreted. The default mode is CORNER, which interprets the first two parameters as the upper-left corner of the shape, while the third and fourth parameters are its width and height.",
        code: "rectMode(mode)",
        insert: "rectMode(${1:mode})",
        syntax: [
            {
                parameter: "mode: Constant",
                description: "either CORNER, CORNERS, CENTER, or RADIUS"
            },
        ],
    },
    {
        element: "smooth",
        description: "Draws all geometry with smooth (anti-aliased) edges. smooth() will also improve image quality of resized images. Note that smooth() is active by default in 2D mode; noSmooth() can be used to disable smoothing of geometry, images, and fonts. In 3D mode, noSmooth() is enabled by default, so it is necessary to call smooth() if you would like smooth (antialiased) edges on your geometry.",
        code: "smooth()",
        insert: "smooth()",
        syntax: [
        ],
    },
    {
        element: "strokeCap",
        description: "Sets the style for rendering line endings. These ends are either rounded, squared or extended, each of which specified with the corresponding parameters: ROUND, SQUARE and PROJECT. The default cap is ROUND. The parameter to this method must be written in ALL CAPS because they are predefined as constants in ALL CAPS and Javascript is a case-sensitive language.",
        code: "strokeCap(cap)",
        insert: "strokeCap(${1:cap})",
        syntax: [
            {
                parameter: "cap: Constant",
                description: "either ROUND, SQUARE or PROJECT"
            },
        ],
    },
    {
        element: "strokeJoin",
        description: "Sets the style of the joints which connect line segments. These joints are either mitered, beveled or rounded and specified with the corresponding parameters MITER, BEVEL and ROUND. The default joint is MITER. The parameter to this method must be written in ALL CAPS because they are predefined as constants in ALL CAPS and Javascript is a case-sensitive language.",
        code: "strokeJoin(join)",
        insert: "strokeJoin(${1:join})",
        syntax: [
            {
                parameter: "join: Constant",
                description: "either MITER, BEVEL, ROUND"
            },
        ],
    },
    {
        element: "strokeWeight",
        description: "Sets the width of the stroke used for lines, points and the border around shapes. All widths are set in units of pixels. Note that it is affected by any transformation or scaling that has been applied previously.",
        code: "strokeWeight(weight)",
        insert: "strokeWeight(${1:weight})",
        syntax: [
            {
                parameter: "weight: Number",
                description: "the weight of the stroke (in pixels)"
            },
        ],
    },
    {
        element: "loadModel",
        description: "Load a 3d model from an OBJ or STL file. loadModel() should be placed inside of preload(). This allows the model to load fully before the rest of your code is run.",
        code: "loadModel(path, normalize, [successCallback], [failureCallback], [fileType]), loadModel(path, [successCallback], [failureCallback], [fileType])",
        insert: "loadModel(${1:path}, ${2:normalize})",
        syntax: [
            {
                parameter: "path: String",
                description: "Path of the model to be loaded"
            },
            {
                parameter: "normalize: Boolean",
                description: "If true, scale the model to a standardized size when loading"
            },
            {
                parameter: "successCallback: function(p5.Geometry)",
                description: "Function to be called once the model is loaded. Will be passed the 3D model object. (Optional)"
            },
            {
                parameter: "failureCallback: Function(Event)",
                description: "called with event error if the model fails to load. (Optional)"
            },
            {
                parameter: "fileType: String",
                description: "The file extension of the model (.stl, .obj). (Optional)"
            },
        ],
        return: {
            type: "p5.Geometry",
            description: "the p5.Geometry object"
        }
    },
    {
        element: "model",
        description: "Render a 3d model to the screen.",
        code: "model(model)",
        insert: "model(${1:model})",
        syntax: [
            {
                parameter: "model: p5.Geometry",
                description: "Loaded 3d model to be rendered"
            },
        ],
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
    {
        element: "arc",
        description: "Draw an arc to the screen. If called with only x, y, w, h, start and stop, the arc will be drawn and filled as an open pie segment. If a mode parameter is provided, the arc will be filled like an open semi-circle (OPEN), a closed semi-circle (CHORD), or as a closed pie segment (PIE).",
        code: "arc(x, y, w, h, start, stop, [mode], [detail])",
        insert: "arc(${1:x}, ${2:y}, ${3:w}, ${4:h}, ${5:start}, ${6:stop})",
        syntax: [
            {
                parameter: "x: Number",
                description: "x-coordinate of the arc's ellipse"
            },
            {
                parameter: "y: Number",
                description: "y-coordinate of the arc's ellipse"
            },
            {
                parameter: "w: Number",
                description: "width of the arc's ellipse by default"
            },
            {
                parameter: "h: Number",
                description: "height of the arc's ellipse by default"
            },
            {
                parameter: "start: Number",
                description: "angle to start the arc, specified in radians"
            },
            {
                parameter: "stop: Number",
                description: "angle to stop the arc, specified in radians"
            },
            {
                parameter: "mode: Constant",
                description: "optional parameter to determine the way of drawing the arc. either CHORD, PIE or OPEN (Optional)"
            },
            {
                parameter: "detail: Integer",
                description: "optional parameter for WebGL mode only. This is to specify the number of vertices that makes up the perimeter of the arc. Default value is 25. Won't draw a stroke for a detail of more than 50. (Optional)"
            },
        ]
    },
    {
        element: "ellipse",
        description: "Draws an ellipse (oval) to the screen. By default, the first two parameters set the location of the center of the ellipse, and the third and fourth parameters set the shape's width and height. If no height is specified, the value of width is used for both the width and height. If a negative height or width is specified, the absolute value is taken.",
        code: "ellipse(x, y, w, [h]), ellipse(x, y, w, h, [detail])",
        insert: "ellipse(${1:x}, ${2:y}, ${3:w}, ${4:h})",
        syntax: [
            {
                parameter: "x: Number",
                description: "x-coordinate of the center of ellipse"
            },
            {
                parameter: "y: Number",
                description: "y-coordinate of the center of ellipse"
            },
            {
                parameter: "w: Number",
                description: "width of the ellipse"
            },
            {
                parameter: "h: Number",
                description: "height of the ellipse"
            },
            {
                parameter: "detail: Integer",
                description: "optional parameter for WebGL mode only. This is to specify the number of vertices that makes up the perimeter of the arc. Default value is 25. Won't draw a stroke for a detail of more than 50. (Optional)"
            },
        ]
    },
    {
        element: "circle",
        description: "Draws a circle to the screen. A circle is a simple closed shape. It is the set of all points in a plane that are at a given distance from a given point, the centre. This function is a special case of the ellipse() function, where the width and height of the ellipse are the same.",
        code: "circle(x, y, d)",
        insert: "circle(${1:x}, ${2:y}, ${3:d})",
        syntax: [
            {
                parameter: "x: Number",
                description: "x-coordinate of the center of circle"
            },
            {
                parameter: "y: Number",
                description: "y-coordinate of the center of circle"
            },
            {
                parameter: "d: Number",
                description: "diameter of the circle"
            },
        ]
    },
    {
        element: "line",
        description: "Draws a line (a direct path between two points) to the screen. If called with only 4 parameters, it will draw a line in 2D with a default width of 1 pixel. This width can be modified by using the strokeWeight() function. A line cannot be filled, therefore the fill() function will not affect the color of a line. So to color a line, use the stroke() function.",
        code: "line(x1, y1, x2, y2), line(x1, y1, z1, x2, y2, z2)",
        insert: "line(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})",
        syntax: [
            {
                parameter: "x1: Number",
                description: "the x-coordinate of the first point"
            },
            {
                parameter: "y1: Number",
                description: "the y-coordinate of the first point"
            },
            {
                parameter: "x2: Number",
                description: "the x-coordinate of the second point"
            },
            {
                parameter: "y2: Number",
                description: "the y-coordinate of the second point"
            }, {
                parameter: "z1: Number",
                description: "the x-coordinate of the first point"
            },
            {
                parameter: "z2: Number",
                description: "the z-coordinate of the second point"
            },
        ]
    },
    {
        element: "circle",
        description: "Draws a point, a coordinate in space at the dimension of one pixel. The first parameter is the horizontal value for the point, the second param is the vertical value for the point. The color of the point is changed with the stroke() function. The size of the point can be changed with the strokeWeight() function.",
        code: "point(x, y, [z]), point(coordinate_vector)",
        insert: "point(${1:x}, ${2:y})",
        syntax: [
            {
                parameter: "x: Number",
                description: "the x-coordinate"
            },
            {
                parameter: "y: Number",
                description: "the y-coordinate"
            },
            {
                parameter: "z: Number",
                description: "the z-coordinate (for WebGL mode) (Optional)"
            },
            {
                parameter: "coordinate_vector: p5.Vector",
                description: "the coordinate vector"
            },
        ]
    },
    {
        element: "quad",
        description: "Draws a quad on the canvas. A quad is a quadrilateral, a four sided polygon. It is similar to a rectangle, but the angles between its edges are not constrained to ninety degrees. The first pair of parameters (x1,y1) sets the first vertex and the subsequent pairs should proceed clockwise or counter-clockwise around the defined shape. z-arguments only work when quad() is used in WEBGL mode.",
        code: "quad(x1, y1, x2, y2, x3, y3, x4, y4, [detailX], [detailY]), quad(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4, [detailX], [detailY])",
        insert: "quad(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2}, ${5:x3}, ${6:y3}, ${7:x4}, ${8:y4})",
        syntax: [
            {
                parameter: "x1: Number",
                description: "the x-coordinate of the first point"
            },
            {
                parameter: "y1: Number",
                description: "the y-coordinate of the first point"
            },
            {
                parameter: "x2: Number",
                description: "the x-coordinate of the second point"
            },
            {
                parameter: "y2: Number",
                description: "the y-coordinate of the second point"
            },
            {
                parameter: "x3: Number",
                description: "the x-coordinate of the third point"
            },
            {
                parameter: "y3: Number",
                description: "the y-coordinate of the third point"
            },
            {
                parameter: "x4: Number",
                description: "the x-coordinate of the fourth point"
            },
            {
                parameter: "y4: Number",
                description: "the y-coordinate of the fourth point"
            },
            {
                parameter: "detailX: Integer",
                description: "number of segments in the x-direction (Optional)"
            },
            {
                parameter: "detailY: Integer",
                description: "number of segments in the y-direction (Optional)"
            },
            {
                parameter: "z1: Number",
                description: "the z-coordinate of the first point"
            },
            {
                parameter: "z2: Number",
                description: "the z-coordinate of the second point"
            },
            {
                parameter: "z3: Number",
                description: "the z-coordinate of the third point"
            },
            {
                parameter: "z4: Number",
                description: "the z-coordinate of the fourth point"
            },
        ]
    },
    {
        element: "rect",
        description: "Draws a rectangle on the canvas. A rectangle is a four-sided closed shape with every angle at ninety degrees. By default, the first two parameters set the location of the upper-left corner, the third sets the width, and the fourth sets the height. The way these parameters are interpreted, may be changed with the rectMode() function.",
        code: "rect(x, y, w, [h], [tl], [tr], [br], [bl]), rect(x, y, w, h, [detailX], [detailY])",
        insert: "rect(${1:x}, ${2:y}, ${3:w})",
        syntax: [
            {
                parameter: "x: Number",
                description: "x-coordinate of the rectangle"
            },
            {
                parameter: "y: Number",
                description: "y-coordinate of the rectangle"
            },
            {
                parameter: "w: Number",
                description: "width of the rectangle"
            },
            {
                parameter: "tl: Number",
                description: "height of the rectangle. (Optional)"
            },
            {
                parameter: "tr: Number",
                description: "optional radius of top-right corner. (Optional)"
            },
            {
                parameter: "br: Number",
                description: "optional radius of bottom-right corner. (Optional)"
            },
            {
                parameter: "bl: Number",
                description: "optional radius of bottom-left corner. (Optional)"
            },
            {
                parameter: "detailX: Integer",
                description: "number of segments in the x-direction (Optional)"
            },
            {
                parameter: "detailY: Integer",
                description: "number of segments in the y-direction (Optional)"
            },
        ]
    },
    {
        element: "square",
        description: "Draws a square to the screen. A square is a four-sided shape with every angle at ninety degrees, and equal side size. This function is a special case of the rect() function, where the width and height are the same, and the parameter is called s for side size. By default, the first two parameters set the location of the upper-left corner, the third sets the side size of the square.",
        code: "square(x, y, s, [tl], [tr], [br], [bl])",
        insert: "square(${1:x}, ${2:y}, ${3:s})",
        syntax: [
            {
                parameter: "x: Number",
                description: "x-coordinate of the square"
            },
            {
                parameter: "y: Number",
                description: "y-coordinate of the square"
            },
            {
                parameter: "s: Number",
                description: "side size of the square"
            },
            {
                parameter: "tl: Number",
                description: "height of the rectangle. (Optional)"
            },
            {
                parameter: "tr: Number",
                description: "optional radius of top-right corner. (Optional)"
            },
            {
                parameter: "br: Number",
                description: "optional radius of bottom-right corner. (Optional)"
            },
            {
                parameter: "bl: Number",
                description: "optional radius of bottom-left corner. (Optional)"
            },
        ]
    },
    {
        element: "triangle",
        description: "Draws a triangle to the canvas. A triangle is a plane created by connecting three points. The first two arguments specify the first point, the middle two arguments specify the second point, and the last two arguments specify the third point.",
        code: "triangle(x1, y1, x2, y2, x3, y3)",
        insert: "triangle(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2}, ${5:x3}, ${6:y3})",
        syntax: [
            {
                parameter: "x1: Number",
                description: "the x-coordinate of the first point"
            },
            {
                parameter: "y1: Number",
                description: "the y-coordinate of the first point"
            },
            {
                parameter: "x2: Number",
                description: "the x-coordinate of the second point"
            },
            {
                parameter: "y2: Number",
                description: "the y-coordinate of the second point"
            },
            {
                parameter: "x3: Number",
                description: "the x-coordinate of the third point"
            },
            {
                parameter: "y3: Number",
                description: "the y-coordinate of the third point"
            },
        ]
    },
    {
        element: "bezier",
        description: "Draws a cubic Bezier curve on the screen. These curves are defined by a series of anchor and control points. The first two parameters specify the first anchor point and the last two parameters specify the other anchor point, which become the first and last points on the curve. The middle parameters specify the two control points which define the shape of the curve. Approximately speaking, control points 'pull' the curve towards them.",
        code: "bezier(x1, y1, x2, y2, x3, y3, x4, y4), bezier(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4)",
        insert: "bezier(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2}, ${5:x3}, ${6:y3}, ${7:x4}, ${8:y4})",
        syntax: [
            {
                parameter: "x1: Number",
                description: "the x-coordinate of the first anchor point"
            },
            {
                parameter: "y1: Number",
                description: "the y-coordinate of the first anchor point"
            },
            {
                parameter: "x2: Number",
                description: "the x-coordinate of the first control point"
            },
            {
                parameter: "y2: Number",
                description: "the y-coordinate of the first control point"
            },
            {
                parameter: "x3: Number",
                description: "the x-coordinate of the second control point"
            },
            {
                parameter: "y3: Number",
                description: "the y-coordinate of the second control point"
            },
            {
                parameter: "x4: Number",
                description: "the x-coordinate of the second anchor point"
            },
            {
                parameter: "y4: Number",
                description: "the y-coordinate of the second anchor point"
            },
            {
                parameter: "z1: Number",
                description: "the z-coordinate of the first anchor point"
            },
            {
                parameter: "z2: Number",
                description: "the z-coordinate of the first control point"
            },
            {
                parameter: "z3: Number",
                description: "the z-coordinate of the second control point"
            },
            {
                parameter: "z4: Number",
                description: "the z-coordinate of the second anchor point"
            },
        ]
    },
    {
        element: "bezierDetail",
        description: "Sets the resolution at which Bezier's curve is displayed. The default value is 20. Note, This function is only useful when using the WEBGL renderer as the default canvas renderer does not use this information.",
        code: "bezierDetail(detail)",
        insert: "bezierDetail(${1:detail})",
        syntax: [
            {
                parameter: "detail: Number",
                description: "resolution of the curves"
            },
        ]
    },
    {
        element: "bezierPoint",
        description: "Given the x or y co-ordinate values of control and anchor points of a bezier curve, it evaluates the x or y coordinate of the bezier at position t. The parameters a and d are the x or y coordinates of first and last points on the curve while b and c are of the control points.The final parameter t is the position of the resultant point which is given between 0 and 1. This can be done once with the x coordinates and a second time with the y coordinates to get the location of a bezier curve at t.",
        code: "bezierPoint(a, b, c, d, t)",
        insert: "bezierPoint(${1:a}, ${2:b}, ${3:c}, ${4:d}, ${5:t})",
        syntax: [
            {
                parameter: "a: Number",
                description: "coordinate of first point on the curve"
            },
            {
                parameter: "b: Number",
                description: "coordinate of first control point"
            },
            {
                parameter: "c: Number",
                description: "coordinate of second control point"
            },
            {
                parameter: "d: Number",
                description: "coordinate of second point on the curve"
            },
            {
                parameter: "t: Number",
                description: "value between 0 and 1"
            },
        ],
        return: {
            type: "Number",
            description: "the value of the Bezier at position t"
        }
    },
    {
        element: "bezierTangent",
        description: "Evaluates the tangent to the Bezier at position t for points a, b, c, d. The parameters a and d are the first and last points on the curve, and b and c are the control points. The final parameter t varies between 0 and 1.",
        code: "bezierTangent(a, b, c, d, t)",
        insert: "bezierTangent(${1:a}, ${2:b}, ${3:c}, ${4:d}, ${5:t})",
        syntax: [
            {
                parameter: "a: Number",
                description: "coordinate of first point on the curve"
            },
            {
                parameter: "b: Number",
                description: "coordinate of first control point"
            },
            {
                parameter: "c: Number",
                description: "coordinate of second control point"
            },
            {
                parameter: "d: Number",
                description: "coordinate of second point on the curve"
            },
            {
                parameter: "t: Number",
                description: "value between 0 and 1"
            },
        ],
        return: {
            type: "Number",
            description: "the tangent at position t"
        }
    },
    {
        element: "curve",
        description: "Draws a curved line on the screen between two points, given as the middle four parameters. The first two parameters are a control point, as if the curve came from this point even though it's not drawn. The last two parameters similarly describe the other control point.",
        code: "curve(x1, y1, x2, y2, x3, y3, x4, y4), curve(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4)",
        insert: "curve(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2}, ${5:x3}, ${6:y3}, ${7:x4}, ${8:y4})",
        syntax: [
            {
                parameter: "x1: Number",
                description: "the x-coordinate for the beginning control point"
            },
            {
                parameter: "y1: Number",
                description: "the y-coordinate for the beginning control point"
            },
            {
                parameter: "x2: Number",
                description: "the x-coordinate for the first point"
            },
            {
                parameter: "y2: Number",
                description: "the y-coordinate for the first point"
            },
            {
                parameter: "x3: Number",
                description: "the x-coordinate for the second point"
            },
            {
                parameter: "y3: Number",
                description: "the y-coordinate for the second point"
            },
            {
                parameter: "x4: Number",
                description: "the x-coordinate for the ending control point"
            },
            {
                parameter: "y4: Number",
                description: "the y-coordinate for the ending control point"
            },
            {
                parameter: "z1: Number",
                description: "the z-coordinate for the beginning control point"
            },
            {
                parameter: "z2: Number",
                description: "the z-coordinate for the first point"
            },
            {
                parameter: "z3: Number",
                description: "the z-coordinate for the second point"
            },
            {
                parameter: "z4: Number",
                description: "the z-coordinate for the ending control point"
            },
        ]
    },
    {
        element: "curveDetail",
        description: "Sets the resolution at which curves display. The default value is 20 while the minimum value is 3. This function is only useful when using the WEBGL renderer as the default canvas renderer does not use this information.",
        code: "curveDetail(resolution)",
        insert: "curveDetail(${1:resolution})",
        syntax: [
            {
                parameter: "resolution: Number",
                description: "resolution of the curves"
            },
        ]
    },
    {
        element: "curveTightness",
        description: "Modifies the quality of forms created with curve() and curveVertex().The parameter tightness determines how the curve fits to the vertex points. The value 0.0 is the default value for tightness (this value defines the curves to be Catmull-Rom splines) and the value 1.0 connects all the points with straight lines. Values within the range -5.0 and 5.0 will deform the curves but will leave them recognizable and as values increase in magnitude, they will continue to deform.",
        code: "curveTightness(amount)",
        insert: "curveTightness(${1:amount})",
        syntax: [
            {
                parameter: "amount: Number",
                description: "amount of deformation from the original vertices"
            },
        ]
    },
    {
        element: "curvePoint",
        description: "Evaluates the curve at position t for points a, b, c, d. The parameter t varies between 0 and 1, a and d are control points of the curve, and b and c are the start and end points of the curve. This can be done once with the x coordinates and a second time with the y coordinates to get the location of a curve at t.",
        code: "curvePoint(a, b, c, d, t)",
        insert: "curvePoint(${1:a}, ${2:b}, ${3:c}, ${4:d}, ${5:t})",
        syntax: [
            {
                parameter: "a: Number",
                description: "coordinate of first control point on the curve"
            },
            {
                parameter: "b: Number",
                description: "coordinate of first point"
            },
            {
                parameter: "c: Number",
                description: "coordinate of second point"
            },
            {
                parameter: "d: Number",
                description: "coordinate of second control point"
            },
            {
                parameter: "t: Number",
                description: "value between 0 and 1"
            },
        ],
        return: {
            type: "Number",
            description: "bezier value at position t"
        }
    },
    {
        element: "curveTangent",
        description: "Evaluates the tangent to the curve at position t for points a, b, c, d. The parameter t varies between 0 and 1, a and d are points on the curve, and b and c are the control points.",
        code: "curveTangent(a, b, c, d, t)",
        insert: "curveTangent(${1:a}, ${2:b}, ${3:c}, ${4:d}, ${5:t})",
        syntax: [
            {
                parameter: "a: Number",
                description: "coordinate of first control point"
            },
            {
                parameter: "b: Number",
                description: "coordinate of first point on the curve"
            },
            {
                parameter: "c: Number",
                description: "coordinate of second point on the curve"
            },
            {
                parameter: "d: Number",
                description: "coordinate of second control point"
            },
            {
                parameter: "t: Number",
                description: "value between 0 and 1"
            },
        ],
        return: {
            type: "Number",
            description: "the tangent at position t"
        }
    },
    {
        element: "beginContour",
        description: "Use the beginContour() and endContour() functions to create negative shapes within shapes such as the center of the letter 'O'. beginContour() begins recording vertices for the shape and endContour() stops recording. The vertices that define a negative shape must 'wind' in the opposite direction from the exterior shape. First draw vertices for the exterior clockwise order, then for internal shapes, draw vertices shape in counter-clockwise.",
        code: "beginContour()",
        insert: "beginContour()",
        syntax: [
        ],
    },
    {
        element: "beginShape",
        description: "Using the beginShape() and endShape() functions allow creating more complex forms. beginShape() begins recording vertices for a shape and endShape() stops recording. The value of the kind parameter tells it which types of shapes to create from the provided vertices. With no mode specified, the shape can be any irregular polygon.",
        code: "beginShape([kind])",
        insert: "beginShape()",
        syntax: [
            {
                parameter: "kind: Constant",
                description: "either POINTS, LINES, TRIANGLES, TRIANGLE_FAN TRIANGLE_STRIP, QUADS, QUAD_STRIP or TESS (Optional)"
            },
        ],
    },
    {
        element: "bezierVertex",
        description: "Specifies vertex coordinates for Bezier curves. Each call to bezierVertex() defines the position of two control points and one anchor point of a Bezier curve, adding a new segment to a line or shape. For WebGL mode bezierVertex() can be used in 2D as well as 3D mode. 2D mode expects 6 parameters, while 3D mode expects 9 parameters (including z coordinates). The first time bezierVertex() is used within a beginShape() call, it must be prefaced with a call to vertex() to set the first anchor point.",
        code: "bezierVertex(x2, y2, x3, y3, x4, y4), bezierVertex(x2, y2, z2, x3, y3, z3, x4, y4, z4)",
        insert: "bezierVertex(${1:x2}, ${2:y2}, ${3:x3}, ${4:y3}, ${5:x4}, ${6:y4})",
        syntax: [
            {
                parameter: "x2: Number",
                description: "the x-coordinate for the first control point"
            },
            {
                parameter: "y2: Number",
                description: "the y-coordinate for the first control point"
            },
            {
                parameter: "x3: Number",
                description: "the x-coordinate for the second control point"
            },
            {
                parameter: "y3: Number",
                description: "the y-coordinate for the second control point"
            },
            {
                parameter: "x4: Number",
                description: "the x-coordinate for the anchor point"
            },
            {
                parameter: "y4: Number",
                description: "the y-coordinate for the anchor point"
            },
            {
                parameter: "z2: Number",
                description: "the z-coordinate for the first control point (for WebGL mode)"
            },
            {
                parameter: "z3: Number",
                description: "the z-coordinate for the second control point (for WebGL mode)"
            },
            {
                parameter: "z4: Number",
                description: "the z-coordinate for the second anchor point (for WebGL mode)"
            },
        ]
    },
    {
        element: "curveVertex",
        description: "Specifies vertex coordinates for Bezier curves. Each call to bezierVertex() defines the position of two control points and one anchor point of a Bezier curve, adding a new segment to a line or shape. For WebGL mode bezierVertex() can be used in 2D as well as 3D mode. 2D mode expects 6 parameters, while 3D mode expects 9 parameters (including z coordinates). The first time bezierVertex() is used within a beginShape() call, it must be prefaced with a call to vertex() to set the first anchor point.",
        code: "curveVertex(x, y), curveVertex(x, y, [z])",
        insert: "curveVertex(${1:x}, ${2:y})",
        syntax: [
            {
                parameter: "x: Number",
                description: "the x-coordinate of the vertex"
            },
            {
                parameter: "y: Number",
                description: "the y-coordinate of the vertex"
            },
            {
                parameter: "z: Number",
                description: "the z-coordinate of the vertex (for WebGL mode) (Optional)"
            },
        ]
    },
    {
        element: "endContour",
        description: "Use the beginContour() and endContour() functions to create negative shapes within shapes such as the center of the letter 'O'. beginContour() begins recording vertices for the shape and endContour() stops recording. The vertices that define a negative shape must 'wind' in the opposite direction from the exterior shape. First draw vertices for the exterior clockwise order, then for internal shapes, draw vertices shape in counter-clockwise.",
        code: "endContour()",
        insert: "endContour()",
        syntax: [
        ],
    },
    {
        element: "endShape",
        description: "The endShape() function is the companion to beginShape() and may only be called after beginShape(). When endShape() is called, all of image data defined since the previous call to beginShape() is written into the image buffer. The constant CLOSE as the value for the MODE parameter to close the shape (to connect the beginning and the end).",
        code: "endShape([mode])",
        insert: "endShape()",
        syntax: [
            {
                parameter: "mode: Constant",
                description: "use CLOSE to close the shape (Optional)"
            },
        ],
    },
    {
        element: "quadraticVertex",
        description: "Specifies vertex coordinates for quadratic Bezier curves. Each call to quadraticVertex() defines the position of one control points and one anchor point of a Bezier curve, adding a new segment to a line or shape. The first time quadraticVertex() is used within a beginShape() call, it must be prefaced with a call to vertex() to set the first anchor point. For WebGL mode quadraticVertex() can be used in 2D as well as 3D mode.",
        code: "quadraticVertex(cx, cy, x3, y3), quadraticVertex(cx, cy, cz, x3, y3, z3)",
        insert: "quadraticVertex(${1:cx}, ${2:cy}, ${3:x3}, ${4:y3})",
        syntax: [
            {
                parameter: "cx: Number",
                description: "the x-coordinate for the control point"
            },
            {
                parameter: "cy: Number",
                description: "the y-coordinate for the control point"
            },
            {
                parameter: "x3: Number",
                description: "the x-coordinate for the anchor point"
            },
            {
                parameter: "y3: Number",
                description: "the y-coordinate for the anchor point"
            },
            {
                parameter: "cz: Number",
                description: "the z-coordinate for the control point (for WebGL mode)"
            },
            {
                parameter: "z3: Number",
                description: "the z-coordinate for the anchor point (for WebGL mode)"
            },
        ]
    },
    {
        element: "vertex",
        description: "All shapes are constructed by connecting a series of vertices. vertex() is used to specify the vertex coordinates for points, lines, triangles, quads, and polygons. It is used exclusively within the beginShape() and endShape() functions.",
        code: "vertex(x, y), vertex(x, y, z), vertex(x, y, [z], u, v)",
        insert: "vertex(${1:x}, ${2:y})",
        syntax: [
            {
                parameter: "x: Number",
                description: "the x-coordinate of the vertex"
            },
            {
                parameter: "y: Number",
                description: "the y-coordinate of the vertex"
            },
            {
                parameter: "z: Number",
                description: "the z-coordinate of the vertex. Defaults to 0 if not specified."
            },
            {
                parameter: "u: Number",
                description: "the vertex's texture u-coordinate"
            },
            {
                parameter: "v: Number",
                description: "the vertex's texture v-coordinate"
            },
        ]
    },
    {
        element: "normal",
        description: "Sets the 3d vertex normal to use for subsequent vertices drawn with vertex(). A normal is a vector that is generally nearly perpendicular to a shape's surface which controls how much light will be reflected from that part of the surface.",
        code: "normal(vector), normal(x, y, z)",
        insert: "normal(${1:vector})",
        syntax: [
            {
                parameter: "vector: Vector",
                description: "A p5.Vector representing the vertex normal."
            },
            {
                parameter: "x: Number",
                description: "The x component of the vertex normal."
            },
            {
                parameter: "y: Number",
                description: "The y component of the vertex normal."
            },
            {
                parameter: "z: Number",
                description: "The z component of the vertex normal."
            },
        ]
    },
    {
        element: "plane",
        description: "Draw a plane with given a width and height",
        code: "plane([width], [height], [detailX], [detailY])",
        insert: "plane()",
        syntax: [
            {
                parameter: "width: Number",
                description: "width of the plane (Optional)"
            },
            {
                parameter: "height: Number",
                description: "height of the plane (Optional)"
            },
            {
                parameter: "detailX: Integer",
                description: "Optional number of triangle subdivisions in x-dimension (Optional)"
            },
            {
                parameter: "detailY: Integer",
                description: "Optional number of triangle subdivisions in y-dimension (Optional)"
            },
        ]
    },
    {
        element: "box",
        description: "Draw a box with given width, height and depth",
        code: "box([width], [Height], [depth], [detailX], [detailY])",
        insert: "box()",
        syntax: [
            {
                parameter: "width: Number",
                description: "width of the box (Optional)"
            },
            {
                parameter: "height: Number",
                description: "height of the box (Optional)"
            },
            {
                parameter: "depth: Number",
                description: "depth of the box (Optional)"
            },
            {
                parameter: "detailX: Integer",
                description: "Optional number of triangle subdivisions in x-dimension (Optional)"
            },
            {
                parameter: "detailY: Integer",
                description: "Optional number of triangle subdivisions in y-dimension (Optional)"
            },
        ]
    },
    {
        element: "sphere",
        description: "Draw a sphere with given radius. DetailX and detailY determines the number of subdivisions in the x-dimension and the y-dimension of a sphere. More subdivisions make the sphere seem smoother. The recommended maximum values are both 24.",
        code: "sphere([radius], [detailX], [detailY])",
        insert: "sphere()",
        syntax: [
            {
                parameter: "radius: Number",
                description: "radius of circle (Optional)"
            },
            {
                parameter: "detailX: Integer",
                description: "Optional number of subdivisions in x-dimension (Optional)"
            },
            {
                parameter: "detailY: Integer",
                description: "Optional number of subdivisions in y-dimension (Optional)"
            },
        ]
    },
    {
        element: "cylinder",
        description: "Draw a cylinder with given radius and height. DetailX and detailY determines the number of subdivisions in the x-dimension and the y-dimension of a cylinder. More subdivisions make the cylinder seem smoother. The recommended maximum value for detailX is 24.",
        code: "cylinder([radius], [height], [detailX], [detailY], [bottomCap], [topCap])",
        insert: "cylinder()",
        syntax: [
            {
                parameter: "radius: Number",
                description: "radius of surface (Optional)"
            },
            {
                parameter: "height: Number",
                description: "height of the cylinder (Optional)"
            },
            {
                parameter: "detailX: Integer",
                description: "Optional number of subdivisions in x-dimension; default is 24 (Optional)"
            },
            {
                parameter: "detailY: Integer",
                description: "Optional number of subdivisions in y-dimension; default is 1 (Optional)"
            },
            {
                parameter: "bottomCap: Boolean",
                description: "whether to draw the bottom of the cylinder (Optional)"
            },
            {
                parameter: "topCap: Boolean",
                description: "whether to draw the top of the cylinder (Optional)"
            },
        ]
    },
    {
        element: "cone",
        description: "Draw a cone with given radius and height. DetailX and detailY determine the number of subdivisions in the x-dimension and the y-dimension of a cone. More subdivisions make the cone seem smoother. The recommended maximum value for detailX is 24.",
        code: "cone([radius], [height], [detailX], [detailY], [cap])",
        insert: "cone()",
        syntax: [
            {
                parameter: "radius: Number",
                description: "radius of bottom surface (Optional)"
            },
            {
                parameter: "height: Number",
                description: "height of the cone (Optional)"
            },
            {
                parameter: "detailX: Integer",
                description: "number of segments, the more segments the smoother geometry default is 24 (Optional)"
            },
            {
                parameter: "detailY: Integer",
                description: "number of segments, the more segments the smoother geometry default is 1 (Optional)"
            },
            {
                parameter: "cap: Boolean",
                description: "whether to draw the base of the cone (Optional)"
            },
        ]
    },
    {
        element: "ellipsoid",
        description: "Draw an ellipsoid with given radius. DetailX and detailY determine the number of subdivisions in the x-dimension and the y-dimension of an ellipsoid. More subdivisions make the ellipsoid appear to be smoother. Avoid detail number above 150, it may crash the browser.",
        code: "ellipsoid([radiusx], [radiusy], [radiusz], [detailX], [detailY])",
        insert: "ellipsoid()",
        syntax: [
            {
                parameter: "radiusx: Number",
                description: "x-radius of ellipsoid (Optional)"
            },
            {
                parameter: "radiusy: Number",
                description: "y-radius of ellipsoid (Optional)"
            },
            {
                parameter: "radiusz: Number",
                description: "z-radius of ellipsoid (Optional)"
            },
            {
                parameter: "detailX: Integer",
                description: "number of segments, the more segments the smoother geometry default is 24. (Optional)"
            },
            {
                parameter: "detailY: Integer",
                description: "number of segments, the more segments the smoother geometry default is 16. (Optional)"
            },
        ]
    },
    {
        element: "torus",
        description: "Draw a torus with given radius and tube radius. DetailX and detailY determine the number of subdivisions in the x-dimension and the y-dimension of a torus. More subdivisions make the torus appear to be smoother. The default and maximum values for detailX and detailY are 24 and 16, respectively. Setting them to relatively small values like 4 and 6 allows you to create new shapes other than a torus.",
        code: "torus([radius], [tubeRadius], [detailX], [detailY])",
        insert: "torus()",
        syntax: [
            {
                parameter: "radius: Number",
                description: "radius of the whole ring (Optional)"
            },
            {
                parameter: "tubeRadius: Number",
                description: "radius of the tube (Optional)"
            },
            {
                parameter: "detailX: Integer",
                description: "number of segments in x-dimension, the more segments the smoother geometry default is 24 (Optional)"
            },
            {
                parameter: "detailY: Integer",
                description: "number of segments in y-dimension, the more segments the smoother geometry default is 16 (Optional)"
            },
        ]
    },
    {
        element: "p5.Geometry",
        description: "p5 Geometry class",
        code: "new p5.Geometry([detailX], [detailY], [callback])",
        insert: "new p5.Geometry()",
        syntax: [
            {
                parameter: "detailX: Integer",
                description: "number of vertices along the x-axis. (Optional)"
            },
            {
                parameter: "detailY: Integer",
                description: "number of vertices along the y-axis. (Optional)"
            },
            {
                parameter: "callback: Function",
                description: "function to call upon object instantiation. (Optional)"
            },
        ],
    },
    {
        element: "p5.Geometry",
        description: "p5 Geometry class",
        code: "new p5.Geometry([detailX], [detailY], [callback])",
        insert: "new p5.Geometry()",
        syntax: [
            {
                parameter: "detailX: Integer",
                description: "number of vertices along the x-axis. (Optional)"
            },
            {
                parameter: "detailY: Integer",
                description: "number of vertices along the y-axis. (Optional)"
            },
            {
                parameter: "callback: Function",
                description: "function to call upon object instantiation. (Optional)"
            },
        ],
    },
    {
        element: "HALF_PI",
        description: "HALF_PI is a mathematical constant with the value 1.57079632679489661923. It is half the ratio of the circumference of a circle to its diameter. It is useful in combination with the trigonometric functions sin() and cos().",
        code: "HALF_PI",
        insert: "HALF_PI",
        syntax: [
        ],
    },
    {
        element: "PI",
        description: "PI is a mathematical constant with the value 3.14159265358979323846. It is the ratio of the circumference of a circle to its diameter. It is useful in combination with the trigonometric functions sin() and cos().",
        code: "PI",
        insert: "PI",
        syntax: [
        ],
    },
    {
        element: "QUARTER_PI",
        description: "QUARTER_PI is a mathematical constant with the value 0.7853982. It is one quarter the ratio of the circumference of a circle to its diameter. It is useful in combination with the trigonometric functions sin() and cos().",
        code: "QUARTER_PI",
        insert: "QUARTER_PI",
        syntax: [
        ],
    },
    {
        element: "TAU",
        description: "TAU is an alias for TWO_PI, a mathematical constant with the value 6.28318530717958647693. It is twice the ratio of the circumference of a circle to its diameter. It is useful in combination with the trigonometric functions sin() and cos().",
        code: "TAU",
        insert: "TAU",
        syntax: [
        ],
    },
    {
        element: "TWO_PI",
        description: "TWO_PI is a mathematical constant with the value 6.28318530717958647693. It is twice the ratio of the circumference of a circle to its diameter. It is useful in combination with the trigonometric functions sin() and cos().",
        code: "TWO_PI",
        insert: "TWO_PI",
        syntax: [
        ],
    },
    {
        element: "DEGREES",
        description: "Constant to be used with angleMode() function, to set the mode which p5.js interprets and calculates angles (either DEGREES or RADIANS). Used by: angleMode()",
        code: "DEGREES",
        insert: "DEGREES",
        syntax: [
        ],
    },
    {
        element: "RADIANS",
        description: "Constant to be used with angleMode() function, to set the mode which p5.js interprets and calculates angles (either RADIANS or DEGREES). Used by: angleMode()",
        code: "RADIANS",
        insert: "RADIANS",
        syntax: [
        ],
    },
    {
        element: "preload",
        description: "Called directly before setup(), the preload() function is used to handle asynchronous loading of external files in a blocking way. If a preload function is defined, setup() will wait until any load calls within have finished. Nothing besides load calls (loadImage, loadJSON, loadFont, loadStrings, etc.) should be inside the preload function. If asynchronous loading is preferred, the load methods can instead be called in setup() or anywhere else with the use of a callback parameter.",
        code: "preload()",
        insert: "preload()",
        syntax: [
        ],
    },
    {
        element: "setup",
        description: "The setup() function is called once when the program starts. It's used to define initial environment properties such as screen size and background color and to load media such as images and fonts as the program starts. There can only be one setup() function for each program and it shouldn't be called again after its initial execution.",
        code: "setup()",
        insert: "setup()",
        syntax: [
        ],
    },
    {
        element: "draw",
        description: "Called directly after setup(), the draw() function continuously executes the lines of code contained inside its block until the program is stopped or noLoop() is called. Note if noLoop() is called in setup(), draw() will still be executed once before stopping. draw() is called automatically and should never be called explicitly.",
        code: "draw()",
        insert: "draw()",
        syntax: [
        ],
    },
    {
        element: "remove",
        description: "Removes the entire p5 sketch. This will remove the canvas and any elements created by p5.js. It will also stop the draw loop and unbind any properties or methods from the window global scope. It will leave a variable p5 in case you wanted to create a new p5 sketch. If you like, you can set p5 = null to erase it. While all functions and variables and objects created by the p5 library will be removed, any other global variables created by your code will remain.",
        code: "remove()",
        insert: "remove()",
        syntax: [
        ],
    },
    {
        element: "disableFriendlyErrors",
        description: "Turn off some features of the friendly error system (FES), which can give a significant boost to performance when needed. Note that this will disable the parts of the FES that cause performance slowdown (like argument checking). Friendly errors that have no performance cost (like giving an descriptive error if a file load fails, or warning you if you try to override p5.js functions in the global space), will remain in place.",
        code: "disableFriendlyErrors",
        insert: "disableFriendlyErrors",
        syntax: [
        ],
    },
    {
        element: "noLoop",
        description: "Stops p5.js from continuously executing the code within draw(). If loop() is called, the code in draw() begins to run continuously again. If using noLoop() in setup(), it should be the last line inside the block.",
        code: "noLoop()",
        insert: "noLoop()",
        syntax: [
        ],
    },
    {
        element: "loop",
        description: "By default, p5.js loops through draw() continuously, executing the code within it. However, the draw() loop may be stopped by calling noLoop(). In that case, the draw() loop can be resumed with loop(). Avoid calling loop() from inside setup(). Use isLooping() to check current state of loop().",
        code: "loop()",
        insert: "loop()",
        syntax: [
        ],
    },
    {
        element: "isLooping",
        description: "By default, p5.js loops through draw() continuously, executing the code within it. If the sketch is stopped with noLoop() or resumed with loop(), isLooping() returns the current state for use within custom event handlers.",
        code: "isLooping()",
        insert: "isLooping()",
        syntax: [
        ],
    },
    {
        element: "push",
        description: "The push() function saves the current drawing style settings and transformations, while pop() restores these settings. Note that these functions are always used together. They allow you to change the style and transformation settings and later return to what you had. When a new state is started with push(), it builds on the current style and transform information. The push() and pop() functions can be embedded to provide more control.",
        code: "push()",
        insert: "push()",
        syntax: [
        ],
    },
    {
        element: "pop",
        description: "The push() function saves the current drawing style settings and transformations, while pop() restores these settings. Note that these functions are always used together. They allow you to change the style and transformation settings and later return to what you had. When a new state is started with push(), it builds on the current style and transform information. The push() and pop() functions can be embedded to provide more control.",
        code: "pop()",
        insert: "pop()",
        syntax: [
        ],
    },
    {
        element: "redraw",
        description: "Executes the code within draw() one time. This function allows the program to update the display window only when necessary, for example when an event registered by mousePressed() or keyPressed() occurs. In structuring a program, it only makes sense to call redraw() within events such as mousePressed(). This is because redraw() does not run draw() immediately (it only sets a flag that indicates an update is needed). The redraw() function does not work properly when called inside draw().",
        code: "redraw([n])",
        insert: "redraw()",
        syntax: [
            {
                parameter: "n: Integer",
                description: "Redraw for n-times. The default value is 1. (Optional)"
            },
        ],
    },
    {
        element: "p5",
        description: "The p5() constructor enables you to activate 'instance mode' instead of normal 'global mode'.",
        code: "p5(sketch, node)",
        insert: "p5(${1:sketch}, ${2:node})",
        syntax: [
            {
                parameter: "sketch: Object",
                description: "a function containing a p5.js sketch"
            },
            {
                parameter: "node: String|Object",
                description: "ID or pointer to HTML DOM node to contain sketch in"
            },
        ],
    },
    {
        element: "p5.Element",
        description: "Base class for all elements added to a sketch, including canvas, graphics buffers, and other HTML elements. It is not called directly, but p5.Element objects are created by calling createCanvas, createGraphics, createDiv, createImg, createInput, etc.",
        code: "new p5.Element(elt, [pInst])",
        insert: "new p5.Element(${1:elt})",
        syntax: [
            {
                parameter: "elt: String",
                description: "DOM node that is wrapped"
            },
            {
                parameter: "pInst: P5",
                description: "pointer to p5 instance (Optional)"
            },
        ],
    },
    {
        element: "select",
        description: "Searches the page for the first element that matches the given CSS selector string (can be an ID, class, tag name or a combination) and returns it as a p5.Element. The DOM node itself can be accessed with .elt. Returns null if none found. You can also specify a container to search within.",
        code: "select(selectors, [container])",
        insert: "select(${1:selectors})",
        syntax: [
            {
                parameter: "selectors: String",
                description: "CSS selector string of element to search for"
            },
            {
                parameter: "container:  String|p5.Element|HTMLElement",
                description: "CSS selector string, p5.Element, or HTML element to search within (Optional)"
            },
        ],
        return: {
            type: "p5.Element|null",
            description: "p5.Element containing node found"
        }
    },
    {
        element: "selectAll",
        description: "Searches the page for elements that match the given CSS selector string (can be an ID a class, tag name or a combination) and returns them as p5.Elements in an array. The DOM node itself can be accessed with .elt. Returns an empty array if none found. You can also specify a container to search within.",
        code: "selectAll(selectors, [container])",
        insert: "selectAll(${1:selectors})",
        syntax: [
            {
                parameter: "selectors: String",
                description: "CSS selector string of element to search for"
            },
            {
                parameter: "container:  String|p5.Element|HTMLElement",
                description: "CSS selector string, p5.Element, or HTML element to search within (Optional)"
            },
        ],
        return: {
            type: "p5.Element[]",
            description: "Array of p5.Elements containing nodes found"
        }
    },
    {
        element: "removeElements",
        description: "Removes all elements created by p5, except any canvas / graphics elements created by createCanvas or createGraphics. Event handlers are removed, and element is removed from the DOM.",
        code: "removeElements()",
        insert: "removeElements()",
        syntax: [
        ],
    },
    {
        element: "changed",
        description: "The .changed() function is called when the value of an element changes. This can be used to attach an element specific event listener.",
        code: "changed(fxn)",
        insert: "changed(${1:fxn})",
        syntax: [
            {
                parameter: "fxn: Function|Boolean",
                description: "function to be fired when the value of an element changes. if false is passed instead, the previously firing function will no longer fire."
            },
        ],
    },
    {
        element: "input",
        description: "The .input() function is called when any user input is detected with an element. The input event is often used to detect keystrokes in a input element, or changes on a slider element. This can be used to attach an element specific event listener.",
        code: "input(fxn)",
        insert: "input(${1:fxn})",
        syntax: [
            {
                parameter: "fxn: Function|Boolean",
                description: "function to be fired when any user input is detected within the element. if false is passed instead, the previously firing function will no longer fire."
            },
        ],
    },
    {
        element: "createDiv",
        description: "Creates a <div></div> element in the DOM with given inner HTML.",
        code: "createDiv([html])",
        insert: "createDiv()",
        syntax: [
            {
                parameter: "html: String",
                description: "inner HTML for element created (Optional)"
            },
        ],
        return: {
            type: "p5.Element",
            description: "pointer to p5.Element holding created node"
        }
    },
    {
        element: "createP",
        description: "Creates a <p></p> element in the DOM with given inner HTML. Used for paragraph length text.",
        code: "createP([html])",
        insert: "createP()",
        syntax: [
            {
                parameter: "html: String",
                description: "inner HTML for element created (Optional)"
            },
        ],
        return: {
            type: "p5.Element",
            description: "pointer to p5.Element holding created node"
        }
    },
    {
        element: "createSpan",
        description: "Creates a <span></span> element in the DOM with given inner HTML.",
        code: "createSpan([html])",
        insert: "createSpan()",
        syntax: [
            {
                parameter: "html: String",
                description: "inner HTML for element created (Optional)"
            },
        ],
        return: {
            type: "p5.Element",
            description: "pointer to p5.Element holding created node"
        }
    },
    {
        element: "createImg",
        description: "Creates an <img> element in the DOM with given src and alternate text.",
        code: "createImg(src, alt), createImg(src, alt, crossOrigin, [successCallback])",
        insert: "createImg(${1:src}, ${2:alt})",
        syntax: [
            {
                parameter: "src: String",
                description: "src path or url for image"
            },
            {
                parameter: "alt: String",
                description: "alternate text to be used if image does not load. You can use also an empty string ('') if that an image is not intended to be viewed."
            },
            {
                parameter: "crossOrigin: String",
                description: "crossOrigin property of the img element; use either 'anonymous' or 'use-credentials' to retrieve the image with cross-origin access (for later use with canvas. if an empty string('') is passed, CORS is not used"
            },
            {
                parameter: "successCallback: Function",
                description: "callback to be called once image data is loaded with the p5.Element as argument (Optional)"
            },
        ],
        return: {
            type: "p5.Element",
            description: "pointer to p5.Element holding created node"
        }
    },
    {
        element: "createA",
        description: "Creates an <a></a> element in the DOM for including a hyperlink.",
        code: "createA(href, html, [target])",
        insert: "createA(${1:href}, ${2:html})",
        syntax: [
            {
                parameter: "href: String",
                description: "url of page to link to"
            },
            {
                parameter: "html: String",
                description: "inner html of link element to display"
            },
            {
                parameter: "target: String",
                description: "target where new link should open, could be _blank, _self, _parent, _top. (Optional)"
            },
        ],
        return: {
            type: "p5.Element",
            description: "pointer to p5.Element holding created node"
        }
    },
    {
        element: "createSlider",
        description: "Creates a slider <input></input> element in the DOM. Use .size() to set the display length of the slider.",
        code: "createSlider(min, max, [value], [step])",
        insert: "createSlider(${1:min}, ${2:max})",
        syntax: [
            {
                parameter: "min: Number",
                description: "minimum value of the slider"
            },
            {
                parameter: "max: Number",
                description: "maximum value of the slider"
            },
            {
                parameter: "value: Number",
                description: "default value of the slider (Optional)"
            },
            {
                parameter: "step: Number",
                description: "step size for each tick of the slider (if step is set to 0, the slider will move continuously from the minimum to the maximum value) (Optional)"
            },
        ],
        return: {
            type: "p5.Element",
            description: "pointer to p5.Element holding created node"
        }
    },
    {
        element: "createButton",
        description: "Creates a <button></button> element in the DOM. Use .size() to set the display size of the button. Use .mousePressed() to specify behavior on press.",
        code: "createButton(label, [value])",
        insert: "createButton(${1:label})",
        syntax: [
            {
                parameter: "label: String",
                description: "label displayed on the button"
            },
            {
                parameter: "value: String",
                description: "value of the button (Optional)"
            },
        ],
        return: {
            type: "p5.Element",
            description: "pointer to p5.Element holding created node"
        }
    },
    {
        element: "createCheckbox",
        description: "Creates a checkbox <input></input> element in the DOM. Calling .checked() on a checkbox returns if it is checked or not",
        code: "createCheckbox([label], [value])",
        insert: "createCheckbox()",
        syntax: [
            {
                parameter: "label: String",
                description: "label displayed after checkbox (Optional)"
            },
            {
                parameter: "value: Boolean",
                description: "value of the checkbox; checked is true, unchecked is false (Optional)"
            },
        ],
        return: {
            type: "p5.Element",
            description: "pointer to p5.Element holding created node"
        }
    },
    {
        element: "createSelect",
        description: "Creates a dropdown menu <select></select> element in the DOM. It also helps to assign select-box methods to p5.Element when selecting existing select box.",
        code: "createSelect([multiple]), createSelect(existing)",
        insert: "createSelect()",
        syntax: [
            {
                parameter: "multiple: Boolean",
                description: "true if dropdown should support multiple selections (Optional)"
            },
            {
                parameter: "existing: Object",
                description: "DOM select element"
            },
        ],
        return: {
            type: "p5.Element",
            description: "pointer to p5.Element holding created node"
        }
    },
    {
        element: "createRadio",
        description: "Creates a radio button element in the DOM.It also helps existing radio buttons assign methods of p5.Element.",
        code: "createRadio(containerElement, [name]), createRadio(name), createRadio()",
        insert: "createRadio(${1:containerElement})",
        syntax: [
            {
                parameter: "containerElement: Object",
                description: "An container HTML Element either a div or span inside which all existing radio inputs will be considered as options."
            },
            {
                parameter: "name: String",
                description: "A name parameter for each Input Element. (Optional)"
            },
        ],
        return: {
            type: "p5.Element",
            description: "pointer to p5.Element holding created node"
        }
    },
    {
        element: "createColorPicker",
        description: "Creates a colorPicker element in the DOM for color input. The .value() method will return a hex string (#rrggbb) of the color. The .color() method will return a p5.Color object with the current chosen color.",
        code: "createColorPicker([value])",
        insert: "createColorPicker()",
        syntax: [
            {
                parameter: "value: String|p5.Color",
                description: "default color of element (Optional)"
            },
        ],
        return: {
            type: "p5.Element",
            description: "pointer to p5.Element holding created node"
        }
    },
    {
        element: "createInput",
        description: "Creates an <input></input> element in the DOM for text input. Use .size() to set the display length of the box.",
        code: "createInput(value, [type]), createInput([value])",
        insert: "createInput(${1:value})",
        syntax: [
            {
                parameter: "value: String",
                description: "default value of the input box"
            },
            {
                parameter: "type: String",
                description: "type of text, ie text, password etc. Defaults to text. Needs a value to be specified first. (Optional)"
            },
        ],
        return: {
            type: "p5.Element",
            description: "pointer to p5.Element holding created node"
        }
    },
    {
        element: "createFileInput",
        description: "Creates an <input></input> element in the DOM of type 'file'. This allows users to select local files for use in a sketch.",
        code: "createFileInput(callback, [multiple])",
        insert: "createFileInput(${1:callback})",
        syntax: [
            {
                parameter: "callback: Function",
                description: "callback function for when a file is loaded"
            },
            {
                parameter: "multiple: Boolean",
                description: "optional, to allow multiple files to be selected (Optional)"
            },
        ],
        return: {
            type: "p5.Element",
            description: "pointer to p5.Element holding created DOM element"
        }
    },
    {
        element: "createVideo",
        description: "Creates an HTML5 <video> element in the DOM for simple playback of audio/video. Shown by default, can be hidden with .hide() and drawn into canvas using image(). The first parameter can be either a single string path to a video file, or an array of string paths to different formats of the same video. This is useful for ensuring that your video can play across different browsers, as each supports different formats. See this page for further information about supported formats.",
        code: "createVideo(src, [callback])",
        insert: "createVideo(${1:src})",
        syntax: [
            {
                parameter: "src: String|String[]",
                description: "path to a video file, or array of paths for supporting different browsers"
            },
            {
                parameter: "callback: Function",
                description: "callback function to be called upon 'canplaythrough' event fire, that is, when the browser can play the media, and estimates that enough data has been loaded to play the media up to its end without having to stop for further buffering of content (Optional)"
            },
        ],
        return: {
            type: "p5.MediaElement",
            description: "pointer to video p5.MediaElement"
        }
    },
    {
        element: "createAudio",
        description: "Creates a hidden HTML5 <audio> element in the DOM for simple audio playback. The first parameter can be either a single string path to a audio file, or an array of string paths to different formats of the same audio. This is useful for ensuring that your audio can play across different browsers, as each supports different formats.",
        code: "createAudio([src], [callback])",
        insert: "createAudio()",
        syntax: [
            {
                parameter: "src: String|String[]",
                description: "path to an audio file, or array of paths for supporting different browsers (Optional)"
            },
            {
                parameter: "callback: Function",
                description: "callback function to be called upon 'canplaythrough' event fire, that is, when the browser can play the media, and estimates that enough data has been loaded to play the media up to its end without having to stop for further buffering of content (Optional)"
            },
        ],
        return: {
            type: "p5.MediaElement",
            description: "pointer to audio p5.MediaElement"
        }
    },
    {
        element: "VIDEO",
        description: "",
        code: "VIDEO",
        insert: "VIDEO",
        syntax: [
        ],
    },
    {
        element: "AUDIO",
        description: "",
        code: "AUDIO",
        insert: "AUDIO",
        syntax: [
        ],
    },
    {
        element: "createCapture",
        description: "Creates a new HTML5 <video> element that contains the audio/video feed from a webcam. The element is separate from the canvas and is displayed by default. The element can be hidden using .hide(). The feed can be drawn onto the canvas using image(). The loadedmetadata property can be used to detect when the element has fully loaded.",
        code: "createCapture(type, [callback])",
        insert: "createCapture(${1:type})",
        syntax: [
            {
                parameter: "type: String|Constant|Object",
                description: "type of capture, either VIDEO or AUDIO if none specified, default both, or a Constraints object"
            },
            {
                parameter: "callback: Function",
                description: "function to be called once stream has loaded (Optional)"
            },
        ],
        return: {
            type: "p5.Element",
            description: "capture video p5.Element"
        }
    },
    {
        element: "createElement",
        description: "Creates element with given tag in the DOM with given content.",
        code: "createElement(tag, [content])",
        insert: "createElement(${1:tag})",
        syntax: [
            {
                parameter: "tag: String",
                description: "tag for the new element"
            },
            {
                parameter: "content: String",
                description: "html content to be inserted into the element (Optional)"
            },
        ],
        return: {
            type: "p5.Element",
            description: "pointer to p5.Element holding created node"
        }
    },
    {
        element: "p5.MediaElement",
        description: "Extends p5.Element to handle audio and video. In addition to the methods of p5.Element, it also contains methods for controlling media. It is not called directly, but p5.MediaElements are created by calling createVideo, createAudio, and createCapture.",
        code: "new p5.MediaElement(elt)",
        insert: "new p5.MediaElement(${1:elt})",
        syntax: [
            {
                parameter: "elt: String",
                description: "DOM node that is wrapped"
            },
        ],
    },
    {
        element: "p5.File",
        description: "Base class for a file. Used for Element.drop and createFileInput.",
        code: "new p5.File(file)",
        insert: "new p5.File(${1:file})",
        syntax: [
            {
                parameter: "file: File",
                description: "File that is wrapped"
            },
        ],
    },
];
