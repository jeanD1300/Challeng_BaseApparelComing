const email = document.querySelector('.email');
const submitBtn = document.getElementById('submitBtn');
const errorMessage = document.querySelector('.message-err');
const errorIcon = document.querySelector('.icon-err');
const userEmail = localStorage.getItem('userEmail');

// เพิ่มการตรวจสอบเมื่อกดปุ่ม Submit
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    if (!isValidEmail(email.value)) {
        showError();
        alert("กรุณากรอกข้อมูลให้ถูกต้อง")
    } else {
        hideError();
        alert("สมัครบริการเสร็จสิ้น!!")
        saveEmailToLocalStorage(email.value);
    }
});

// ฟังก์ชันตรวจสอบอีเมล
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

// เพิ่มคลาส 
function showError() {
    email.classList.add('border-err');
    errorIcon.style.display = 'block';
    errorMessage.style.display = 'block';
}

// ลบคลาส .border-err
function hideError() {
    email.classList.remove('border-err');
    errorMessage.style.display = 'none';
    errorIcon.style.display = 'none';
    document.querySelector('form').reset();
}
function saveEmailToLocalStorage(email) {
    localStorage.setItem('userEmail', email);
    console.log('Email stored in localStorage:', userEmail)
}