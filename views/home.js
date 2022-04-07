const Home = function(){ 
    return main({
        tag : JHTML.DIV,
        html : [{
            tag : JHTML.DIV,
            class : "profile-wrapper pb-2 mb-1",
            css : {
                paddingTop : 100
            },
            html : [{
                tag : JHTML.DIV,
                class : "w-40 w-sm-90 w-xsm-90 w-md-60 w-lg-70 round-corner m-auto bs-1 bg-1",
                css : {
                    padding : 25,
                },
                html : [{
                    tag : JHTML.DIV,        
                    class : "pos-r",
                    css : {
                        minHeight : 100
                    },
                    html : [{
                        tag : JHTML.DIV,
                        class : "pos-a w-100 h-0",
                        html : [{
                            tag : JHTML.DIV,
                            css : {
                                backgroundImage : "url(./img/rahul-varma.jpg)"
                            },
                            class : "profile-pic circle m-auto  ",     
                        }]
                    },{
                        tag : JHTML.DIV,
                        class : "profile-name t-c bold-txt ts-3",
                        html : [{
                            tag : JHTML.LABEL,
                            text : "Rahul Varma"
                        }]
                    },{
                        tag : JHTML.DIV,
                        class : "profile-title t-c ts-2 pt-1",
                        html : [{
                            tag : JHTML.LABEL,
                            text : "Full Stack Developer"
                        }]
                    },{
                        tag : JHTML.DIV,                    
                        class : "w-100 t-c pt-3",
                        html : [modeButton()]
                    },{
                        tag : JHTML.DIV,
                        class : "pt-2",
                        css : {
                            borderBottom : '1px solid rgba(158, 158, 158, 0.22)'
                        }
                    },{
                        tag : JHTML.DIV,                    
                        class : "w-100 t-c pt-1",
                        html : [{
                            tag : JHTML.A,
                            href : "https://www.facebook.com/ragasave.4creative",
                            attr : {
                                title : "ragasave.4creative",                                                    
                                target : "_blank"
                            },
                            html : [Ragasave.UI.Controls.Button({
                                label : "Facebook",                    
                                // class : "mr-1",
                                css : {
                                    marginRight : 5,
                                    marginLeft : 5,
                                    marginTop : 10,
                                },
                                size : 30,
                                color : "blue",                    
                                style : "shaded",
                                bind : [{
                                    type : "click",
                                    handler : function(){
                                    }
                                }]
                            })]
                        },{
                            tag : JHTML.A,
                            href : "https://www.linkedin.com/in/rahul-varma-50136a186/",
                            attr : {
                                title : "rahul-varma-50136a186",                                                    
                                target : "_blank"
                            },
                            html : [Ragasave.UI.Controls.Button({
                                label : "Linkedin",                    
                                // class : "mr-1",
                                css : {
                                    marginRight : 5,
                                    marginLeft : 5,
                                    marginTop : 10,
                                },
                                size : 30,
                                color : "blue",                    
                                style : "shaded",
                                bind : [{
                                    type : "click",
                                    handler : function(){
                                    }
                                }]
                            })]
                        },{
                            tag : JHTML.A,
                            href : "https://www.instagram.com/rahul_varma80/",
                            attr : {
                                title : "rahul_varma80",                                                    
                                target : "_blank"
                            },
                            html : [Ragasave.UI.Controls.Button({
                                label : "Instagram",                    
                                // class : "mr-1",
                                css : {
                                    marginRight : 5,
                                    marginLeft : 5,
                                    marginTop : 10,
                                },
                                size : 30,
                                color : "crimson",                    
                                style : "shaded",
                                bind : [{
                                    type : "click",
                                    handler : function(){
                                    }
                                }]
                            })]
                        },{
                            tag : JHTML.A,
                            href : "https://www.youtube.com/channel/UCGd59cTRsvNLdCTwHy2EIFg",
                            attr : {
                                title : "ragasave creative",                                                    
                                target : "_blank"
                            },
                            html : [Ragasave.UI.Controls.Button({
                                label : "YouTube",                    
                                // class : "mr-1",
                                css : {
                                    marginRight : 5,
                                    marginLeft : 5,
                                    marginTop : 10,
                                },
                                size : 30,
                                color : "crimson",                    
                                style : "shaded",
                                bind : [{
                                    type : "click",
                                    handler : function(){
                                    }
                                }]
                            })]
                        },{
                            tag : JHTML.A,
                            href : "https://github.com/ragasave",
                            attr : {
                                title : "ragasave",                                                    
                                target : "_blank"
                            },
                            html : [Ragasave.UI.Controls.Button({
                                label : "GitHub",                    
                                // class : "mr-1",
                                css : {
                                    marginRight : 5,
                                    marginLeft : 5,                            
                                    marginTop : 10,
        
                                },
                                size : 30,
                                color : "grey",                    
                                style : "shaded",
                                bind : [{
                                    type : "click",
                                    handler : function(){
                                    }
                                }]
                            })]
                        }]
                    }]
                }]
            }]
        },{
            tag : JHTML.DIV,
            class : "p-1 w-80 w-sm-90 w-xsm-90 m-auto",
            html : [{
                tag : JHTML.DIV,
                html : [{
                    tag : JHTML.LABEL,
                    class : "ts-4 bold-txt theme-txt",
                    text : "About Me"
                },{
                    tag : JHTML.DIV,
                    class : "pt-1 theme-txt",
                    html : [{
                        tag : JHTML.P,
                        text : "I am Rahul Varma. I am a Full Stack Developer based in India.\nI am like a code addacted guy who love the coding."
                    }]
                }]
            },{
                tag : JHTML.DIV,
                class : "mt-2",
                html : [{
                    tag : JHTML.LABEL,
                    class : "ts-4 bold-txt theme-txt",
                    text : "Programming Skills"
                },{
                    tag : JHTML.DIV,
                    class : "pt-1  theme-txt",
                    html : [{
                        tag : JHTML.DIV,
                        html : [{
                            tag : JHTML.DIV,
                            html : [{
                                tag : JHTML.UL,
                                class : "skill",
                                html : (function () {
                                    var skills = [];

                                    for (let index = 0; index < SKILL.length; index++) {
                                        var _skill = SKILL[index];
                                        skills.push({
                                        tag : JHTML.LI,
                                        class : "bs-1 round-corner",
                                        html : [{
                                            tag : JHTML.DIV,
                                            html : [{
                                                tag : JHTML.DIV,
                                                class : "skill-img",
                                                css : {
                                                    backgroundImage : 'url(./img/skill/'+_skill.img+')'
                                                } 
                                            },{
                                                tag : JHTML.DIV,
                                                class : "skill-name",
                                                html : [{
                                                    tag : JHTML.LABEL,
                                                    text : _skill.name
                                                }] 
                                            },{
                                                tag : JHTML.DIV,
                                                class : "skill-rating",
                                                html : (function(){
                                                    var rating = [];
                                                    for (let j = 1;  j <= 5; j++){
                                                        rating.push({
                                                            tag : JHTML.DIV,
                                                            class : 'rating '+(j <= _skill.rating ? "active" : "") 
                                                        });
                                                    }
                                                    return rating;
                                                })()
                                            }]
                                        }]
                                    })
                                        
                                    }
                                    return skills; 
                                })()
                            }]
                        }]
                    }]
                }]
            },{
                tag : JHTML.DIV,
                class : "mt-2",
                html : [{
                    tag : JHTML.LABEL,
                    class : "ts-4 bold-txt theme-txt",
                    text : "My Work"
                },{
                    tag : JHTML.DIV,
                    class : "pt-1  theme-txt",
                    html : [{
                        tag : JHTML.UL,
                        class : "project t-c",
                        html : (function () {
                            var _projects = [];

                            for (let index = 0; index < PROJECT.length; index++) {
                                var _project = PROJECT[index];
                                _projects.push({
                                    tag : JHTML.LI,
                                    class : "d-xsm-table-cell d-sm-table-cell d-inline-block",
                                    html : [{
                                        tag : JHTML.DIV,
                                        class : 'bs-1 w-100 round-corner',
                                        html : [{
                                            tag : JHTML.DIV,
                                            class : "project-img "+(!_project.img ? "no-img" : ""),
                                            css : (_project.img ? {backgroundImage : 'url(./img/project/'+_project.img+')'} : {})
                                        },{
                                            tag : JHTML.DIV,
                                            class : "project-name",
                                            html : [{
                                                tag : JHTML.LABEL,
                                                text : _project.name
                                            }] 
                                        },{
                                            tag : JHTML.DIV,
                                            class : "project-summary",
                                            html : [{
                                                tag : JHTML.LABEL,
                                                text : _project.summary
                                            }]
                                        },{
                                            tag : JHTML.DIV,
                                            class : "project-options",
                                            html : [(_project.links.github ? {
                                                tag : JHTML.A,
                                                href : _project.links.github,
                                                attr : {
                                                    title : _project.name,
                                                    target : "_blank"
                                                },
                                                html : [Ragasave.UI.Controls.Button({
                                                    label : "GitHub",                    
                                                    // class : "mr-1",
                                                    css : {
                                                        marginRight : 5,
                                                        marginLeft : 5,                            
                                    
                                                    },
                                                    size : 30,
                                                    color : "grey",                    
                                                    style : "pull",
                                                    bind : [{
                                                        type : "click",
                                                        handler : function(){
                                                        }
                                                    }]
                                                })]
                                            } : ""),(_project.links.site ? {
                                                tag : JHTML.A,
                                                href : _project.links.site,
                                                attr : {
                                                    title : _project.name,                                                    
                                                    target : "_blank"
                                                },
                                                html : [Ragasave.UI.Controls.Button({
                                                    label : "Site",                    
                                                    // class : "mr-1",
                                                    css : {
                                                        marginRight : 5,
                                                        marginLeft : 5,                            
                                    
                                                    },
                                                    size : 30,
                                                    color : "blue",                    
                                                    style : "pull",
                                                    bind : [{
                                                        type : "click",
                                                        handler : function(){
                                                        }
                                                    }]
                                                })]
                                            }  : "")]
                                        }]
                                    }]
                                })
                                
                            }
                            return _projects; 
                        })()
                    }]
                }]
            }]
        },{
            tag : JHTML.DIV,
            class : "p-2 bg-1 t-c mt-2",
            html : [Ragasave.UI.Controls.Button({
                label : "Hire Me",                    
                // class : "mr-1",
                size : 40,
                color : "crimson",                    
                style : "pull",
                bind : [{
                    type : "click",
                    handler : function(){
                    }
                }]
            })]
        },{
            tag : JHTML.DIV,
            class : "p-1 t-c",
            css : {
                backgroundColor : "#424242"
            },
            html : [{
                tag : JHTML.P,
                css : {
                    color: "rgba(255, 255, 255, 0.52)",
                    fontSize: 14
                },
                text : "Copyrights © 2019 by Rahul Varma. All rights reserved."
            }]
        }]
    });
}