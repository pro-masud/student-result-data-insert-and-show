// get form form data here

const form_Data = document.getElementById("formData");
const msg = document.querySelector(".msg");
const loaderImg = document.querySelector(".loader-img");
const clickBtn = document.querySelector(".click");
const faudio = document.querySelector(".faudio");
const haudio = document.querySelector(".haudio");

form_Data.onsubmit = (e) => {
  e.preventDefault();

  // play for submit saunt
  clickBtn.play();

  const data_form = new FormData(e.target);

  const data = Object.fromEntries(data_form.entries());


  loaderImg.style.display = "block";

  setTimeout(() => {

    // Show Image Loader
    loaderImg.style.display = "none";


    // data validation here
    if(!data.subject || !data.mark){
      msg.innerHTML = alertStatus("All Field Required !!");
    }else{
      // get result for getResults function 
      const {gpa, grade} = getResults(data.mark);

      // condition to Pass and Field 
      if(grade === "F"){
        faudio.play();
      }else{
        haudio.play();
      }

      // show output data here
      msg.innerHTML = alertStatus(`Subject: ${data.subject} / GPA ${gpa} / Grade ${grade}
      `,'info');
    }


    // stop sount
    clickBtn.stop(3000);
  }, 3000);



  // form reset 

  e.target.reset();

}
