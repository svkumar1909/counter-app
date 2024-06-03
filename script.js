 const countValue = document.querySelector('#counter')

 const increment = () => {
    // get the valuer from UI
   /*A*/ let value =parseInt (countValue.innerText);

    // Update the value
   /*B*/ value = value + 1;


     //set the value onto UI
    /*C*/countValue.innerText = value;


 };

 const decrement = () => {

    // get the valuer from UI
   /*A*/ let value =parseInt (countValue.innerText);

    // Update the value
   /*B*/ value = value - 1;


     //set the value onto UI
    /*C*/countValue.innerText = value;

 };