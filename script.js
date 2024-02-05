$(document).ready(function(){
    $("#btnAddsStudent").click(function(){
        function getStudentData(){
            let student ={
                firstname : $("#firstName").val(),
                lastName : $("#lastName").val(),
                gender : ("input[name='gender'] : checked").val()

            };
            return student;
        }
        function storeDataToLocalStorage(){
            if(!localStorage.getItem("student"))
            {
                localStorage.setItem("student".JSON.stringify(getStudentData()));
            }
            else
            {
                localStorage.removeItem("student",JSON.stringify(getStudentData()));
            }
        }
        storeDataToLocalStorage();
        window.location.href="display.html"
    });
});