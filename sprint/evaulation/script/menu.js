
    var url3 = ('https://www.themealdb.com/api/json/v1/1/categories.php');
async function  getData() {
    try {
        let response = await fetch(url3);
        let data = await response.json();
        console.log(data.categories);
        dsiplayTable(data.categories);
    }
    catch (error){
        console.log('error in fetch',error);
    }
}
getData()

var div = document.getElementById('displaydiv');
var array = JSON.parse(localStorage.getItem('list'))|| [];
var count = JSON.parse(localStorage.getItem('list'));
document.getElementById('count').innerText = array.length;
var k  = array.length;
function dsiplayTable(arr){
    div.innerHTML = null;
    arr.forEach(function (elem,index){
        let main_div = document.createElement('div');
        let div_img = document.createElement('div');
        let img = document.createElement('img');
        img.style.width = '300px';
        img.style.height = '220px';
        img.src = elem.strCategoryThumb;
        div_img.append(img);
        let div_text = document.createElement('div');
        let div_forp = document.createElement('div');
        div_forp.setAttribute('class','name_price');
        let name = document.createElement('p');
        name.textContent = `Name : ${elem.strCategory}`;
        let price= Math.floor(Math.random()*(400-300))+230;
        let price_p = document.createElement('p');
        price_p.textContent = price;
        let button = document.createElement('button');
        button.addEventListener('click',function(){     
        document.getElementById('count').innerText++;

            cart(elem.strCategory,elem.strCategoryThumb,price);
        })
        button.setAttribute('class','btn');
        button.textContent = 'Add to cart';
        div_forp.append(name,price_p);
        div_text.append(div_forp,button);
        main_div.append(div_img,div_text);
        div.append(main_div);
    })
}

function cart(name, img, price){
    var arr2 = {
        name : name,
        price : price,
        img : img,
    }
    array.push(arr2);
    localStorage.setItem('list',JSON.stringify(array));
}