



let theButton = document.querySelector('#myBtn');
theButton.addEventListener('click',pressClear);



function pressClear() {
    console.log('clicked');
    $(document).ready(function(){
        $("button").click(function(){
          $("p").hide();
        });
      });
}
