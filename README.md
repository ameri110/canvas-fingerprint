Get canvas fingerprint from browser using a single js file. (similar to https://browserleaks.com/canvas)

1- add js file to your html

`<script src="./canvas.js"></script>`

or

`<script src="https://cdn.jsdelivr.net/gh/ameri110/canvas-fingerprint@main/canvasfingerprint.min.js"></script>`

2- call `get_canvas_fingerprint()` in your js to get an output like this:

    {
      "canvas_support_2d": true,
      "canvas_support_text": true,
      "canvas_support_todataurl": true,
      "canvas_fingerprint": "54a1c3ffdd0a8e1e1b3dadc37664347c",
      "canvas_file_colors": 230,
      "canvas_file_size": 4994
    }
