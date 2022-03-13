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
            },             {
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
        insert: "triangle(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2}, ${5:x3}, ${6:y3}",
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
];
