const Ryntax = {
  // help : `<pre>\t\nCommand list:\n<span>\n\t[1] contact-us\n\t[2] about-us\n\t[3] email\n\t[4] name\n\t[5] mobile-number\n\t[6] address\n\t[7] chat\n\t[8] exit</span></pre>`,
  get help(){
    // return `<pre>\t\nCommand list:<span>\n\t${Object.keys(Ryntax).toString()}</span></pre>`;
    return help();
  },
  // skill : `<pre><span>\t\nSkills:\n\t[1] PHP (&#9733;3)\n\t[2] Javascript (&#9733;4)\n\t[3] JQuery (&#9733;4)\n\t[4] CSS (&#9733;4)\n\t[5] Laravel (&#9733;3)\n\t[6] Bootstrap (&#9733;4)\n\t[7] Python (&#9733;2)\n\t[8] Java (&#9733;2)\n\t[9] MySql (&#9733;3)</span></pre>`,
  skill : function($modal, $terminal){
    println($terminal, "<b>\n\t Skills:\n<b>");
    SKILL.forEach(function(s,i){      
      println($terminal, '  \t\t['+(n(i+1))+']\t '+s.name+'  (&#9733;'+s.rating+')');
    });
      return {newCommand: true };
  },
  info : "<pre>Info:\n\t<span>name:\t\trahul varma</span>\n\t<span>email:\t\trv12345369@gmail.com</span>\n\t<span>phone no.:\t8070200016</span></pre>",
  author : "<pre>Info:\n\t<span>author name:\trahul varma</span>\n\t<span>author email:\trv12345369@gmail.com</span>\n\t<span>phone no.:\t8070200016</span></pre>",
  exit : function($modal, $terminal){
      println($terminal, "exit...");
      closeModal($modal);
      // return {newCommand: true }
    },
  hire : function($modal, $terminal){
      println($terminal, "\n\tNot available.\n");
      return {newCommand: true };
    },
  resume : function($modal, $terminal){
     window.open("https://rahul-varma8070.github.io/Resume-24-May-2019.pdf", "_black");
     println($terminal, "\ndownloading...\n");
     return {newCommand: true };

  },
  project : project,
  gui : function ($modal, $terminal) {
    localStorage.setItem("mode", "gui");
    window.location.reload();
    println($terminal, "\nSwitching...\n");
     return {newCommand: true };
  }
};

const proectList = {
  "rcChat" : "JavaScript",
  "rcms" : "PHP",
  "roody" : "PHP",
  "PHPSetup" : "PHP",
  "rcCodeMirror" : "JavaScript",
  "Ragasave_js" : "JavaScript",
  "Ragasave_template" : "JavaScript",
  "Rink" : "PHP",
  "Needrr" : "Laravel",
  "Ambukare" : "Laravel",
};

function n(n){
    return n > 9 ? "" + n: "0" + n;
}

function project($modal, $terminal) {
  println($terminal, "<b>\n\t Projects i works on:\n<b>");

  PROJECT.forEach(function (v,i) {
    println($terminal, "\t\t["+n(i+1)+"]\t"+v.name+ " : "+ v.summary);    
  });
  // println($terminal, "\n\n[1] project");
  return {newCommand: true };
}



function help() {
var list = '<pre>\n\t\nCommand list:\n';
var counter = 1;
for (prop in Ryntax) {
  list +=  "\n\t<span>["+counter+"]\t"+prop+"</span>";
  counter++;
}
list += "\n\t</pre>";
return  list;
}
