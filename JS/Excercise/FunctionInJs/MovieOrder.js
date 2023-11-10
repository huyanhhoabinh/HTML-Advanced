// Khởi tạo mảng danh sách phim và số lượng vé còn lại
let movies = [
    ["Avengers: Endgame", 100],
    ["The Lion King", 50],
    ["Inception", 75],
    ["The Dark Knight", 60],
];

// Mảng lưu trữ thông tin vé đã đặt
let bookedTickets = [];

// Hàm hiển thị danh sách phim và số lượng vé còn lại
function displayMovies() {
    console.log("Danh sách phim và số lượng vé còn lại:");
    for (let i = 0; i < movies.length; i++) {
        console.log(`${i + 1}. ${movies[i][0]} - ${movies[i][1]} vé`);
    }
}

// Hàm đặt vé xem phim
function bookTicket() {
    displayMovies();

    const movieIndex = parseInt(prompt("Nhập ID phim bạn muốn đặt vé:")) - 1;

    if (movieIndex >= 0 && movieIndex < movies.length) {
        const numOfTickets = parseInt(prompt(`Nhập số lượng vé bạn muốn đặt cho phim ${movies[movieIndex][0]}:`));

        if (numOfTickets <= movies[movieIndex][1]) {
            movies[movieIndex][1] -= numOfTickets;
            bookedTickets.push([movies[movieIndex][0], numOfTickets]);
            console.log("Đặt vé thành công!");
        } else {
            console.log("Xin lỗi, không còn đủ vé cho phim này.");
        }
    } else {
        console.log("Không tìm thấy phim với ID đã nhập.");
    }
}

// Hàm hiển thị thông tin vé đã đặt
function displayBookedTickets() {
    console.log("Thông tin các vé đã đặt:");
    for (let i = 0; i < bookedTickets.length; i++) {
        console.log(`${bookedTickets[i][0]} - ${bookedTickets[i][1]} vé`);
    }
}

// Hàm hủy vé đã đặt
function cancelTicket() {
    displayBookedTickets();

    const movieTitle = prompt("Nhập tên phim của vé bạn muốn hủy:");
    let ticketIndex = -1;

    for (let i = 0; i < bookedTickets.length; i++) {
        if (bookedTickets[i][0] === movieTitle) {
            ticketIndex = i;
            break;
        }
    }

    if (ticketIndex !== -1) {
        const confirmCancel = prompt(`Bạn có chắc chắn muốn hủy ${bookedTickets[ticketIndex][1]} vé cho phim ${bookedTickets[ticketIndex][0]}? (yes/no)`);

        if (confirmCancel.toLowerCase() === "yes") {
            const movieIndex = movies.findIndex((movie) => movie[0] === bookedTickets[ticketIndex][0]);
            movies[movieIndex][1] += bookedTickets[ticketIndex][1];
            bookedTickets.splice(ticketIndex, 1);
            console.log("Hủy vé thành công!");
        } else {
            console.log("Hủy vé đã bị hủy bỏ.");
        }
    } else {
        console.log("Không tìm thấy vé với phim đã nhập.");
    }
}

// Hàm chính
function main() {
    let choice;

    do {
        console.log("=== Hệ thống đặt vé xem phim ===");
        console.log("1. Hiển thị danh sách phim và số lượng vé còn lại");
        console.log("2. Đặt vé xem phim");
        console.log("3. Hiển thị thông tin vé đã đặt");
        console.log("4. Hủy vé đã đặt");
        console.log("0. Thoát");
        choice = parseInt(prompt("Nhập lựa chọn của bạn:"));

        switch (choice) {
            case 1:
                displayMovies();
                break;
            case 2:
                bookTicket();
                break;
            case 3:
                displayBookedTickets();
                break;
            case 4:
                cancelTicket();
                break;
            case 0:
                console.log("Kết thúc chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");
        }
    } while (choice !== 0);
}

// Chạy chương trình
main();