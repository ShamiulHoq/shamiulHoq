var theme = document.getElementById('darkbtn');
theme.addEventListener('click', function(){
    document.body.style.backgroundColor = 'black';
    document.getElementById('title').style.color = 'white';
    document.getElementById('title2').style.color = 'white';
    document.getElementById('darkbtn').style.display = 'none';
    document.getElementById('whitebtn').style.display = 'block';

    

})

var theme = document.getElementById('whitebtn');
theme.addEventListener('click', function(){
    document.body.style.backgroundColor = 'white';
    document.getElementById('title').style.color = 'black';
    document.getElementById('title2').style.color = 'black';
    document.getElementById('darkbtn').style.display = 'block';
    document.getElementById('whitebtn').style.display = 'none';
    
    
    

})


