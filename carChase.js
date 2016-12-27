$('#car').on('model-loaded',function(){
  console.log('car loaded');
  document.querySelector('#car').components.sound.playSound();
})