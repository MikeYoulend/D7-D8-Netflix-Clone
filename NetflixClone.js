// Seleziona la sezione con la classe "mt-5"
const section = document.querySelector('.mt-5');

// Nascondi il contenuto che supera i 60px di overflow laterale
section.style.overflowX = 'hidden';

// Rimuovi la proprietà scrollbarWidth impostata precedentemente
section.style.scrollbarWidth = '';