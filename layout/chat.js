const chat = function(){
    return {
        tag : JHTML.DIV,
        class : "chat border",
        css : {
            position : "fixed",
            bottom : 0,
            right : 10,
            width : 250 
        },
        html : [{
            tag : JHTML.DIV,
            class : "chat-head bs-1",
            css : {
                // height : ,
                color : "#696969",
                cursor : "pointer",
                padding : "8px 15px",
                backgroundColor : "#eee"
            },
            html : [{
                tag : JHTML.SPAN,
                text : "Cooming Soon...",
                   
            }],
            bind : [{
                type : "click",
                handler : function(el){
                    Ragasave(this).next().toggleClass('chat-minimize');                    
                }
            }]
        },{
            tag : JHTML.DIV,
            class : 'chat-main-container chat-minimize',
            bind : [{
                type : "click",
                handler : function(){
                }
            }],
            html : [{
                tag : JHTML.DIV,
                class : "chat-body",
                css : {
                    height : 250,
                    backgroundColor : "#fff"
                }                                    
            },{
                tag : JHTML.DIV,
                class : 'chat-footer',
                css : {
                    color : "#696969",
                    cursor : "pointer",
                    padding : "8px 5px",
                    backgroundColor : "#eee" ,
                    fill : "grey"   
                },
                html : [{
                    tag : JHTML.DIV,
                    css : {
                        border: "1px solid rgba(0,0,0,0.120)",
                        borderRadius: 20,
                        padding: 5,
                        backgroundColor: "#fff"
                    },
                    html : [Ragasave.UI.Containers.Column({
                        content : [{
                            column : {
                                class : "v-m",
                                css : {
                                }            
                            },
                            html : [{
                                tag : JHTML.DIV,
                                css : {
                                    width : 30,
                                    height : 30,
                                    padding : 5
                                },
                                class : "t-c",
                                html : [{
                                    tag : JHTML.SPAN,
                                    html : '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="18px" height="18px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g><path d="M97.344,482.17c-23.311,0-45.215-9.084-61.689-25.555c-34.01-34.014-34.01-89.361,0-123.371L305.343,63.543   c21.727-21.75,50.645-33.713,81.39-33.713c30.75,0,59.667,11.963,81.395,33.713c21.748,21.744,33.726,50.645,33.726,81.389   c0,30.75-11.964,59.65-33.708,81.381L255.843,438.596c-6.374,6.371-16.696,6.371-23.067,0c-6.374-6.373-6.374-16.695,0-23.07   l212.298-212.283c15.583-15.58,24.153-36.291,24.153-58.311c0-22.016-8.588-42.74-24.167-58.322   c-15.583-15.58-36.294-24.154-58.327-24.154c-22.029,0-42.74,8.574-58.323,24.154L58.725,356.311   c-21.283,21.301-21.283,55.938,0,77.234c20.645,20.617,56.589,20.617,77.233,0l181.091-181.105   c4.924-4.924,7.745-11.74,7.745-18.688c0-7.045-2.755-13.686-7.759-18.689c-10.291-10.291-27.067-10.322-37.358,0L156,338.754   c-6.37,6.375-16.697,6.375-23.067,0c-6.374-6.371-6.374-16.697,0-23.066l123.673-123.691c23.005-23.004,60.461-23.004,83.497,0   c11.169,11.166,17.317,26,17.317,41.756c0,15.547-6.308,30.762-17.3,41.754L159.029,456.615   C142.555,473.086,120.65,482.17,97.344,482.17z"></path></g></svg>'
                                }]
                            }]    
                        },
                        {
                            column : {
                                tag : JHTML.DIV,
                                class : "v-m t-c",
                            },
                            html : [{
                                tag : JHTML.TEXTAREA,
                                css : {
                                    padding: "6px 2px",
                                    verticalAlign: "middle",
                                    height: 28,
                                    maxHeight: 60,
                                    resize : "none",
                                    outline : "none",
                                    width : "100%",
                                    border : "0px solid rgba(0,0,0,.20)"
                                },
                                bind : [{
                                    type : "input",
                                    handler : function (){
                                        // this.style.height = this.scrollHeight+"px"
                                    }
                                }]
                            }]
                        },{
                            column : {
                                class : "v-m",
                                css : {
                                }            
                            },
                            html : [{
                                tag : JHTML.DIV,
                                css : {
                                    width : 30,
                                    height : 30,
                                    padding : 5
                                },
                                class : "t-c",
                                html : [{
                                    tag : JHTML.SPAN,
                                    html : '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" xml:space="preserve" y="0px" width="18px" height="18px" viewBox="0 0 512 512" enable-background="new 0 0 512 512"><path d="M487.077,83.395c-6.435-8.772-16.579-13.751-27.136-13.75c-2.73,0-5.488,0.333-8.216,1.02L25.442,177.971  c-13.192,3.319-23.086,14.255-25.079,27.71c-1.989,13.456,4.315,26.787,15.979,33.784l90.143,54.086v118.643  c0,4.49,2.559,8.588,6.592,10.561c4.034,1.972,8.84,1.474,12.383-1.284l84.547-65.805l69.455,41.672  c5.419,3.252,11.388,4.801,17.284,4.801c11.308,0,22.341-5.699,28.694-16.023l163.162-265.178  C495.778,109.278,495.174,94.434,487.077,83.395z M294.73,360.095L189.042,296.68l107.223-92.395  c1.502-1.294,1.854-3.48,0.834-5.179c-1.018-1.699-3.112-2.419-4.96-1.704l-163.321,63.145L49.493,212.95l397.313-100.013  L294.73,360.095z"></path></svg>'
                                }]
                            }]    
                        },]
                    })]        
                }]
            }]
        }]
    };
}