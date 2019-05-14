const friendslist = [
    {
       name: 'Lady Gaga',
       photo: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2018%2F10%2Flady-gaga2.jpg%3Fcrop%3D0px%252C0px%252C1000px%252C1000px%26resize%3D1000%252C1000&w=380&h=380&c=sc&poi=face&q=85',
       scores: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5] 
    },
    {
        name: 'Ryan Reynolds',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg/220px-Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg',
        scores: [1, 2, 4, 5, 1, 3, 4, 1, 2, 5]
    }, 
    {
        name: 'Chris Evans',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/5_Dec._2016_CJCS_USO_Holiday_Tour_-_Incirlik_Air_Base_161205-D-PB383-044_%2831430825446%29_%28cropped%29_%28cropped%29.jpg/220px-5_Dec._2016_CJCS_USO_Holiday_Tour_-_Incirlik_Air_Base_161205-D-PB383-044_%2831430825446%29_%28cropped%29_%28cropped%29.jpg',
        scores: [3, 5, 4, 1, 2, 2, 1, 5, 3, 2]
    }     
]

let yourinfo = {},
    totalscore = [],
    name = document.forms['form']['name'],
    photo = document.forms['form']['photo'],
    modal = document.getElementById("modal"),
    question1 = document.forms['form']['question1'],
    question2 = document.forms['form']['question2'],
    question3 = document.forms['form']['question3'],
    question4 = document.forms['form']['question4'],
    question5 = document.forms['form']['question5'],
    question6 = document.forms['form']['question6'],
    question7 = document.forms['form']['question7'],
    question8 = document.forms['form']['question8'],
    question9 = document.forms['form']['question9'],
    question10 = document.forms['form']['question10']
    
const yourfriend = totalscore => {
    let min = totalscore[0]
    let minindex = 0
    for(i = 1; i < totalscore.length; i++) {
        if(totalscore[i] < min) {
            minindex = i
            min = totalscore[i]
        }
    }
    if (totalscore.length === friendslist.length) {
        document.querySelector('.friendinfo').innerHTML = `
        <h1 class='bestmatch'>Best Match</h1>
        <h2>${friendslist[minindex].name}</h2>
        <img src=${friendslist[minindex].photo} alt="${friendslist[minindex].name}">
        `
    }
}

const matching = _ => {
    friendslist.forEach(friend => {
        let remainarr = []
        let length = Math.min(friend.scores.length,yourinfo.scores.length)
        for (i = 0; i < length; i++) {
            if(friend.scores[i] != yourinfo.scores[i]) {
                remaining = Math.abs(yourinfo.scores[i] - friend.scores[i])
                remainarr.push(remaining)
            }
        }
        function getSum(total, num) {
            return total + num;
        }
        totalscore.push(remainarr.reduce(getSum))
        yourfriend(totalscore)
    })
}

document.querySelector('.submit').addEventListener('click', () => {
    if (name.value === '' || photo.value === '' || question1.selectedIndex < 1 || question2.selectedIndex < 1 || question3.selectedIndex < 1 || question4.selectedIndex < 1 || question5.selectedIndex < 1 || question6.selectedIndex < 1 || question7.selectedIndex < 1 || question8.selectedIndex < 1 || question9.selectedIndex < 1 || question10.selectedIndex < 1) {
        alert('Please fill out form')
    }
    else {
        yourinfo = {
            name: document.querySelector('#name').value,
            photo: document.querySelector('#photo').value,
            scores: [
                parseInt(document.querySelector('#question1').value),
                parseInt(document.querySelector('#question2').value),
                parseInt(document.querySelector('#question3').value),
                parseInt(document.querySelector('#question4').value),
                parseInt(document.querySelector('#question5').value),
                parseInt(document.querySelector('#question6').value),
                parseInt(document.querySelector('#question7').value),
                parseInt(document.querySelector('#question8').value),
                parseInt(document.querySelector('#question9').value),
                parseInt(document.querySelector('#question10').value)
            ]
        }
        // module.exports = yourinfo
        matching()
        modal.style.display = 'block'
        name.value = ''
        photo.value = ''
        question1.selectedIndex = 0
        question2.selectedIndex = 0
        question3.selectedIndex = 0
        question4.selectedIndex = 0
        question5.selectedIndex = 0
        question6.selectedIndex = 0
        question7.selectedIndex = 0
        question8.selectedIndex = 0
        question9.selectedIndex = 0
        question10.selectedIndex = 0
        yourinfo = {}
        totalscore = []
    }
})

document.getElementsByClassName("close")[0].addEventListener('click', _ => modal.style.display = 'none')