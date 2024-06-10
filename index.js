document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('Спасибо за подписку!'); 
    this.reset(); 
});