//Write your code here

const attendee = {

  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
}

//log atteend name function
function logAttendeeName(attendee, name){
  console.log(attendee.name)

}

//log ticket price function
function logTicketPrice(attendee, ticketPrice){
  console.log(attendee.ticketPrice)

}

//update ticket type function
function updateTicketType(attendee, ordinary){
  attendee.ticketType = ordinary

}

//update tickket price function
function updateTicketPrice(attendee, newTicketPrice){

  attendee.ticketPrice = newTicketPrice
}

//remove event property function
function removeEventProperty(attendee){
  delete attendee.event
}


//checked in property
function addCheckedInProperty(attendee){
  attendee.checkedIn = true
}

//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};