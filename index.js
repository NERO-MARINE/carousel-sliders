const slider = document.querySelector('.slider');


const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParents = document.querySelector('.control ul');

var sectionindex = 0;

document.querySelectorAll('.control li').forEach(function(indicator, ind){
    indicator.addEventListener('click', function(){
        sectionindex = ind;
        document.querySelector('.control .selected').classList.remove('selected');
        indicator.classList.add('selected');
        slider.style.transform = 'translate(' + (sectionindex) * -25 + '%)';

    });

});

leftArrow.addEventListener('click', function(){
    sectionindex = (sectionindex > 0) ? sectionindex - 1 : 0;
    document.querySelector('.control .selected').classList.remove('selected');
    indicatorParents.children[sectionindex].classList.add('selected');
    slider.style.transform = 'translate(' + (sectionindex) * -25 + '%)';
});

rightArrow.addEventListener('click', function(){
    sectionindex = (sectionindex < 3) ? sectionindex + 1 : 3;
    document.querySelector('.control .selected').classList.remove('selected');
    indicatorParents.children[sectionindex].classList.add('selected');
    slider.style.transform = 'translate(' + (sectionindex) * -25 + '%)';
});