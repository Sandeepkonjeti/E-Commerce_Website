let front = document.querySelector('.front');
        let back = document.querySelector('.back');

    let newUser = document.querySelector('.newUser');
        let existingUser = document.querySelector('.existingUser');

        newUser.addEventListener('click', function(){
            front.style.zIndex = "1"
            back.style.zIndex = "2"
            front.style.transform = "rotateY(180deg)"
            back.style.transform = "rotateY(0deg)"
        })

        existingUser.addEventListener('click', function(){
            back.style.zIndex = "1"
            front.style.zIndex = "2"
            back.style.transform = "rotateY(180deg)"
            front.style.transform = "rotateY(0deg)"
        })