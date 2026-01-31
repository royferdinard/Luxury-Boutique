function displaylaguagelist(){
    document.querySelector(".mylaguages-container").classList.toggle("show");

    if(document.querySelector(".mylaguages-container").classList.contains("show")){
        document.querySelector(".language").innerHTML = '<i class="fas fa-times"></i>';
          document.querySelector(".language").style.backgroundColor = "white";
    } else{
          document.querySelector(".language").innerHTML = '<i class="fas fa-globe"></i>';
           document.querySelector(".language").style.backgroundColor = "antiquewhite";
    }
}
document.querySelector(".language").addEventListener("click", displaylaguagelist);


function displaylink(){
    document.querySelector(".sublinks").classList.toggle("show");

    if(document.querySelector(".sublinks").classList.contains("show")){
        document.querySelector(".link-button").innerHTML = '<i class="fas fa-times"></i>';
          document.querySelector(".link-button").style.backgroundColor = "darkgreen";
    } else{
          document.querySelector(".link-button").innerHTML = '<i class="fas fa-bars"></i>';
           document.querySelector(".link-button").style.backgroundColor = "darkgreen";
    }
}
document.querySelector(".link-button").addEventListener("click", displaylink);



// Basic booking form validation + success state
(function(){
  const form = document.getElementById('booking-form');
  const success = document.getElementById('booking-success');

  function setError(input, message){
    const field = input.closest('.field');
    const small = field ? field.querySelector('small.error') : null;
    if(small){ small.textContent = message || ''; }
    if(message){ input.setAttribute('aria-invalid','true'); }
    else { input.removeAttribute('aria-invalid'); }
  }

  function validate(){
    let valid = true;

    const requiredIds = ['fullName','email','phone','category','quantity','date','address','city'];
    requiredIds.forEach(id => {
      const el = document.getElementById(id);
      if(!el) return;
      if(!el.value || (el.tagName === 'SELECT' && !el.value)){
        setError(el, 'This field is required');
        valid = false;
      } else {
        setError(el, '');
      }
    });

    const email = document.getElementById('email');
    if(email && email.value){
      const ok = /.+@.+\..+/.test(email.value);
      if(!ok){ setError(email, 'Enter a valid email'); valid=false; }
    }

    const phone = document.getElementById('phone');
    if(phone && phone.value){
      const ok = /[+\d][\d\s-]{7,}/.test(phone.value);
      if(!ok){ setError(phone, 'Enter a valid phone'); valid=false; }
    }

    const agree = document.getElementById('agree');
    if(agree && !agree.checked){
      const label = agree.closest('.terms');
      const small = label ? label.querySelector('small.error') : null;
      if(small){ small.textContent = 'You must accept terms to continue'; }
      valid = false;
    } else if(agree){
      const label = agree.closest('.terms');
      const small = label ? label.querySelector('small.error') : null;
      if(small){ small.textContent = ''; }
    }

    return valid;
  }

  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      if(!validate()) return;
      // Simulate submit
      success.classList.remove('hidden');
      form.scrollIntoView({behavior:'smooth', block:'start'});
      // Clear inputs
      form.reset();
    });
  }
})();
