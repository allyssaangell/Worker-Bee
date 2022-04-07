


const sundayInEl = document.getElementById("inputInSunday");
const sundayOutEl = document.getElementById("inputOutSunday");

const mondayInEl = document.getElementById("inputInMonday");
const mondayOutEl = document.getElementById("inputOutMonday");

const tuesdayInEl = document.getElementById("inputInTuesday");
const tuesdayOutEl = document.getElementById("inputOutTuesday");

const wednesdayInEl = document.getElementById("inputInWednesday");
const wednesdayOutEl = document.getElementById("inputOutWednesday");

const thursdayInEl = document.getElementById("inputInThursday");
const thursdayOutEl = document.getElementById("inputOutThursday");

const fridayInEl = document.getElementById("inputInFriday");
const fridayOutEl = document.getElementById("inputOutFriday");

const saturdayInEl = document.getElementById("inputInSaturday");
const saturdayOutEl = document.getElementById("inputOutSaturday");



const submitTimeCard = async (event) => {
    event.preventDefault();

    console.log(sundayInEl.value);
    console.log(sundayOutEl.value);

    let postBody = { 
        
        week_start: "4/3",
        timesheet: {
        "sunday": {
            "in": sundayInEl.value,
            "out": sundayOutEl.value
        },
        "monday": {
            "in": mondayInEl.value,
            "out": mondayOutEl.value
        },
        "tuesday": {
            "in": tuesdayInEl.value,
            "out": tuesdayOutEl.value
        },
        "wednesday": {
            "in": wednesdayInEl.value,
            "out": wednesdayOutEl.value
        },
        "thursday": {
            "in": thursdayInEl.value,
            "out": thursdayOutEl.value
        },
        "friday": {
            "in": fridayInEl.value,
            "out": fridayOutEl.value
        },
        "saturday": {
            "in": saturdayInEl.value,
            "out": saturdayOutEl.value
        }
        }
    }

    console.log(postBody);

    // const title = document.querySelector('input[name="post-title"]').value;

  

    const response = await fetch("/api/timesheet/", {
        method: "POST",
        body: JSON.stringify(postBody), 
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        // If successful, redirect the browser to the profile page
        alert("response is ok!")
        document.location.replace("/viewdates");
    } else {
        alert(response.statusText);
    }
}

document.addEventListener("submit", submitTimeCard);