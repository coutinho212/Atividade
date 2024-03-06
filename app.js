document.getElementById('generate-btn').addEventListener('click', () => {
    const numbersContainer = document.getElementById('numbers-container');
    numbersContainer.innerHTML = '';
  
    const numbers = generateUniqueNumbers(1, 25, 15);
  
    if (numbers.length > 0) {
      for (const number of numbers) {
        const numberElement = document.createElement('div');
        numberElement.className = 'number';
        numberElement.textContent = number;
        numbersContainer.appendChild(numberElement);
      }
    } else {
      const message = document.createElement('div');
      message.textContent = 'Não foi possível gerar números únicos.';
      numbersContainer.appendChild(message);
    }
  });
  
  function generateUniqueNumbers(min, max, quantity) {
    if (quantity > (max - min + 1)) {
      return [];
    }
  
    const numbers = [];
    const range = Array.from({ length: max - min + 1 }, (_, i) => min + i);
  
    for (let i = 0; i < quantity; i++) {
      const randomIndex = Math.floor(Math.random() * range.length);
      numbers.push(range[randomIndex]);
      range.splice(randomIndex, 1);
    }
  
    return numbers;
  }