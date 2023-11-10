// Khởi tạo giỏ hàng rỗng
const cart = [];

// Thêm sản phẩm vào giỏ hàng
function addProductToCart() {
    const productName = prompt("Nhập tên sản phẩm:");
    const productPrice = parseFloat(prompt("Nhập giá sản phẩm:"));

    cart.push([productName, productPrice]);
    console.log("Sản phẩm đã được thêm vào giỏ hàng.");
}

// Hiển thị giỏ hàng
function displayCart() {
    console.log("Danh sách sản phẩm trong giỏ hàng:");
    cart.forEach((product) => {
        console.log(`${product[0]} - ${product[1]} đồng`);
    });
    console.log("Tổng giá trị giỏ hàng:", calculateTotal());
}

// Tính tổng giá trị giỏ hàng
function calculateTotal() {
    let total = 0;
    cart.forEach((product) => {
        total += product[1];
    });
    return total;
}

// Xóa sản phẩm khỏi giỏ hàng
function removeProductFromCart() {
    const productName = prompt("Nhập tên sản phẩm muốn xóa:");
    let index = -1;

    for (let i = 0; i < cart.length; i++) {
        if (cart[i][0] === productName) {
            index = i;
            break;
        }
    }

    if (index !== -1) {
        cart.splice(index, 1);
        console.log("Sản phẩm đã được xóa khỏi giỏ hàng.");
    } else {
        console.log("Không tìm thấy sản phẩm trong giỏ hàng.");
    }
}

// Đặt hàng
function placeOrder() {
    const name = prompt("Nhập tên của bạn:");
    const address = prompt("Nhập địa chỉ:");
    const phoneNumber = prompt("Nhập số điện thoại:");

    console.log("Thông tin đơn hàng:");
    displayCart();

    console.log("Thông tin người mua hàng:");
    console.log("Tên:", name);
    console.log("Địa chỉ:", address);
    console.log("Số điện thoại:", phoneNumber);

    cart.length = 0; // Xóa toàn bộ giỏ hàng sau khi đặt hàng
    console.log("Đơn hàng đã được đặt thành công.");
}

// Menu chương trình
function main() {
    let choice;

    do {
        console.log("=== Quản lý giỏ hàng ===");
        console.log("1. Thêm sản phẩm vào giỏ hàng");
        console.log("2. Hiển thị giỏ hàng");
        console.log("3. Xóa sản phẩm khỏi giỏ hàng");
        console.log("4. Đặt hàng");
        console.log("0. Thoát");
        choice = parseInt(prompt("Nhập lựa chọn của bạn:"));

        switch (choice) {
            case 1:
                addProductToCart();
                break;
            case 2:
                displayCart();
                break;
            case 3:
                removeProductFromCart();
                break;
            case 4:
                placeOrder();
                break;
            case 0:
                console.log("Kết thúc chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ.");
                break;
        }
    } while (choice !== 0);
}

// Chạy chương trình
main();