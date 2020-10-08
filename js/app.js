const courses = document.querySelector('#courses-list'),
//  shoppingCartContent = document.querySelector('#cart-content tbody'),
//  clearCartBtn = document.querySelector('#clear-cart'),
 checkoutBtn = document.querySelector('#checkout');
 loadEventListeners();

function loadEventListeners(){
    courses.addEventListener('click', buyCourse);
    // shoppingCartContent.addEventListener('click', removeCourse);
    // clearCartBtn.addEventListener('click', clearCart);

    function buyCourse(e){
        if(e.target.classList.contains('add-to-cart')){
            const course = e.target.parentElement.parentElement;
            getCourseInfo(course);
        }
    }

    function removeCourse(e){
        if(e.target.classList.contains('remove')){
            e.target.parentElement.parentElement.remove();
        }
    }

    // function clearCart(){
    //     // console.log(shoppingCartContent.firstChild)
    //     while(shoppingCartContent.firstChild){
    //         shoppingCartContent.removeChild(shoppingCartContent.firstChild);
    //     }
    // }

    function checkout(){
        
    }
}

function getCourseInfo(course){
    const courseInfo = {
        image: course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        price:course.querySelector('.price span').textContent,
        id: course.querySelector('a').getAttribute('data-id')
    }
    addToCart(courseInfo);
}

function addToCart(course){
    const row = document.createElement('tr');
    row.innerHTML = `
    <tr>
        <td>
            <img src="${course.image}" width="100">
        </td>
        <td>
            ${course.title}
        </td>
        <td>
            ${course.price}
        </td>
        <td>
            <a href="#" class="remove" data-id="${course.id}">X</a>
        </td>
        `;
        shoppingCartContent.appendChild(row);
}


