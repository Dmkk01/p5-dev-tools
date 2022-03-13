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