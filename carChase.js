$('#car').on('drive', function(e){
  console.log(e);
});

$('#car-dae').on('loaded', function(){
  document.querySelector('#car').emit('drive');
});