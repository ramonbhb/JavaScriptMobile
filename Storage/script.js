window.onload = function() {
  if ('localStorage' in window || 'sessionStorage' in window) {
        
    const valueInputSession = document.getElementById('valuesession');
    const valueInputLocal = document.getElementById('valuelocal');

    let reloadInputValue = function () {
      console.log("Session Storage: ", sessionStorage.getItem('myKey'));
      valueInputSession.value = sessionStorage.getItem('myKey') || '';
      console.log("Local Storage: ", localStorage.getItem('myKey'));
      valueInputLocal.value = localStorage.getItem('myKey') || '';
    }
     
    reloadInputValue(); 

    valueInputSession.addEventListener('keyup', function () {
      sessionStorage.setItem('myKey', this.value);
    });    

    valueInputLocal.addEventListener('keyup', function () {
      localStorage.setItem('myKey', this.value);
    });    
  }
}