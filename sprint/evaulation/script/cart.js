var arr = JSON.parse(localStorage.getItem('list'));
console.log(arr)
displayTable(arr);
var div = document.getElementById('displaydiv');
function displayTable(arr){
    document.getElementById('displaydiv').innerHTML = null;
    var kon =  arr.reduce(function (a,b){
        return Number(a.price) + Number(b.price) 
     });
     document.getElementById('count').innerHTML = ` : ${kon}`;
    arr.forEach(function (elem,index){
        let main_div = document.createElement('div');
        let div_img = document.createElement('div');
        let img = document.createElement('img');
        img.style.width = '300px';
        img.style.height = '220px';
        img.src = elem.img;
        div_img.append(img);
        let div_forp = document.createElement('div');
        var k = Number(elem.price);
        div_forp.setAttribute('class','name_price');
        let name = document.createElement('p');
        name.textContent = `Name : ${elem.name}`;
        
        let price_p = document.createElement('p');
        price_p.textContent =`₹${elem.price}.00`;
        let button = document.createElement('button');
        button.setAttribute('class','btn')
        button.textContent = 'remove';
        button.addEventListener('click',function (){
            removeF(index);
        })
        let div_btn = document.createElement('div');
        

        div_btn.append(button);
        div_forp.append(name,price_p);
        
        main_div.append(div_img,div_forp,div_btn);
        document.getElementById('displaydiv').append(main_div);
    })
}

function removeF(index){
    arr.splice(index, 1);
    localStorage.setItem('list',JSON.stringify(arr));
    displayTable(arr);
}