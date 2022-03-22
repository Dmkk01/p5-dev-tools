export const classesP5 = [
  {
    element: "p5.Color",
    insert: "new p5.Color()",
    code: "new p5.Color()",
    description:
      "Each color stores the color mode and level maxes that was applied at the time of its construction. These are used to interpret the input arguments (at construction and later for that instance of color) and to format the output e.g. when saturation() is requested.",
    parameters: [],
    fields: [],
    methods: [
      {
        name: "toString()",
        description:
          "This function returns the color formatted as a string. This can be useful for debugging, or for using p5.js with other libraries.",
      },
      {
        name: "setRed()",
        description:
          "The setRed function sets the red component of a color. The range depends on your color mode, in the default RGB mode it's between 0 and 255.",
      },
      {
        name: "setGreen()",
        description:
          "The setGreen function sets the green component of a color. The range depends on your color mode, in the default RGB mode it's between 0 and 255.",
      },
      {
        name: "setBlue()",
        description:
          "The setBlue function sets the blue component of a color. The range depends on your color mode, in the default RGB mode it's between 0 and 255.",
      },
      {
        name: "setAlpha()",
        description:
          "The setAlpha function sets the transparency (alpha) value of a color. The range depends on your color mode, in the default RGB mode it's between 0 and 255.",
      },
    ],
  },
  {
    element: "p5.Geometry",
    insert: "new p5.Geometry()",
    code: "new p5.Geometry([detailX], [detailY], [callback])",
    description: "p5 Geometry class",
    parameters: [
      {
        name: "detailX: Integer",
        description: "number of vertices along the x-axis. (Optional)",
      },
      {
        name: "detailY: Integer",
        description: "number of vertices along the y-axis. (Optional)",
      },
      {
        name: "callback: function",
        description: "function to call upon object instantiation. (Optional)",
      },
    ],
    fields: [],
    methods: [
      {
        name: "computeFaces()",
        description:
          "computes faces for geometry objects based on the vertices.",
      },
      {
        name: "computeNormals()",
        description:
          "computes smooth normals per vertex as an average of each face.",
      },
      {
        name: "averageNormals()",
        description: "Averages the vertex normals. Used in curved surfaces",
      },
      {
        name: "averagePoleNormals()",
        description: "Averages pole normals. Used in spherical primitives",
      },
      {
        name: "normalize()",
        description:
          "Modifies all vertices to be centered within the range -100 to 100.",
      },
    ],
  },
  {
    element: "p5.Element",
    insert: "new p5.Element(${1:elt})",
    code: "new p5.Element(elt, [pInst])",
    description:
      "Base class for all elements added to a sketch, including canvas, graphics buffers, and other HTML elements. It is not called directly, but p5.Element objects are created by calling createCanvas, createGraphics, createDiv, createImg, createInput, etc.",
    parameters: [
      {
        name: "elt: String",
        description: "DOM node that is wrapped",
      },
      {
        name: "pInst: P5",
        description: "pointer to p5 instance (Optional)",
      },
    ],
    fields: [
      {
        name: "elt",
        description:
          "Underlying HTML element. All normal HTML methods can be called on this.",
      },
    ],
    methods: [
      {
        name: "parent()",
        description:
          "Attaches the element to the parent specified. A way of setting the container for the element. Accepts either a string ID, DOM node, or p5.Element. If no arguments given, parent node is returned.",
      },
      {
        name: "id()",
        description:
          "Sets the ID of the element. If no ID argument is passed in, it instead returns the current ID of the element. Note that only one element can have a particular id in a page.",
      },
      {
        name: "class()",
        description:
          "Adds given class to the element. If no class argument is passed in, it instead returns a string containing the current class(es) of the element.",
      },
      {
        name: "mousePressed()",
        description:
          "The .mousePressed() function is called once after every time a mouse button is pressed over the element. Some mobile browsers may also trigger this event on a touch screen, if the user performs a quick tap.",
      },
      {
        name: "doubleClicked()",
        description:
          "The .doubleClicked() function is called once after every time a mouse button is pressed twice over the element. This can be used to attach element and action specific event listeners.",
      },
      {
        name: "mouseWheel()",
        description:
          "The mouseWheel() function is called once after every time a mouse wheel is scrolled over the element. This can be used to attach element specific event listeners. The function accepts a callback function as argument which will be executed when the wheel event is triggered on the element, the callback function is passed one argument event.",
      },
      {
        name: "mouseReleased()",
        description:
          "The mouseReleased() function is called once after every time a mouse button is released over the element. Some mobile browsers may also trigger this event on a touch screen, if the user performs a quick tap.",
      },
      {
        name: "mouseClicked()",
        description:
          "The .mouseClicked() function is called once after a mouse button is pressed and released over the element. Some mobile browsers may also trigger this event on a touch screen, if the user performs a quick tap.",
      },
      {
        name: "mouseMoved()",
        description:
          "The .mouseMoved() function is called once every time a mouse moves over the element. This can be used to attach an element specific event listener.",
      },
      {
        name: "mouseOver()",
        description:
          "The .mouseOver() function is called once after every time a mouse moves onto the element. ",
      },
      {
        name: "mouseOut()",
        description:
          "The .mouseOut() function is called once after every time a mouse moves off the element. This can be used to attach an element specific event listener.",
      },
      {
        name: "touchStarted()",
        description:
          "The .touchStarted() function is called once after every time a touch is registered. This can be used to attach element specific event listeners.",
      },
      {
        name: "touchMoved()",
        description:
          "The .touchMoved() function is called once after every time a touch move is registered. This can be used to attach element specific event listeners.",
      },
      {
        name: "touchEnded()",
        description:
          "The .touchEnded() function is called once after every time a touch is registered. This can be used to attach element specific event listeners.",
      },
      {
        name: "dragOver()",
        description:
          "The .dragOver() function is called once after every time a file is dragged over the element. This can be used to attach an element specific event listener.",
      },
      {
        name: "dragLeave()",
        description:
          "The .dragLeave() function is called once after every time a dragged file leaves the element area. This can be used to attach an element specific event listener.",
      },
      {
        name: "addClass()",
        description: "Adds specified class to the element.",
      },
      {
        name: "removeClass()",
        description: "Removes specified class from the element.",
      },
      {
        name: "hasClass()",
        description: "Checks if specified class already set to element",
      },
      {
        name: "toggleClass()",
        description: "Toggles element class",
      },
      {
        name: "child()",
        description:
          "Attaches the element as a child to the parent specified. Accepts either a string ID, DOM node, or p5.Element. If no argument is specified, an array of children DOM nodes is returned.",
      },
      {
        name: "center()",
        description:
          "If an argument is given, sets the inner HTML of the element, replacing any existing html. If true is included as a second argument, html is appended instead of replacing existing html. If no arguments are given, returns the inner HTML of the element.",
      },
      {
        name: "position()",
        description:
          "Sets the position of the element. If no position type argument is given, the position will be relative to (0, 0) of the window. ",
      },
      {
        name: "style()",
        description:
          "Sets the given style (css) property (1st arg) of the element with the given value (2nd arg). If a single argument is given, .style() returns the value of the given property; however, if the single argument is given in css syntax ('text-align:center'), .style() sets the css appropriately.",
      },
      {
        name: "attribute()",
        description:
          "Adds a new attribute or changes the value of an existing attribute on the specified element. If no value is specified, returns the value of the given attribute, or null if attribute is not set.",
      },
      {
        name: "removeAttribute()",
        description: "Removes an attribute on the specified element.",
      },
      {
        name: "value()",
        description:
          "Either returns the value of the element if no arguments given, or sets the value of the element.",
      },
      {
        name: "show()",
        description:
          "Shows the current element. Essentially, setting display:block for the style.",
      },
      {
        name: "hide()",
        description:
          " Hides the current element. Essentially, setting display:none for the style.",
      },
      {
        name: "size()",
        description:
          "Sets the width and height of the element. AUTO can be used to only adjust one dimension at a time. If no arguments are given, it returns the width and height of the element in an object.",
      },
      {
        name: "remove()",
        description:
          "Removes the element, stops all media streams, and deregisters all listeners.",
      },
      {
        name: "drop()",
        description:
          "Registers a callback that gets called every time a file that is dropped on the element has been loaded. p5 will load every dropped file into memory and pass it as a p5.File object to the callback.",
      },
    ],
  },
  {
    element: "p5.MediaElement",
    insert: "new p5.MediaElement(${1:elt})",
    code: "new p5.MediaElement(elt)",
    description:
      "Extends p5.Element to handle audio and video. In addition to the methods of p5.Element, it also contains methods for controlling media. It is not called directly, but p5.MediaElements are created by calling createVideo, createAudio, and createCapture.",
    parameters: [
      {
        name: "elt: String",
        description: "DOM node that is wrapped",
      },
    ],
    fields: [
      {
        name: "src",
        description: "Path to the media element source.",
      },
    ],
    methods: [
      {
        name: "play()",
        description: "Play an HTML5 media element.",
      },
      {
        name: "stop()",
        description:
          "Stops an HTML5 media element (sets current time to zero).",
      },
      {
        name: "pause()",
        description: "Pauses an HTML5 media element.",
      },
      {
        name: "loop()",
        description:
          "Set 'loop' to true for an HTML5 media element, and starts playing.",
      },
      {
        name: "noLoop()",
        description:
          "Set 'loop' to false for an HTML5 media element. Element will stop when it reaches the end.",
      },
      {
        name: "autoplay()",
        description:
          "Set HTML5 media element to autoplay or not. If no argument is specified, by default it will autoplay.",
      },
      {
        name: "volume()",
        description:
          "Sets volume for this HTML5 media element. If no argument is given, returns the current volume.",
      },
      {
        name: "speed()",
        description:
          "If no arguments are given, returns the current playback speed of the element. The speed parameter sets the speed where 2.0 will play the element twice as fast, 0.5 will play at half the speed, and -1 will play the element in normal speed in reverse.",
      },
      {
        name: "time()",
        description:
          " If no arguments are given, returns the current time of the element. If an argument is given the current time of the element is set to it.",
      },
      {
        name: "duration()",
        description: "Returns the duration of the HTML5 media element.",
      },
      {
        name: "onended()",
        description:
          "Schedule an event to be called when the audio or video element reaches the end. If the element is looping, this will not be called. The element is passed in as the argument to the onended callback.",
      },
      {
        name: "connect()",
        description:
          "Send the audio output of this element to a specified audioNode or p5.sound object. If no element is provided, connects to p5's main output. ",
      },
      {
        name: "disconnect()",
        description:
          "Disconnect all Web Audio routing, including to main output. This is useful if you want to re-route the output through audio effects, for example.",
      },
      {
        name: "showControls()",
        description:
          "Show the default MediaElement controls, as determined by the web browser.",
      },
      {
        name: "hideControls()",
        description: "Hide the default mediaElement controls.",
      },
      {
        name: "addCue()",
        description:
          "Schedule events to trigger every time a MediaElement (audio/video) reaches a playback cue point. Accepts a callback function, a time (in seconds) at which to trigger the callback, and an optional parameter for the callback. Time will be passed as the first parameter to the callback function, and param will be the second parameter.",
      },
      {
        name: "removeCue()",
        description:
          "Remove a callback based on its ID. The ID is returned by the addCue method.",
      },
      {
        name: "clearCues()",
        description:
          "Remove all of the callbacks that had originally been scheduled via the addCue method.",
      },
    ],
  },
  {
    element: "p5.File",
    insert: "new p5.File(${1:file})",
    code: "new p5.File(file)",
    description:
      "Base class for a file. Used for Element.drop and createFileInput.",
    parameters: [
      {
        name: "file: File",
        description: "File that is wrapped",
      },
    ],
    fields: [
      {
        name: "file",
        description:
          "Underlying File object. All normal File methods can be called on this.",
      },
      {
        name: "type",
        description: "File type (image, text, etc.)",
      },
      {
        name: "subtype",
        description:
          "File subtype (usually the file extension jpg, png, xml, etc.)",
      },
      {
        name: "name",
        description: "File name",
      },
      {
        name: "size",
        description: "File size",
      },
      {
        name: "data",
        description:
          "URL string containing either image data, the text contents of the file or a parsed object if file is JSON and p5.XML if XML",
      },
    ],
    methods: [],
  },
  {
    element: "p5.Graphics",
    insert: "new p5.Graphics(${1:w}, ${2:h}, ${3:renderer})",
    code: "new p5.Graphics(w, h, renderer, [pInst])",
    description:
      "Thin wrapper around a renderer, to be used for creating a graphics buffer object. Use this class if you need to draw into an off-screen graphics buffer. The two parameters define the width and height in pixels. The fields and methods for this class are extensive, but mirror the normal drawing API for p5.",
    parameters: [
      {
        name: "w: Number",
        description: "width",
      },
      {
        name: "h: Number",
        description: "height",
      },
      {
        name: "renderer: Constant",
        description: "the renderer to use, either P2D or WEBGL",
      },
      {
        name: "pInst: P5",
        description: "pointer to p5 instance (Optional)",
      },
    ],
    fields: [],
    methods: [
      {
        name: "reset()",
        description:
          "Resets certain values such as those modified by functions in the Transform category and in the Lights category that are not automatically reset with graphics buffer objects.",
      },
      {
        name: "remove()",
        description:
          "Removes a Graphics object from the page and frees any resources associated with it.",
      },
    ],
  },
  {
    element: "p5.TypedDict",
    insert: "new p5.TypedDict()",
    code: "new p5.TypedDict()",
    description:
      "Base class for all p5.Dictionary types. Specifically typed Dictionary classes inherit from this class.",
    parameters: [],
    fields: [],
    methods: [
      {
        name: "size()",
        description:
          "Returns the number of key-value pairs currently stored in the Dictionary.",
      },
      {
        name: "hasKey()",
        description:
          "Returns true if the given key exists in the Dictionary, otherwise returns false.",
      },
      {
        name: "get()",
        description: "Returns the value stored at the given key.",
      },
      {
        name: "set()",
        description:
          "Updates the value associated with the given key in case it already exists in the Dictionary. Otherwise a new key-value pair is added.",
      },
      {
        name: "create()",
        description: "Creates a new key-value pair in the Dictionary.",
      },
      {
        name: "clear()",
        description:
          "Removes all previously stored key-value pairs from the Dictionary.",
      },
      {
        name: "remove()",
        description:
          "Removes the key-value pair stored at the given key from the Dictionary.",
      },
      {
        name: "print()",
        description:
          "Logs the set of items currently stored in the Dictionary to the console.",
      },
      {
        name: "saveTable()",
        description:
          "Converts the Dictionary into a CSV file for local download.",
      },
      {
        name: "saveJSON()",
        description:
          "Converts the Dictionary into a JSON file for local download.",
      },
    ],
  },
  {
    element: "p5.NumberDict",
    insert: "new p5.NumberDict()",
    code: "new p5.NumberDict()",
    description: "A simple Dictionary class for Numbers. Extends p5.TypedDict",
    parameters: [],
    fields: [],
    methods: [
      {
        name: "add()",
        description:
          "Add the given number to the value currently stored at the given key. The sum then replaces the value previously stored in the Dictionary.",
      },
      {
        name: "sub()",
        description:
          "Subtract the given number from the value currently stored at the given key. The difference then replaces the value previously stored in the Dictionary.",
      },
      {
        name: "mult()",
        description:
          "Multiply the given number with the value currently stored at the given key. The product then replaces the value previously stored in the Dictionary.",
      },
      {
        name: "div()",
        description:
          "Divide the given number with the value currently stored at the given key. The quotient then replaces the value previously stored in the Dictionary.",
      },
      {
        name: "minValue()",
        description:
          "Return the lowest number currently stored in the Dictionary.",
      },
      {
        name: "maxValue()",
        description:
          "Return the highest number currently stored in the Dictionary.",
      },
      {
        name: "minKey()",
        description: "Return the lowest key currently used in the Dictionary.",
      },
      {
        name: "maxKey()",
        description: "Return the highest key currently used in the Dictionary.",
      },
    ],
  },
  {
    element: "p5.PrintWriter",
    insert: "new p5.PrintWriter()",
    code: "new p5.PrintWriter()",
    description: "p5.PrintWriter",
    parameters: [],
    fields: [],
    methods: [
      {
        name: "write()",
        description: "Writes data to the PrintWriter stream",
      },
      {
        name: "print()",
        description:
          "Writes data to the PrintWriter stream, and adds a new line at the end",
      },
      {
        name: "clear()",
        description:
          "Clears the data already written to the PrintWriter object",
      },
      {
        name: "close()",
        description: "Closes the PrintWriter",
      },
    ],
  },
  {
    element: "p5.Font",
    insert: "new p5.Font()",
    code: "new p5.Font([pInst])",
    description: "Base class for font handling",
    parameters: [
      {
        name: "pInst: P5",
        description: "pointer to p5 instance (Optional)",
      },
    ],
    fields: [
      {
        name: "font",
        description: "Underlying opentype font implementation",
      },
    ],
    methods: [
      {
        name: "textBounds()",
        description:
          "Returns a tight bounding box for the given text string using this font",
      },
      {
        name: "textToPoints()",
        description:
          "Computes an array of points following the path for specified text",
      },
    ],
  },
  {
    element: "p5.Shader",
    insert: "new p5.Shader(${1:renderer}, ${2:vertSrc}, ${3:fragSrc})",
    code: "new p5.Shader(renderer, vertSrc, fragSrc)",
    description: "Shader class for WEBGL Mode",
    parameters: [
      {
        name: "renderer: p5.RendererGL",
        description:
          "an instance of p5.RendererGL that will provide the GL context for this new p5.Shader",
      },
      {
        name: "vertSrc: String",
        description: "source code for the vertex shader (as a string)",
      },
      {
        name: "fragSrc: String",
        description: "source code for the fragment shader (as a string)",
      },
    ],
    fields: [],
    methods: [
      {
        name: "setUniform()",
        description:
          "Used to set the uniforms of a p5.Shader object. Uniforms are used as a way to provide shader programs (which run on the GPU) with values from a sketch (which runs on the CPU).",
      },
    ],
  },
  {
    element: "p5.TableRow",
    insert: "new p5.TableRow()",
    code: "new p5.TableRow([str], [separator])",
    description:
      "A TableRow object represents a single row of data values, stored in columns, from a table. A Table Row contains both an ordered array, and an unordered JSON object.",
    parameters: [
      {
        name: "str: String",
        description:
          "optional: populate the row with a string of values, separated by the separator (Optional)",
      },
      {
        name: "separator: String",
        description: "comma separated values (csv) by default (Optional)",
      },
    ],
    fields: [],
    methods: [
      {
        name: "set()",
        description:
          "Stores a value in the TableRow's specified column. The column may be specified by either its ID or title.",
      },
      {
        name: "setNum()",
        description:
          "Stores a Float value in the TableRow's specified column. The column may be specified by either its ID or title.",
      },
      {
        name: "setString()",
        description:
          "Stores a String value in the TableRow's specified column. The column may be specified by either its ID or title.",
      },
      {
        name: "get()",
        description:
          "Retrieves a value from the TableRow's specified column. The column may be specified by either its ID or title.",
      },
      {
        name: "getNum()",
        description:
          "Retrieves a Float value from the TableRow's specified column. The column may be specified by either its ID or title.",
      },
      {
        name: "getString()",
        description:
          "Retrieves an String value from the TableRow's specified column. The column may be specified by either its ID or title.",
      },
    ],
  },
  {
    element: "p5.Image",
    insert: "new p5.Image(${1:width}, ${2:height})",
    code: "new p5.Image(width, height)",
    description:
      "Creates a new p5.Image. A p5.Image is a canvas backed representation of an image. P5 can display .gif, .jpg and .png images. Images may be displayed in 2D and 3D space. Before an image is used, it must be loaded with the loadImage() function. The p5.Image class contains fields for the width and height of the image, as well as an array called pixels[] that contains the values for every pixel in the image.",
    parameters: [
      {
        name: "width: Number",
        description: "width",
      },
      {
        name: "height: Number",
        description: "height",
      },
    ],
    fields: [
      {
        name: "width",
        description: "Image width.",
      },
      {
        name: "height",
        description: "Image height",
      },
      {
        name: "pixels",
        description:
          "Array containing the values for all the pixels in the display window. These values are numbers. This array is the size (include an appropriate factor for pixelDensity) of the display window x4, representing the R, G, B, A values in order for each pixel, moving from left to right across each row, then down each column.",
      },
    ],
    methods: [
      {
        name: "loadPixels()",
        description:
          "Loads the pixels data for this image into the [pixels] attribute.",
      },
      {
        name: "updatePixels()",
        description:
          "Updates the backing canvas for this image with the contents of the [pixels] array.",
      },
      {
        name: "get()",
        description:
          "Get a region of pixels from an image. If no params are passed, the whole image is returned. If x and y are the only params passed a single pixel is extracted.",
      },
      {
        name: "set()",
        description:
          "Set the color of a single pixel or write an image into this p5.Image.",
      },
      {
        name: "resize()",
        description:
          "Resize the image to a new width and height. To make the image scale proportionally, use 0 as the value for the wide or high parameter.",
      },
      {
        name: "copy()",
        description:
          "Copies a region of pixels from one image to another. If no srcImage is specified this is used as the source. If the source and destination regions aren't the same size, it will automatically resize source pixels to fit the specified target region.",
      },
      {
        name: "mask()",
        description:
          "Masks part of an image from displaying by loading another image and using its alpha channel as an alpha channel for this image.",
      },
      {
        name: "filter()",
        description: "Applies an image filter to a p5.Image",
      },
      {
        name: "blend()",
        description:
          "Copies a region of pixels from one image to another, using a specified blend mode to do the operation.",
      },
      {
        name: "save()",
        description:
          "Saves the image to a file and force the browser to download it. Accepts two strings for filename and file extension Supports png (default), jpg, and gif",
      },
      {
        name: "reset()",
        description: "Starts an animated GIF over at the beginning state.",
      },
      {
        name: "getCurrentFrame()",
        description:
          "Gets the index for the frame that is currently visible in an animated GIF.",
      },
      {
        name: "setFrame()",
        description:
          "Sets the index of the frame that is currently visible in an animated GIF",
      },
      {
        name: "numFrames()",
        description: "Returns the number of frames in an animated GIF",
      },
      {
        name: "play()",
        description: "Plays an animated GIF that was paused with pause()",
      },
      {
        name: "pause()",
        description: "Pauses an animated GIF.",
      },
      {
        name: "delay()",
        description:
          "Changes the delay between frames in an animated GIF. There is an optional second parameter that indicates an index for a specific frame that should have its delay modified. If no index is given, all frames will have the new delay.",
      },
    ],
  },
  {
    element: "p5.Camera ",
    insert: "new p5.Camera()",
    code: "new p5.Camera()",
    description:
      "This class describes a camera for use in p5's WebGL mode. It contains camera position, orientation, and projection information necessary for rendering a 3D scene.",
    parameters: [],
    fields: [
      {
        name: "eyeX",
        description: "camera position value on x axis",
      },
      {
        name: "eyeY",
        description: "camera position value on y axis",
      },
      {
        name: "eyeZ",
        description: "camera position value on z axis",
      },
      {
        name: "centerX",
        description: "x coordinate representing center of the sketch",
      },
      {
        name: "centerY",
        description: "y coordinate representing center of the sketch",
      },
      {
        name: "centerZ",
        description: "z coordinate representing center of the sketch",
      },
      {
        name: "upX",
        description: "x component of direction 'up' from camera",
      },
      {
        name: "upY",
        description: "y component of direction 'up' from camera",
      },
      {
        name: "upZ",
        description: "z component of direction 'up' from camera",
      },
    ],
    methods: [
      {
        name: "perspective()",
        description:
          "Sets a perspective projection. Accepts the same parameters as the global perspective().",
      },
      {
        name: "ortho()",
        description:
          "Sets an orthographic projection. Accepts the same parameters as the global ortho().",
      },
      {
        name: "frustum()",
        description:
          "Sets the camera's frustum. Accepts the same parameters as the global frustum().",
      },
      {
        name: "pan()",
        description: " Panning rotates the camera view to the left and right.",
      },
      {
        name: "tilt()",
        description: "Tilting rotates the camera view up and down.",
      },
      {
        name: "lookAt()",
        description:
          "Reorients the camera to look at a position in world space.",
      },
      {
        name: "camera()",
        description:
          "Sets the camera's position and orientation. Accepts the same parameters as the global camera().",
      },
      {
        name: "move()",
        description:
          "Move camera along its local axes while maintaining current camera orientation.",
      },
      {
        name: "setPosition()",
        description:
          "Set camera position in world-space while maintaining current camera orientation.",
      },
    ],
  },
  {
    element: "p5.XML ",
    insert: "new p5.XML()",
    code: "new p5.XML()",
    description:
      "XML is a representation of an XML object, able to parse XML code. Use loadXML() to load external XML files and create XML objects.",
    parameters: [],
    fields: [],
    methods: [
      {
        name: "getParent()",
        description:
          "Gets a copy of the element's parent. Returns the parent as another p5.XML object.",
      },
      {
        name: "getName()",
        description:
          "Gets the element's full name, which is returned as a String.",
      },
      {
        name: "setName()",
        description: "Sets the element's name, which is specified as a String.",
      },
      {
        name: "hasChildren()",
        description:
          "Checks whether or not the element has any children, and returns the result as a boolean. ",
      },
      {
        name: "listChildren()",
        description:
          " Get the names of all of the element's children, and returns the names as an array of Strings. This is the same as looping through and calling getName() on each child element individually.",
      },
      {
        name: "getChildren()",
        description:
          "Returns all of the element's children as an array of p5.XML objects.",
      },
      {
        name: "getChild()",
        description:
          "Returns the first of the element's children that matches the name parameter or the child of the given index.It returns undefined if no matching child is found.",
      },
      {
        name: "addChild()",
        description:
          "Appends a new child to the element. The child can be specified with either a String, which will be used as the new tag's name, or as a reference to an existing p5.XML object. ",
      },
      {
        name: "removeChild()",
        description: "Removes the element specified by name or index.",
      },
      {
        name: "getAttributeCount()",
        description:
          "Counts the specified element's number of attributes, returned as an Number.",
      },
      {
        name: "listAttributes()",
        description:
          "Gets all of the specified element's attributes, and returns them as an array of Strings.",
      },
      {
        name: "hasAttribute()",
        description:
          "Checks whether or not an element has the specified attribute.",
      },
      {
        name: "getNum()",
        description: "Returns an attribute value of the element as an Number.",
      },
      {
        name: "getString()",
        description: "Returns an attribute value of the element as an String.",
      },
      {
        name: "setAttribute()",
        description:
          "Sets the content of an element's attribute. The first parameter specifies the attribute name, while the second specifies the new content.",
      },
      {
        name: "getContent()",
        description:
          "Returns the content of an element. If there is no such content, defaultValue is returned if specified, otherwise null is returned.",
      },
      {
        name: "setContent()",
        description: "Sets the element's content.",
      },
      {
        name: "serialize()",
        description:
          "Serializes the element into a string. This function is useful for preparing the content to be sent over a http request or saved to file.",
      },
    ],
  },
  {
    element: "p5.Table ",
    insert: "new p5.Table()",
    code: "new p5.Table([rows])",
    description:
      "Table objects store data with multiple rows and columns, much like in a traditional spreadsheet. Tables can be generated from scratch, dynamically, or using data from an existing file.",
    parameters: [
      {
        name: "rows: p5.TableRow[]",
        description: "An array of p5.TableRow objects (Optional)",
      },
    ],
    fields: [
      {
        name: "columns",
        description: "An array containing the names of the columns in the table, if the header the table is loaded with the header parameter.",
      },
      {
        name: "rows",
        description: "An array containing the p5.TableRow objects that make up the rows of the table. The same result as calling getRows()",
      },
    ],
    methods: [
      {
        name: "addRow()",
        description: "Use addRow() to add a new row of data to a p5.Table object.",
      },
      {
        name: "removeRow()",
        description: "Removes a row from the table object.",
      },
      {
        name: "getRow()",
        description: "Returns a reference to the specified p5.TableRow.",
      },
      {
        name: "getRows()",
        description: "Gets all rows from the table. Returns an array of p5.TableRows.",
      },
      {
        name: "findRow()",
        description: "Finds the first row in the Table that contains the value provided, and returns a reference to that row. Even if multiple rows are possible matches, only the first matching row is returned.",
      },
      {
        name: "findRows()",
        description: "Finds the rows in the Table that contain the value provided, and returns references to those rows. Returns an Array, so for must be used to iterate through all the rows, as shown in the example above.",
      },
      {
        name: "matchRow()",
        description: "Finds the first row in the Table that matches the regular expression provided, and returns a reference to that row. Even if multiple rows are possible matches, only the first matching row is returned. ",
      },
      {
        name: "matchRows()",
        description: "Finds the rows in the Table that match the regular expression provided, and returns references to those rows. Returns an array, so for must be used to iterate through all the rows, as shown in the example. ",
      },
      {
        name: "getColumn()",
        description: "Retrieves all values in the specified column, and returns them as an array.",
      },
      {
        name: "clearRows()",
        description: "Removes all rows from a Table. While all rows are removed, columns and column titles are maintained.",
      },
      {
        name: "addColumn()",
        description: "Use addColumn() to add a new column to a Table object.",
      },
      {
        name: "getColumnCount()",
        description: "Returns the total number of columns in a Table",
      },
      {
        name: "getRowCount()",
        description: "Returns the total number of rows in a Table.",
      },
      {
        name: "removeTokens()",
        description: "Removes any of the specified characters (or tokens).",
      },
      {
        name: "trim()",
        description: "Trims leading and trailing whitespace, such as spaces and tabs, from String table values.",
      },
      {
        name: "removeColumn()",
        description: "Use removeColumn() to remove an existing column from a Table object.",
      },
      {
        name: "set()",
        description: " Stores a value in the Table's specified row and column. ",
      },
      {
        name: "setNum()",
        description: "Stores a Float value in the Table's specified row and column. ",
      },
      {
        name: "setString()",
        description: " Stores a String value in the Table's specified row and column.",
      },
      {
        name: "get()",
        description: "Retrieves a value from the Table's specified row and column. ",
      },
      {
        name: "getNum()",
        description: " Retrieves a Float value from the Table's specified row and column.",
      },
      {
        name: "getString()",
        description: " Retrieves a String value from the Table's specified row and column.",
      },
      {
        name: "getObject()",
        description: "Retrieves all table data and returns as an object. If a column name is passed in, each row object will be stored with that attribute as its title.",
      },
      {
        name: "getArray()",
        description: "Retrieves all table data and returns it as a multidimensional array.",
      },
    ],
  },
  {
    element: "p5.Vector ",
    insert: "new p5.Vector()",
    code: "new p5.Vector([x], [y], [z])",
    description:
      "A class to describe a two or three dimensional vector, specifically a Euclidean (also known as geometric) vector. A vector is an entity that has both magnitude and direction. The datatype, however, stores the components of the vector (x, y for 2D, and x, y, z for 3D).",
    parameters: [
      {
        name: "x: Number",
        description: "x component of the vector (Optional)",
      },
      {
        name: "y: Number",
        description: "y component of the vector (Optional)",
      },
      {
        name: "z: Number",
        description: "z component of the vector (Optional)",
      },
    ],
    fields: [
      {
        name: "x",
        description: "The x component of the vector",
      },
      {
        name: "y",
        description: "The y component of the vector",
      },
      {
        name: "z",
        description: "The z component of the vector",
      },
    ],
    methods: [
      {
        name: "toString()",
        description: "Returns a string representation of a vector v by calling String(v) or v.toString(). ",
      },
      {
        name: "set()",
        description: "Sets the x, y, and z component of the vector using two or three separate variables, the data from a p5.Vector, or the values from a float array.",
      },
      {
        name: "copy()",
        description: "Gets a copy of the vector, returns a p5.Vector object.",
      },
      {
        name: "add()",
        description: "Adds x, y, and z components to a vector, adds one vector to another, or adds two independent vectors together.",
      },
      {
        name: "rem()",
        description: "Gives remainder of a vector when it is divided by another vector.",
      },
      {
        name: "sub()",
        description: "Subtracts x, y, and z components from a vector, subtracts one vector from another, or subtracts two independent vectors.",
      },
      {
        name: "mult()",
        description: "Multiplies the vector by a scalar, multiplies the x, y, and z components from a vector, or multiplies the x, y, and z components of two independent vectors.",
      },
      {
        name: "div()",
        description: " Divides the vector by a scalar, divides a vector by the x, y, and z arguments, or divides the x, y, and z components of two vectors against each other.",
      },
      {
        name: "mag()",
        description: "Calculates the magnitude (length) of the vector and returns the result as a float",
      },
      {
        name: "magSq()",
        description: "Calculates the squared magnitude of the vector and returns the result as a float",
      },
      {
        name: "dot()",
        description: "Calculates the dot product of two vectors. The version of the method that computes the dot product of two independent vectors is a static method.",
      },
      {
        name: "cross()",
        description: "Calculates and returns a vector composed of the cross product between two vectors. ",
      },
      {
        name: "dist()",
        description: "Calculates the Euclidean distance between two points (considering a point as a vector object).",
      },
      {
        name: "normalize()",
        description: "Normalize the vector to length 1 (make it a unit vector).",
      },
      {
        name: "limit()",
        description: "Limit the magnitude of this vector to the value used for the max parameter.",
      },
      {
        name: "setMag()",
        description: "Set the magnitude of this vector to the value used for the len parameter.",
      },
      {
        name: "heading()",
        description: "Calculate the angle of rotation for this vector(only 2D vectors).",
      },
      {
        name: "setHeading()",
        description: "Rotate the vector to a specific angle (only 2D vectors), magnitude remains the same",
      },
      {
        name: "rotate()",
        description: "Rotate the vector by an angle (only 2D vectors), magnitude remains the same",
      },
      {
        name: "angleBetween()",
        description: "Calculates and returns the angle between two vectors.",
      },
      {
        name: "lerp()",
        description: " Linear interpolate the vector to another vector",
      },
      {
        name: "reflect()",
        description: "Reflect the incoming vector about a normal to a line in 2D, or about a normal to a plane in 3D This method acts on the vector directly",
      },
      {
        name: "array()",
        description: "Return a representation of this vector as a float array.",
      },
      {
        name: "equals()",
        description: "Equality check against a p5.Vector",
      },
      {
        name: "fromAngle()",
        description: "Make a new 2D vector from an angle",
      },
      {
        name: "fromAngles()",
        description: "Make a new 3D vector from a pair of ISO spherical angles",
      },
      {
        name: "random2D()",
        description: "Make a new 2D unit vector from a random angle",
      },
      {
        name: "random3D()",
        description: "Make a new random 3D unit vector.",
      },
    ],
  },
];
