$(document).ready(() => {
    const domain = "https://opentdb.com/api.php";

    var questions = [];
    var currentquestion = 0;
    var score = 0;
    var difficulty = "easy";
    var totalQuestions = 10;

    $('.diffbtn').click(function () {
        $('.diffbtn').removeClass('selected');
        $(this).addClass('selected');
        difficulty = $(this).val();
    });

    // start button click event

    $('#startbtn').click(() => {

        // upon click, it'll apply the hide class from the css an remove it from the game screen to show the screen
        
        $('#startscreen').addClass('hide');
        $('#gamescreen').removeClass('hide');
        $('#quitbtn').removeClass('hide');
        $('.title-block').addClass('hide');

        // resets the scores and sets the question array to the first one
        
        score = 0;
        currentquestion = 0;

        // fetches questions from the Open Trivia API
        // the 15th category is video games trivia, the type=multiple means multiple choice

        fetch(`${domain}?amount=${totalQuestions}&category=15&difficulty=${difficulty}&type=multiple`)
            .then(response => {
                return response.json();
            }).then(data => {
                questions = data.results;
                showquestion();
            });
    });

    // this function shows the question

    function showquestion() {
        let q = questions[currentquestion];

        // The API sends HTML entities like &quot, so this decodes them and turns them into actual questions

        let qText = decodeHTML(q.question);
        let correct = decodeHTML(q.correct_answer);
        let wrong = q.incorrect_answers.map(a => decodeHTML(a));

        // this combines the correct and wrong answers and shuffles them around to prevent memorization

        let allAnswers = shuffleArray([correct, ...wrong]);

        // this holds my five fields required by the assignment, my score, question number, the difficulty display, the category, and whether its a multiple choice or true/false

        $('#score').text(score);
        $('#questionnumber').text(`${currentquestion + 1}/${totalQuestions}`);
        $('#diffdisplay').text(q.difficulty.toUpperCase());
        $('#catdisplay').text(q.category.toUpperCase());
        $('#typedisplay').text(q.type.toUpperCase());

        // this display the question by modifying the questiontext id to show the data that questiontext holds

        $('#questiontext').text(qText);

        // answer buttons, akin to how we did it in the poke exercise

        let letters = ['A', 'B', 'C', 'D'];
        let htmi = '';
        allAnswers.forEach((answer, i) => {
            htmi += `<button class="answer-btn" type="button" data-answer="${answer}">${letters[i]}. ${answer}</button>`;
        });
        $('#answers').html(htmi);

        // answer click handler

        $('.answer-btn').click(function () {
            if ($(this).hasClass('locked')) return;
            $('.answer-btn').addClass('locked');

            let picked = $(this).data('answer');

            if (picked === correct) {
                score += 100;
                $(this).css('border', '2px solid green');
            } else {
                $(this).css('border', '2px solid red');
            }

            $('#score').text(score);

            setTimeout(() => {
                currentquestion++;
                if (currentquestion < questions.length) {
                    showquestion();
                } else {
                    showgameover();
                }
            }, 1500);
        });
    }

    // decoding the html we get from the api so its understandable

    function decodeHTML(html) {
        let txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    }

    // this function allows us to shuffles the question array

    function shuffleArray(arr) {
        let array = [...arr];
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // this hides the game screen and shows the game over screen after you finish the game. it also defines the score

    function showgameover() {
        $('#gamescreen').addClass('hide');
        $('#quitbtn').addClass('hide');
        $('#gameoverscreen').removeClass('hide');
        let correct = score / 100;
        $('#finalscore').text(score);
        $('#statcorrect').text(correct);
        $('#statwrong').text(totalQuestions - correct);
    }

    // this allows you to replay the game

    $('#replaybtn').click(() => {
        $('#gameoverscreen').addClass('hide');
        $('#startscreen').removeClass('hide');
        $('.title-block').removeClass('hide');
    });

    $('#quitbtn').click(() => {
        $('#gamescreen').addClass('hide');
        $('#gameoverscreen').addClass('hide');
        $('#quitbtn').addClass('hide');
        $('#startscreen').removeClass('hide');
        $('.title-block').removeClass('hide');
    });
});