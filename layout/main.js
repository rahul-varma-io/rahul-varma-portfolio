
function main(dom) {
    return {
        tag : JHTML.DIV,
        class : "main-container",
        css : {
            top : Ragasave('.header').height(),
            position : "relative"
        },
        html : [dom]
    };
}