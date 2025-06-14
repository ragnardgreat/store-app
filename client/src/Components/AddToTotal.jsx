

function AddToTotal(price) {
    let total =JSON.parse(sessionStorage.getItem("total"))
    total+=price;
    sessionStorage.setItem("total", total.toFixed(2));
}

export default AddToTotal