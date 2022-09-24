let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
/*
anner would be:

/* Code above modified from 
Slideshow/Carousel obtained from https://www.w3schools.com/howto/howto_js_slideshow.asp
}
*/

//could convert from htmlcollection to array using array.from, wouldve made this less weird.
function getAverage(gradesArr) {
  for (let i = 0; i < gradesArr.length; i++) {
    gradesArr[i].value = gradesArr[i].value.toUpperCase();
  }
  gradesArr.forEach((e) => console.log(e.value));

  let average = 0;
  for (let i = 0; i < gradesArr.length; i++) {
    if (gradesArr[i].value == "A") average += 4.0;
    else if (gradesArr[i].value == "B") average += 3.0;
    else if (gradesArr[i].value == "C") average += 2.0;
    else if (gradesArr[i].value == "D") average += 1.0;
    else average += 0.0;
  }
  return average / gradesArr.length;
}

function requirementCheck(status, avg) {
  const undergraduateMinimum = 3.2;
  const graduateMinimum = 3.7;
  console.log("!!!!!!!!!!!!!!!!!!!!!" + status);

  let undergraduateCongratzMsg =
    "Undergraduate! Congratulations, you qualify, Here are the instructions to apply:\n >>>LINK WOULD GO HERE<<<\nAverage: " +
    avg +
    " | status: " +
    status +
    "\nrequires=" +
    undergraduateMinimum;
  let graduateCongratzMsg =
    "Graduate! Congratulations, you qualify, Here are the instructions to apply:\n >>>LINK WOULD GO HERE<<<\nAverage: " +
    avg +
    " | status: " +
    status +
    "\nrequires=" +
    graduateMinimum;
  let failMsg =
    "Thank you for your interest, but you do not qualify because you are too dumb\nAverage: " +
    avg +
    " | status: " +
    status;

  if (status == "undergrad" && avg >= undergraduateMinimum)
    document.getElementById("average_result").innerHTML =
      undergraduateCongratzMsg;
  else if (status == "grad" && avg >= graduateMinimum)
    document.getElementById("average_result").innerHTML = graduateCongratzMsg;
  else document.getElementById("average_result").innerHTML = failMsg;
}

function checkInput(str) {
  console.log("checkinput");
  console.log("str = " + str);
  console.log("str.length = " + str.length);
  return str.length === 1 && !str.match(/[^a-dfA-DF]/);
}

function processForm(status) {
  console.log("Student is a: " + status);
  const inputz = document.getElementsByClassName(status);
  const gradesArr = [];

  let errorFlag = false;
  for (let i = 0; i < inputz.length; i++) {
    if (checkInput(inputz[i].value) === false) {
      let errorMessage = "Grade needs to be A, B, C, D, or F";
      document.getElementsByClassName("error_message_form")[0].style.display =
        "block";
      document.getElementsByClassName("error_message_form")[0].innerHTML =
        errorMessage;
      errorFlag = true;
      break;
    } else {
      document.getElementsByClassName("error_message_form")[0].innerHTML = "";
      document.getElementsByClassName("error_message_form")[0].style.display =
        "none";
      gradesArr.push(inputz[i]);
    }
  }
  //if error, doesn't run rest of program and user has to enter new information for this function again.
  if (errorFlag == false) {
    const average = getAverage(gradesArr);
    requirementCheck(status, average);
    //document.getElementById("average_result").innerHTML = "test";
    console.log(
      gradesArr +
        "<-htmlcollection log\nAmount of elements:\n" +
        gradesArr.length
    );
    gradesArr.forEach((element) => console.log(element.value));
  }
}

function show(student_status) {
  if (student_status == "undergraduate") {
    document.getElementById("undergraduate_courses").style.visibility =
      "visible";
    document.getElementById("undergraduate_courses").style.display = "block";
    document.getElementById("graduate_courses").style.visibility = "hidden";
    document.getElementById("graduate_courses").style.display = "none";
  } else if (student_status == "graduate") {
    document.getElementById("graduate_courses").style.visibility = "visible";
    document.getElementById("graduate_courses").style.display = "block";
    document.getElementById("undergraduate_courses").style.visibility =
      "hidden";
    document.getElementById("undergraduate_courses").style.display = "none";
  } else document.getElementById("courses_display2").innerHTML = "no status";
}

function myFF() {
  // document.getElementsByClassName("error_message_form")[0].style.display = "none";
  let student_status = document.getElementById("student_status").value;
  console.log(student_status);
  // const student = new studentCourses(student_status);
  show(student_status);
}
