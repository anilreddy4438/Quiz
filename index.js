var array_quiz=[

    {"question": "'OS' computer abbreviation usually means ?", "option":{A: "Order of Significance", B: "Open Software",C: "Operating System",D: "Optical Sensor"}, Answer: "Operating System"},

    {"question": "What's a web browser?", "option":{A: "A kind of spider",
        B: "A computer that stores WWW files",C: "A person who likes to look at websites",D: "A software program that allows you to access sites on the World Wide Web"},Answer:"A software program that allows you to access sites on the World Wide Web"
    },

    {"question": "How many bits is a byte?", "option":{A: "4",B: "8", C: "16", D: "32"}, Answer: "8"
    },
    {"question": "http://www.indiabix.com - is an example of what?", "option":{A: "A URL",
        B: "An access code", C: "A directory", D: "A server"}, Answer: "A URL"},
    {"question": "The speed of your net access is defined in terms of", "option":{A: "RAM",
        B: "MHz", C: "Kbps", D: "Megabytes"}, "Answer": "Kbps"
    },

    {"question": "How many diodes are in a full wave bridge rectifier?", "option":{A: "8",
        B: "2", C: "4", D: "3"}, Answer: "4"
    },

    {"question": "Which of these is a search engine?", "option":{A: "FTP",B: "Google", C: "Archie", D: "ARPANET"}, Answer: "Google"
    },

    {"question": "Which device can be used to store charge?", "option":{A: "Transistor",B: "Diode", C: "Capacitor",D: "Resistor"}, Answer: "Capacitor"
    },

    {"question": "In a Digital circuit, what is 1 'AND' 1?", "option":{A: "0",
        B: "1", C: "2",D: "4"}, Answer: "1"
    },

    {"question": "Another word for 'Graphics for a word processor'?", "option":{A: "Peripheral",
        B: "Clip art", C: "Highlight",D: "Execute"}, Answer: "Clip art"
    }
];
//console.log(array_quiz)
function qusetion_quiz(i){

    $('.panel-body').append('<div class="quiz_text"><div id="quiz_question"> <b>Question: </b> '+ array_quiz[i].question +'</div>'+
        '<div id="quiz_option1"><b>A :</b>'+ array_quiz[i].option.A +'</div>'+
        '<div id="quiz_option2"><b>B :</b>'+ array_quiz[i].option.B +'</div>'+
        '<div id="quiz_option3"><b>C :</b>'+ array_quiz[i].option.C +'</div>'+
        '<div id="quiz_option4"><b>D :</b>'+ array_quiz[i].option.D +'</div><br></div>')

}

var clicks = -1;
function clickME() {
    $('h1').hide()

    clicks += 1;
    //console.log(clicks)
    for(var i=clicks-1;i<array_quiz.length;i++) {
        if(i==clicks){
            $('.quiz_text').hide()
            qusetion_quiz(i)

        }

    }

}
