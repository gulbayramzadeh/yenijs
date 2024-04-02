
//Task 1

 
function getRandomColor() {
    // Rəngi təsadüfi şəkildə generasiya et
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function printTime() {
    // Tarix və vaxt obyektini yaradırıq
    const now = new Date();
    const gun = now.getDate();
    const saat = now.getHours();
    const deqiqe = now.getMinutes();
    const saniye = now.getSeconds();
  }  

//getRandomColor funksiyası təsadüfi rənglərden birini secmek ucundur






  //Task 2


   // Dataı
const students = [
    { id: 1, name: 'Eli' },
    { id: 2, name: 'Ayise' },
    { id: 3, name: 'Mehmet' },
    { id: 4, name: 'FatIme' },
  ];
  
  // Axtarış funksiyası
  function searchStudent(studentName) {
    // Datasında axtarış edirik
    const foundStudent = students.find(student => student.name.toLowerCase() === studentName.toLowerCase());
    
    // Tapılan telebəni qaytarırıq və ya mesaj çap edirik
    if (foundStudent) {
      console.log(`Ayise: ${foundStudent.name}`);
    } else {
      console.log('Belə bir telebə tapılmadı.');
    }
  }




//Task 3


function printWordSteps(word) {
    // Sözün uzunluğunu əldə edirik
    const length = word.length;
  
    // İlk hərfdən başlayaraq artan sıradakı altsozlari çap edirik
    for (let i = 1; i <= length; i++) {
      console.log(word.slice(0, i));
    }
  
    // Son hərfdən başlayaraq azalan sıradakı altsozlari çap edirik
    for (let i = length - 1; i >= 1; i--) {
      console.log(word.slice(0, i));
    }
  }
  
  // İstifadəçidən söz alırıq və funksiyaya ötürürük
  const word = prompt('ehali:');
  printWordSteps(word);














































