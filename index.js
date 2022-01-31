// A team list with:
// - name
// - job position
// - role (editor, admin, no rights)
// - pets (with name and type)

// Kimberley
// Ngozi

// Array version
// const teamRoles = ['editor', 'admin', 'no rights'];

// Object version
const teamRoles = {
  editor: 'editor',
  admin: 'admin',
  noRights: 'no rights',
};

const teamMembers = [
  {
    id: 1,
    firstName: 'Kimberley',
    jobPosition: 'CEO',
    role: teamRoles.admin,
    pets: [],
  },
  {
    id: 2,
    firstName: 'Ngozi',
    jobPosition: 'CMO',
    role: teamRoles.editor,
    pets: [
      {
        name: 'Kim',
        type: 'dog',
      },
    ],
  },
];

// console.log(typeof teamMembers); // object (even though it's an array)
// console.log(typeof teamMembers[0].firstName);

// Check the types of the properties in the objects
// if (typeof teamMembers[1].firstName !== 'string') {
//   throw new Error('a first name is not a string');
// }

// Check the correctness of the properties in the objects
// if (teamMembers[1].jobPosition.toUpperCase() !== teamMembers[1].jobPosition) {
//   throw new Error('a job position has not been completely uppercased');
// }

// What can we do with this data structure?
// 1. Display the list of users (map over the array)

/*
<div>First Name: <first name here></div>
<div>Job Position: <job position here></div>
*/

// function TeamMembersList() {
//   return (
//     <div>
//       {teamMembers.map((teamMember) => {
//         return (
//           <div key={`teamMember-${teamMember.id}`}>
//             <div>First Name: {teamMember.firstName}</div>
//             <div>Job Position: {teamMember.jobPosition}</div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// 2. Add or delete team members

// Delete (filter)
console.log(
  teamMembers.filter((teamMember) => {
    // if (teamMember.id !== 1) {
    //   return true;
    // } else {
    //   return false;
    // }
    return teamMember.id !== 1;
  }),
);

// Calculate new unique ID
// let highestId = // calculate highest ID
// highestId = highestId + 1;
// teamMembers.push({
//   id: highestId
// })

// 3. Change any property of a team member (eg. jobPosition)
