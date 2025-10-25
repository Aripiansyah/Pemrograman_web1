const form = document.getElementById('form_registrasi');
    
// Input fields
const nama = document.getElementById('nama');
const email = document.getElementById('email');
const nim = document.getElementById('nim');
const telepon = document.getElementById('telepon');
const universitas = document.getElementById('universitas');
const prodi = document.getElementById('prodi');
const setuju = document.getElementById('setuju');
    
 // Error message spans
 const namaError = document.getElementById('nama-error');
 const emailError = document.getElementById('email-error');
 const nimError = document.getElementById('nim-error');
 const teleponError = document.getElementById('telepon-error');
 const universitasError = document.getElementById('universitas-error');
 const prodiError = document.getElementById('prodi-error');
 const setujuError = document.getElementById('setuju-error');
    
// Menambahkan event listener ke form saat disubmit
form.addEventListener('submit', function(event) {
    // Mencegah form terkirim (halaman refresh)
    event.preventDefault();
    
    // Reset pesan error dan status valid
    let isValid = true;
    clearErrors();
    // Regex untuk validasi
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const numberRegex = /^\d+$/; 
    // Validasi Nama Lengkap
    if (nama.value.trim() === '') {
        namaError.textContent = 'Nama lengkap harus diisi';
        isValid = false;
        nama.classList.add('input-error');
    }

     // Validasi Email
     if (email.value.trim() === '') {
         emailError.textContent = 'Email harus diisi';
         isValid = false;
         email.classList.add('input-error');
     } else if (!emailRegex.test(email.value.trim())) {
         emailError.textContent = 'Format email harus sesuai';
         isValid = false;
     }
     
    
     if (!numberRegex.test(nim.value.trim())) {
         nimError.textContent = 'Input harus berupa angka, bukan huruf atau simbol';
         isValid = false;
         nim.classList.add('input-error');
     }

     if (!numberRegex.test(telepon.value.trim())) {
         teleponError.textContent = 'Input harus berupa angka, bukan huruf atau simbol';
         isValid = false;
         telepon.classList.add('input-error');
     }
    
     if (universitas.value === '') {
         universitasError.textContent = 'Universitas harus dipilih';
         isValid = false;
         universitas.classList.add('input-error');
     }
    
     if (prodi.value === '') {
         prodiError.textContent = 'Program Studi harus dipilih';
         isValid = false;
         prodi.classList.add('input-error');
     }
    
     if (!setuju.checked) {
         setujuError.textContent = 'Harap setujui syarat dan ketentuan.';
         isValid = false;
     }
     
     if (isValid) {
         alert('Pendaftaran berhasil!');
         form.reset(); 
         clearErrors();
        
     }
});

    // Fungsi bantuan untuk membersihkan semua pesan error
    function clearErrors() {
        namaError.textContent = '';
        emailError.textContent = '';
        nimError.textContent = '';
        teleponError.textContent = '';
        universitasError.textContent = '';
        prodiError.textContent = '';
        setujuError.textContent = '';
    };
