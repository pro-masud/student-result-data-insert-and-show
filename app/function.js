// create a alertStatus arrow function 

const alertStatus = (status, key = 'danger') => {
    return `<div class="alert alert-${key} alert-dismissible fade show" role="alert">${status}
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