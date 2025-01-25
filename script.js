// Time Slots Data
const timeSlotsData = [
    {
        date: "January 25, 2025",
        slots: ["9:00 AM", "11:00 AM", "2:00 PM"],
    },
    {
        date: "January 26, 2025",
        slots: ["10:00 AM", "12:00 PM", "4:00 PM"],
    },
];

const timeSlotsContainer = document.getElementById("timeSlots");
const modal = document.getElementById("appointmentModal");
const timeSlotDropdown = document.getElementById("timeSlotDropdown");
const confirmAppointmentBtn = document.getElementById("confirmAppointment");
const closeModalBtn = document.getElementById("closeModal");
const bookAppointmentBtn = document.getElementById("bookAppointment");

// loop to load the available time slots
timeSlotsData.forEach((day) => {
    const dateHeader = document.createElement("li");
    dateHeader.style.fontWeight = "bold";
    dateHeader.textContent = day.date;
    timeSlotsContainer.appendChild(dateHeader);

    day.slots.forEach((slot) => {
        const slotItem = document.createElement("li");
        slotItem.innerHTML = `<span>${slot}</span>`;
        slotItem.style.cursor = "pointer";
        slotItem.addEventListener("click", () => {
            alert(`Your appointment is booked on ${slot} on ${day.date}`);
        });
        timeSlotsContainer.appendChild(slotItem);
    });
});

// for displaying available slots
bookAppointmentBtn.addEventListener("click", () => {
    timeSlotDropdown.innerHTML = '<option value="" disabled selected>Select a time slot</option>';
    confirmAppointmentBtn.disabled = true;

    timeSlotsData.forEach((day) => {
        const optGroup = document.createElement("optgroup");
        optGroup.label = day.date;

        day.slots.forEach((slot) => {
            const option = document.createElement("option");
            option.value = `${day.date}, ${slot}`;
            option.textContent = `${day.date} - ${slot}`;
            optGroup.appendChild(option);
        });

        timeSlotDropdown.appendChild(optGroup);
    });

    modal.classList.remove("hidden");
});

timeSlotDropdown.addEventListener("change", () => {
    confirmAppointmentBtn.disabled = false;
});

confirmAppointmentBtn.addEventListener("click", () => {
    const selectedTimeSlot = timeSlotDropdown.value;
    alert(`Your appointment is booked on ${selectedTimeSlot}.`);
    modal.classList.add("hidden");
});

closeModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});
