// Local storage
localStorage.setItem('Name','Tansen')

// Session storage
sessionStorage.setItem('Age','24')

// update value 
localStorage.setItem('Name','Alahi')
sessionStorage.setItem('Age','24')
// Show in console
console.log(localStorage.getItem("Name"));

// Cookies
const date=new Date(9999,0,1).toUTCString()
console.log(date);
document.cookie=`name=Tansen; expires=${date}`
console.log(document.cookie);