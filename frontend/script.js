console.log('loaded');

let rootElement = document.querySelector('#root');
//console.log(rootElement)
//document.querySelector('#root')

let htmlContent = "<h2>Hello World</h2>"

rootElement.insertAdjacentElement('beforeend' , htmlContent)