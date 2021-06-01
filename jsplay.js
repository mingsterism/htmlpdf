const { jsPDF } = require('jspdf')

// const doc = new jsPDF({
//     orientation: "landscape",
//     unit: "pt",
//     format: "a4",
//     putOnlyUsedFonts: true,
// })
const doc = new jsPDF()

const htmlbody = "<h1>Hello</h1>"
doc.html(htmlbody, {
    callback: function(doc) {
        doc.save("./output.pdf");
    }, 
    x: 10, 
    y: 10
})