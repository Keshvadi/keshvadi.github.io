function addToCalendar() {
    const date = document.getElementById("sessionDate").value;
    const time = document.getElementById("sessionTime").value;
    const calendarType = document.querySelector('input[name="calendarType"]:checked').value;

    if (!date || !time || !calendarType) {
        alert("Please select a valid date, time, and calendar type.");
        return;
    }

    // Webpage URL
    const studyHubUrl = ""; // ADD ACTUAL WEBPAGE URL WHEN KNOWN!!!!!!!!!!!!!!!!!!!!!!
    // Teams URL
    const teamsMeetingUrl = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_OWZmNGU4NzQtZGJmMy00ZmE5LTgwZjMtMzRiNjZiYTllMTAy%40thread.v2/0?context=%7b%22Tid%22%3a%22eb1c9d1a-e6e8-4097-87fe-bb01690935b7%22%2c%22Oid%22%3a%22d2b0f6f4-52dd-4ac7-815a-441d4f2fc4b2%22%7d";

    // Create start and end times
    const startDate = new Date(`${date}T${time}:00`);
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // 1-hour session

    // UTC format for Google Calendar
    const formattedStartDateUTC = startDate.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    const formattedEndDateUTC = endDate.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

    // Local time for Outlook Calendar
    const formattedStartDateLocal = new Intl.DateTimeFormat('sv-SE', {
        dateStyle: 'short',
        timeStyle: 'short',
        hour12: false,
    }).format(startDate).replace(" ", "T");

    const formattedEndDateLocal = new Intl.DateTimeFormat('sv-SE', {
        dateStyle: 'short',
        timeStyle: 'short',
        hour12: false,
    }).format(endDate).replace(" ", "T");

    // Description for the event
    const eventDescription = `
Join the StudyHub session on Microsoft Teams!
Find all details and the schedule at: ${studyHubUrl}

Teams Meeting Link:
${teamsMeetingUrl}
    `.trim();

    let calendarUrl = "";

    // Generate URL for selected calendar type
    if (calendarType === "google") {
        calendarUrl = `
https://calendar.google.com/calendar/render?action=TEMPLATE&text=StudyHub%20Session&dates=${formattedStartDateUTC}/${formattedEndDateUTC}&details=${encodeURIComponent(eventDescription)}&location=Microsoft%20Teams
        `.trim();
    } else if (calendarType === "outlook") {
        calendarUrl = `
https://outlook.office.com/calendar/0/deeplink/compose?subject=StudyHub%20Session&body=${encodeURIComponent(eventDescription)}&startdt=${formattedStartDateLocal}&enddt=${formattedEndDateLocal}&location=Microsoft%20Teams
        `.trim();
    }

    // Open the link in a new tab
    if (calendarUrl) {
        window.open(calendarUrl, "_blank");
    }
}

