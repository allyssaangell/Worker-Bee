const sundayInEl = document.querySelector("#inputInSunday").value.trim();
const sundayOutEl = document.querySelector("#inputOutSunday").value.trim();

const mondayInEl = document.querySelector("#inputInMonday").value.trim();
const mondayOutEl = document.querySelector("#inputOutMonday").value.trim();

const tuesdayInEl = document.querySelector("#inputInTuesday").value.trim();
const tuesdayOutEl = document.querySelector("#inputOutTuesday").value.trim();

const wednesdayInEl = document.querySelector("#inputInWednesday").value.trim();
const wednesdayOutEl = document.querySelector("#inputOutWednesday").value.trim();

const thursdayInEl = document.querySelector("#inputInThursday").value.trim();
const thursdayOutEl = document.querySelector("#inputOutThursday").value.trim();

const fridayInEl = document.querySelector("#inputInFriday").value.trim();
const fridayOutEl = document.querySelector("#inputOutFriday").value.trim();

const saturdayInEl = document.querySelector("#inputInSaturday").value.trim();
const saturdayOutEl = document.querySelector("#inputOutSaturday").value.trim();



const submitTimeCard = async (event) => {
    event.preventDefault();

    console.log(sundayInEl.value);
    console.log(sundayOutEl.value);

    const response = await fetch("/api/timesheet/", {
        method: "POST",
        body: JSON.stringify({ 
            "sunday": {
                "in": sundayInEl,
                "out": sundayOutEl
            },
            "monday": {
                "in": mondayInEl,
                "out": mondayOutEl
            },
            "tuesday": {
                "in": tuesdayInEl,
                "out": tuesdayOutEl
            },
            "wednesday": {
                "in": wednesdayInEl,
                "out": wednesdayOutEl
            },
            "thursday": {
                "in": thursdayInEl,
                "out": thursdayOutEl
            },
            "friday": {
                "in": fridayInEl,
                "out": fridayOutEl
            },
            "saturday": {
                "in": saturdayInEl,
                "out": saturdayOutEl
            }
        }),
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        // If successful, redirect the browser to the profile page
        alert("response is ok!")
        document.location.replace("/profile");
    } else {
        alert(response.statusText);
    }
}

document.addEventListener("submit", submitTimeCard);