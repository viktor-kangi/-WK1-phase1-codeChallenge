let gradeCalculator = function(score, total){
    let percent = (score / total) * 100
    let letterGrade = ''

    if (percent >= 79){
            letterGrade = 'A'
    } else if (percent >=60){
            letterGrade = 'B'
    } else if (percent >=59){
            letterGrade = 'C'
    } else if (percent >=40){
            letterGrade = 'D'
    } else {letterGrade = 'E'}
    return 'you got' + '' + letterGrade + '' + '(' + percent + ')' + '%'
}

let result = gradeCalculator(80, 100)
console.log(result)