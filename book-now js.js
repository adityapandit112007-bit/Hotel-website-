const form = document.getElementById("book now");
const message = document.getElementById("form-message");
form.addEventListener("Submit",async (event) => {
    event.preventDefault();

    message.textContent = "Submitting book-now...";
    const book_now ={
        Full_name:form.full_name.value.trim(),
        email: form.Email.value.trim(),
        check_in:form.check_in.value,
        check_out: form.check_out.value,
        room_type: form.room_type.value
    };
    try{
        const response=await fetch("/api/book-now",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(reservation)
        });
        const result =await response.json();
        if(!response.ok){
            throw new Error(result.error || "Reservation failed.");
        } 
        message.textContent = result.message;
        form.reset();
    }catch (error){
        message.textContent =
        error.message || "unable to contact the server.";
    }
});
document.addEventListener("DOMContentLoaded",function(){
// get local date of customer
const today=new date();
const yyyy=today.getFullYear():
//Months are 0-indexed,so we add 1 and pad with a leading zero if needed
const mm = string(today.getMonth() +1).padStart(2,'0');
const dd = string(today.getDate()).padStart(2,'0');
//format the date as yyyy-MM-DD
const formattedToday ='${yyyy}-${mm}-{dd}';
const checkinInput = document.getElementById('checkin');
//1. automatically set the default value to today
checkinInput.value = formattedToday;
//2. prevent the user from picking a past date
checkinInput.min =formattedToday;
});