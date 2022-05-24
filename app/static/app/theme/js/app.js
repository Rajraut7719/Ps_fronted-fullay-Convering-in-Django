function getelement(id) {
    return document.getElementById(id)
}
const searchsupplier1button = getelement('searchsupplier1')
const searchsupplierform1 = getelement('searchsupplierform1')
let show = true
if (
    searchsupplierform1


) {
    searchsupplierform1.hidden = show
}


if (searchsupplierform1) {
    console.log(searchsupplier1button)
    searchsupplier1button.addEventListener('click', function () {
        show = !show
        searchsupplierform1.hidden = show
    })
}

function redirect() {
    console.log('click')
    window.location.href = 'http://127.0.0.1:5500/component/supplierList/editsupplier.html'

}
function addsupplier() {
    console.log('click')
    window.location.href = 'http://127.0.0.1:5500/component/supplierList/addsupplier.html'
}
function editpurchaserequest() {
    console.log('click')
    window.location.href = 'http://127.0.0.1:5500/component/supplierList/addsupplier.html'
}
function createpurchaserequest() {
    console.log('click')
    window.location.href = 'http://127.0.0.1:5500/purchase_request/createpurchaserequest.html'
}


const addItembutton = getelement('addItembutton')
console.log(addItembutton)
if (
    addItembutton
) {
    addItembutton.addEventListener('click', addItem)
}

function addItem() {
    console.log('click')
    const addItem1 = getelement('addItem1')
    let template = `  <th><input type="email" class="form-control mb-2" id="exampleInputEmail1"
                            aria-describedby="emailHelp"></th>
                        <th><input type="email" class="form-control mb-2" id="exampleInputEmail1"
                                aria-describedby="emailHelp"></th>
                        <th><input type="email" class="form-control mb-2" id="exampleInputEmail1"
                                aria-describedby="emailHelp"></th>
                        <th scope="row"><select class="form-select" aria-label="Default select example">
                                <option selected> Size</option>
                                <option value="1">Supplier-name1</option>
                                <option value="2">Supplier-name2</option>
                                <option value="3">Supplier-name3</option>
                            </select></th>
                        <th><input type="email" class="form-control mb-2" id="exampleInputEmail1"
                                aria-describedby="emailHelp"></th>
                        <th><input type="email" class="form-control mb-2" id="exampleInputEmail1"
                                aria-describedby="emailHelp"></th>
                        <th><input type="email" class="form-control mb-2" id="exampleInputEmail1"
                                aria-describedby="emailHelp"></th>
                        <th><input type="email" class="form-control mb-2" id="exampleInputEmail1"
                                aria-describedby="emailHelp"></th>
                        <th>
                            <button type="button" class="btn-close" aria-label="Close"></button>
                        </th>
`;
    let a = document.createElement('tr');
    a.innerHTML = template;
    addItem1.appendChild(a);

}


function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

const PRaddItembutton = getelement('PRaddItembutton')
console.log(PRaddItembutton)
if (
    PRaddItembutton
) {
    PRaddItembutton.addEventListener('click', PRaddItem)
}
function PRaddItem() {
    console.log('click')
    const PRaddItem = getelement('PRadditem1')
    let template = `   <th scope="row"><select class="form-select" aria-label="Default select example">
        <option selected> Name</option>
        <option value="1">Supplier-name1</option>
        <option value="2">Supplier-name2</option>
        <option value="3">Supplier-name3</option>
    </select></th>
<th> <select class="form-select" aria-label="Default select example">
        <option selected> Size</option>
        <option value="1">Supplier-name1</option>
        <option value="2">Supplier-name2</option>
        <option value="3">Supplier-name3</option>
    </select></th>
<th> <select class="form-select" aria-label="Default select example">
        <option selected> Color</option>
        <option value="1">Supplier-name1</option>
        <option value="2">Supplier-name2</option>
        <option value="3">Supplier-name3</option>
    </select></th>
<th><select class="form-select" aria-label="Default select example">
    <option selected> Measure</option>
    <option value="1">Supplier-name1</option>
    <option value="2">Supplier-name2</option>
    <option value="3">Supplier-name3</option>
</select>
</th>
<th><input type="email" class="form-control" id="exampleInputEmail1"
        aria-describedby="emailHelp">
    <small id="emailHelp" class="form-text text-muted"></small>
</th>
<th><input type="email" class="form-control" id="exampleInputEmail1"
        aria-describedby="emailHelp">
    <small id="emailHelp" class="form-text text-muted"></small>
</th>
<th><input type="email" class="form-control" id="exampleInputEmail1"
    aria-describedby="emailHelp">
<small id="emailHelp" class="form-text text-muted"></small>
</th>
<th>
    <button type="button" class="btn-close" aria-label="Close"></button>
</th>
    `;
    let a = document.createElement('tr');
    a.innerHTML = template;
    PRaddItem.appendChild(a);

}

let menuitem=getelement('menuitem')
const togglemenu = getelement('togglemenu')
console.log(togglemenu)
let hidden=false
if (
    togglemenu
) {
    togglemenu.hidden=true
    togglemenu.addEventListener('click', function(){console.log('toggle')
    hidden=!hidden
menuitem.hidden=hidden
})
}
window.addEventListener('resize', function(event){
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;
    console.log(newWidth, togglemenu.hidden)
    if(newWidth<1000) {
        togglemenu.hidden=false
        menuitem.hidden=true
    }
    else{
        togglemenu.hidden=true
        menuitem.hidden=false
    }
});