document.querySelector('.job').addEventListener('mouseover', function() {
  document.querySelector('.subjob').classList.add('show');
});

document.querySelector('.subjob').addEventListener('mouseover', function() {
  document.querySelector('.subjob').classList.add('show');
});

document.querySelector('.subjob').addEventListener('mouseout', function() {
  document.querySelector('.subjob').classList.remove('show');
});
document.querySelector('h1').addEventListener('mouseover', function() {
  document.querySelector('.subjob').classList.remove('show');
});

var img = 3;
document.querySelector('.img1').classList.add('th');
document.querySelector('.img2').classList.add('th');
document.querySelector('.img0').classList.add('th');

document.querySelector('.b_right').addEventListener('click', function() {
  img += 1;
  if (img == 4){
    img = 1;
  }
  if (img == 1){
    console.log('it works');
    document.querySelector('.img1').classList.add('one');
    document.querySelector('.img2').classList.add('one');
    document.querySelector('.img1').classList.remove('two');
    document.querySelector('.img2').classList.remove('two');
    document.querySelector('.img1').classList.remove('th');
    document.querySelector('.img2').classList.remove('th');
    document.querySelector('.img0').classList.add('one');
    document.querySelector('.img0').classList.remove('two');
    document.querySelector('.img0').classList.remove('th');

  }
  if (img == 2){
    console.log('this too')
    document.querySelector('.img1').classList.add('two');
    document.querySelector('.img2').classList.add('two');
    document.querySelector('.img1').classList.remove('one');
    document.querySelector('.img2').classList.remove('one');
    document.querySelector('.img1').classList.remove('th');
    document.querySelector('.img2').classList.remove('th');
    document.querySelector('.img0').classList.add('two');
    document.querySelector('.img0').classList.remove('one');
    document.querySelector('.img0').classList.remove('th');
  }
  if (img == 3){
    console.log('this')
    document.querySelector('.img1').classList.add('th');
    document.querySelector('.img2').classList.add('th');
    document.querySelector('.img1').classList.remove('one');
    document.querySelector('.img2').classList.remove('one');
    document.querySelector('.img1').classList.remove('two');
    document.querySelector('.img2').classList.remove('two');
    document.querySelector('.img0').classList.add('th');
    document.querySelector('.img0').classList.remove('one');
    document.querySelector('.img0').classList.remove('two');
  }
  console.log(img);
});

document.querySelector('.b_left').addEventListener('click', function() {
  img = img - 1;
  if (img == 0){
   img = 3;
  }
  if (img == 3){
    console.log('this');
    document.querySelector('.img1').classList.add('th');
      document.querySelector('.img2').classList.add('th');
      document.querySelector('.img1').classList.remove('one');
      document.querySelector('.img2').classList.remove('one');
      document.querySelector('.img1').classList.remove('two');
      document.querySelector('.img2').classList.remove('two');
      document.querySelector('.img0').classList.add('th');
      document.querySelector('.img0').classList.remove('one');
      document.querySelector('.img0').classList.remove('two');
  }
  if (img == 1){
    console.log('it works');
    document.querySelector('.img1').classList.add('one');
    document.querySelector('.img2').classList.add('one');
    document.querySelector('.img1').classList.remove('two');
    document.querySelector('.img2').classList.remove('two');
    document.querySelector('.img1').classList.remove('th');
    document.querySelector('.img2').classList.remove('th');
    document.querySelector('.img0').classList.add('one');
    document.querySelector('.img0').classList.remove('two');
    document.querySelector('.img0').classList.remove('th');
  }
  if (img == 2){
    console.log('this too')
    document.querySelector('.img1').classList.add('two');
    document.querySelector('.img2').classList.add('two');
    document.querySelector('.img1').classList.remove('one');
    document.querySelector('.img2').classList.remove('one');
    document.querySelector('.img1').classList.remove('th');
    document.querySelector('.img2').classList.remove('th');
    document.querySelector('.img0').classList.add('two');
    document.querySelector('.img0').classList.remove('one');
    document.querySelector('.img0').classList.remove('th');
  }
  console.log(img);
});

