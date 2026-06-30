// 1. Kích hoạt thư viện hiệu ứng AOS cuộn trang
AOS.init({
    duration: 1000, // Thời gian chạy hiệu ứng: 1 giây
    once: true      // Chỉ chạy hiệu ứng 1 lần khi cuộn qua
});

// 2. Hàm xử lý Bật/Tắt nhạc nền
function toggleMusic() {
    const music = document.getElementById('bg-music');
    const control = document.getElementById('music-control');
    
    if (music.paused) {
        music.play();
        control.style.animationPlayState = 'running'; // Nút xoay tròn khi hát
    } else {
        music.pause();
        control.style.animationPlayState = 'paused';  // Dừng xoay khi tắt
    }
}

// Gợi ý: Hầu hết trình duyệt chặn tự động phát nhạc (Autoplay) nếu người dùng chưa tương tác. 
// Đoạn code dưới đây sẽ cố gắng bật nhạc ngay khi khách chạm/click lần đầu vào bất kỳ đâu trên màn hình.
document.addEventListener('click', function() {
    const music = document.getElementById('bg-music');
    const control = document.getElementById('music-control');
    if (music.paused) {
        music.play().then(() => {
            control.style.animationPlayState = 'running';
        }).catch(err => console.log("Chờ người dùng tương tác để phát nhạc"));
    }
}, { once: true }); // Chỉ chạy sự kiện này ĐÚNG 1 LẦN đầu tiên

// 3. Hàm xử lý khi khách bấm nút "Gửi Xác Nhận" RSVP
function submitForm(event) {
    event.preventDefault(); // Ngăn trang web bị load lại
    
    // Thu thập dữ liệu từ Form
    const name = document.getElementById('guest-name').value;
    const guestOf = document.getElementById('guest-of').value;
    const attendance = document.querySelector('input[name="attendance"]:checked').value;
    const message = document.getElementById('guest-message').value;

    // Log dữ liệu ra kiểm tra (Tạm thời)
    console.log({ name, guestOf, attendance, message });
    
    alert(`Cảm ơn ${name} đã gửi xác nhận tham dự đám cưới của Đức & Linh!`);
    document.getElementById('rsvp-form').reset(); // Xóa sạch dữ liệu form sau khi gửi thành công
}