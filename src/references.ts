export const references = [
  {
    element: "describe",
    description:
      "Creates a screen reader accessible description for the canvas. The first parameter should be a string with a description of the canvas. The second parameter is optional. If specified, it determines how the description is displayed.",
    code: "describe(text, [display])",
    insert: "describe(${1:text})",
    syntax: [
      {
        parameter: "text: String",
        description: "description of the canvas",
      },
      {
        parameter: "display: Constant",
        description: "either LABEL or FALLBACK (Optional)",
      },
    ],
  },
  {
    element: "describeElement",
    description:
      "This function creates a screen-reader accessible description for elements —shapes or groups of shapes that create meaning together— in the canvas. The first paramater should be the name of the element. The second parameter should be a string with a description of the element. The third parameter is optional. If specified, it determines how the element description is displayed.",
    code: "describeElement(name, text, [display])",
    insert: "describeElement(${1:name}, ${2:text})",
    syntax: [
      {
        parameter: "name: String",
        description: "name of the element",
      },
      {
        parameter: "text: String",
        description: "description of the element",
      },
      {
        parameter: "display: Constant",
        description: "either LABEL or FALLBACK (Optional)",
      },
    ],
  },
  {
    element: "alpha",
    description: "Extracts the alpha value from a color or pixel array.",
    code: "alpha(color)",
    insert: "alpha(${1:color})",
    syntax: [
      {
        parameter: "color: p5.Color|Number[]|String",
        description: "p5.Color object, color components, or CSS color",
      },
    ],
    return: {
      type: "Number",
      description: "the alpha value",
    },
  },
  {
    element: "blue",
    description: "Extracts the blue value from a color or pixel array.",
    code: "blue(color)",
    insert: "blue(${1:color})",
    syntax: [
      {
        parameter: "color: p5.Color|Number[]|String",
        description: "p5.Color object, color components, or CSS color",
      },
    ],
    return: {
      type: "Number",
      description: "the blue value",
    },
  },
  {
    element: "brightness",
    description:
      "Extracts the HSB brightness value from a color or pixel array.",
    code: "brightness(color)",
    insert: "brightness(${1:color})",
    syntax: [
      {
        parameter: "color: p5.Color|Number[]|String",
        description: "p5.Color object, color components, or CSS color",
      },
    ],
    return: {
      type: "Number",
      description: "the brightness value",
    },
  },
  {
    element: "color",
    description:
      "Creates colors for storing in variables of the color datatype. The parameters are interpreted as RGB or HSB values depending on the current colorMode(). The default mode is RGB values from 0 to 255.",
    code: "color(gray, [alpha]), color(v1, v2, v3, [alpha]), color(value), color(values), color(color)",
    insert: "color(${1:v1}, ${2:v2}, ${3:v3})",
    syntax: [
      {
        parameter: "gray: Number",
        description: "number specifying value between white and black.",
      },
      {
        parameter: "alpha: Number",
        description:
          "alpha value relative to current color range (default is 0-255) (Optional)",
      },
      {
        parameter: "v1: Number",
        description: "red or hue value relative to the current color range",
      },
      {
        parameter: "v2: Number",
        description:
          "green or saturation value relative to the current color range",
      },
      {
        parameter: "v3: Number",
        description:
          "blue or brightness value relative to the current color range",
      },
      {
        parameter: "value: String",
        description: "a color string",
      },
      {
        parameter: "values: Number[]",
        description:
          "an array containing the red,green,blue & and alpha components of the color",
      },
      {
        parameter: "color: p5.Color",
        description: "",
      },
    ],
    return: {
      type: "p5.Color",
      description: "resulting color",
    },
  },
  {
    element: "green",
    description: "Extracts the green value from a color or pixel array.",
    code: "green(color)",
    insert: "green(${1:color})",
    syntax: [
      {
        parameter: "color: p5.Color|Number[]|String",
        description: "p5.Color object, color components, or CSS color",
      },
    ],
    return: {
      type: "Number",
      description: "the green value",
    },
  },
  {
    element: "hue",
    description:
      "Extracts the hue value from a color or pixel array. Hue exists in both HSB and HSL.",
    code: "hue(color)",
    insert: "hue(${1:color})",
    syntax: [
      {
        parameter: "color: p5.Color|Number[]|String",
        description: "p5.Color object, color components, or CSS color",
      },
    ],
    return: {
      type: "Number",
      description: "the hue",
    },
  },
  {
    element: "lerpColor",
    description:
      "Blends two colors to find a third color somewhere between them. The amt parameter is the amount to interpolate between the two values where 0.0 is equal to the first color, 0.1 is very near the first color, 0.5 is halfway in between, etc. An amount below 0 will be treated as 0. Likewise, amounts above 1 will be capped at 1.",
    code: "lerpColor(c1, c2, amt)",
    insert: "lerpColor(${1:c1}, ${2:c2}, ${3:amt})",
    syntax: [
      {
        parameter: "c1: p5.Color",
        description: "interpolate from this color",
      },
      {
        parameter: "c2: p5.Color",
        description: "interpolate to this color",
      },
      {
        parameter: "amt: Number",
        description: "number between 0 and 1",
      },
    ],
    return: {
      type: "p5.Color",
      description: "interpolated color",
    },
  },
  {
    element: "lightness",
    description:
      "Extracts the HSL lightness value from a color or pixel array.",
    code: "lightness(color)",
    insert: "lightness(${1:color})",
    syntax: [
      {
        parameter: "color: p5.Color|Number[]|String",
        description: "p5.Color object, color components, or CSS color",
      },
    ],
    return: {
      type: "Number",
      description: "the lightness",
    },
  },
  {
    element: "red",
    description: "Extracts the red value from a color or pixel array.",
    code: "red(color)",
    insert: "red(${1:color})",
    syntax: [
      {
        parameter: "color: p5.Color|Number[]|String",
        description: "p5.Color object, color components, or CSS color",
      },
    ],
    return: {
      type: "Number",
      description: "the red value",
    },
  },
  {
    element: "saturation",
    description:
      "Extracts the saturation value from a color or pixel array. Saturation is scaled differently in HSB and HSL. This function will return the HSB saturation when supplied with an HSB color object (or when supplied with a pixel array while the color mode is HSB), but will default to the HSL saturation otherwise.",
    code: "saturation(color)",
    insert: "saturation(${1:color})",
    syntax: [
      {
        parameter: "color: p5.Color|Number[]|String",
        description: "p5.Color object, color components, or CSS color",
      },
    ],
    return: {
      type: "Number",
      description: "the saturation value",
    },
  },
  {
    element: "saturation",
    description:
      "Extracts the saturation value from a color or pixel array. Saturation is scaled differently in HSB and HSL. This function will return the HSB saturation when supplied with an HSB color object (or when supplied with a pixel array while the color mode is HSB), but will default to the HSL saturation otherwise.",
    code: "saturation(color)",
    insert: "saturation(${1:color})",
    syntax: [
      {
        parameter: "color: p5.Color|Number[]|String",
        description: "p5.Color object, color components, or CSS color",
      },
    ],
    return: {
      type: "Number",
      description: "the saturation value",
    },
  },
  {
    element: "p5.Color",
    description:
      "Each color stores the color mode and level maxes that was applied at the time of its construction. These are used to interpret the input arguments (at construction and later for that instance of color) and to format the output e.g. when saturation() is requested.",
    code: "new p5.Color()",
    insert: "new p5.Color()",
    syntax: [],
  },
  {
    element: "background",
    description:
      "The background() function sets the color used for the background of the p5.js canvas. The default background is transparent. This function is typically used within draw() to clear the display window at the beginning of each frame, but it can be used inside setup() to set the background on the first frame of animation or if the background need only be set once.",
    code: "background(color), background(colorstring, [a]), background(gray, [a]), background(v1, v2, v3, [a]), background(values), background(image, [a])",
    insert: "background(${1:color})",
    syntax: [
      {
        parameter: "color: p5.Color",
        description: "any value created by the color() function",
      },
      {
        parameter: "colorstring: String",
        description:
          "color string, possible formats include: integer rgb() or rgba(), percentage rgb() or rgba(), 3-digit hex, 6-digit hex",
      },
      {
        parameter: "a: Number",
        description:
          "opacity of the background relative to current color range (default is 0-255) (Optional)",
      },
      {
        parameter: "gray: Number",
        description: "specifies a value between white and black",
      },
      {
        parameter: "v1: Number",
        description: "red or hue value (depending on the current color mode)",
      },
      {
        parameter: "v2: Number",
        description:
          "green or saturation value (depending on the current color mode)",
      },
      {
        parameter: "v3: Number",
        description:
          "blue or brightness value (depending on the current color mode)",
      },
      {
        parameter: "values: Number[]",
        description:
          "an array containing the red, green, blue and alpha components of the color",
      },
      {
        parameter: "image: p5.Image",
        description:
          "image created with loadImage() or createImage(), to set as background (must be same size as the sketch window)",
      },
    ],
  },
  {
    element: "clear",
    description:
      "Clears the pixels within a buffer. This function only clears the canvas. It will not clear objects created by createX() methods such as createVideo() or createDiv(). Unlike the main graphics context, pixels in additional graphics areas created with createGraphics() can be entirely or partially transparent. This function clears everything to make all of the pixels 100% transparent.",
    code: "clear(r, g, b, a)",
    insert: "clear(${1:r}, ${2:g}, ${3:b}, ${4:a})",
    syntax: [
      {
        parameter: "r: Number",
        description: "normalized red val.",
      },
      {
        parameter: "g: Number",
        description: "normalized green val.",
      },
      {
        parameter: "b: Number",
        description: "normalized blue val.",
      },
      {
        parameter: "a: Number",
        description: "normalized alpha val.",
      },
    ],
  },
  {
    element: "colorMode",
    description:
      "colorMode() changes the way p5.js interprets color data. By default, the parameters for fill(), stroke(), background(), and color() are defined by values between 0 and 255 using the RGB color model. This is equivalent to setting colorMode(RGB, 255). Setting colorMode(HSB) lets you use the HSB system instead. By default, this is colorMode(HSB, 360, 100, 100, 1). You can also use HSL.",
    code: "colorMode(mode, [max]), colorMode(mode, max1, max2, max3, [maxA])",
    insert: "colorMode(${1:mode})",
    syntax: [
      {
        parameter: "mode: Constant",
        description:
          "either RGB, HSB or HSL, corresponding to Red/Green/Blue and Hue/Saturation/Brightness (or Lightness)",
      },
      {
        parameter: "max: Number",
        description: "range for all values (Optional)",
      },
      {
        parameter: "max1: Number",
        description:
          "range for the red or hue depending on the current color mode",
      },
      {
        parameter: "max2: Number",
        description:
          "range for the green or saturation depending on the current color mode",
      },
      {
        parameter: "max3: Number",
        description:
          "range for the blue or brightness/lightness depending on the current color mode",
      },
      {
        parameter: "maxA: Number",
        description: "range for the alpha (Optional)",
      },
    ],
  },
  {
    element: "fill",
    description:
      "Sets the color used to fill shapes. This color is either specified in terms of the RGB or HSB color depending on the current colorMode(). (The default color space is RGB, with each value in the range from 0 to 255). The alpha range by default is also 0 to 255. If a single string argument is provided, RGB, RGBA and Hex CSS color strings and all named color strings are supported. In this case, an alpha number value as a second argument is not supported, the RGBA form should be used.",
    code: "fill(v1, v2, v3, [alpha]), fill(value), fill(gray, [alpha]), fill(values), fill(color)",
    insert: "fill(${1:v1}, ${2:v2}, ${3:v3})",
    syntax: [
      {
        parameter: "v1: Number",
        description: "red or hue value relative to the current color range",
      },
      {
        parameter: "v2: Number",
        description:
          "green or saturation value relative to the current color range",
      },
      {
        parameter: "v3: Number",
        description:
          "blue or brightness value relative to the current color range",
      },
      {
        parameter: "alpha: Number",
        description: "Number: (Optional)",
      },
      {
        parameter: "value: String",
        description: "a color string",
      },
      {
        parameter: "gray: Number",
        description: "a gray value",
      },
      {
        parameter: "values: Number[]",
        description:
          "an array containing the red,green,blue & and alpha components of the color",
      },
      {
        parameter: "color: p5.Color",
        description: "the fill color",
      },
    ],
  },
  {
    element: "noFill",
    description:
      "Disables filling geometry. If both noStroke() and noFill() are called, nothing will be drawn to the screen.",
    code: "noFill()",
    insert: "noFill()",
    syntax: [],
  },
  {
    element: "noStroke",
    description:
      "Disables drawing the stroke (outline). If both noStroke() and noFill() are called, nothing will be drawn to the screen.",
    code: "noStroke()",
    insert: "noStroke()",
    syntax: [],
  },
  {
    element: "stroke",
    description:
      "Sets the color used to draw lines and borders around shapes. This color is either specified in terms of the RGB or HSB color depending on the current colorMode() (the default color space is RGB, with each value in the range from 0 to 255). The alpha range by default is also 0 to 255. If a single string argument is provided, RGB, RGBA and Hex CSS color strings and all named color strings are supported. In this case, an alpha number value as a second argument is not supported, the RGBA form should be used.",
    code: "stroke(v1, v2, v3, [alpha]), stroke(value), stroke(gray, [alpha]), stroke(values), stroke(color)",
    insert: "stroke(${1:v1}, ${2:v2}, ${3:v3})",
    syntax: [
      {
        parameter: "v1: Number",
        description: "red or hue value relative to the current color range",
      },
      {
        parameter: "v2: Number",
        description:
          "green or saturation value relative to the current color range",
      },
      {
        parameter: "v3: Number",
        description:
          "blue or brightness value relative to the current color range",
      },
      {
        parameter: "alpha: Number",
        description: "Number: (Optional)",
      },
      {
        parameter: "value: String",
        description: "a color string",
      },
      {
        parameter: "gray: Number",
        description: "a gray value",
      },
      {
        parameter: "values: Number[]",
        description:
          "an array containing the red,green,blue & and alpha components of the color",
      },
      {
        parameter: "color: p5.Color",
        description: "the stroke color",
      },
    ],
  },
  {
    element: "erase",
    description:
      "Disables drawing the stroke (outline). If both noStroke() and noFill() are called, nothing will be drawn to the screen.",
    code: "erase([strengthFill], [strengthStroke])",
    insert: "erase()",
    syntax: [
      {
        parameter: "strengthFill: Number",
        description:
          "A number (0-255) for the strength of erasing for a shape's fill. This will default to 255 when no argument is given, which is full strength. (Optional)",
      },
      {
        parameter: "strengthStroke: Number",
        description:
          "A number (0-255) for the strength of erasing for a shape's stroke. This will default to 255 when no argument is given, which is full strength. (Optional)",
      },
    ],
  },
  {
    element: "noErase",
    description:
      "Ends erasing that was started with erase(). The fill(), stroke(), and blendMode() settings will return to what they were prior to calling erase().",
    code: "noErase()",
    insert: "noErase()",
    syntax: [],
  },
  {
    element: "ellipseMode",
    description:
      "Modifies the location from which ellipses are drawn by changing the way in which parameters given to ellipse(), circle() and arc() are interpreted. The default mode is CENTER, in which the first two parameters are interpreted as the shape's center point's x and y coordinates respectively, while the third and fourth parameters are its width and height.",
    code: "ellipseMode(mode)",
    insert: "ellipseMode(${1:mode})",
    syntax: [
      {
        parameter: "mode: Constant",
        description: "either CENTER, RADIUS, CORNER, or CORNERS",
      },
    ],
  },
  {
    element: "noSmooth",
    description:
      "Draws all geometry with jagged (aliased) edges. Note that smooth() is active by default in 2D mode, so it is necessary to call noSmooth() to disable smoothing of geometry, images, and fonts. In 3D mode, noSmooth() is enabled by default, so it is necessary to call smooth() if you would like smooth (antialiased) edges on your geometry.",
    code: "noSmooth()",
    insert: "noSmooth()",
    syntax: [],
  },
  {
    element: "rectMode",
    description:
      "Modifies the location from which rectangles are drawn by changing the way in which parameters given to rect() are interpreted. The default mode is CORNER, which interprets the first two parameters as the upper-left corner of the shape, while the third and fourth parameters are its width and height.",
    code: "rectMode(mode)",
    insert: "rectMode(${1:mode})",
    syntax: [
      {
        parameter: "mode: Constant",
        description: "either CORNER, CORNERS, CENTER, or RADIUS",
      },
    ],
  },
  {
    element: "smooth",
    description:
      "Draws all geometry with smooth (anti-aliased) edges. smooth() will also improve image quality of resized images. Note that smooth() is active by default in 2D mode; noSmooth() can be used to disable smoothing of geometry, images, and fonts. In 3D mode, noSmooth() is enabled by default, so it is necessary to call smooth() if you would like smooth (antialiased) edges on your geometry.",
    code: "smooth()",
    insert: "smooth()",
    syntax: [],
  },
  {
    element: "strokeCap",
    description:
      "Sets the style for rendering line endings. These ends are either rounded, squared or extended, each of which specified with the corresponding parameters: ROUND, SQUARE and PROJECT. The default cap is ROUND. The parameter to this method must be written in ALL CAPS because they are predefined as constants in ALL CAPS and Javascript is a case-sensitive language.",
    code: "strokeCap(cap)",
    insert: "strokeCap(${1:cap})",
    syntax: [
      {
        parameter: "cap: Constant",
        description: "either ROUND, SQUARE or PROJECT",
      },
    ],
  },
  {
    element: "strokeJoin",
    description:
      "Sets the style of the joints which connect line segments. These joints are either mitered, beveled or rounded and specified with the corresponding parameters MITER, BEVEL and ROUND. The default joint is MITER. The parameter to this method must be written in ALL CAPS because they are predefined as constants in ALL CAPS and Javascript is a case-sensitive language.",
    code: "strokeJoin(join)",
    insert: "strokeJoin(${1:join})",
    syntax: [
      {
        parameter: "join: Constant",
        description: "either MITER, BEVEL, ROUND",
      },
    ],
  },
  {
    element: "strokeWeight",
    description:
      "Sets the width of the stroke used for lines, points and the border around shapes. All widths are set in units of pixels. Note that it is affected by any transformation or scaling that has been applied previously.",
    code: "strokeWeight(weight)",
    insert: "strokeWeight(${1:weight})",
    syntax: [
      {
        parameter: "weight: Number",
        description: "the weight of the stroke (in pixels)",
      },
    ],
  },
  {
    element: "loadModel",
    description:
      "Load a 3d model from an OBJ or STL file. loadModel() should be placed inside of preload(). This allows the model to load fully before the rest of your code is run.",
    code: "loadModel(path, normalize, [successCallback], [failureCallback], [fileType]), loadModel(path, [successCallback], [failureCallback], [fileType])",
    insert: "loadModel(${1:path}, ${2:normalize})",
    syntax: [
      {
        parameter: "path: String",
        description: "Path of the model to be loaded",
      },
      {
        parameter: "normalize: Boolean",
        description:
          "If true, scale the model to a standardized size when loading",
      },
      {
        parameter: "successCallback: function(p5.Geometry)",
        description:
          "Function to be called once the model is loaded. Will be passed the 3D model object. (Optional)",
      },
      {
        parameter: "failureCallback: function(Event)",
        description:
          "called with event error if the model fails to load. (Optional)",
      },
      {
        parameter: "fileType: String",
        description: "The file extension of the model (.stl, .obj). (Optional)",
      },
    ],
    return: {
      type: "p5.Geometry",
      description: "the p5.Geometry object",
    },
  },
  {
    element: "model",
    description: "Render a 3d model to the screen.",
    code: "model(model)",
    insert: "model(${1:model})",
    syntax: [
      {
        parameter: "model: p5.Geometry",
        description: "Loaded 3d model to be rendered",
      },
    ],
  },
  {
    element: "textOutput",
    description:
      "Creates a screenreader accessible output that describes the shapes present on the canvas. The general description of the canvas includes canvas size, canvas color, and number of elements in the canvas.",
    code: "textOutput([display])",
    insert: "textOutput()",
    syntax: [
      {
        parameter: "display: Constant",
        description: "either LABEL or FALLBACK (Optional)",
      },
    ],
  },
  {
    element: "gridOutput",
    description:
      "Lays out the content of the canvas in the form of a grid (html table) based on the spatial location of each shape. A brief description of the canvas is available before the table output. This description includes: color of the background, size of the canvas, number of objects, and object types.",
    code: "gridOutput([display])",
    insert: "gridOutput()",
    syntax: [
      {
        parameter: "display: Constant",
        description: "either LABEL or FALLBACK (Optional)",
      },
    ],
  },
  {
    element: "print",
    description:
      "This function writes to the console area of your browser. This function is often helpful for looking at the data a program is producing. This function creates a new line of text for each call to the function.",
    code: "print(contents)",
    insert: "print(${1:contents})",
    syntax: [
      {
        parameter: "contents: Any",
        description:
          "combination of Number, String, Object, Boolean, Array to print",
      },
    ],
  },
  {
    element: "frameCount",
    description:
      "The system variable frameCount contains the number of frames that have been displayed since the program started. ",
    code: "frameCount",
    insert: "frameCount",
    syntax: [],
  },
  {
    element: "deltaTime",
    description:
      "The system variable deltaTime contains the time difference between the beginning of the previous frame and the beginning of the current frame in milliseconds.",
    code: "deltaTime",
    insert: "deltaTime",
    syntax: [],
  },
  {
    element: "focused",
    description:
      "Confirms if the window a p5.js program is focused, meaning that the sketch will accept mouse or keyboard input. This variable is true if the window is focused and false if not.",
    code: "focused",
    insert: "focused",
    syntax: [],
  },
  {
    element: "cursor",
    description:
      "Sets the cursor to a predefined symbol or an image, or makes it visible if already hidden.",
    code: "cursor(type, [x], [y])",
    insert: "cursor(${1:type})",
    syntax: [
      {
        parameter: "type: String|Constant",
        description:
          "Built-In: either ARROW, CROSS, HAND, MOVE, TEXT and WAIT Native CSS properties: 'grab', 'progress', 'cell' etc. External: path for cursor's images",
      },
      {
        parameter: "x: Number",
        description:
          "the horizontal active spot of the cursor (must be less than 32) (Optional)",
      },
      {
        parameter: "y: Number",
        description:
          "the vertical active spot of the cursor (must be less than 32) (Optional)",
      },
    ],
  },
  {
    element: "frameRate",
    description:
      "Specifies the number of frames to be displayed every second. Setting the frame rate within setup() is recommended.",
    code: "frameRate(fps), frameRate()",
    insert: "frameRate(${1:fps})",
    syntax: [
      {
        parameter: "fps: Number",
        description: "number of frames to be displayed every second",
      },
    ],
  },
  {
    element: "noCursor",
    description: "Hides the cursor from view.",
    code: "noCursor()",
    insert: "noCursor()",
    syntax: [],
  },
  {
    element: "displayWidth",
    description:
      "System variable that stores the width of the screen display according to the default pixelDensity. ",
    code: "displayWidth",
    insert: "displayWidth",
    syntax: [],
  },
  {
    element: "displayHeight",
    description:
      "System variable that stores the height of the screen display according to the default pixelDensity.",
    code: "displayHeight",
    insert: "displayHeight",
    syntax: [],
  },
  {
    element: "windowWidth",
    description:
      "System variable that stores the width of the inner window, it maps to window.innerWidth.",
    code: "windowWidth",
    insert: "windowWidth",
    syntax: [],
  },
  {
    element: "windowHeight",
    description:
      "System variable that stores the height of the inner window, it maps to window.innerHeight.",
    code: "windowHeight",
    insert: "windowHeight",
    syntax: [],
  },
  {
    element: "windowResized",
    description:
      "The windowResized() function is called once every time the browser window is resized. This is a good place to resize the canvas or do any other adjustments to accommodate the new window size.",
    code: "windowResized([event])",
    insert: "windowResized()",
    syntax: [
      {
        parameter: "event: Object",
        description: "Object: optional Event callback argument. (Optional)",
      },
    ],
  },
  {
    element: "width",
    description:
      "System variable that stores the width of the drawing canvas. This value is set by the first parameter of the createCanvas() function.",
    code: "width",
    insert: "width",
    syntax: [],
  },
  {
    element: "height",
    description:
      "System variable that stores the height of the drawing canvas. This value is set by the second parameter of the createCanvas() function.",
    code: "height",
    insert: "height",
    syntax: [],
  },
  {
    element: "fullscreen",
    description:
      "If argument is given, sets the sketch to fullscreen or not based on the value of the argument. If no argument is given, returns the current fullscreen state.",
    code: "fullscreen([val])",
    insert: "fullscreen()",
    syntax: [
      {
        parameter: "val: Boolean",
        description:
          "whether the sketch should be in fullscreen mode or not (Optional)",
      },
    ],
    return: {
      type: "Boolean",
      description: "current fullscreen state",
    },
  },
  {
    element: "pixelDensity",
    description:
      "Sets the pixel scaling for high pixel density displays. By default pixel density is set to match display density, call pixelDensity(1) to turn this off.",
    code: "pixelDensity(val), pixelDensity()",
    insert: "pixelDensity(${1:val})",
    syntax: [
      {
        parameter: "val: Number",
        description: "whether or how much the sketch should scale",
      },
    ],
  },
  {
    element: "displayDensity",
    description:
      "Returns the pixel density of the current display the sketch is running on.",
    code: "displayDensity()",
    insert: "displayDensity()",
    syntax: [],
    return: {
      type: "Number",
      description: "current pixel density of the display",
    },
  },
  {
    element: "getURL",
    description: "Gets the current URL.",
    code: "getURL()",
    insert: "getURL()",
    syntax: [],
    return: {
      type: "String",
      description: "url",
    },
  },
  {
    element: "getURLPath",
    description: "Gets the current URL path as an array.",
    code: "getURLPath()",
    insert: "getURLPath()",
    syntax: [],
    return: {
      type: "String[]",
      description: "path components",
    },
  },
  {
    element: "getURLParams",
    description: "Gets the current URL params as an Object.",
    code: "getURLParams()",
    insert: "getURLParams()",
    syntax: [],
    return: {
      type: "Object",
      description: "URL params",
    },
  },
  {
    element: "arc",
    description:
      "Draw an arc to the screen. If called with only x, y, w, h, start and stop, the arc will be drawn and filled as an open pie segment. If a mode parameter is provided, the arc will be filled like an open semi-circle (OPEN), a closed semi-circle (CHORD), or as a closed pie segment (PIE).",
    code: "arc(x, y, w, h, start, stop, [mode], [detail])",
    insert: "arc(${1:x}, ${2:y}, ${3:w}, ${4:h}, ${5:start}, ${6:stop})",
    syntax: [
      {
        parameter: "x: Number",
        description: "x-coordinate of the arc's ellipse",
      },
      {
        parameter: "y: Number",
        description: "y-coordinate of the arc's ellipse",
      },
      {
        parameter: "w: Number",
        description: "width of the arc's ellipse by default",
      },
      {
        parameter: "h: Number",
        description: "height of the arc's ellipse by default",
      },
      {
        parameter: "start: Number",
        description: "angle to start the arc, specified in radians",
      },
      {
        parameter: "stop: Number",
        description: "angle to stop the arc, specified in radians",
      },
      {
        parameter: "mode: Constant",
        description:
          "optional parameter to determine the way of drawing the arc. either CHORD, PIE or OPEN (Optional)",
      },
      {
        parameter: "detail: Integer",
        description:
          "optional parameter for WebGL mode only. This is to specify the number of vertices that makes up the perimeter of the arc. Default value is 25. Won't draw a stroke for a detail of more than 50. (Optional)",
      },
    ],
  },
  {
    element: "ellipse",
    description:
      "Draws an ellipse (oval) to the screen. By default, the first two parameters set the location of the center of the ellipse, and the third and fourth parameters set the shape's width and height. If no height is specified, the value of width is used for both the width and height. If a negative height or width is specified, the absolute value is taken.",
    code: "ellipse(x, y, w, [h]), ellipse(x, y, w, h, [detail])",
    insert: "ellipse(${1:x}, ${2:y}, ${3:w}, ${4:h})",
    syntax: [
      {
        parameter: "x: Number",
        description: "x-coordinate of the center of ellipse",
      },
      {
        parameter: "y: Number",
        description: "y-coordinate of the center of ellipse",
      },
      {
        parameter: "w: Number",
        description: "width of the ellipse",
      },
      {
        parameter: "h: Number",
        description: "height of the ellipse",
      },
      {
        parameter: "detail: Integer",
        description:
          "optional parameter for WebGL mode only. This is to specify the number of vertices that makes up the perimeter of the arc. Default value is 25. Won't draw a stroke for a detail of more than 50. (Optional)",
      },
    ],
  },
  {
    element: "circle",
    description:
      "Draws a circle to the screen. A circle is a simple closed shape. It is the set of all points in a plane that are at a given distance from a given point, the centre. This function is a special case of the ellipse() function, where the width and height of the ellipse are the same.",
    code: "circle(x, y, d)",
    insert: "circle(${1:x}, ${2:y}, ${3:d})",
    syntax: [
      {
        parameter: "x: Number",
        description: "x-coordinate of the center of circle",
      },
      {
        parameter: "y: Number",
        description: "y-coordinate of the center of circle",
      },
      {
        parameter: "d: Number",
        description: "diameter of the circle",
      },
    ],
  },
  {
    element: "line",
    description:
      "Draws a line (a direct path between two points) to the screen. If called with only 4 parameters, it will draw a line in 2D with a default width of 1 pixel. This width can be modified by using the strokeWeight() function. A line cannot be filled, therefore the fill() function will not affect the color of a line. So to color a line, use the stroke() function.",
    code: "line(x1, y1, x2, y2), line(x1, y1, z1, x2, y2, z2)",
    insert: "line(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})",
    syntax: [
      {
        parameter: "x1: Number",
        description: "the x-coordinate of the first point",
      },
      {
        parameter: "y1: Number",
        description: "the y-coordinate of the first point",
      },
      {
        parameter: "x2: Number",
        description: "the x-coordinate of the second point",
      },
      {
        parameter: "y2: Number",
        description: "the y-coordinate of the second point",
      },
      {
        parameter: "z1: Number",
        description: "the x-coordinate of the first point",
      },
      {
        parameter: "z2: Number",
        description: "the z-coordinate of the second point",
      },
    ],
  },
  {
    element: "point",
    description:
      "Draws a point, a coordinate in space at the dimension of one pixel. The first parameter is the horizontal value for the point, the second param is the vertical value for the point. The color of the point is changed with the stroke() function. The size of the point can be changed with the strokeWeight() function.",
    code: "point(x, y, [z]), point(coordinate_vector)",
    insert: "point(${1:x}, ${2:y})",
    syntax: [
      {
        parameter: "x: Number",
        description: "the x-coordinate",
      },
      {
        parameter: "y: Number",
        description: "the y-coordinate",
      },
      {
        parameter: "z: Number",
        description: "the z-coordinate (for WebGL mode) (Optional)",
      },
      {
        parameter: "coordinate_vector: p5.Vector",
        description: "the coordinate vector",
      },
    ],
  },
  {
    element: "quad",
    description:
      "Draws a quad on the canvas. A quad is a quadrilateral, a four sided polygon. It is similar to a rectangle, but the angles between its edges are not constrained to ninety degrees. The first pair of parameters (x1,y1) sets the first vertex and the subsequent pairs should proceed clockwise or counter-clockwise around the defined shape. z-arguments only work when quad() is used in WEBGL mode.",
    code: "quad(x1, y1, x2, y2, x3, y3, x4, y4, [detailX], [detailY]), quad(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4, [detailX], [detailY])",
    insert:
      "quad(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2}, ${5:x3}, ${6:y3}, ${7:x4}, ${8:y4})",
    syntax: [
      {
        parameter: "x1: Number",
        description: "the x-coordinate of the first point",
      },
      {
        parameter: "y1: Number",
        description: "the y-coordinate of the first point",
      },
      {
        parameter: "x2: Number",
        description: "the x-coordinate of the second point",
      },
      {
        parameter: "y2: Number",
        description: "the y-coordinate of the second point",
      },
      {
        parameter: "x3: Number",
        description: "the x-coordinate of the third point",
      },
      {
        parameter: "y3: Number",
        description: "the y-coordinate of the third point",
      },
      {
        parameter: "x4: Number",
        description: "the x-coordinate of the fourth point",
      },
      {
        parameter: "y4: Number",
        description: "the y-coordinate of the fourth point",
      },
      {
        parameter: "detailX: Integer",
        description: "number of segments in the x-direction (Optional)",
      },
      {
        parameter: "detailY: Integer",
        description: "number of segments in the y-direction (Optional)",
      },
      {
        parameter: "z1: Number",
        description: "the z-coordinate of the first point",
      },
      {
        parameter: "z2: Number",
        description: "the z-coordinate of the second point",
      },
      {
        parameter: "z3: Number",
        description: "the z-coordinate of the third point",
      },
      {
        parameter: "z4: Number",
        description: "the z-coordinate of the fourth point",
      },
    ],
  },
  {
    element: "rect",
    description:
      "Draws a rectangle on the canvas. A rectangle is a four-sided closed shape with every angle at ninety degrees. By default, the first two parameters set the location of the upper-left corner, the third sets the width, and the fourth sets the height. The way these parameters are interpreted, may be changed with the rectMode() function.",
    code: "rect(x, y, w, [h], [tl], [tr], [br], [bl]), rect(x, y, w, h, [detailX], [detailY])",
    insert: "rect(${1:x}, ${2:y}, ${3:w})",
    syntax: [
      {
        parameter: "x: Number",
        description: "x-coordinate of the rectangle",
      },
      {
        parameter: "y: Number",
        description: "y-coordinate of the rectangle",
      },
      {
        parameter: "w: Number",
        description: "width of the rectangle",
      },
      {
        parameter: "tl: Number",
        description: "height of the rectangle. (Optional)",
      },
      {
        parameter: "tr: Number",
        description: "optional radius of top-right corner. (Optional)",
      },
      {
        parameter: "br: Number",
        description: "optional radius of bottom-right corner. (Optional)",
      },
      {
        parameter: "bl: Number",
        description: "optional radius of bottom-left corner. (Optional)",
      },
      {
        parameter: "detailX: Integer",
        description: "number of segments in the x-direction (Optional)",
      },
      {
        parameter: "detailY: Integer",
        description: "number of segments in the y-direction (Optional)",
      },
    ],
  },
  {
    element: "square",
    description:
      "Draws a square to the screen. A square is a four-sided shape with every angle at ninety degrees, and equal side size. This function is a special case of the rect() function, where the width and height are the same, and the parameter is called s for side size. By default, the first two parameters set the location of the upper-left corner, the third sets the side size of the square.",
    code: "square(x, y, s, [tl], [tr], [br], [bl])",
    insert: "square(${1:x}, ${2:y}, ${3:s})",
    syntax: [
      {
        parameter: "x: Number",
        description: "x-coordinate of the square",
      },
      {
        parameter: "y: Number",
        description: "y-coordinate of the square",
      },
      {
        parameter: "s: Number",
        description: "side size of the square",
      },
      {
        parameter: "tl: Number",
        description: "height of the rectangle. (Optional)",
      },
      {
        parameter: "tr: Number",
        description: "optional radius of top-right corner. (Optional)",
      },
      {
        parameter: "br: Number",
        description: "optional radius of bottom-right corner. (Optional)",
      },
      {
        parameter: "bl: Number",
        description: "optional radius of bottom-left corner. (Optional)",
      },
    ],
  },
  {
    element: "triangle",
    description:
      "Draws a triangle to the canvas. A triangle is a plane created by connecting three points. The first two arguments specify the first point, the middle two arguments specify the second point, and the last two arguments specify the third point.",
    code: "triangle(x1, y1, x2, y2, x3, y3)",
    insert: "triangle(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2}, ${5:x3}, ${6:y3})",
    syntax: [
      {
        parameter: "x1: Number",
        description: "the x-coordinate of the first point",
      },
      {
        parameter: "y1: Number",
        description: "the y-coordinate of the first point",
      },
      {
        parameter: "x2: Number",
        description: "the x-coordinate of the second point",
      },
      {
        parameter: "y2: Number",
        description: "the y-coordinate of the second point",
      },
      {
        parameter: "x3: Number",
        description: "the x-coordinate of the third point",
      },
      {
        parameter: "y3: Number",
        description: "the y-coordinate of the third point",
      },
    ],
  },
  {
    element: "bezier",
    description:
      "Draws a cubic Bezier curve on the screen. These curves are defined by a series of anchor and control points. The first two parameters specify the first anchor point and the last two parameters specify the other anchor point, which become the first and last points on the curve. The middle parameters specify the two control points which define the shape of the curve. Approximately speaking, control points 'pull' the curve towards them.",
    code: "bezier(x1, y1, x2, y2, x3, y3, x4, y4), bezier(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4)",
    insert:
      "bezier(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2}, ${5:x3}, ${6:y3}, ${7:x4}, ${8:y4})",
    syntax: [
      {
        parameter: "x1: Number",
        description: "the x-coordinate of the first anchor point",
      },
      {
        parameter: "y1: Number",
        description: "the y-coordinate of the first anchor point",
      },
      {
        parameter: "x2: Number",
        description: "the x-coordinate of the first control point",
      },
      {
        parameter: "y2: Number",
        description: "the y-coordinate of the first control point",
      },
      {
        parameter: "x3: Number",
        description: "the x-coordinate of the second control point",
      },
      {
        parameter: "y3: Number",
        description: "the y-coordinate of the second control point",
      },
      {
        parameter: "x4: Number",
        description: "the x-coordinate of the second anchor point",
      },
      {
        parameter: "y4: Number",
        description: "the y-coordinate of the second anchor point",
      },
      {
        parameter: "z1: Number",
        description: "the z-coordinate of the first anchor point",
      },
      {
        parameter: "z2: Number",
        description: "the z-coordinate of the first control point",
      },
      {
        parameter: "z3: Number",
        description: "the z-coordinate of the second control point",
      },
      {
        parameter: "z4: Number",
        description: "the z-coordinate of the second anchor point",
      },
    ],
  },
  {
    element: "bezierDetail",
    description:
      "Sets the resolution at which Bezier's curve is displayed. The default value is 20. Note, This function is only useful when using the WEBGL renderer as the default canvas renderer does not use this information.",
    code: "bezierDetail(detail)",
    insert: "bezierDetail(${1:detail})",
    syntax: [
      {
        parameter: "detail: Number",
        description: "resolution of the curves",
      },
    ],
  },
  {
    element: "bezierPoint",
    description:
      "Given the x or y co-ordinate values of control and anchor points of a bezier curve, it evaluates the x or y coordinate of the bezier at position t. The parameters a and d are the x or y coordinates of first and last points on the curve while b and c are of the control points.The final parameter t is the position of the resultant point which is given between 0 and 1. This can be done once with the x coordinates and a second time with the y coordinates to get the location of a bezier curve at t.",
    code: "bezierPoint(a, b, c, d, t)",
    insert: "bezierPoint(${1:a}, ${2:b}, ${3:c}, ${4:d}, ${5:t})",
    syntax: [
      {
        parameter: "a: Number",
        description: "coordinate of first point on the curve",
      },
      {
        parameter: "b: Number",
        description: "coordinate of first control point",
      },
      {
        parameter: "c: Number",
        description: "coordinate of second control point",
      },
      {
        parameter: "d: Number",
        description: "coordinate of second point on the curve",
      },
      {
        parameter: "t: Number",
        description: "value between 0 and 1",
      },
    ],
    return: {
      type: "Number",
      description: "the value of the Bezier at position t",
    },
  },
  {
    element: "bezierTangent",
    description:
      "Evaluates the tangent to the Bezier at position t for points a, b, c, d. The parameters a and d are the first and last points on the curve, and b and c are the control points. The final parameter t varies between 0 and 1.",
    code: "bezierTangent(a, b, c, d, t)",
    insert: "bezierTangent(${1:a}, ${2:b}, ${3:c}, ${4:d}, ${5:t})",
    syntax: [
      {
        parameter: "a: Number",
        description: "coordinate of first point on the curve",
      },
      {
        parameter: "b: Number",
        description: "coordinate of first control point",
      },
      {
        parameter: "c: Number",
        description: "coordinate of second control point",
      },
      {
        parameter: "d: Number",
        description: "coordinate of second point on the curve",
      },
      {
        parameter: "t: Number",
        description: "value between 0 and 1",
      },
    ],
    return: {
      type: "Number",
      description: "the tangent at position t",
    },
  },
  {
    element: "curve",
    description:
      "Draws a curved line on the screen between two points, given as the middle four parameters. The first two parameters are a control point, as if the curve came from this point even though it's not drawn. The last two parameters similarly describe the other control point.",
    code: "curve(x1, y1, x2, y2, x3, y3, x4, y4), curve(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4)",
    insert:
      "curve(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2}, ${5:x3}, ${6:y3}, ${7:x4}, ${8:y4})",
    syntax: [
      {
        parameter: "x1: Number",
        description: "the x-coordinate for the beginning control point",
      },
      {
        parameter: "y1: Number",
        description: "the y-coordinate for the beginning control point",
      },
      {
        parameter: "x2: Number",
        description: "the x-coordinate for the first point",
      },
      {
        parameter: "y2: Number",
        description: "the y-coordinate for the first point",
      },
      {
        parameter: "x3: Number",
        description: "the x-coordinate for the second point",
      },
      {
        parameter: "y3: Number",
        description: "the y-coordinate for the second point",
      },
      {
        parameter: "x4: Number",
        description: "the x-coordinate for the ending control point",
      },
      {
        parameter: "y4: Number",
        description: "the y-coordinate for the ending control point",
      },
      {
        parameter: "z1: Number",
        description: "the z-coordinate for the beginning control point",
      },
      {
        parameter: "z2: Number",
        description: "the z-coordinate for the first point",
      },
      {
        parameter: "z3: Number",
        description: "the z-coordinate for the second point",
      },
      {
        parameter: "z4: Number",
        description: "the z-coordinate for the ending control point",
      },
    ],
  },
  {
    element: "curveDetail",
    description:
      "Sets the resolution at which curves display. The default value is 20 while the minimum value is 3. This function is only useful when using the WEBGL renderer as the default canvas renderer does not use this information.",
    code: "curveDetail(resolution)",
    insert: "curveDetail(${1:resolution})",
    syntax: [
      {
        parameter: "resolution: Number",
        description: "resolution of the curves",
      },
    ],
  },
  {
    element: "curveTightness",
    description:
      "Modifies the quality of forms created with curve() and curveVertex().The parameter tightness determines how the curve fits to the vertex points. The value 0.0 is the default value for tightness (this value defines the curves to be Catmull-Rom splines) and the value 1.0 connects all the points with straight lines. Values within the range -5.0 and 5.0 will deform the curves but will leave them recognizable and as values increase in magnitude, they will continue to deform.",
    code: "curveTightness(amount)",
    insert: "curveTightness(${1:amount})",
    syntax: [
      {
        parameter: "amount: Number",
        description: "amount of deformation from the original vertices",
      },
    ],
  },
  {
    element: "curvePoint",
    description:
      "Evaluates the curve at position t for points a, b, c, d. The parameter t varies between 0 and 1, a and d are control points of the curve, and b and c are the start and end points of the curve. This can be done once with the x coordinates and a second time with the y coordinates to get the location of a curve at t.",
    code: "curvePoint(a, b, c, d, t)",
    insert: "curvePoint(${1:a}, ${2:b}, ${3:c}, ${4:d}, ${5:t})",
    syntax: [
      {
        parameter: "a: Number",
        description: "coordinate of first control point on the curve",
      },
      {
        parameter: "b: Number",
        description: "coordinate of first point",
      },
      {
        parameter: "c: Number",
        description: "coordinate of second point",
      },
      {
        parameter: "d: Number",
        description: "coordinate of second control point",
      },
      {
        parameter: "t: Number",
        description: "value between 0 and 1",
      },
    ],
    return: {
      type: "Number",
      description: "bezier value at position t",
    },
  },
  {
    element: "curveTangent",
    description:
      "Evaluates the tangent to the curve at position t for points a, b, c, d. The parameter t varies between 0 and 1, a and d are points on the curve, and b and c are the control points.",
    code: "curveTangent(a, b, c, d, t)",
    insert: "curveTangent(${1:a}, ${2:b}, ${3:c}, ${4:d}, ${5:t})",
    syntax: [
      {
        parameter: "a: Number",
        description: "coordinate of first control point",
      },
      {
        parameter: "b: Number",
        description: "coordinate of first point on the curve",
      },
      {
        parameter: "c: Number",
        description: "coordinate of second point on the curve",
      },
      {
        parameter: "d: Number",
        description: "coordinate of second control point",
      },
      {
        parameter: "t: Number",
        description: "value between 0 and 1",
      },
    ],
    return: {
      type: "Number",
      description: "the tangent at position t",
    },
  },
  {
    element: "beginContour",
    description:
      "Use the beginContour() and endContour() functions to create negative shapes within shapes such as the center of the letter 'O'. beginContour() begins recording vertices for the shape and endContour() stops recording. The vertices that define a negative shape must 'wind' in the opposite direction from the exterior shape. First draw vertices for the exterior clockwise order, then for internal shapes, draw vertices shape in counter-clockwise.",
    code: "beginContour()",
    insert: "beginContour()",
    syntax: [],
  },
  {
    element: "beginShape",
    description:
      "Using the beginShape() and endShape() functions allow creating more complex forms. beginShape() begins recording vertices for a shape and endShape() stops recording. The value of the kind parameter tells it which types of shapes to create from the provided vertices. With no mode specified, the shape can be any irregular polygon.",
    code: "beginShape([kind])",
    insert: "beginShape()",
    syntax: [
      {
        parameter: "kind: Constant",
        description:
          "either POINTS, LINES, TRIANGLES, TRIANGLE_FAN TRIANGLE_STRIP, QUADS, QUAD_STRIP or TESS (Optional)",
      },
    ],
  },
  {
    element: "bezierVertex",
    description:
      "Specifies vertex coordinates for Bezier curves. Each call to bezierVertex() defines the position of two control points and one anchor point of a Bezier curve, adding a new segment to a line or shape. For WebGL mode bezierVertex() can be used in 2D as well as 3D mode. 2D mode expects 6 parameters, while 3D mode expects 9 parameters (including z coordinates). The first time bezierVertex() is used within a beginShape() call, it must be prefaced with a call to vertex() to set the first anchor point.",
    code: "bezierVertex(x2, y2, x3, y3, x4, y4), bezierVertex(x2, y2, z2, x3, y3, z3, x4, y4, z4)",
    insert:
      "bezierVertex(${1:x2}, ${2:y2}, ${3:x3}, ${4:y3}, ${5:x4}, ${6:y4})",
    syntax: [
      {
        parameter: "x2: Number",
        description: "the x-coordinate for the first control point",
      },
      {
        parameter: "y2: Number",
        description: "the y-coordinate for the first control point",
      },
      {
        parameter: "x3: Number",
        description: "the x-coordinate for the second control point",
      },
      {
        parameter: "y3: Number",
        description: "the y-coordinate for the second control point",
      },
      {
        parameter: "x4: Number",
        description: "the x-coordinate for the anchor point",
      },
      {
        parameter: "y4: Number",
        description: "the y-coordinate for the anchor point",
      },
      {
        parameter: "z2: Number",
        description:
          "the z-coordinate for the first control point (for WebGL mode)",
      },
      {
        parameter: "z3: Number",
        description:
          "the z-coordinate for the second control point (for WebGL mode)",
      },
      {
        parameter: "z4: Number",
        description:
          "the z-coordinate for the second anchor point (for WebGL mode)",
      },
    ],
  },
  {
    element: "curveVertex",
    description:
      "Specifies vertex coordinates for Bezier curves. Each call to bezierVertex() defines the position of two control points and one anchor point of a Bezier curve, adding a new segment to a line or shape. For WebGL mode bezierVertex() can be used in 2D as well as 3D mode. 2D mode expects 6 parameters, while 3D mode expects 9 parameters (including z coordinates). The first time bezierVertex() is used within a beginShape() call, it must be prefaced with a call to vertex() to set the first anchor point.",
    code: "curveVertex(x, y), curveVertex(x, y, [z])",
    insert: "curveVertex(${1:x}, ${2:y})",
    syntax: [
      {
        parameter: "x: Number",
        description: "the x-coordinate of the vertex",
      },
      {
        parameter: "y: Number",
        description: "the y-coordinate of the vertex",
      },
      {
        parameter: "z: Number",
        description:
          "the z-coordinate of the vertex (for WebGL mode) (Optional)",
      },
    ],
  },
  {
    element: "endContour",
    description:
      "Use the beginContour() and endContour() functions to create negative shapes within shapes such as the center of the letter 'O'. beginContour() begins recording vertices for the shape and endContour() stops recording. The vertices that define a negative shape must 'wind' in the opposite direction from the exterior shape. First draw vertices for the exterior clockwise order, then for internal shapes, draw vertices shape in counter-clockwise.",
    code: "endContour()",
    insert: "endContour()",
    syntax: [],
  },
  {
    element: "endShape",
    description:
      "The endShape() function is the companion to beginShape() and may only be called after beginShape(). When endShape() is called, all of image data defined since the previous call to beginShape() is written into the image buffer. The constant CLOSE as the value for the MODE parameter to close the shape (to connect the beginning and the end).",
    code: "endShape([mode])",
    insert: "endShape()",
    syntax: [
      {
        parameter: "mode: Constant",
        description: "use CLOSE to close the shape (Optional)",
      },
    ],
  },
  {
    element: "quadraticVertex",
    description:
      "Specifies vertex coordinates for quadratic Bezier curves. Each call to quadraticVertex() defines the position of one control points and one anchor point of a Bezier curve, adding a new segment to a line or shape. The first time quadraticVertex() is used within a beginShape() call, it must be prefaced with a call to vertex() to set the first anchor point. For WebGL mode quadraticVertex() can be used in 2D as well as 3D mode.",
    code: "quadraticVertex(cx, cy, x3, y3), quadraticVertex(cx, cy, cz, x3, y3, z3)",
    insert: "quadraticVertex(${1:cx}, ${2:cy}, ${3:x3}, ${4:y3})",
    syntax: [
      {
        parameter: "cx: Number",
        description: "the x-coordinate for the control point",
      },
      {
        parameter: "cy: Number",
        description: "the y-coordinate for the control point",
      },
      {
        parameter: "x3: Number",
        description: "the x-coordinate for the anchor point",
      },
      {
        parameter: "y3: Number",
        description: "the y-coordinate for the anchor point",
      },
      {
        parameter: "cz: Number",
        description: "the z-coordinate for the control point (for WebGL mode)",
      },
      {
        parameter: "z3: Number",
        description: "the z-coordinate for the anchor point (for WebGL mode)",
      },
    ],
  },
  {
    element: "vertex",
    description:
      "All shapes are constructed by connecting a series of vertices. vertex() is used to specify the vertex coordinates for points, lines, triangles, quads, and polygons. It is used exclusively within the beginShape() and endShape() functions.",
    code: "vertex(x, y), vertex(x, y, z), vertex(x, y, [z], u, v)",
    insert: "vertex(${1:x}, ${2:y})",
    syntax: [
      {
        parameter: "x: Number",
        description: "the x-coordinate of the vertex",
      },
      {
        parameter: "y: Number",
        description: "the y-coordinate of the vertex",
      },
      {
        parameter: "z: Number",
        description:
          "the z-coordinate of the vertex. Defaults to 0 if not specified.",
      },
      {
        parameter: "u: Number",
        description: "the vertex's texture u-coordinate",
      },
      {
        parameter: "v: Number",
        description: "the vertex's texture v-coordinate",
      },
    ],
  },
  {
    element: "normal",
    description:
      "Sets the 3d vertex normal to use for subsequent vertices drawn with vertex(). A normal is a vector that is generally nearly perpendicular to a shape's surface which controls how much light will be reflected from that part of the surface.",
    code: "normal(vector), normal(x, y, z)",
    insert: "normal(${1:vector})",
    syntax: [
      {
        parameter: "vector: Vector",
        description: "A p5.Vector representing the vertex normal.",
      },
      {
        parameter: "x: Number",
        description: "The x component of the vertex normal.",
      },
      {
        parameter: "y: Number",
        description: "The y component of the vertex normal.",
      },
      {
        parameter: "z: Number",
        description: "The z component of the vertex normal.",
      },
    ],
  },
  {
    element: "plane",
    description: "Draw a plane with given a width and height",
    code: "plane([width], [height], [detailX], [detailY])",
    insert: "plane()",
    syntax: [
      {
        parameter: "width: Number",
        description: "width of the plane (Optional)",
      },
      {
        parameter: "height: Number",
        description: "height of the plane (Optional)",
      },
      {
        parameter: "detailX: Integer",
        description:
          "Optional number of triangle subdivisions in x-dimension (Optional)",
      },
      {
        parameter: "detailY: Integer",
        description:
          "Optional number of triangle subdivisions in y-dimension (Optional)",
      },
    ],
  },
  {
    element: "box",
    description: "Draw a box with given width, height and depth",
    code: "box([width], [Height], [depth], [detailX], [detailY])",
    insert: "box()",
    syntax: [
      {
        parameter: "width: Number",
        description: "width of the box (Optional)",
      },
      {
        parameter: "height: Number",
        description: "height of the box (Optional)",
      },
      {
        parameter: "depth: Number",
        description: "depth of the box (Optional)",
      },
      {
        parameter: "detailX: Integer",
        description:
          "Optional number of triangle subdivisions in x-dimension (Optional)",
      },
      {
        parameter: "detailY: Integer",
        description:
          "Optional number of triangle subdivisions in y-dimension (Optional)",
      },
    ],
  },
  {
    element: "sphere",
    description:
      "Draw a sphere with given radius. DetailX and detailY determines the number of subdivisions in the x-dimension and the y-dimension of a sphere. More subdivisions make the sphere seem smoother. The recommended maximum values are both 24.",
    code: "sphere([radius], [detailX], [detailY])",
    insert: "sphere()",
    syntax: [
      {
        parameter: "radius: Number",
        description: "radius of circle (Optional)",
      },
      {
        parameter: "detailX: Integer",
        description:
          "Optional number of subdivisions in x-dimension (Optional)",
      },
      {
        parameter: "detailY: Integer",
        description:
          "Optional number of subdivisions in y-dimension (Optional)",
      },
    ],
  },
  {
    element: "cylinder",
    description:
      "Draw a cylinder with given radius and height. DetailX and detailY determines the number of subdivisions in the x-dimension and the y-dimension of a cylinder. More subdivisions make the cylinder seem smoother. The recommended maximum value for detailX is 24.",
    code: "cylinder([radius], [height], [detailX], [detailY], [bottomCap], [topCap])",
    insert: "cylinder()",
    syntax: [
      {
        parameter: "radius: Number",
        description: "radius of surface (Optional)",
      },
      {
        parameter: "height: Number",
        description: "height of the cylinder (Optional)",
      },
      {
        parameter: "detailX: Integer",
        description:
          "Optional number of subdivisions in x-dimension; default is 24 (Optional)",
      },
      {
        parameter: "detailY: Integer",
        description:
          "Optional number of subdivisions in y-dimension; default is 1 (Optional)",
      },
      {
        parameter: "bottomCap: Boolean",
        description: "whether to draw the bottom of the cylinder (Optional)",
      },
      {
        parameter: "topCap: Boolean",
        description: "whether to draw the top of the cylinder (Optional)",
      },
    ],
  },
  {
    element: "cone",
    description:
      "Draw a cone with given radius and height. DetailX and detailY determine the number of subdivisions in the x-dimension and the y-dimension of a cone. More subdivisions make the cone seem smoother. The recommended maximum value for detailX is 24.",
    code: "cone([radius], [height], [detailX], [detailY], [cap])",
    insert: "cone()",
    syntax: [
      {
        parameter: "radius: Number",
        description: "radius of bottom surface (Optional)",
      },
      {
        parameter: "height: Number",
        description: "height of the cone (Optional)",
      },
      {
        parameter: "detailX: Integer",
        description:
          "number of segments, the more segments the smoother geometry default is 24 (Optional)",
      },
      {
        parameter: "detailY: Integer",
        description:
          "number of segments, the more segments the smoother geometry default is 1 (Optional)",
      },
      {
        parameter: "cap: Boolean",
        description: "whether to draw the base of the cone (Optional)",
      },
    ],
  },
  {
    element: "ellipsoid",
    description:
      "Draw an ellipsoid with given radius. DetailX and detailY determine the number of subdivisions in the x-dimension and the y-dimension of an ellipsoid. More subdivisions make the ellipsoid appear to be smoother. Avoid detail number above 150, it may crash the browser.",
    code: "ellipsoid([radiusx], [radiusy], [radiusz], [detailX], [detailY])",
    insert: "ellipsoid()",
    syntax: [
      {
        parameter: "radiusx: Number",
        description: "x-radius of ellipsoid (Optional)",
      },
      {
        parameter: "radiusy: Number",
        description: "y-radius of ellipsoid (Optional)",
      },
      {
        parameter: "radiusz: Number",
        description: "z-radius of ellipsoid (Optional)",
      },
      {
        parameter: "detailX: Integer",
        description:
          "number of segments, the more segments the smoother geometry default is 24. (Optional)",
      },
      {
        parameter: "detailY: Integer",
        description:
          "number of segments, the more segments the smoother geometry default is 16. (Optional)",
      },
    ],
  },
  {
    element: "torus",
    description:
      "Draw a torus with given radius and tube radius. DetailX and detailY determine the number of subdivisions in the x-dimension and the y-dimension of a torus. More subdivisions make the torus appear to be smoother. The default and maximum values for detailX and detailY are 24 and 16, respectively. Setting them to relatively small values like 4 and 6 allows you to create new shapes other than a torus.",
    code: "torus([radius], [tubeRadius], [detailX], [detailY])",
    insert: "torus()",
    syntax: [
      {
        parameter: "radius: Number",
        description: "radius of the whole ring (Optional)",
      },
      {
        parameter: "tubeRadius: Number",
        description: "radius of the tube (Optional)",
      },
      {
        parameter: "detailX: Integer",
        description:
          "number of segments in x-dimension, the more segments the smoother geometry default is 24 (Optional)",
      },
      {
        parameter: "detailY: Integer",
        description:
          "number of segments in y-dimension, the more segments the smoother geometry default is 16 (Optional)",
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
        description: "number of vertices along the x-axis. (Optional)",
      },
      {
        parameter: "detailY: Integer",
        description: "number of vertices along the y-axis. (Optional)",
      },
      {
        parameter: "callback: Function",
        description: "function to call upon object instantiation. (Optional)",
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
        description: "number of vertices along the x-axis. (Optional)",
      },
      {
        parameter: "detailY: Integer",
        description: "number of vertices along the y-axis. (Optional)",
      },
      {
        parameter: "callback: Function",
        description: "function to call upon object instantiation. (Optional)",
      },
    ],
  },
  {
    element: "HALF_PI",
    description:
      "HALF_PI is a mathematical constant with the value 1.57079632679489661923. It is half the ratio of the circumference of a circle to its diameter. It is useful in combination with the trigonometric functions sin() and cos().",
    code: "HALF_PI",
    insert: "HALF_PI",
    syntax: [],
  },
  {
    element: "PI",
    description:
      "PI is a mathematical constant with the value 3.14159265358979323846. It is the ratio of the circumference of a circle to its diameter. It is useful in combination with the trigonometric functions sin() and cos().",
    code: "PI",
    insert: "PI",
    syntax: [],
  },
  {
    element: "QUARTER_PI",
    description:
      "QUARTER_PI is a mathematical constant with the value 0.7853982. It is one quarter the ratio of the circumference of a circle to its diameter. It is useful in combination with the trigonometric functions sin() and cos().",
    code: "QUARTER_PI",
    insert: "QUARTER_PI",
    syntax: [],
  },
  {
    element: "TAU",
    description:
      "TAU is an alias for TWO_PI, a mathematical constant with the value 6.28318530717958647693. It is twice the ratio of the circumference of a circle to its diameter. It is useful in combination with the trigonometric functions sin() and cos().",
    code: "TAU",
    insert: "TAU",
    syntax: [],
  },
  {
    element: "TWO_PI",
    description:
      "TWO_PI is a mathematical constant with the value 6.28318530717958647693. It is twice the ratio of the circumference of a circle to its diameter. It is useful in combination with the trigonometric functions sin() and cos().",
    code: "TWO_PI",
    insert: "TWO_PI",
    syntax: [],
  },
  {
    element: "DEGREES",
    description:
      "Constant to be used with angleMode() function, to set the mode which p5.js interprets and calculates angles (either DEGREES or RADIANS). Used by: angleMode()",
    code: "DEGREES",
    insert: "DEGREES",
    syntax: [],
  },
  {
    element: "RADIANS",
    description:
      "Constant to be used with angleMode() function, to set the mode which p5.js interprets and calculates angles (either RADIANS or DEGREES). Used by: angleMode()",
    code: "RADIANS",
    insert: "RADIANS",
    syntax: [],
  },
  {
    element: "preload",
    description:
      "Called directly before setup(), the preload() function is used to handle asynchronous loading of external files in a blocking way. If a preload function is defined, setup() will wait until any load calls within have finished. Nothing besides load calls (loadImage, loadJSON, loadFont, loadStrings, etc.) should be inside the preload function. If asynchronous loading is preferred, the load methods can instead be called in setup() or anywhere else with the use of a callback parameter.",
    code: "preload()",
    insert: "preload()",
    syntax: [],
  },
  {
    element: "setup",
    description:
      "The setup() function is called once when the program starts. It's used to define initial environment properties such as screen size and background color and to load media such as images and fonts as the program starts. There can only be one setup() function for each program and it shouldn't be called again after its initial execution.",
    code: "setup()",
    insert: "setup()",
    syntax: [],
  },
  {
    element: "draw",
    description:
      "Called directly after setup(), the draw() function continuously executes the lines of code contained inside its block until the program is stopped or noLoop() is called. Note if noLoop() is called in setup(), draw() will still be executed once before stopping. draw() is called automatically and should never be called explicitly.",
    code: "draw()",
    insert: "draw()",
    syntax: [],
  },
  {
    element: "remove",
    description:
      "Removes the entire p5 sketch. This will remove the canvas and any elements created by p5.js. It will also stop the draw loop and unbind any properties or methods from the window global scope. It will leave a variable p5 in case you wanted to create a new p5 sketch. If you like, you can set p5 = null to erase it. While all functions and variables and objects created by the p5 library will be removed, any other global variables created by your code will remain.",
    code: "remove()",
    insert: "remove()",
    syntax: [],
  },
  {
    element: "disableFriendlyErrors",
    description:
      "Turn off some features of the friendly error system (FES), which can give a significant boost to performance when needed. Note that this will disable the parts of the FES that cause performance slowdown (like argument checking). Friendly errors that have no performance cost (like giving an descriptive error if a file load fails, or warning you if you try to override p5.js functions in the global space), will remain in place.",
    code: "disableFriendlyErrors",
    insert: "disableFriendlyErrors",
    syntax: [],
  },
  {
    element: "noLoop",
    description:
      "Stops p5.js from continuously executing the code within draw(). If loop() is called, the code in draw() begins to run continuously again. If using noLoop() in setup(), it should be the last line inside the block.",
    code: "noLoop()",
    insert: "noLoop()",
    syntax: [],
  },
  {
    element: "loop",
    description:
      "By default, p5.js loops through draw() continuously, executing the code within it. However, the draw() loop may be stopped by calling noLoop(). In that case, the draw() loop can be resumed with loop(). Avoid calling loop() from inside setup(). Use isLooping() to check current state of loop().",
    code: "loop()",
    insert: "loop()",
    syntax: [],
  },
  {
    element: "isLooping",
    description:
      "By default, p5.js loops through draw() continuously, executing the code within it. If the sketch is stopped with noLoop() or resumed with loop(), isLooping() returns the current state for use within custom event handlers.",
    code: "isLooping()",
    insert: "isLooping()",
    syntax: [],
  },
  {
    element: "push",
    description:
      "The push() function saves the current drawing style settings and transformations, while pop() restores these settings. Note that these functions are always used together. They allow you to change the style and transformation settings and later return to what you had. When a new state is started with push(), it builds on the current style and transform information. The push() and pop() functions can be embedded to provide more control.",
    code: "push()",
    insert: "push()",
    syntax: [],
  },
  {
    element: "pop",
    description:
      "The push() function saves the current drawing style settings and transformations, while pop() restores these settings. Note that these functions are always used together. They allow you to change the style and transformation settings and later return to what you had. When a new state is started with push(), it builds on the current style and transform information. The push() and pop() functions can be embedded to provide more control.",
    code: "pop()",
    insert: "pop()",
    syntax: [],
  },
  {
    element: "redraw",
    description:
      "Executes the code within draw() one time. This function allows the program to update the display window only when necessary, for example when an event registered by mousePressed() or keyPressed() occurs. In structuring a program, it only makes sense to call redraw() within events such as mousePressed(). This is because redraw() does not run draw() immediately (it only sets a flag that indicates an update is needed). The redraw() function does not work properly when called inside draw().",
    code: "redraw([n])",
    insert: "redraw()",
    syntax: [
      {
        parameter: "n: Integer",
        description: "Redraw for n-times. The default value is 1. (Optional)",
      },
    ],
  },
  {
    element: "p5",
    description:
      "The p5() constructor enables you to activate 'instance mode' instead of normal 'global mode'.",
    code: "p5(sketch, node)",
    insert: "p5(${1:sketch}, ${2:node})",
    syntax: [
      {
        parameter: "sketch: Object",
        description: "a function containing a p5.js sketch",
      },
      {
        parameter: "node: String|Object",
        description: "ID or pointer to HTML DOM node to contain sketch in",
      },
    ],
  },
  {
    element: "p5.Element",
    description:
      "Base class for all elements added to a sketch, including canvas, graphics buffers, and other HTML elements. It is not called directly, but p5.Element objects are created by calling createCanvas, createGraphics, createDiv, createImg, createInput, etc.",
    code: "new p5.Element(elt, [pInst])",
    insert: "new p5.Element(${1:elt})",
    syntax: [
      {
        parameter: "elt: String",
        description: "DOM node that is wrapped",
      },
      {
        parameter: "pInst: P5",
        description: "pointer to p5 instance (Optional)",
      },
    ],
  },
  {
    element: "select",
    description:
      "Searches the page for the first element that matches the given CSS selector string (can be an ID, class, tag name or a combination) and returns it as a p5.Element. The DOM node itself can be accessed with .elt. Returns null if none found. You can also specify a container to search within.",
    code: "select(selectors, [container])",
    insert: "select(${1:selectors})",
    syntax: [
      {
        parameter: "selectors: String",
        description: "CSS selector string of element to search for",
      },
      {
        parameter: "container:  String|p5.Element|HTMLElement",
        description:
          "CSS selector string, p5.Element, or HTML element to search within (Optional)",
      },
    ],
    return: {
      type: "p5.Element|null",
      description: "p5.Element containing node found",
    },
  },
  {
    element: "selectAll",
    description:
      "Searches the page for elements that match the given CSS selector string (can be an ID a class, tag name or a combination) and returns them as p5.Elements in an array. The DOM node itself can be accessed with .elt. Returns an empty array if none found. You can also specify a container to search within.",
    code: "selectAll(selectors, [container])",
    insert: "selectAll(${1:selectors})",
    syntax: [
      {
        parameter: "selectors: String",
        description: "CSS selector string of element to search for",
      },
      {
        parameter: "container:  String|p5.Element|HTMLElement",
        description:
          "CSS selector string, p5.Element, or HTML element to search within (Optional)",
      },
    ],
    return: {
      type: "p5.Element[]",
      description: "Array of p5.Elements containing nodes found",
    },
  },
  {
    element: "removeElements",
    description:
      "Removes all elements created by p5, except any canvas / graphics elements created by createCanvas or createGraphics. Event handlers are removed, and element is removed from the DOM.",
    code: "removeElements()",
    insert: "removeElements()",
    syntax: [],
  },
  {
    element: "changed",
    description:
      "The .changed() function is called when the value of an element changes. This can be used to attach an element specific event listener.",
    code: "changed(fxn)",
    insert: "changed(${1:fxn})",
    syntax: [
      {
        parameter: "fxn: Function|Boolean",
        description:
          "function to be fired when the value of an element changes. if false is passed instead, the previously firing function will no longer fire.",
      },
    ],
  },
  {
    element: "input",
    description:
      "The .input() function is called when any user input is detected with an element. The input event is often used to detect keystrokes in a input element, or changes on a slider element. This can be used to attach an element specific event listener.",
    code: "input(fxn)",
    insert: "input(${1:fxn})",
    syntax: [
      {
        parameter: "fxn: Function|Boolean",
        description:
          "function to be fired when any user input is detected within the element. if false is passed instead, the previously firing function will no longer fire.",
      },
    ],
  },
  {
    element: "createDiv",
    description:
      "Creates a <div></div> element in the DOM with given inner HTML.",
    code: "createDiv([html])",
    insert: "createDiv()",
    syntax: [
      {
        parameter: "html: String",
        description: "inner HTML for element created (Optional)",
      },
    ],
    return: {
      type: "p5.Element",
      description: "pointer to p5.Element holding created node",
    },
  },
  {
    element: "createP",
    description:
      "Creates a <p></p> element in the DOM with given inner HTML. Used for paragraph length text.",
    code: "createP([html])",
    insert: "createP()",
    syntax: [
      {
        parameter: "html: String",
        description: "inner HTML for element created (Optional)",
      },
    ],
    return: {
      type: "p5.Element",
      description: "pointer to p5.Element holding created node",
    },
  },
  {
    element: "createSpan",
    description:
      "Creates a <span></span> element in the DOM with given inner HTML.",
    code: "createSpan([html])",
    insert: "createSpan()",
    syntax: [
      {
        parameter: "html: String",
        description: "inner HTML for element created (Optional)",
      },
    ],
    return: {
      type: "p5.Element",
      description: "pointer to p5.Element holding created node",
    },
  },
  {
    element: "createImg",
    description:
      "Creates an <img> element in the DOM with given src and alternate text.",
    code: "createImg(src, alt), createImg(src, alt, crossOrigin, [successCallback])",
    insert: "createImg(${1:src}, ${2:alt})",
    syntax: [
      {
        parameter: "src: String",
        description: "src path or url for image",
      },
      {
        parameter: "alt: String",
        description:
          "alternate text to be used if image does not load. You can use also an empty string ('') if that an image is not intended to be viewed.",
      },
      {
        parameter: "crossOrigin: String",
        description:
          "crossOrigin property of the img element; use either 'anonymous' or 'use-credentials' to retrieve the image with cross-origin access (for later use with canvas. if an empty string('') is passed, CORS is not used",
      },
      {
        parameter: "successCallback: Function",
        description:
          "callback to be called once image data is loaded with the p5.Element as argument (Optional)",
      },
    ],
    return: {
      type: "p5.Element",
      description: "pointer to p5.Element holding created node",
    },
  },
  {
    element: "createA",
    description:
      "Creates an <a></a> element in the DOM for including a hyperlink.",
    code: "createA(href, html, [target])",
    insert: "createA(${1:href}, ${2:html})",
    syntax: [
      {
        parameter: "href: String",
        description: "url of page to link to",
      },
      {
        parameter: "html: String",
        description: "inner html of link element to display",
      },
      {
        parameter: "target: String",
        description:
          "target where new link should open, could be _blank, _self, _parent, _top. (Optional)",
      },
    ],
    return: {
      type: "p5.Element",
      description: "pointer to p5.Element holding created node",
    },
  },
  {
    element: "createSlider",
    description:
      "Creates a slider <input></input> element in the DOM. Use .size() to set the display length of the slider.",
    code: "createSlider(min, max, [value], [step])",
    insert: "createSlider(${1:min}, ${2:max})",
    syntax: [
      {
        parameter: "min: Number",
        description: "minimum value of the slider",
      },
      {
        parameter: "max: Number",
        description: "maximum value of the slider",
      },
      {
        parameter: "value: Number",
        description: "default value of the slider (Optional)",
      },
      {
        parameter: "step: Number",
        description:
          "step size for each tick of the slider (if step is set to 0, the slider will move continuously from the minimum to the maximum value) (Optional)",
      },
    ],
    return: {
      type: "p5.Element",
      description: "pointer to p5.Element holding created node",
    },
  },
  {
    element: "createButton",
    description:
      "Creates a <button></button> element in the DOM. Use .size() to set the display size of the button. Use .mousePressed() to specify behavior on press.",
    code: "createButton(label, [value])",
    insert: "createButton(${1:label})",
    syntax: [
      {
        parameter: "label: String",
        description: "label displayed on the button",
      },
      {
        parameter: "value: String",
        description: "value of the button (Optional)",
      },
    ],
    return: {
      type: "p5.Element",
      description: "pointer to p5.Element holding created node",
    },
  },
  {
    element: "createCheckbox",
    description:
      "Creates a checkbox <input></input> element in the DOM. Calling .checked() on a checkbox returns if it is checked or not",
    code: "createCheckbox([label], [value])",
    insert: "createCheckbox()",
    syntax: [
      {
        parameter: "label: String",
        description: "label displayed after checkbox (Optional)",
      },
      {
        parameter: "value: Boolean",
        description:
          "value of the checkbox; checked is true, unchecked is false (Optional)",
      },
    ],
    return: {
      type: "p5.Element",
      description: "pointer to p5.Element holding created node",
    },
  },
  {
    element: "createSelect",
    description:
      "Creates a dropdown menu <select></select> element in the DOM. It also helps to assign select-box methods to p5.Element when selecting existing select box.",
    code: "createSelect([multiple]), createSelect(existing)",
    insert: "createSelect()",
    syntax: [
      {
        parameter: "multiple: Boolean",
        description:
          "true if dropdown should support multiple selections (Optional)",
      },
      {
        parameter: "existing: Object",
        description: "DOM select element",
      },
    ],
    return: {
      type: "p5.Element",
      description: "pointer to p5.Element holding created node",
    },
  },
  {
    element: "createRadio",
    description:
      "Creates a radio button element in the DOM.It also helps existing radio buttons assign methods of p5.Element.",
    code: "createRadio(containerElement, [name]), createRadio(name), createRadio()",
    insert: "createRadio(${1:containerElement})",
    syntax: [
      {
        parameter: "containerElement: Object",
        description:
          "An container HTML Element either a div or span inside which all existing radio inputs will be considered as options.",
      },
      {
        parameter: "name: String",
        description: "A name parameter for each Input Element. (Optional)",
      },
    ],
    return: {
      type: "p5.Element",
      description: "pointer to p5.Element holding created node",
    },
  },
  {
    element: "createColorPicker",
    description:
      "Creates a colorPicker element in the DOM for color input. The .value() method will return a hex string (#rrggbb) of the color. The .color() method will return a p5.Color object with the current chosen color.",
    code: "createColorPicker([value])",
    insert: "createColorPicker()",
    syntax: [
      {
        parameter: "value: String|p5.Color",
        description: "default color of element (Optional)",
      },
    ],
    return: {
      type: "p5.Element",
      description: "pointer to p5.Element holding created node",
    },
  },
  {
    element: "createInput",
    description:
      "Creates an <input></input> element in the DOM for text input. Use .size() to set the display length of the box.",
    code: "createInput(value, [type]), createInput([value])",
    insert: "createInput(${1:value})",
    syntax: [
      {
        parameter: "value: String",
        description: "default value of the input box",
      },
      {
        parameter: "type: String",
        description:
          "type of text, ie text, password etc. Defaults to text. Needs a value to be specified first. (Optional)",
      },
    ],
    return: {
      type: "p5.Element",
      description: "pointer to p5.Element holding created node",
    },
  },
  {
    element: "createFileInput",
    description:
      "Creates an <input></input> element in the DOM of type 'file'. This allows users to select local files for use in a sketch.",
    code: "createFileInput(callback, [multiple])",
    insert: "createFileInput(${1:callback})",
    syntax: [
      {
        parameter: "callback: Function",
        description: "callback function for when a file is loaded",
      },
      {
        parameter: "multiple: Boolean",
        description:
          "optional, to allow multiple files to be selected (Optional)",
      },
    ],
    return: {
      type: "p5.Element",
      description: "pointer to p5.Element holding created DOM element",
    },
  },
  {
    element: "createVideo",
    description:
      "Creates an HTML5 <video> element in the DOM for simple playback of audio/video. Shown by default, can be hidden with .hide() and drawn into canvas using image(). The first parameter can be either a single string path to a video file, or an array of string paths to different formats of the same video. This is useful for ensuring that your video can play across different browsers, as each supports different formats. See this page for further information about supported formats.",
    code: "createVideo(src, [callback])",
    insert: "createVideo(${1:src})",
    syntax: [
      {
        parameter: "src: String|String[]",
        description:
          "path to a video file, or array of paths for supporting different browsers",
      },
      {
        parameter: "callback: Function",
        description:
          "callback function to be called upon 'canplaythrough' event fire, that is, when the browser can play the media, and estimates that enough data has been loaded to play the media up to its end without having to stop for further buffering of content (Optional)",
      },
    ],
    return: {
      type: "p5.MediaElement",
      description: "pointer to video p5.MediaElement",
    },
  },
  {
    element: "createAudio",
    description:
      "Creates a hidden HTML5 <audio> element in the DOM for simple audio playback. The first parameter can be either a single string path to a audio file, or an array of string paths to different formats of the same audio. This is useful for ensuring that your audio can play across different browsers, as each supports different formats.",
    code: "createAudio([src], [callback])",
    insert: "createAudio()",
    syntax: [
      {
        parameter: "src: String|String[]",
        description:
          "path to an audio file, or array of paths for supporting different browsers (Optional)",
      },
      {
        parameter: "callback: Function",
        description:
          "callback function to be called upon 'canplaythrough' event fire, that is, when the browser can play the media, and estimates that enough data has been loaded to play the media up to its end without having to stop for further buffering of content (Optional)",
      },
    ],
    return: {
      type: "p5.MediaElement",
      description: "pointer to audio p5.MediaElement",
    },
  },
  {
    element: "VIDEO",
    description: "",
    code: "VIDEO",
    insert: "VIDEO",
    syntax: [],
  },
  {
    element: "AUDIO",
    description: "",
    code: "AUDIO",
    insert: "AUDIO",
    syntax: [],
  },
  {
    element: "createCapture",
    description:
      "Creates a new HTML5 <video> element that contains the audio/video feed from a webcam. The element is separate from the canvas and is displayed by default. The element can be hidden using .hide(). The feed can be drawn onto the canvas using image(). The loadedmetadata property can be used to detect when the element has fully loaded.",
    code: "createCapture(type, [callback])",
    insert: "createCapture(${1:type})",
    syntax: [
      {
        parameter: "type: String|Constant|Object",
        description:
          "type of capture, either VIDEO or AUDIO if none specified, default both, or a Constraints object",
      },
      {
        parameter: "callback: Function",
        description: "function to be called once stream has loaded (Optional)",
      },
    ],
    return: {
      type: "p5.Element",
      description: "capture video p5.Element",
    },
  },
  {
    element: "createElement",
    description:
      "Creates element with given tag in the DOM with given content.",
    code: "createElement(tag, [content])",
    insert: "createElement(${1:tag})",
    syntax: [
      {
        parameter: "tag: String",
        description: "tag for the new element",
      },
      {
        parameter: "content: String",
        description: "html content to be inserted into the element (Optional)",
      },
    ],
    return: {
      type: "p5.Element",
      description: "pointer to p5.Element holding created node",
    },
  },
  {
    element: "p5.MediaElement",
    description:
      "Extends p5.Element to handle audio and video. In addition to the methods of p5.Element, it also contains methods for controlling media. It is not called directly, but p5.MediaElements are created by calling createVideo, createAudio, and createCapture.",
    code: "new p5.MediaElement(elt)",
    insert: "new p5.MediaElement(${1:elt})",
    syntax: [
      {
        parameter: "elt: String",
        description: "DOM node that is wrapped",
      },
    ],
  },
  {
    element: "p5.File",
    description:
      "Base class for a file. Used for Element.drop and createFileInput.",
    code: "new p5.File(file)",
    insert: "new p5.File(${1:file})",
    syntax: [
      {
        parameter: "file: File",
        description: "File that is wrapped",
      },
    ],
  },
  {
    element: "p5.Graphics",
    description:
      "Thin wrapper around a renderer, to be used for creating a graphics buffer object. Use this class if you need to draw into an off-screen graphics buffer. The two parameters define the width and height in pixels. The fields and methods for this class are extensive, but mirror the normal drawing API for p5. Extends p5.Element",
    code: "new p5.Graphics(w, h, renderer, [pInst])",
    insert: "new p5.Graphics(${1:w}, ${2:h}, ${3:renderer})",
    syntax: [
      {
        parameter: "w: Number",
        description: "width",
      },
      {
        parameter: "h: Number",
        description: "height",
      },
      {
        parameter: "renderer: Constant",
        description: "the renderer to use, either P2D or WEBGL",
      },
      {
        parameter: "pInst: P5",
        description: "pointer to p5 instance (Optional)",
      },
    ],
  },
  {
    element: "createCanvas",
    description:
      "Creates a canvas element in the document, and sets the dimensions of it in pixels. This method should be called only once at the start of setup. Calling createCanvas more than once in a sketch will result in very unpredictable behavior. If you want more than one drawing canvas you could use createGraphics (hidden by default but it can be shown). Important note: in 2D mode (i.e. when p5.Renderer is not set) the origin (0,0) is positioned at the top left of the screen. In 3D mode (i.e. when p5.Renderer is set to WEBGL), the origin is positioned at the center of the canvas.",
    code: "createCanvas(w, h, [renderer])",
    insert: "createCanvas(${1:w}, ${2:h})",
    syntax: [
      {
        parameter: "w: Number",
        description: "width of the canvas",
      },
      {
        parameter: "h: Number",
        description: "height of the canvas",
      },
      {
        parameter: "renderer: Constant",
        description: "either P2D or WEBGL (Optional)",
      },
    ],
  },
  {
    element: "resizeCanvas",
    description:
      "Resizes the canvas to given width and height. The canvas will be cleared and draw will be called immediately, allowing the sketch to re-render itself in the resized canvas.",
    code: "resizeCanvas(w, h, [noRedraw])",
    insert: "resizeCanvas(${1:w}, ${2:h})",
    syntax: [
      {
        parameter: "w: Number",
        description: "width of the canvas",
      },
      {
        parameter: "h: Number",
        description: "height of the canvas",
      },
      {
        parameter: "noRedraw: Boolean",
        description: "don't redraw the canvas immediately (Optional)",
      },
    ],
  },
  {
    element: "noCanvas",
    description:
      "Removes the default canvas for a p5 sketch that doesn't require a canvas",
    code: "noCanvas()",
    insert: "noCanvas()",
    syntax: [
    ],
  },
  {
    element: "createGraphics",
    description:
      "Creates and returns a new p5.Renderer object. Use this class if you need to draw into an off-screen graphics buffer. The two parameters define the width and height in pixels.",
    code: "createGraphics(w, h, [renderer])",
    insert: "createGraphics(${1:w}, ${2:h})",
    syntax: [
      {
        parameter: "w: Number",
        description: "width of the offscreen graphics buffer",
      },
      {
        parameter: "h: Number",
        description: "height of the offscreen graphics buffer",
      },
      {
        parameter: "renderer: Constant",
        description: "either P2D or WEBGL undefined defaults to p2d (Optional)",
      },
    ],
  },
  {
    element: "blendMode",
    description:
      "Blends the pixels in the display window according to the defined mode.",
    code: "blendMode(mode)",
    insert: "blendMode(${1:mode})",
    syntax: [
      {
        parameter: "mode: Constant",
        description: "blend mode to set for canvas. either BLEND, DARKEST, LIGHTEST, DIFFERENCE, MULTIPLY, EXCLUSION, SCREEN, REPLACE, OVERLAY, HARD_LIGHT, SOFT_LIGHT, DODGE, BURN, ADD, REMOVE or SUBTRACT",
      },
    ],
  },
  {
    element: "drawingContext",
    description:
      "The p5.js API provides a lot of functionality for creating graphics, but there is some native HTML5 Canvas functionality that is not exposed by p5. You can still call it directly using the variable drawingContext, as in the example shown. This is the equivalent of calling canvas.getContext('2d'); or canvas.getContext('webgl');.",
    code: "drawingContext",
    insert: "drawingContext",
    syntax: [
    ],
  },
  {
    element: "setAttributes",
    description:
      "Set attributes for the WebGL Drawing context. This is a way of adjusting how the WebGL renderer works to fine-tune the display and performance. Note that this will reinitialize the drawing context if called after the WebGL canvas is made. If an object is passed as the parameter, all attributes not declared in the object will be set to defaults.",
    code: "setAttributes(key, value), setAttributes(obj)",
    insert: "setAttributes(${1:key}, ${2:value})",
    syntax: [
      {
        parameter: "key: String",
        description: "Name of attribute",
      },
      {
        parameter: "value: Boolean",
        description: "New value of named attribute",
      },
      {
        parameter: "obj: Object",
        description: "object with key-value pairs",
      },
    ],
  },
  {
    element: "applyMatrix",
    description:
      "Multiplies the current matrix by the one specified through the parameters. This is a powerful operation that can perform the equivalent of translate, scale, shear and rotate all at once.",
    code: "applyMatrix(a, b, c, d, e, f)",
    insert: "applyMatrix(${1:a}, ${2:b}, ${3:c}, ${4:d}, ${5:e}, ${6:f})",
    syntax: [
      {
        parameter: "a: Number|Array",
        description: "numbers which define the 2x3 matrix to be multiplied, or an array of numbers",
      },
      {
        parameter: "b: Number",
        description: "numbers which define the 2x3 matrix to be multiplied",
      },
      {
        parameter: "c: Number",
        description: "numbers which define the 2x3 matrix to be multiplied",
      },
      {
        parameter: "d: Number",
        description: "numbers which define the 2x3 matrix to be multiplied",
      },
      {
        parameter: "e: Number",
        description: "numbers which define the 2x3 matrix to be multiplied",
      },
      {
        parameter: "f: Number",
        description: "numbers which define the 2x3 matrix to be multiplied",
      },
    ],
  },
  {
    element: "resetMatrix",
    description:
      "Replaces the current matrix with the identity matrix.",
    code: "resetMatrix()",
    insert: "resetMatrix()",
    syntax: [
    ],
  },
  {
    element: "rotate",
    description:
      "Rotates a shape by the amount specified by the angle parameter. This function accounts for angleMode, so angles can be entered in either RADIANS or DEGREES. Objects are always rotated around their relative position to the origin and positive numbers rotate objects in a clockwise direction. Transformations apply to everything that happens after and subsequent calls to the function accumulates the effect.",
    code: "rotate(angle, [axis])",
    insert: "rotate(${1:angle})",
    syntax: [
      {
        parameter: "angle: Number",
        description: "the angle of rotation, specified in radians or degrees, depending on current angleMode",
      },
      {
        parameter: "axis: p5.Vector|Number[]",
        description: "(in 3d) the axis to rotate around (Optional)",
      },
    ],
  },
  {
    element: "rotateX",
    description:
      "Rotates a shape around X axis by the amount specified in angle parameter. The angles can be entered in either RADIANS or DEGREES. Objects are always rotated around their relative position to the origin and positive numbers rotate objects in a clockwise direction. All transformations are reset when draw() begins again.",
    code: "rotateX(angle)",
    insert: "rotateX(${1:angle})",
    syntax: [
      {
        parameter: "angle: Number",
        description: "the angle of rotation, specified in radians or degrees, depending on current angleMode",
      },
    ],
  },
  {
    element: "rotateY",
    description:
      "Rotates a shape around Y axis by the amount specified in angle parameter. The angles can be entered in either RADIANS or DEGREES. Objects are always rotated around their relative position to the origin and positive numbers rotate objects in a clockwise direction. All transformations are reset when draw() begins again.",
    code: "rotateY(angle)",
    insert: "rotateY(${1:angle})",
    syntax: [
      {
        parameter: "angle: Number",
        description: "the angle of rotation, specified in radians or degrees, depending on current angleMode",
      },
    ],
  },
  {
    element: "rotateZ",
    description:
      "Rotates a shape around Z axis by the amount specified in angle parameter. The angles can be entered in either RADIANS or DEGREES. This method works in WEBGL mode only. Objects are always rotated around their relative position to the origin and positive numbers rotate objects in a clockwise direction. All transformations are reset when draw() begins again.",
    code: "rotateZ(angle)",
    insert: "rotateZ(${1:angle})",
    syntax: [
      {
        parameter: "angle: Number",
        description: "the angle of rotation, specified in radians or degrees, depending on current angleMode",
      },
    ],
  },
  {
    element: "scale",
    description:
      "Increases or decreases the size of a shape by expanding or contracting vertices. Objects always scale from their relative origin to the coordinate system. Scale values are specified as decimal percentages. For example, the function call scale(2.0) increases the dimension of a shape by 200%.",
    code: "scale(s, [y], [z]), scale(scales)",
    insert: "scale(${1:s})",
    syntax: [
      {
        parameter: "s: Number|p5.Vector|Number[]",
        description: "percent to scale the object, or percentage to scale the object in the x-axis if multiple arguments are given",
      },
      {
        parameter: "y: Number",
        description: "percent to scale the object in the y-axis (Optional)",
      },
      {
        parameter: "z: Number",
        description: "percent to scale the object in the z-axis (webgl only) (Optional)",
      },
      {
        parameter: "scales: p5.Vector|Number[]",
        description: "per-axis percents to scale the object",
      },
    ],
  },
  {
    element: "shearX",
    description:
      "Shears a shape around the x-axis by the amount specified by the angle parameter. Angles should be specified in the current angleMode. Objects are always sheared around their relative position to the origin and positive numbers shear objects in a clockwise direction.",
    code: "shearX(angle)",
    insert: "shearX(${1:angle})",
    syntax: [
      {
        parameter: "angle: Number",
        description: "angle of shear specified in radians or degrees, depending on current angleMode",
      },
    ],
  },
  {
    element: "shearY",
    description:
      "Shears a shape around the y-axis the amount specified by the angle parameter. Angles should be specified in the current angleMode. Objects are always sheared around their relative position to the origin and positive numbers shear objects in a clockwise direction.",
    code: "shearY(angle)",
    insert: "shearY(${1:angle})",
    syntax: [
      {
        parameter: "angle: Number",
        description: "angle of shear specified in radians or degrees, depending on current angleMode",
      },
    ],
  },
  {
    element: "translate",
    description:
      "Specifies an amount to displace objects within the display window. The x parameter specifies left/right translation, the y parameter specifies up/down translation.",
    code: "translate(x, y, [z]), translate(vector)",
    insert: "translate(${1:x}, ${2:y})",
    syntax: [
      {
        parameter: "x: Number",
        description: "left/right translation",
      },
      {
        parameter: "y: Number",
        description: "up/down translation",
      },
      {
        parameter: "z: Number",
        description: "forward/backward translation (webgl only) (Optional)",
      },
      {
        parameter: "vector: p5.Vector",
        description: "the vector to translate by",
      },
    ],
  },
  {
    element: "storeItem",
    description:
      "Stores a value in local storage under the key name. Local storage is saved in the browser and persists between browsing sessions and page reloads. The key can be the name of the variable but doesn't have to be. To retrieve stored items see getItem. Sensitive data such as passwords or personal information should not be stored in local storage.",
    code: "storeItem(key, value)",
    insert: "storeItem(${1:key}, ${2:value})",
    syntax: [
      {
        parameter: "key: String",
        description: "",
      },
      {
        parameter: "value: String|Number|Object|Boolean|p5.Color|p5.Vector",
        description: "",
      },
    ],
  },
  {
    element: "getItem",
    description:
      "Returns the value of an item that was stored in local storage using storeItem()",
    code: "getItem(key)",
    insert: "getItem(${1:key})",
    syntax: [
      {
        parameter: "key: String",
        description: "name that you wish to use to store in local storage",
      },
    ],
    return: {
      type: "Number|Object|String|Boolean|p5.Color|p5.Vector",
      description: "Value of stored item",
    },
  },
  {
    element: "clearStorage",
    description:
      "Clears all local storage items set with storeItem() for the current domain.",
    code: "clearStorage()",
    insert: "clearStorage()",
    syntax: [
    ],
  },
  {
    element: "removeItem",
    description:
      "Removes an item that was stored with storeItem()",
    code: "removeItem(key)",
    insert: "removeItem(${1:key})",
    syntax: [
      {
        parameter: "key: String",
        description: "",
      },
    ],
  },
  {
    element: "createStringDict",
    description:
      "Creates a new instance of p5.StringDict using the key-value pair or the object you provide.",
    code: "createStringDict(key, value), createStringDict(object)",
    insert: "createStringDict(${1:key}, ${2:value})",
    syntax: [
      {
        parameter: "key: String",
        description: "",
      },
      {
        parameter: "value: String",
        description: "",
      },
      {
        parameter: "object: Object",
        description: "object",
      },
    ],
    return: {
      type: "p5.StringDict",
      description: "",
    },
  },
  {
    element: "createNumberDict",
    description:
      "Creates a new instance of p5.NumberDict using the key-value pair or object you provide.",
    code: "createNumberDict(key, value), createNumberDict(object)",
    insert: "createNumberDict(${1:key}, ${2:value})",
    syntax: [
      {
        parameter: "key: Number",
        description: "",
      },
      {
        parameter: "value: Number",
        description: "",
      },
      {
        parameter: "object: Object",
        description: "object",
      },
    ],
    return: {
      type: "p5.NumberDict",
      description: "",
    },
  },
  {
    element: "p5.TypedDict",
    description:
      "Base class for all p5.Dictionary types. Specifically typed Dictionary classes inherit from this class.",
    code: "new p5.TypedDict()",
    insert: "new p5.TypedDict()",
    syntax: [
    ],
  },
  {
    element: "p5.NumberDict",
    description:
      "A simple Dictionary class for Numbers. Extends p5.TypedDict",
    code: "new p5.NumberDict()",
    insert: "new p5.NumberDict()",
    syntax: [
    ],
  },
  {
    element: "shuffle",
    description:
      "Randomizes the order of the elements of an array. Implements Fisher-Yates Shuffle Algorithm.",
    code: "shuffle(array, [bool])",
    insert: "shuffle(${1:array})",
    syntax: [
      {
        parameter: "array: Array",
        description: "Array to shuffle",
      },
      {
        parameter: "bool: Boolean",
        description: "modify passed array (Optional)",
      },
    ],
    return: {
      type: "Array",
      description: "shuffled Array",
    },
  },
  {
    element: "int",
    description:
      "Converts a boolean, string, or float to its integer representation. When an array of values is passed in, then an int array of the same length is returned.",
    code: "int(n, [radix]), int(ns, [radix])",
    insert: "int(${1:n})",
    syntax: [
      {
        parameter: "n: String|Boolean|Number",
        description: "value to parse",
      },
      {
        parameter: "radix: Integer",
        description: "the radix to convert to (default: 10) (Optional)",
      },
      {
        parameter: "ns: Array",
        description: "values to parse",
      },
    ],
    return: {
      type: "Number",
      description: "integer representation of value",
    },
  },
  {
    element: "str",
    description:
      "Converts a boolean, string or number to its string representation. When an array of values is passed in, then an array of strings of the same length is returned.",
    code: "str(n)",
    insert: "str(${1:n})",
    syntax: [
      {
        parameter: "n: String|Boolean|Number|Array",
        description: "value to parse",
      },
    ],
    return: {
      type: "String",
      description: "string representation of value",
    },
  },
  {
    element: "boolean",
    description:
      "A boolean is one of the 7 primitive data types in Javascript. A boolean can only be true or false. From the MDN entry: Boolean represents a logical entity and can have two values: true, and false.",
    code: "boolean",
    insert: "boolean",
    syntax: [
    ],
  },
  {
    element: "char",
    description:
      "Converts a number or string to its corresponding single-character string representation. If a string parameter is provided, it is first parsed as an integer and then translated into a single-character string. When an array of number or string values is passed in, then an array of single-character strings of the same length is returned.",
    code: "char(n), char(ns)",
    insert: "char(${1:n})",
    syntax: [
      {
        parameter: "n: String|Number",
        description: "value to parse",
      },
      {
        parameter: "ns: Array",
        description: "values to parse",
      },
    ],
    return: {
      type: "String",
      description: "string representation of value",
    },
  },
  {
    element: "unchar",
    description:
      "Converts a single-character string to its corresponding integer representation. When an array of single-character string values is passed in, then an array of integers of the same length is returned.",
    code: "unchar(n), unchar(ns)",
    insert: "unchar(${1:n})",
    syntax: [
      {
        parameter: "n: String",
        description: "value to parse",
      },
      {
        parameter: "ns: Array",
        description: "values to parse",
      },
    ],
    return: {
      type: "Number",
      description: "integer representation of value",
    },
  },
  {
    element: "hex",
    description:
      "Converts a number to a string in its equivalent hexadecimal notation. If a second parameter is passed, it is used to set the number of characters to generate in the hexadecimal notation. When an array is passed in, an array of strings in hexadecimal notation of the same length is returned.",
    code: "hex(n, [digits]), hex(ns, [digits])",
    insert: "hex(${1:n})",
    syntax: [
      {
        parameter: "n: Number",
        description: "value to parse",
      },
      {
        parameter: "digits: Number",
        description: "(Optional)",
      },
      {
        parameter: "ns: Number[]",
        description: "array of values to parse",
      },
    ],
    return: {
      type: "String",
      description: "hexadecimal string representation of value",
    },
  },
  {
    element: "unhex",
    description:
      "Converts a string representation of a hexadecimal number to its equivalent integer value. When an array of strings in hexadecimal notation is passed in, an array of integers of the same length is returned.",
    code: "unhex(n), unhex(ns)",
    insert: "unhex(${1:n})",
    syntax: [
      {
        parameter: "n: String",
        description: "value to parse",
      },
      {
        parameter: "ns: Array",
        description: "values to parse",
      },
    ],
    return: {
      type: "Number",
      description: "integer representation of hexadecimal value",
    },
  },
  {
    element: "join",
    description:
      "Combines an array of Strings into one String, each separated by the character(s) used for the separator parameter. To join arrays of ints or floats, it's necessary to first convert them to Strings using nf() or nfs().",
    code: "join(list, separator)",
    insert: "join(${1:list}, ${2:separator})",
    syntax: [
      {
        parameter: "list: Array",
        description: "array of Strings to be joined",
      },
      {
        parameter: "separator: String",
        description: "String to be placed between each item",
      },
    ],
    return: {
      type: "String",
      description: "joined String",
    },
  },
  {
    element: "match",
    description:
      "This function is used to apply a regular expression to a piece of text, and return matching groups (elements found inside parentheses) as a String array. If there are no matches, a null value will be returned. If no groups are specified in the regular expression, but the sequence matches, an array of length 1 (with the matched text as the first element of the array) will be returned.",
    code: "match(str, regexp)",
    insert: "match(${1:str}, ${2:regexp})",
    syntax: [
      {
        parameter: "str: String",
        description: "the String to be searched",
      },
      {
        parameter: "regexp: String",
        description: "the regexp to be used for matching",
      },
    ],
    return: {
      type: "String[]",
      description: "Array of Strings found",
    },
  },
  {
    element: "matchAll",
    description:
      "This function is used to apply a regular expression to a piece of text, and return a list of matching groups (elements found inside parentheses) as a two-dimensional String array. If there are no matches, a null value will be returned. If no groups are specified in the regular expression, but the sequence matches, a two dimensional array is still returned, but the second dimension is only of length one.",
    code: "matchAll(str, regexp)",
    insert: "matchAll(${1:str}, ${2:regexp})",
    syntax: [
      {
        parameter: "str: String",
        description: "the String to be searched",
      },
      {
        parameter: "regexp: String",
        description: "the regexp to be used for matching",
      },
    ],
    return: {
      type: "String[]",
      description: "2d Array of Strings found",
    },
  },
  {
    element: "nf",
    description:
      "Utility function for formatting numbers into strings. There are two versions: one for formatting floats, and one for formatting ints. The values for the digits, left, and right parameters should always be positive integers. (NOTE): Be cautious when using left and right parameters as it prepends numbers of 0's if the parameter if greater than the current length of the number.",
    code: "nf(num, [left], [right]), nf(nums, [left], [right])",
    insert: "nf(${1:num})",
    syntax: [
      {
        parameter: "num: Number|String",
        description: "the Number to format",
      },
      {
        parameter: "left: Integer|String",
        description: "number of digits to the left of the decimal point (Optional)",
      },
      {
        parameter: "right: Integer|String",
        description: "number of digits to the right of the decimal point (Optional)",
      },
      {
        parameter: "nums: Array",
        description: "the Numbers to format",
      },
    ],
    return: {
      type: "String",
      description: "formatted String",
    },
  },
  {
    element: "nfc",
    description:
      "Utility function for formatting numbers into strings and placing appropriate commas to mark units of 1000. There are two versions: one for formatting ints, and one for formatting an array of ints. The value for the right parameter should always be a positive integer.",
    code: "nfc(num, [right]), nfc(nums, [right])",
    insert: "nfc(${1:num})",
    syntax: [
      {
        parameter: "num: Number|String",
        description: "the Number to format",
      },
      {
        parameter: "right: Integer|String",
        description: "number of digits to the right of the decimal point (Optional)",
      },
      {
        parameter: "nums: Array",
        description: "the Numbers to format",
      },
    ],
    return: {
      type: "String",
      description: "formatted String",
    },
  },
  {
    element: "nfp",
    description:
      "Utility function for formatting numbers into strings. Similar to nf() but puts a '+' in front of positive numbers and a '-' in front of negative numbers. There are two versions: one for formatting floats, and one for formatting ints. The values for left, and right parameters should always be positive integers.",
    code: "nfp(num, [left], [right]), nfp(nums, [left], [right])",
    insert: "nfp(${1:num})",
    syntax: [
      {
        parameter: "num: Number",
        description: "the Number to format",
      },
      {
        parameter: "left: Integer",
        description: "number of digits to the left of the decimal point (Optional)",
      },
      {
        parameter: "right: Integer",
        description: "number of digits to the right of the decimal point (Optional)",
      },
      {
        parameter: "nums: Number[]",
        description: "the Numbers to format",
      },
    ],
    return: {
      type: "String",
      description: "formatted String",
    },
  },
  {
    element: "nfs",
    description:
      "Utility function for formatting numbers into strings. Similar to nf() but puts an additional '-' (space) in front of positive numbers just in case to align it with negative numbers which includes '-' (minus) sign. The main usecase of nfs() can be seen when one wants to align the digits (place values) of a non-negative number with some negative number (See the example to get a clear picture). There are two versions: one for formatting float, and one for formatting int. The values for the digits, left, and right parameters should always be positive integers.",
    code: "nfs(num, [left], [right]), nfs(nums, [left], [right])",
    insert: "nfs(${1:num})",
    syntax: [
      {
        parameter: "num: Number",
        description: "the Number to format",
      },
      {
        parameter: "left: Integer",
        description: "number of digits to the left of the decimal point (Optional)",
      },
      {
        parameter: "right: Integer",
        description: "number of digits to the right of the decimal point (Optional)",
      },
      {
        parameter: "nums: Array",
        description: "the Numbers to format",
      },
    ],
    return: {
      type: "String",
      description: "formatted String",
    },
  },
  {
    element: "split",
    description:
      "The split() function maps to String.split(), it breaks a String into pieces using a character or string as the delimiter. The delim parameter specifies the character or characters that mark the boundaries between each piece. A String[] array is returned that contains each of the pieces. The splitTokens() function works in a similar fashion, except that it splits using a range of characters instead of a specific character or sequence.",
    code: "split(value, delim)",
    insert: "split(${1:value}, ${2:delim})",
    syntax: [
      {
        parameter: "value: String",
        description: "the String to be split",
      },
      {
        parameter: "delim: String",
        description: "the String used to separate the data",
      },
    ],
    return: {
      type: "String[]",
      description: "Array of Strings",
    },
  },
  {
    element: "splitTokens",
    description:
      "The splitTokens() function splits a String at one or many character delimiters or 'tokens.' The delim parameter specifies the character or characters to be used as a boundary. If no delim characters are specified, any whitespace character is used to split. Whitespace characters include tab (\t), line feed (\n), carriage return (\r), form feed (\f), and space.",
    code: "splitTokens(value, [delim])",
    insert: "splitTokens(${1:value})",
    syntax: [
      {
        parameter: "value: String",
        description: "the String to be split",
      },
      {
        parameter: "delim: String",
        description: "list of individual Strings that will be used as separators (Optional)",
      },
    ],
    return: {
      type: "String[]",
      description: "Array of Strings",
    },
  },
  {
    element: "trim",
    description:
      "Removes whitespace characters from the beginning and end of a String. In addition to standard whitespace characters such as space, carriage return, and tab, this function also removes the Unicode 'nbsp' character.",
    code: "trim(str), trim(strs)",
    insert: "trim(${1:str})",
    syntax: [
      {
        parameter: "str: String",
        description: "the String to be trimmed",
      },
      {
        parameter: "strs: Array",
        description: "an Array of Strings to be trimmed",
      },
    ],
    return: {
      type: "String",
      description: "a trimmed String",
    },
  },
  {
    element: "deviceOrientation",
    description:
      "The system variable deviceOrientation always contains the orientation of the device. The value of this variable will either be set 'landscape' or 'portrait'. If no data is available it will be set to 'undefined'. either LANDSCAPE or PORTRAIT.",
    code: "deviceOrientation",
    insert: "deviceOrientation",
    syntax: [
    ],
  },
  {
    element: "accelerationX",
    description:
      "The system variable accelerationX always contains the acceleration of the device along the x axis. Value is represented as meters per second squared.",
    code: "accelerationX",
    insert: "accelerationX",
    syntax: [
    ],
  },
  {
    element: "accelerationY",
    description:
      "The system variable accelerationY always contains the acceleration of the device along the y axis. Value is represented as meters per second squared.",
    code: "accelerationY",
    insert: "accelerationY",
    syntax: [
    ],
  },
  {
    element: "accelerationZ",
    description:
      "The system variable accelerationZ always contains the acceleration of the device along the z axis. Value is represented as meters per second squared.",
    code: "accelerationZ",
    insert: "accelerationZ",
    syntax: [
    ],
  },
  {
    element: "pAccelerationX",
    description:
      "The system variable pAccelerationX always contains the acceleration of the device along the x axis in the frame previous to the current frame. Value is represented as meters per second squared.",
    code: "pAccelerationX",
    insert: "pAccelerationX",
    syntax: [
    ],
  },
  {
    element: "pAccelerationY",
    description:
      "The system variable pAccelerationY always contains the acceleration of the device along the y axis in the frame previous to the current frame. Value is represented as meters per second squared.",
    code: "pAccelerationY",
    insert: "pAccelerationY",
    syntax: [
    ],
  },
  {
    element: "pAccelerationZ",
    description:
      "The system variable pAccelerationZ always contains the acceleration of the device along the z axis in the frame previous to the current frame. Value is represented as meters per second squared.",
    code: "pAccelerationZ",
    insert: "pAccelerationZ",
    syntax: [
    ],
  },
  {
    element: "rotationX",
    description:
      "The system variable rotationX always contains the rotation of the device along the x axis. If the sketch angleMode() is set to DEGREES, the value will be -180 to 180. If it is set to RADIANS, the value will be -PI to PI. Note: The order the rotations are called is important, ie. if used together, it must be called in the order Z-X-Y or there might be unexpected behaviour.",
    code: "rotationX",
    insert: "rotationX",
    syntax: [
    ],
  },
  {
    element: "rotationY",
    description:
      "The system variable rotationY always contains the rotation of the device along the y axis. If the sketch angleMode() is set to DEGREES, the value will be -90 to 90. If it is set to RADIANS, the value will be -PI/2 to PI/2. Note: The order the rotations are called is important, ie. if used together, it must be called in the order Z-X-Y or there might be unexpected behaviour.",
    code: "rotationY",
    insert: "rotationY",
    syntax: [
    ],
  },
  {
    element: "rotationZ",
    description:
      "The system variable rotationZ always contains the rotation of the device along the z axis. If the sketch angleMode() is set to DEGREES, the value will be 0 to 360. If it is set to RADIANS, the value will be 0 to 2*PI. Unlike rotationX and rotationY, this variable is available for devices with a built-in compass only. Note: The order the rotations are called is important, ie. if used together, it must be called in the order Z-X-Y or there might be unexpected behaviour.",
    code: "rotationZ",
    insert: "rotationZ",
    syntax: [
    ],
  },
  {
    element: "pRotationX",
    description:
      "The system variable pRotationX always contains the rotation of the device along the x axis in the frame previous to the current frame. If the sketch angleMode() is set to DEGREES, the value will be -180 to 180. If it is set to RADIANS, the value will be -PI to PI. pRotationX can also be used with rotationX to determine the rotate direction of the device along the X-axis.",
    code: "pRotationX",
    insert: "pRotationX",
    syntax: [
    ],
  },
  {
    element: "pRotationY",
    description:
      "The system variable pRotationY always contains the rotation of the device along the y axis in the frame previous to the current frame. If the sketch angleMode() is set to DEGREES, the value will be -90 to 90. If it is set to RADIANS, the value will be -PI/2 to PI/2. pRotationY can also be used with rotationY to determine the rotate direction of the device along the Y-axis.",
    code: "pRotationY",
    insert: "pRotationY",
    syntax: [
    ],
  },
  {
    element: "pRotationZ",
    description:
      "The system variable pRotationZ always contains the rotation of the device along the z axis in the frame previous to the current frame. If the sketch angleMode() is set to DEGREES, the value will be 0 to 360. If it is set to RADIANS, the value will be 0 to 2*PI. pRotationZ can also be used with rotationZ to determine the rotate direction of the device along the Z-axis.",
    code: "pRotationZ",
    insert: "pRotationZ",
    syntax: [
    ],
  },
  {
    element: "turnAxis",
    description:
      "When a device is rotated, the axis that triggers the deviceTurned() method is stored in the turnAxis variable. The turnAxis variable is only defined within the scope of deviceTurned().",
    code: "turnAxis",
    insert: "turnAxis",
    syntax: [
    ],
  },
  {
    element: "setMoveThreshold",
    description:
      "The setMoveThreshold() function is used to set the movement threshold for the deviceMoved() function. The default threshold is set to 0.5.",
    code: "setMoveThreshold(value)",
    insert: "setMoveThreshold(${1:value})",
    syntax: [
      {
        parameter: "value: Number",
        description: "The threshold value",
      },
    ],
  },
  {
    element: "setShakeThreshold",
    description:
      "The setShakeThreshold() function is used to set the movement threshold for the deviceShaken() function. The default threshold is set to 30.",
    code: "setShakeThreshold(value)",
    insert: "setShakeThreshold(${1:value})",
    syntax: [
      {
        parameter: "value: Number",
        description: "The threshold value",
      },
    ],
  },
  {
    element: "deviceMoved",
    description:
      "The deviceMoved() function is called when the device is moved by more than the threshold value along X, Y or Z axis. The default threshold is set to 0.5. The threshold value can be changed using setMoveThreshold().",
    code: "deviceMoved()",
    insert: "deviceMoved()",
    syntax: [
    ],
  },
  {
    element: "deviceTurned",
    description:
      "The deviceTurned() function is called when the device rotates by more than 90 degrees continuously. The axis that triggers the deviceTurned() method is stored in the turnAxis variable. The deviceTurned() method can be locked to trigger on any axis: X, Y or Z by comparing the turnAxis variable to 'X', 'Y' or 'Z'.",
    code: "deviceTurned()",
    insert: "deviceTurned()",
    syntax: [
    ],
  },
  {
    element: "deviceShaken",
    description:
      "The deviceShaken() function is called when the device total acceleration changes of accelerationX and accelerationY values is more than the threshold value. The default threshold is set to 30. The threshold value can be changed using setShakeThreshold().",
    code: "deviceShaken()",
    insert: "deviceShaken()",
    syntax: [
    ],
  },
  {
    element: "keyIsPressed",
    description:
      "The boolean system variable keyIsPressed is true if any key is pressed and false if no keys are pressed.",
    code: "keyIsPressed",
    insert: "keyIsPressed",
    syntax: [
    ],
  },
  {
    element: "key",
    description:
      "The system variable key always contains the value of the most recent key on the keyboard that was typed. To get the proper capitalization, it is best to use it within keyTyped(). For non-ASCII keys, use the keyCode variable.",
    code: "key",
    insert: "key",
    syntax: [
    ],
  },
  {
    element: "keyCode",
    description:
      "The variable keyCode is used to detect special keys such as BACKSPACE, DELETE, ENTER, RETURN, TAB, ESCAPE, SHIFT, CONTROL, OPTION, ALT, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW.",
    code: "keyCode",
    insert: "keyCode",
    syntax: [
    ],
  },
  {
    element: "keyPressed",
    description:
      "The keyPressed() function is called once every time a key is pressed. The keyCode for the key that was pressed is stored in the keyCode variable.",
    code: "keyPressed([event])",
    insert: "keyPressed()",
    syntax: [
      {
        parameter: "event: Object",
        description: "optional KeyboardEvent callback argument. (Optional)",
      },
    ],
  },
  {
    element: "keyReleased",
    description:
      "The keyReleased() function is called once every time a key is released. See key and keyCode for more information. Browsers may have different default behaviors attached to various key events. To prevent any default behavior for this event, add 'return false' to the end of the method.",
    code: "keyReleased([event])",
    insert: "keyReleased()",
    syntax: [
      {
        parameter: "event: Object",
        description: "optional KeyboardEvent callback argument. (Optional)",
      },
    ],
  },
  {
    element: "keyTyped",
    description:
      "The keyTyped() function is called once every time a key is pressed, but action keys such as Backspace, Delete, Ctrl, Shift, and Alt are ignored. If you are trying to detect a keyCode for one of these keys, use the keyPressed() function instead. The most recent key typed will be stored in the key variable.",
    code: "keyTyped([event])",
    insert: "keyTyped()",
    syntax: [
      {
        parameter: "event: Object",
        description: "optional KeyboardEvent callback argument. (Optional)",
      },
    ],
  },
  {
    element: "keyIsDown",
    description:
      "The keyIsDown() function checks if the key is currently down, i.e. pressed. It can be used if you have an object that moves, and you want several keys to be able to affect its behaviour simultaneously, such as moving a sprite diagonally.",
    code: "keyIsDown(code)",
    insert: "keyIsDown(${1:code})",
    syntax: [
      {
        parameter: "code: Number",
        description: "The key to check for.",
      },
    ],
    return: {
      type: "Boolean",
      description: "whether key is down or not",
    },
  },
  {
    element: "movedX",
    description:
      "The variable movedX contains the horizontal movement of the mouse since the last frame",
    code: "movedX",
    insert: "movedX",
    syntax: [
    ],
  },
  {
    element: "movedY",
    description:
      "The variable movedY contains the vertical movement of the mouse since the last frame",
    code: "movedY",
    insert: "movedY",
    syntax: [
    ],
  },
  {
    element: "mouseX",
    description:
      "The system variable mouseX always contains the current horizontal position of the mouse, relative to (0, 0) of the canvas. The value at the top-left corner is (0, 0) for 2-D and (-width/2, -height/2) for WebGL. If touch is used instead of mouse input, mouseX will hold the x value of the most recent touch point.",
    code: "mouseX",
    insert: "mouseX",
    syntax: [
    ],
  },
  {
    element: "mouseY",
    description:
      "The system variable mouseY always contains the current vertical position of the mouse, relative to (0, 0) of the canvas. The value at the top-left corner is (0, 0) for 2-D and (-width/2, -height/2) for WebGL. If touch is used instead of mouse input, mouseY will hold the y value of the most recent touch point.",
    code: "mouseY",
    insert: "mouseY",
    syntax: [
    ],
  },
  {
    element: "pmouseX",
    description:
      "The system variable pmouseX always contains the horizontal position of the mouse or finger in the frame previous to the current frame, relative to (0, 0) of the canvas. The value at the top-left corner is (0, 0) for 2-D and (-width/2, -height/2) for WebGL. Note: pmouseX will be reset to the current mouseX value at the start of each touch event.",
    code: "pmouseX",
    insert: "pmouseX",
    syntax: [
    ],
  },
  {
    element: "pmouseY",
    description:
      "The system variable pmouseY always contains the vertical position of the mouse or finger in the frame previous to the current frame, relative to (0, 0) of the canvas. The value at the top-left corner is (0, 0) for 2-D and (-width/2, -height/2) for WebGL. Note: pmouseY will be reset to the current mouseY value at the start of each touch event.",
    code: "pmouseY",
    insert: "pmouseY",
    syntax: [
    ],
  },
  {
    element: "winMouseX",
    description:
      "The system variable winMouseX always contains the current horizontal position of the mouse, relative to (0, 0) of the window.",
    code: "winMouseX",
    insert: "winMouseX",
    syntax: [
    ],
  },
  {
    element: "winMouseY",
    description:
      "The system variable winMouseY always contains the current vertical position of the mouse, relative to (0, 0) of the window.",
    code: "winMouseY",
    insert: "winMouseY",
    syntax: [
    ],
  },
  {
    element: "pwinMouseX",
    description:
      "The system variable pwinMouseX always contains the horizontal position of the mouse in the frame previous to the current frame, relative to (0, 0) of the window. Note: pwinMouseX will be reset to the current winMouseX value at the start of each touch event.",
    code: "pwinMouseX",
    insert: "pwinMouseX",
    syntax: [
    ],
  },
  {
    element: "pwinMouseY",
    description:
      "The system variable pwinMouseY always contains the vertical position of the mouse in the frame previous to the current frame, relative to (0, 0) of the window. Note: pwinMouseY will be reset to the current winMouseY value at the start of each touch event.",
    code: "pwinMouseY",
    insert: "pwinMouseY",
    syntax: [
    ],
  },
  {
    element: "mouseButton",
    description:
      "p5 automatically tracks if the mouse button is pressed and which button is pressed. The value of the system variable mouseButton is either LEFT, RIGHT, or CENTER depending on which button was pressed last. Warning: different browsers may track mouseButton differently.",
    code: "mouseButton",
    insert: "mouseButton",
    syntax: [
    ],
  },
  {
    element: "mouseIsPressed",
    description:
      "The boolean system variable mouseIsPressed is true if the mouse is pressed and false if not.",
    code: "mouseIsPressed",
    insert: "mouseIsPressed",
    syntax: [
    ],
  },
  {
    element: "mouseMoved",
    description:
      "The mouseMoved() function is called every time the mouse moves and a mouse button is not pressed. Browsers may have different default behaviors attached to various mouse events. To prevent any default behavior for this event, add 'return false' to the end of the method.",
    code: "mouseMoved([event])",
    insert: "mouseMoved()",
    syntax: [
      {
        parameter: "event: Object",
        description: "optional MouseEvent callback argument. (Optional)",
      },
    ],
  },
  {
    element: "mouseDragged",
    description:
      "The mouseDragged() function is called once every time the mouse moves and a mouse button is pressed. If no mouseDragged() function is defined, the touchMoved() function will be called instead if it is defined. Browsers may have different default behaviors attached to various mouse events. To prevent any default behavior for this event, add 'return false' to the end of the method.",
    code: "mouseDragged([event])",
    insert: "mouseDragged()",
    syntax: [
      {
        parameter: "event: Object",
        description: "optional MouseEvent callback argument. (Optional)",
      },
    ],
  },
  {
    element: "mousePressed",
    description:
      "The mousePressed() function is called once after every time a mouse button is pressed. The mouseButton variable (see the related reference entry) can be used to determine which button has been pressed. If no mousePressed() function is defined, the touchStarted() function will be called instead if it is defined. Browsers may have different default behaviors attached to various mouse events. To prevent any default behavior for this event, add 'return false' to the end of the method.",
    code: "mousePressed([event])",
    insert: "mousePressed()",
    syntax: [
      {
        parameter: "event: Object",
        description: "optional MouseEvent callback argument. (Optional)",
      },
    ],
  },
  {
    element: "mouseReleased",
    description:
      "The mouseReleased() function is called every time a mouse button is released. If no mouseReleased() function is defined, the touchEnded() function will be called instead if it is defined. Browsers may have different default behaviors attached to various mouse events. To prevent any default behavior for this event, add 'return false' to the end of the method.",
    code: "mouseReleased([event])",
    insert: "mouseReleased()",
    syntax: [
      {
        parameter: "event: Object",
        description: "optional MouseEvent callback argument. (Optional)",
      },
    ],
  },
  {
    element: "mouseClicked",
    description:
      "The mouseClicked() function is called once after a mouse button has been pressed and then released. Browsers handle clicks differently, so this function is only guaranteed to be run when the left mouse button is clicked.",
    code: "mouseClicked([event])",
    insert: "mouseClicked()",
    syntax: [
      {
        parameter: "event: Object",
        description: "optional MouseEvent callback argument. (Optional)",
      },
    ],
  },
  {
    element: "doubleClicked",
    description:
      "The doubleClicked() function is executed every time a event listener has detected a dblclick event which is a part of the DOM L3 specification. The doubleClicked event is fired when a pointing device button (usually a mouse's primary button) is clicked twice on a single element.",
    code: "doubleClicked([event])",
    insert: "doubleClicked()",
    syntax: [
      {
        parameter: "event: Object",
        description: "optional MouseEvent callback argument. (Optional)",
      },
    ],
  },
  {
    element: "mouseWheel",
    description:
      "The function mouseWheel() is executed every time a vertical mouse wheel event is detected either triggered by an actual mouse wheel or by a touchpad. The event.delta property returns the amount the mouse wheel have scrolled. The values can be positive or negative depending on the scroll direction (on OS X with 'natural' scrolling enabled, the signs are inverted).",
    code: "mouseWheel([event])",
    insert: "mouseWheel()",
    syntax: [
      {
        parameter: "event: Object",
        description: "optional WheelEvent callback argument. (Optional)",
      },
    ],
  },
  {
    element: "requestPointerLock",
    description:
      "The function requestPointerLock() locks the pointer to its current position and makes it invisible. Use movedX and movedY to get the difference the mouse was moved since the last call of draw. Note that not all browsers support this feature. This enables you to create experiences that aren't limited by the mouse moving out of the screen even if it is repeatedly moved into one direction. For example, a first person perspective experience.",
    code: "requestPointerLock()",
    insert: "requestPointerLock()",
    syntax: [
    ],
  },
  {
    element: "exitPointerLock",
    description:
      "The function exitPointerLock() exits a previously triggered pointer Lock for example to make ui elements usable etc",
    code: "exitPointerLock()",
    insert: "exitPointerLock()",
    syntax: [
    ],
  },
  {
    element: "touches",
    description:
      "The system variable touches[] contains an array of the positions of all current touch points, relative to (0, 0) of the canvas, and IDs identifying a unique touch as it moves. Each element in the array is an object with x, y, and id properties. The touches[] array is not supported on Safari and IE on touch-based desktops (laptops).",
    code: "touches",
    insert: "touches",
    syntax: [
    ],
  },
  {
    element: "touchStarted",
    description:
      "The touchStarted() function is called once after every time a touch is registered. If no touchStarted() function is defined, the mousePressed() function will be called instead if it is defined.",
    code: "touchStarted([event])",
    insert: "touchStarted()",
    syntax: [
      {
        parameter: "event: Object",
        description: "optional TouchEvent callback argument. (Optional)",
      },
    ],
  },
  {
    element: "touchMoved",
    description:
      "The touchMoved() function is called every time a touch move is registered. If no touchMoved() function is defined, the mouseDragged() function will be called instead if it is defined.",
    code: "touchMoved([event])",
    insert: "touchMoved()",
    syntax: [
      {
        parameter: "event: Object",
        description: "optional TouchEvent callback argument. (Optional)",
      },
    ],
  },
  {
    element: "touchEnded",
    description:
      "The touchEnded() function is called every time a touch ends. If no touchEnded() function is defined, the mouseReleased() function will be called instead if it is defined.",
    code: "touchEnded([event])",
    insert: "touchEnded()",
    syntax: [
      {
        parameter: "event: Object",
        description: "optional TouchEvent callback argument. (Optional)",
      },
    ],
  },
  {
    element: "createImage",
    description:
      "Creates a new p5.Image (the datatype for storing images). This provides a fresh buffer of pixels to play with. Set the size of the buffer with the width and height parameters.",
    code: "createImage(width, height)",
    insert: "createImage(${1:width}, ${2:height})",
    syntax: [
      {
        parameter: "width: Integer",
        description: "width in pixels",
      },
      {
        parameter: "height: Integer",
        description: "height in pixels",
      },
    ],
    return: {
      type: "p5.Image",
      description: "the p5.Image object",
    },
  },
  {
    element: "saveCanvas",
    description: "Save the current canvas as an image. The browser will either save the file immediately, or prompt the user with a dialogue window.",
    code: "saveCanvas(selectedCanvas, [filename], [extension]), saveCanvas([filename], [extension])",
    insert: "saveCanvas(${1:selectedCanvas})",
    syntax: [
      {
        parameter: "selectedCanvas: p5.Element|HTMLCanvasElement",
        description: "a variable representing a specific html5 canvas (optional)",
      },
      {
        parameter: "filename: String",
        description: "(Optional)",
      },
      {
        parameter: "extension: String",
        description: "'jpg' or 'png' (Optional)",
      },
    ],
  },
  {
    element: "saveFrames",
    description: "Capture a sequence of frames that can be used to create a movie. Accepts a callback. For example, you may wish to send the frames to a server where they can be stored or converted into a movie. If no callback is provided, the browser will pop up save dialogues in an attempt to download all of the images that have just been created. With the callback provided the image data isn't saved by default but instead passed as an argument to the callback function as an array of objects, with the size of array equal to the total number of frames. Note that saveFrames() will only save the first 15 frames of an animation. To export longer animations, you might look into a library like ccapture.js.",
    code: "saveFrames(filename, extension, duration, framerate, [callback])",
    insert: "saveFrames(${1:filename}, ${2:extension}, ${3:duration}, ${4:framerate})",
    syntax: [
      {
        parameter: "filename: String",
        description: "",
      },
      {
        parameter: "extension: String",
        description: "'jpg' or 'png'",
      },
      {
        parameter: "duration: Number",
        description: "Duration in seconds to save the frames for.",
      },
      {
        parameter: "framerate: Number",
        description: "Framerate to save the frames in.",
      },
      {
        parameter: "callback: Function(Array)",
        description: "A callback function that will be executed to handle the image data. This function should accept an array as argument. The array will contain the specified number of frames of objects. Each object has three properties: imageData - an image/octet-stream, filename and extension. (Optional)",
      },
    ],
  },
  {
    element: "p5.Image",
    description:
      "Creates a new p5.Image. A p5.Image is a canvas backed representation of an image. p5 can display .gif, .jpg and .png images. Images may be displayed in 2D and 3D space. Before an image is used, it must be loaded with the loadImage() function. The p5.Image class contains fields for the width and height of the image, as well as an array called pixels[] that contains the values for every pixel in the image.",
    code: "new p5.Image(width, height)",
    insert: "new p5.Image(${1:width}, ${2:height})",
    syntax: [
      {
        parameter: "width: Number",
        description: "",
      },
      {
        parameter: "height: Number",
        description: "",
      },
    ],
  },
  {
    element: "loadImage",
    description:
      "Loads an image from a path and creates a p5.Image from it. The image may not be immediately available for rendering. If you want to ensure that the image is ready before doing anything with it, place the loadImage() call in preload(). You may also supply a callback function to handle the image when it's ready.",
    code: "loadImage(path, [successCallback], [failureCallback])",
    insert: "loadImage(${1:path})",
    syntax: [
      {
        parameter: "path: String",
        description: "Path of the image to be loaded",
      },
      {
        parameter: "successCallback: function(p5.Image)",
        description:
          "Function to be called once the image is loaded. Will be passed the p5.Image. (Optional)",
      },
      {
        parameter: "failureCallback: function(Event)",
        description:
          "called with event error if the image fails to load. (Optional)",
      },
    ],
    return: {
      type: "p5.Image",
      description: "the p5.Image object",
    },
  },
  {
    element: "image",
    description:
      "Draw an image to the p5.js canvas. This function can be used with different numbers of parameters. The simplest use requires only three parameters: img, x, and y—where (x, y) is the position of the image. Two more parameters can optionally be added to specify the width and height of the image.",
    code: "image(img, x, y, [width], [height]), image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight])",
    insert: "image(${1:img}, ${2:x}, ${3:y})",
    syntax: [
      {
        parameter: "img: p5.Image|p5.Element|p5.Texture",
        description: "the image to display",
      },
      {
        parameter: "x: Number",
        description: "the x-coordinate of the top-left corner of the image",
      },
      {
        parameter: "y: Number",
        description: "the y-coordinate of the top-left corner of the image",
      },
      {
        parameter: "width: Number",
        description: "the width to draw the image (Optional)",
      },
      {
        parameter: "height: Number",
        description: "the height to draw the image (Optional)",
      },
      {
        parameter: "dx: Number",
        description: "the x-coordinate of the destination rectangle in which to draw the source image",
      },
      {
        parameter: "dy: Number",
        description:
          "the y-coordinate of the destination rectangle in which to draw the source image",
      },
      {
        parameter: "dWidth: Number",
        description:
          "the width of the destination rectangle",
      },
      {
        parameter: "dHeight: Number",
        description:
          "the height of the destination rectangle",
      },
      {
        parameter: "sx: Number",
        description:
          "the x-coordinate of the subsection of the source image to draw into the destination rectangle",
      },
      {
        parameter: "sy: Number",
        description:
          "the y-coordinate of the subsection of the source image to draw into the destination rectangle",
      },
      {
        parameter: "sWidth: Number",
        description:
          "the width of the subsection of the source image to draw into the destination rectangle (Optional)",
      },
      {
        parameter: "sHeight: Number",
        description:
          "the height of the subsection of the source image to draw into the destination rectangle (Optional)",
      },
    ],
  },
  {
    element: "tint",
    description:
      "Sets the fill value for displaying images. Images can be tinted to specified colors or made transparent by including an alpha value. To apply transparency to an image without affecting its color, use white as the tint color and specify an alpha value. For instance, tint(255, 128) will make an image 50% transparent (assuming the default alpha range of 0-255, which can be changed with colorMode()). The value for the gray parameter must be less than or equal to the current maximum value as specified by colorMode(). The default maximum value is 255.",
    code: "tint(v1, v2, v3, [alpha]), tint(value), tint(gray, [alpha]), tint(values), tint(color)",
    insert: "tint(${1:v1}, ${2:v2}, ${3:v3})",
    syntax: [
      {
        parameter: "v1: Number",
        description: "red or hue value relative to the current color range",
      },
      {
        parameter: "v2: Number",
        description:
          "green or saturation value relative to the current color range",
      },
      {
        parameter: "v3: Number",
        description:
          "blue or brightness value relative to the current color range",
      },
      {
        parameter: "alpha: Number",
        description:
          "(Optional)",
      },
      {
        parameter: "value: String",
        description: "a color string",
      },
      {
        parameter: "gray: Number",
        description: "a gray value",
      },
      {
        parameter: "values: Number[]",
        description:
          "an array containing the red,green,blue & and alpha components of the color",
      },
      {
        parameter: "color: p5.Color",
        description: "the tint color",
      },
    ],
  },
  {
    element: "noTint",
    description:
      "Removes the current fill value for displaying images and reverts to displaying images with their original hues.",
    code: "noTint()",
    insert: "noTint()",
    syntax: [
    ],
  },
  {
    element: "imageMode",
    description:
      "Set image mode. Modifies the location from which images are drawn by changing the way in which parameters given to image() are interpreted. The default mode is imageMode(CORNER), which interprets the second and third parameters of image() as the upper-left corner of the image. If two additional parameters are specified, they are used to set the image's width and height.",
    code: "imageMode(mode)",
    insert: "imageMode(${1:mode})",
    syntax: [
      {
        parameter: "mode: Constant",
        description: "either CORNER, CORNERS, or CENTER",
      },
    ],
  },
  {
    element: "pixels",
    description:
      "Uint8ClampedArray containing the values for all the pixels in the display window. These values are numbers. This array is the size (include an appropriate factor for pixelDensity) of the display window x4, representing the R, G, B, A values in order for each pixel, moving from left to right across each row, then down each column. Retina and other high density displays will have more pixels[] (by a factor of pixelDensity^2). For example, if the image is 100×100 pixels, there will be 40,000. On a retina display, there will be 160,000.",
    code: "pixels",
    insert: "pixels",
    syntax: [
    ],
  },
  {
    element: "blend",
    description:
      "Copies a region of pixels from one image to another, using a specified blend mode to do the operation.",
    code: "blend(srcImage, sx, sy, sw, sh, dx, dy, dw, dh, blendMode), blend(sx, sy, sw, sh, dx, dy, dw, dh, blendMode)",
    insert: "blend(${1:srcImage}, ${2:sx}, ${3:sy}, ${4:sw}, ${5:sh}, ${6:dx}, ${7:dy}, ${8:dw}, ${9:dh}, ${10:blendMode})",
    syntax: [
      {
        parameter: "srcImage: p5.Image",
        description: "source image",
      },
      {
        parameter: "sx: Integer",
        description:
          "X coordinate of the source's upper left corner",
      },
      {
        parameter: "sy: Integer",
        description:
          "Y coordinate of the source's upper left corner",
      },
      {
        parameter: "sw: Integer",
        description: "source image width",
      },
      {
        parameter: "sh: Integer",
        description: "source image height",
      },
      {
        parameter: "dx: Integer",
        description: "X coordinate of the destination's upper left corner",
      },
      {
        parameter: "dy: Integer",
        description:
          "Y coordinate of the destination's upper left corner",
      },
      {
        parameter: "dw: Integer",
        description:
          "destination image width",
      },
      {
        parameter: "dh: Integer",
        description:
          "destination image height",
      },
      {
        parameter: "blendMode: Constant",
        description:
          "the blend mode. either BLEND, DARKEST, LIGHTEST, DIFFERENCE, MULTIPLY, EXCLUSION, SCREEN, REPLACE, OVERLAY, HARD_LIGHT, SOFT_LIGHT, DODGE, BURN, ADD or NORMAL.",
      },
    ],
  },
  {
    element: "copy",
    description:
      "Copies a region of the canvas to another region of the canvas and copies a region of pixels from an image used as the srcImg parameter into the canvas srcImage is specified this is used as the source. If the source and destination regions aren't the same size, it will automatically resize source pixels to fit the specified target region.",
    code: "copy(srcImage, sx, sy, sw, sh, dx, dy, dw, dh), blend(sx, sy, sw, sh, dx, dy, dw, dh)",
    insert: "copy(${1:srcImage}, ${2:sx}, ${3:sy}, ${4:sw}, ${5:sh}, ${6:dx}, ${7:dy}, ${8:dw}, ${9:dh})",
    syntax: [
      {
        parameter: "srcImage: p5.Image|p5.Element",
        description: "source image",
      },
      {
        parameter: "sx: Integer",
        description:
          "X coordinate of the source's upper left corner",
      },
      {
        parameter: "sy: Integer",
        description:
          "Y coordinate of the source's upper left corner",
      },
      {
        parameter: "sw: Integer",
        description: "source image width",
      },
      {
        parameter: "sh: Integer",
        description: "source image height",
      },
      {
        parameter: "dx: Integer",
        description: "X coordinate of the destination's upper left corner",
      },
      {
        parameter: "dy: Integer",
        description:
          "Y coordinate of the destination's upper left corner",
      },
      {
        parameter: "dw: Integer",
        description:
          "destination image width",
      },
      {
        parameter: "dh: Integer",
        description:
          "destination image height",
      },
    ],
  },
  {
    element: "filter",
    description:
      "Applies a filter to the canvas.",
    code: "filter(filterType, [filterParam])",
    insert: "filter(${1:filterType})",
    syntax: [
      {
        parameter: "filterType: Constant",
        description: "either THRESHOLD, GRAY, OPAQUE, INVERT, POSTERIZE, BLUR, ERODE, DILATE or BLUR. See Filters.js for docs on each available filter",
      },
      {
        parameter: "filterParam: Number",
        description: "an optional parameter unique to each filter, see above (Optional)",
      },
    ],
  },
  {
    element: "get",
    description:
      "Get a region of pixels, or a single pixel, from the canvas. Returns an array of [R,G,B,A] values for any pixel or grabs a section of an image. If no parameters are specified, the entire image is returned. Use the x and y parameters to get the value of one pixel. Get a section of the display window by specifying additional w and h parameters. When getting an image, the x and y parameters define the coordinates for the upper-left corner of the image, regardless of the current imageMode().",
    code: "get(x, y, w, h), get(), get(x, y)",
    insert: "get(${1:x}, ${2:y}, ${3:w}, ${4:h})",
    syntax: [
      {
        parameter: "x: Number",
        description: "x-coordinate of the pixel",
      },
      {
        parameter: "y: Number",
        description: "y-coordinate of the pixel",
      },
      {
        parameter: "w: Number",
        description: "width",
      },
      {
        parameter: "h: Number",
        description: "height",
      },
    ],
    return: {
      type: "p5.Image",
      description: "the rectangle p5.Image",
    },
  },
  {
    element: "loadPixels",
    description:
      "Loads the pixel data for the display window into the pixels[] array. This function must always be called before reading from or writing to pixels[]. Note that only changes made with set() or direct manipulation of pixels[] will occur.",
    code: "loadPixels()",
    insert: "loadPixels()",
    syntax: [
    ],
  },
  {
    element: "set",
    description:
      "Changes the color of any pixel, or writes an image directly to the display window. The x and y parameters specify the pixel to change and the c parameter specifies the color value. This can be a p5.Color object, or [R, G, B, A] pixel array. It can also be a single grayscale value. When setting an image, the x and y parameters define the coordinates for the upper-left corner of the image, regardless of the current imageMode(). After using set(), you must call updatePixels() for your changes to appear. This should be called once all pixels have been set, and must be called before calling .get() or drawing the image.",
    code: "set(x, y, c)",
    insert: "set(${1:x}, ${2:y}, ${3:c})",
    syntax: [
      {
        parameter: "x: Number",
        description: "x-coordinate of the pixel",
      },
      {
        parameter: "y: Number",
        description: "y-coordinate of the pixel",
      },
      {
        parameter: "c: Number|Number[]|Object",
        description: "insert a grayscale value | a pixel array | a p5.Color object | a p5.Image to copy",
      },
    ],
  },
  {
    element: "updatePixels",
    description:
      "Updates the display window with the data in the pixels[] array. Use in conjunction with loadPixels(). If you're only reading pixels from the array, there's no need to call updatePixels() — updating is only necessary to apply changes. updatePixels() should be called anytime the pixels array is manipulated or set() is called, and only changes made with set() or direct changes to pixels[] will occur.",
    code: "updatePixels([x], [y], [w], [h])",
    insert: "updatePixels()",
    syntax: [
      {
        parameter: "x: Number",
        description: "x-coordinate of the upper-left corner of region to update (Optional)",
      },
      {
        parameter: "y: Number",
        description: "y-coordinate of the upper-left corner of region to update (Optional)",
      },
      {
        parameter: "w: Number",
        description: "width of region to update (Optional)",
      },
      {
        parameter: "h: Number",
        description: "height of region to update (Optional)",
      },
    ],
  },
  {
    element: "loadJSON",
    description:
      "Loads a JSON file from a file or a URL, and returns an Object. Note that even if the JSON file contains an Array, an Object will be returned with index numbers as keys. This method is asynchronous, meaning it may not finish before the next line in your sketch is executed. This method is suitable for fetching files up to size of 64MB.",
    code: "loadJSON(path, [jsonpOptions], [datatype], [callback], [errorCallback]), loadJSON(path, datatype, [callback], [errorCallback]), loadJSON(path, callback, [errorCallback])",
    insert: "loadJSON(${1:path})",
    syntax: [
      {
        parameter: "path: String",
        description: "name of the file or url to load",
      },
      {
        parameter: "jsonpOptions: Object",
        description: "options object for jsonp related settings (Optional)",
      },
      {
        parameter: "datatype: String",
        description: "'json or 'jsonp' (Optional)",
      },
      {
        parameter: "callback: Function",
        description: "function to be executed after loadJSON() completes, data is passed in as first argument (Optional)",
      },
      {
        parameter: "errorCallback: Function",
        description: "function to be executed if there is an error, response is passed in as first argument (Optional)",
      },
    ],
    return: {
      type: "Object|Array",
      description: "JSON data",
    },
  },
  {
    element: "loadStrings",
    description:
      "Reads the contents of a file and creates a String array of its individual lines. If the name of the file is used as the parameter, as in the above example, the file must be located in the sketch directory/folder.",
    code: "loadStrings(filename, [callback], [errorCallback])",
    insert: "loadStrings(${1:filename})",
    syntax: [
      {
        parameter: "filename: String",
        description: "name of the file or url to load",
      },
      {
        parameter: "callback: Function",
        description:
          "function to be executed after loadStrings() completes, Array is passed in as first argument (Optional)",
      },
      {
        parameter: "errorCallback: Function",
        description:
          "function to be executed if there is an error, response is passed in as first argument (Optional)",
      },
    ],
    return: {
      type: "String[]",
      description: "Array of Strings",
    },
  },
  {
    element: "loadTable",
    description:
      "Reads the contents of a file or URL and creates a p5.Table object with its values. If a file is specified, it must be located in the sketch's 'data' folder. The filename parameter can also be a URL to a file found online. By default, the file is assumed to be comma-separated (in CSV format). Table only looks for a header row if the 'header' option is included. This method is asynchronous, meaning it may not finish before the next line in your sketch is executed.",
    code: "loadTable(filename, [extension], [header], [callback], [errorCallback])",
    insert: "loadTable(${1:filename})",
    syntax: [
      {
        parameter: "filename: String",
        description: "name of the file or url to load",
      },
      {
        parameter: "extension: String",
        description: "parse the table by comma-separated values 'csv', semicolon-separated values 'ssv', or tab-separated values 'tsv' (Optional)",
      },
      {
        parameter: "header: String",
        description: "'header' to indicate table has header row (Optional)",
      },
      {
        parameter: "callback: Function",
        description:
          "function to be executed after loadTable() completes. On success, the Table object is passed in as the first argument. (Optional)",
      },
      {
        parameter: "errorCallback: Function",
        description:
          "function to be executed if there is an error, response is passed in as first argument (Optional)",
      },
    ],
    return: {
      type: "Object",
      description: "Table object containing data",
    },
  },
  {
    element: "loadXML",
    description:
      "Reads the contents of a file and creates an XML object with its values. If the name of the file is used as the parameter, as in the above example, the file must be located in the sketch directory/folder. This method is asynchronous, meaning it may not finish before the next line in your sketch is executed. This method is suitable for fetching files up to size of 64MB.",
    code: "loadXML(filename, [callback], [errorCallback])",
    insert: "loadXML(${1:filename})",
    syntax: [
      {
        parameter: "filename: String",
        description: "name of the file or url to load",
      },
      {
        parameter: "callback: Function",
        description:
          "function to be executed after loadXML() completes, XML object is passed in as first argument (Optional)",
      },
      {
        parameter: "errorCallback: Function",
        description:
          "function to be executed if there is an error, response is passed in as first argument (Optional)",
      },
    ],
    return: {
      type: "Object",
      description: "XML object containing data",
    },
  },
  {
    element: "loadBytes",
    description:
      "This method is suitable for fetching files up to size of 64MB.",
    code: "loadBytes(file, [callback], [errorCallback])",
    insert: "loadBytes(${1:file})",
    syntax: [
      {
        parameter: "file: String",
        description: "name of the file or url to load",
      },
      {
        parameter: "callback: Function",
        description:
          "function to be executed after loadBytes() completes (Optional)",
      },
      {
        parameter: "errorCallback: Function",
        description:
          "function to be executed if there is an error (Optional)",
      },
    ],
    return: {
      type: "Object",
      description: "an object whose 'bytes' property will be the loaded buffer",
    },
  },
  {
    element: "httpGet",
    description:
      "Method for executing an HTTP GET request. If data type is not specified, p5 will try to guess based on the URL, defaulting to text. This is equivalent to calling httpDo(path, 'GET'). The 'binary' datatype will return a Blob object, and the 'arrayBuffer' datatype will return an ArrayBuffer which can be used to initialize typed arrays (such as Uint8Array).",
    code: "httpGet(path, [datatype], [data], [callback], [errorCallback]), httpGet(path, data, [callback], [errorCallback]), httpGet(path, callback, [errorCallback])",
    insert: "httpGet(${1:path})",
    syntax: [
      {
        parameter: "path: String",
        description: "name of the file or url to load",
      },
      {
        parameter: "datatype: String",
        description:
          "'json', 'jsonp', 'binary', 'arrayBuffer', 'xml', or 'text' (Optional)",
      },
      {
        parameter: "data: Object|Boolean",
        description:
          "param data passed sent with request (Optional)",
      },
      {
        parameter: "callback: Function",
        description:
          "function to be executed after httpGet() completes, data is passed in as first argument (Optional)",
      },
      {
        parameter: "errorCallback: Function",
        description:
          "function to be executed if there is an error, response is passed in as first argument (Optional)",
      },
    ],
    return: {
      type: "Promise",
      description: "A promise that resolves with the data when the operation completes successfully or rejects with the error after one occurs.",
    },
  },
  {
    element: "httpPost",
    description:
      "Method for executing an HTTP POST request. If data type is not specified, p5 will try to guess based on the URL, defaulting to text. This is equivalent to calling httpDo(path, 'POST').",
    code: "httpPost(path, [datatype], [data], [callback], [errorCallback]), httpPost(path, data, [callback], [errorCallback]), httpPost(path, callback, [errorCallback])",
    insert: "httpPost(${1:path})",
    syntax: [
      {
        parameter: "path: String",
        description: "name of the file or url to load",
      },
      {
        parameter: "datatype: String",
        description:
          "'json', 'jsonp', 'xml', or 'text'. If omitted, httpPost() will guess. (Optional)",
      },
      {
        parameter: "data: Object|Boolean",
        description:
          "param data passed sent with request (Optional)",
      },
      {
        parameter: "callback: Function",
        description:
          "function to be executed after httpPost() completes, data is passed in as first argument (Optional)",
      },
      {
        parameter: "errorCallback: Function",
        description:
          "function to be executed if there is an error, response is passed in as first argument (Optional)",
      },
    ],
    return: {
      type: "Promise",
      description: "A promise that resolves with the data when the operation completes successfully or rejects with the error after one occurs.",
    },
  },
  {
    element: "httpDo",
    description:
      "Method for executing an HTTP request. If data type is not specified, p5 will try to guess based on the URL, defaulting to text. For more advanced use, you may also pass in the path as the first argument and a object as the second argument, the signature follows the one specified in the Fetch API specification. This method is suitable for fetching files up to size of 64MB when 'GET' is used.",
    code: "httpDo(path, [method], [datatype], [data], [callback], [errorCallback]), httpDo(path, options, [callback], [errorCallback])",
    insert: "httpDo(${1:path})",
    syntax: [
      {
        parameter: "path: String",
        description: "name of the file or url to load",
      },
      {
        parameter: "method: String",
        description:
          "either 'GET', 'POST', or 'PUT', defaults to 'GET' (Optional)",
      },
      {
        parameter: "datatype: String",
        description:
          "'json', 'jsonp', 'xml', or 'text' (Optional)",
      },
      {
        parameter: "data: Object",
        description:
          "param data passed sent with request (Optional)",
      },
      {
        parameter: "callback: Function",
        description:
          "function to be executed after httpDo() completes, data is passed in as first argument (Optional)",
      },
      {
        parameter: "errorCallback: Function",
        description:
          "function to be executed if there is an error, response is passed in as first argument (Optional)",
      },
      {
        parameter: "options: Object",
        description:
          "Request object options as documented in the 'fetch' API reference",
      },
    ],
    return: {
      type: "Promise",
      description: "A promise that resolves with the data when the operation completes successfully or rejects with the error after one occurs.",
    },
  },
  {
    element: "p5.XML",
    description:
      "XML is a representation of an XML object, able to parse XML code. Use loadXML() to load external XML files and create XML objects.",
    code: "new p5.XML()",
    insert: "new p5.XML()",
    syntax: [
    ],
  },
  {
    element: "createWriter",
    description: "",
    code: "createWriter(name, [extension])",
    insert: "createWriter(${1:name})",
    syntax: [
      {
        parameter: "name: String",
        description: "name of the file to be created",
      },
      {
        parameter: "extension: String",
        description:
          "(Optional)",
      },
    ],
    return: {
      type: "p5.PrintWriter",
      description: "",
    },
  },
  {
    element: "save",
    description: "Saves a given element(image, text, json, csv, wav, or html) to the client's computer. The first parameter can be a pointer to element we want to save. The element can be one of p5.Element,an Array of Strings, an Array of JSON, a JSON object, a p5.Table , a p5.Image, or a p5.SoundFile (requires p5.sound). The second parameter is a filename (including extension).The third parameter is for options specific to this type of object. This method will save a file that fits the given parameters. If it is called without specifying an element, by default it will save the whole canvas as an image file. You can optionally specify a filename as the first parameter in such a case. Note that it is not recommended to call this method within draw, as it will open a new save dialog on every render.",
    code: "save([objectOrFilename], [filename], [options])",
    insert: "save()",
    syntax: [
      {
        parameter: "objectOrFilename: Object|String",
        description: "If filename is provided, will save canvas as an image with either png or jpg extension depending on the filename. If object is provided, will save depending on the object and filename (see examples above). (Optional)",
      },
      {
        parameter: "filename: String",
        description:
          "If an object is provided as the first parameter, then the second parameter indicates the filename, and should include an appropriate file extension (see examples above). (Optional)",
      },
      {
        parameter: "options: Boolean|String",
        description:
          "Additional options depend on filetype. For example, when saving JSON, true indicates that the output will be optimized for filesize, rather than readability. (Optional)",
      },
    ],
  },
  {
    element: "saveJSON",
    description: "Writes the contents of an Array or a JSON object to a .json file. The file saving process and location of the saved file will vary between web browsers.",
    code: "saveJSON(json, filename, [optimize])",
    insert: "saveJSON(${1:json}, ${2:filename})",
    syntax: [
      {
        parameter: "json: Array|Object",
        description: "",
      },
      {
        parameter: "filename: String",
        description:
          "",
      },
      {
        parameter: "optimize: Boolean",
        description:
          "If true, removes line breaks and spaces from the output file to optimize filesize (but not readability). (Optional)",
      },
    ],
  },
  {
    element: "saveStrings",
    description: "Writes an array of Strings to a text file, one line per String. The file saving process and location of the saved file will vary between web browsers.",
    code: "saveStrings(list, filename, [extension], [isCRLF])",
    insert: "saveStrings(${1:list}, ${2:filename})",
    syntax: [
      {
        parameter: "list: String[]",
        description: "string array to be written",
      },
      {
        parameter: "filename: String",
        description:
          "filename for output",
      },
      {
        parameter: "extension: String",
        description:
          "the filename's extension (Optional)",
      },
      {
        parameter: "isCRLF: Boolean",
        description:
          "if true, change line-break to CRLF (Optional)",
      },
    ],
  },
  {
    element: "saveTable",
    description: "Writes the contents of a Table object to a file. Defaults to a text file with comma-separated-values ('csv') but can also use tab separation ('tsv'), or generate an HTML table ('html'). The file saving process and location of the saved file will vary between web browsers.",
    code: "saveTable(Table, filename, [options])",
    insert: "saveTable(${1:Table}, ${2:filename})",
    syntax: [
      {
        parameter: "Table: p5.Table",
        description: "the Table object to save to a file",
      },
      {
        parameter: "filename: String",
        description:
          "the filename to which the Table should be saved",
      },
      {
        parameter: "options: String",
        description:
          "can be one of 'tsv', 'csv', or 'html' (Optional)",
      },
    ],
  },
  {
    element: "p5.Table",
    description:
      "Table objects store data with multiple rows and columns, much like in a traditional spreadsheet. Tables can be generated from scratch, dynamically, or using data from an existing file.",
    code: "new p5.Table([rows])",
    insert: "new p5.Table()",
    syntax: [
      {
        parameter: "rows: p5.TableRow[]",
        description:
          "An array of p5.TableRow objects (Optional)",
      },
    ],
  },
  {
    element: "p5.TableRow",
    description:
      "A TableRow object represents a single row of data values, stored in columns, from a table. A Table Row contains both an ordered array, and an unordered JSON object.",
    code: "new p5.TableRow([str], [separator])",
    insert: "new p5.TableRow()",
    syntax: [
      {
        parameter: "str: String",
        description:
          "optional: populate the row with a string of values, separated by the separator (Optional)",
      },
      {
        parameter: "separator: String",
        description:
          "comma separated values (csv) by default (Optional)",
      },
    ],
  },
  {
    element: "day",
    description: "p5.js communicates with the clock on your computer. The day() function returns the current day as a value from 1 - 31.",
    code: "day()",
    insert: "day()",
    syntax: [
    ],
    return: {
      type: "Integer",
      description: "the current day",
    },
  },
  {
    element: "hour",
    description: "p5.js communicates with the clock on your computer. The hour() function returns the current hour as a value from 0 - 23.",
    code: "hour()",
    insert: "hour()",
    syntax: [
    ],
    return: {
      type: "Integer",
      description: "the current hour",
    },
  },
  {
    element: "minute",
    description: "p5.js communicates with the clock on your computer. The minute() function returns the current minute as a value from 0 - 59.",
    code: "minute()",
    insert: "minute()",
    syntax: [
    ],
    return: {
      type: "Integer",
      description: "the current minute",
    },
  },
  {
    element: "millis",
    description: "Returns the number of milliseconds (thousandths of a second) since starting the sketch (when setup() is called). This information is often used for timing events and animation sequences.",
    code: "millis()",
    insert: "millis()",
    syntax: [
    ],
    return: {
      type: "Number",
      description: "the number of milliseconds since starting the sketch",
    },
  },
  {
    element: "month",
    description: "p5.js communicates with the clock on your computer. The month() function returns the current month as a value from 1 - 12.",
    code: "month()",
    insert: "month()",
    syntax: [
    ],
    return: {
      type: "Integer",
      description: "the current month",
    },
  },
  {
    element: "second",
    description: "p5.js communicates with the clock on your computer. The second() function returns the current second as a value from 0 - 59.",
    code: "second()",
    insert: "second()",
    syntax: [
    ],
    return: {
      type: "Integer",
      description: "the current second",
    },
  },
  {
    element: "year",
    description: "p5.js communicates with the clock on your computer. The year() function returns the current year as an integer (2014, 2015, 2016, etc).",
    code: "year()",
    insert: "year()",
    syntax: [
    ],
    return: {
      type: "Integer",
      description: "the current year",
    },
  },
];
