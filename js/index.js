document.querySelector('.read-more-btn').addEventListener('click', function() {
    document.querySelector('.schedule__container--list').style.maxHeight = 'none'; 
    this.style.display = 'none'; 
});


document.querySelector('.read-more-btn').addEventListener('click', function() {

    const scheduleCard = document.querySelector('.schedule--list-card-3');    
    const styleSheet = document.styleSheets[1];
    styleSheet.insertRule('.schedule--list-card-3::after { content: none !important; background: none !important; height: 0 !important; }', styleSheet.cssRules.length);

});