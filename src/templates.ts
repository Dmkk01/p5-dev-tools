export const htmlTemplateHosted = `<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/p5.js"></script>
    <script src="sketch.js"></script>
    <title>Hello</title>
  </head>
  <body>
    <main>
    </main>
  </body>
</html>
`;

export const sketchTemplateBasic = 
`function setup() {
    createCanvas(400, 400);
}
  
function draw() {
    background(220);
}`;