// create a alertStatus arrow function 

const alertStatus = (status, key = 'danger') => {
    return `<div class="alert alert-${key} alert-dismissible fade show mt-2" role="alert">${status}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
}

/**
 * moblie number pattern here 
 * */ 

const isMobile = (mobile) => {
    const patter = /^(01|\+880|880)[0-9]{9}$/;

    return patter.test(mobile);
}


/**
 * Email number pattern here 
 * */ 

const isEmail = (email) => {
    const pattern = /^[a-z]{2,}@[a-z]{3,}\.[a-z]{3,5}$/;

    return pattern.test(email);
}

/**
 * gpc and gread create this function here
 * 
 * */ 

const getResults = (marks) => {

    let gpa;
    let grade;

    if( marks >= 0 && marks <= 32 ){
        gpa = 0 ;
        grade = "F";
    }else if ( marks >= 33 && marks < 40 ){
        gpa = 1;
        grade = "D";
    }else if ( marks >= 40 && marks < 50 ){
        gpa = 2;
        grade = "C";
    }else if ( marks >= 50 && marks < 60 ){
        gpa = 3;
        grade = "B";
    }else if( marks >= 60 && marks < 70){
        gpa = 3.5;
        grade = "A-";
    }else if( marks >= 70 && marks < 80 ){
        gpa = 4;
        grade = "A";
    }else if( marks >= 80 && marks <= 100){
        gpa = 5;
        grade = "A+";
    }else{
        gpa = "Invalide Data";
        grade = "Invalide Data";
    }

    return {gpa,grade};
}