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
    const userIdEl = document.getElementById("update")
    console.log(sundayInEl.value);
    console.log(sundayOutEl.value);

    let postBody = { 
        
        week_start: "4/5",
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

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    console.log(id);
    console.log(postBody);
    const response = await fetch(`/api/timesheet/${id}`, {
        method: "PUT",
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