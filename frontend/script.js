console.log('loaded');

let rootElement = document.querySelector('#root');
//console.log(rootElement)
//document.querySelector('#root')

let htmlContent = "<h2>Hello World</h2>"

/*let counter = 10;

while(counter < 10) {
rootElement.insertAdjacentElement('beforeend' , htmlContent);
counter++;
}*/

let array = ["alama" , "körte" , "szilva" , "birs" , "eper" , "vegyes" , "törköly"]

for (let index = 0; index < array.length; index++) {
    rootElement.insertAdjacentHTML('beforeend' , `<h2> ${array[index]}<h2/>` );
}