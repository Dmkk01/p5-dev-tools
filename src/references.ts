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
]