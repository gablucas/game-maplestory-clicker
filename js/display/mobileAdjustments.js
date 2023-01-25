/** AJUSTE PARA DIPOSITIVOS MOVEIS */
export function mobileAdjustments() {
  console.log('oi')
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  
  // Executa a mesma ação acima quando a tela é redimensionada
  window.addEventListener('resize', () => {
  
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
}