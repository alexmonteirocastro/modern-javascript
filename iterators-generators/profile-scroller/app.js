const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Jane Smith',
        age: 26,
        gender: 'female',
        lookingfor: 'male',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'William Goldberg',
        age: 45,
        gender: 'male',
        lookingfor: 'female',
        location: 'New York NY',
        image: 'https://randomuser.me/api/portraits/men/88.jpg'
    }
];

const profiles = profileIterator(data);

//Next event 
document.getElementById('next').addEventListener('click', nextProfile);

//Next profile display
function nextProfile(){

    const currentProfile = profiles.next().value;

    document.getElementById('next').innerHTML = 'Next';

    if(currentProfile !== undefined){

        document.getElementById('profileDisplay').innerHTML = `
            <ul class="list-group">
                <li class = "list-group-item">Name: ${currentProfile.name}</li>
                <li class = "list-group-item">Age: ${currentProfile.age}</li>
                <li class = "list-group-item">Gender: ${currentProfile.gender}</li>
                <li class = "list-group-item">Looking for: ${currentProfile.lookingfor}</li>
                <li class = "list-group-item">Location: ${currentProfile.location}</li>            
            </ul>
        `;

        document.getElementById('imageDisplay').innerHTML = `
            <img src = "${currentProfile.image}">
        `;

    } else {
        //No more profiles
        window.location.reload();
    }

    
}

//Profile iterator
function profileIterator(profiles){
    let nextIndex = 0;

    return{
        next: function(){
            return nextIndex < profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}