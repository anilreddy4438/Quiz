
var s
var x=[];
var y=[];
var array_quiz=[

    {"question": "'OS' computer abbreviation usually means ?", "option":{A: "Order of Significance", B: "Open Software",C: "Operating System",D: "Optical Sensor"}, Answer: "C"},

    {"question": "What's a web browser?", "option":{A: "A kind of spider",
        B: "A computer that stores WWW files",C: "A person who likes to look at websites",D: "A software program that allows you to access sites on the World Wide Web"},Answer:"D"    },

    {"question": "How many bits is a byte?", "option":{A: "4",B: "8", C: "16", D: "32"}, Answer: "B"
    },
    {"question": "http://www.indiabix.com - is an example of what?", "option":{A: "A URL", B: "An access code", C: "A directory", D: "A server"}, Answer: "A"},
    {"question": "The speed of your net access is defined in terms of", "option":{A: "RAM",B: "MHz", C: "Kbps", D: "Megabytes"}, "Answer": "C"
    },

    {"question": "How many diodes are in a full wave bridge rectifier?", "option":{A: "8",B: "2", C: "4", D: "3"}, Answer: "C"
    },

    {"question": "Which of these is a search engine?", "option":{A: "FTP",B: "Google", C: "Archie", D: "ARPANET"}, Answer: "B"
    },

    {"question": "Which device can be used to store charge?", "option":{A: "Transistor",B: "Diode", C: "Capacitor",D: "Resistor"}, Answer: "C"
    },

    {"question": "In a Digital circuit, what is 1 'AND' 1?", "option":{A: "0",
        B: "1", C: "2",D: "4"}, Answer: "B"
    },

    {"question": "Another word for 'Graphics for a word processor'?", "option":{A: "Peripheral",
        B: "Clip art", C: "Highlight",D: "Execute"}, Answer: "B"
    }
];
//console.log(array_quiz)
function qusetion_quiz(i){

    $('.panel-body').append('<div class="quiz_text"><div id="quiz_question"> <b>Question: </b> '+ array_quiz[i].question +'</div>'+
        '<div id="quiz_option1"> <input type="radio" name="check" value="A" data-number="'+i+'" > '+'<b>A :</b>'+ array_quiz[i].option.A +'</div>'+
        '<div id="quiz_option2"> <input type="radio" name="check" value="B" data-number="'+i+'"> '+'<b>B :</b>'+ array_quiz[i].option.B +'</div>'+
        '<div id="quiz_option3"> <input type="radio" name="check" value="C" data-number="'+i+'"> '+'<b>C :</b>'+ array_quiz[i].option.C +'</div>'+
        '<div id="quiz_option4"> <input type="radio" name="check" value="D"  data-number="'+i+'"> '+'<b>D :</b>'+ array_quiz[i].option.D +'</div><br></div>')


}

var clicks = -1;


$.each(array_quiz, function () {
    //console.log(this.Answer);
    x.push(this.Answer)
});


function clickME() {
    $('h1').hide()

    clicks += 1;
    //console.log(clicks)
    for(var i=clicks-1;i<array_quiz.length;i++) {
            if (i == clicks) {

                if(clicks!=0){
                    y.push(s)
                };
                if(y.length != 0) {
                    var l = y.length-1
                    if (y[l] == x[l]) {
                        alert('the answer is correct')

                    }
                }
                $('.quiz_text').hide()
                qusetion_quiz(i)
            };
    };
    $("input:radio[name=check]").click(function() {

        s=($('input:radio[name=check   ]').filter(":checked").val())
        console.log(y)
    });
}

