const btns = document.querySelectorAll('.nt-tab-btn');
const tabBodies = document.querySelectorAll('.nt-tab-body');

btns.forEach(function(btn){
    btn.addEventListener('click', function(){
        btns.forEach(function(btnRemoveActive){
            btnRemoveActive.classList.remove('active');
        });
        btn.classList.add('active');
        tabBodies.forEach(function(bodyRemoveActive){
            bodyRemoveActive.classList.remove('active');
        });
        let dataIdValus = btn.getAttribute('data-id');
        tabBody = document.getElementById(dataIdValus);
        tabBody.classList.add('active');
    });
})