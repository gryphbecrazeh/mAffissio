$("#quickbooksDiv").click(function() {
  $("#section-a").toggle();
});

$("#servicesDiv").click(function() {
  $("#section-b").toggle();
});

$("#aboutDiv").click(function() {
  $("#section-c").toggle();
});

$("#contactDiv").click(function() {
  $("#section-d").toggle();
});

$("#quickBooksBtn").click(function() {
  $("#section-a").toggle();
});

$("#block1Btn").click(function(){
  $("#block1 .sectionContent").toggle();
  $('#block1Btn').toggle();
});
$("#block1 .sectionContent").click(function(){
  $("#block1 .sectionContent").toggle();
  $('#block1Btn').toggle();
});


$("#block2Btn").click(function(){
  $("#block2 .sectionContent").toggle();
  $('#block2Btn').toggle();
});
$("#block2 .sectionContent").click(function(){
  $("#block2 .sectionContent").toggle();
  $('#block2Btn').toggle();
});


$("#block3Btn").click(function(){
  $("#block3 .sectionContent").toggle();
  $('#block3Btn').toggle();
});
$("#block3 .sectionContent").click(function(){
  $("#block3 .sectionContent").toggle();
  $('#block3Btn').toggle();
});
// this does not work this way


// function displayBoxF (){
//insert all html files as variables
/*
var vSectionA;

vSectionA = function fSectionA() {
  <section id="section-a" class="grid">
    <h2 class="sectionHead">Quickbooks &amp; other services</h2>
    <div class="sectionContent">
      <ul>
        <li>Quickbooks ProAdvisor</li>
        <li>Quickbooks Set-ups</li>
        <li>Quickbooks Clean-ups</li>
        <li>Client Write-ups</li>
        <li>Bank Reconciliations</li>
        <li>Notary Public</li>
      </ul>
    </div>
  </section>;
};
*/

/*
below is the example VVVVVV
this is the example from class that I am referencing when thinking about attempting
 to emulate this to have the tabs appear in the display box rather than appearing under the divs


 i may need to have a boolean array variable again for this to work, I've just realized that 
 the function will literally have to do something
 I wonder if I can use a variable, or maybe store the html in each of the arrays and then just have the array return its values

---------------------------------------------------------------------------------------------------------
// Get Calorie Count
function getCalories(){
  let output = '';
  if(localStorage.getItem('meals') === null){
    output = '<li style="text-align:center">Total Calores: 0</li>';
    $('#calorieDisplay').html(output).listview('refresh');
  } else {
    let meals = JSON.parse(localStorage.getItem('meals'));
    let calories = 0;
    $.each(meals,function(index, meal){
      calories = calories + parseInt(meal.calories);
    });
    output = '<li style="text-align:center">Total Calores: '+calories+'</li>';
    $('#calorieDisplay').html(output).listview('refresh');
  }
}
-------------------------------------------------------------------------------------------------------

View using displayBox
this method alters the itemDislpayBox's content to be the mark up for section a
if this is button is clicked, the content of the displayBox is changed to be this
hopefully the preexisting css for this will still apply, allowing us to see it, just as it was previously for the 
--------------------------------------
$("#quickbooksDiv").click(function() {
itemDisplayBox(content) === <section id="section-a" class="grid">
    <h2 class="sectionHead">Quickbooks &amp; other services</h2>
    <div class="sectionContent">
      <ul>
        <li>Quickbooks ProAdvisor</li>
        <li>Quickbooks Set-ups</li>
        <li>Quickbooks Clean-ups</li>
        <li>Client Write-ups</li>
        <li>Bank Reconciliations</li>
        <li>Notary Public</li>
      </ul>
    </div>
  </section>;
});

$("#servicesDiv").click(function() {

});

$("#aboutDiv").click(function() {

});

$("#contactDiv").click(function() {

});

$("#quickBooksBtn").click(function() {

});

if(itemDisplayBox(content) === null){

}


--------------------------------------
*/
// }
// document.getElementById(displayBox).innerHTML=displayBoxF();

//JS @ certain device widths?
// use array to create states
/*


BETTER YET

create a function, store all of the data inside that function, for mobile device widths "for (width>1000) function-a else fucntion-b"
function-a(#section-a){
getElementById
}
function-a(#section-b){

}
function-a(#section-c){

}
function-a(#section-d){

}






make display div outside of nav bar


have it read an array [0,0,0,0]
[1,0,0,0]

4 buttons modify the array
to apply a one to each, 
but set all other to zero

4 states
js



 css

 class a{
display: block;
 }



 orrr

 have it always present 
 but only visible on resolutions over 
 1000px

 assign a class to over-all
  boxes in the nav bar
 and have them display:none
 at resolutions over 1000px

 this will be a waste of resources and be
 bad code, but it will work
*/
