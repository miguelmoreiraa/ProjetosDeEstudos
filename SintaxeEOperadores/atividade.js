
function checkingError(n1, n2) {
    const firstPhase = createFirstPhase(n1, n2)
    const secondPhase = createSecondPhase(n1, n2)

    return `${firstPhase} ${secondPhase}`
}

function createFirstPhase(n1, n2) {
    let firstPhase = `Os números ${n1} e ${n2}`;
    let yesNo = 'não'

    if (n1 === n2) {
        yesNo = ''
    }

    return `${firstPhase} ${yesNo} são iguais`;
}




function createSecondPhase(n1, n2) {
    const sum = n1 + n2;
    let compare10 = 'menor'
    let compare20 = 'menor'

    if (sum > 10) {
        compare10 = 'maior';
    }

    if (sum > 20) {
        compare20 = 'maior'
    }

    return `Sua sum é ${sum}, que é ${compare10} do que 10 e ${compare20} do que 20.`;
}


console.log(checkingError(1, 2))