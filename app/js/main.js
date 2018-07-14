
$("#subbutt").on("click", function(e){
    e.preventDefault();
    surveyPost();
})

function surveyPost(){
    var currUrl = window.location.origin;

    var newFriend = {
        name: $("#namefield").val().trim(),
        //photo?
        score: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val()]
    }
    console.log("from: " + currUrl);
    console.log("Form Name : " + newFriend.name);
    console.log("FormData: " + newFriend.score[0] + " " + newFriend.score[1] + " " + newFriend.score[2]+ " " + newFriend.score[3]+ " " + newFriend.score[4]);
}
