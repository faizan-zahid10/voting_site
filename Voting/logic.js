function toggleMenu() {
    var otherOptions = document.querySelector('.otheroptions');
    otherOptions.classList.toggle('show');
}


let currentFeedbackIndex = 0; 
const feedbackData = [
    {
        review:
            '"Our community contest received tens of thousands of votes in a matter of days. No problems. Any questions we had were promptly answered. MyVote handled the scale easily and with all the pro/premium features, there really is no other competitor."',
        profilePic: 'https://i.pinimg.com/originals/6d/5f/c6/6d5fc60bae3dc6139eefa31af206596f.jpg',
        reviewer: 'AZHAR ALI',
        designation: 'SENIOR PRODUCT MANAGER, STUDIO WILDCARD'
    },
    {
        review:
            '"The ranked choice platform is incredibly user-friendly. Our team was able to implement contests quickly and efficiently, and we received positive feedback from our community. MyVote has become an essential tool for our decision-making processes."',
        profilePic: 'https://i.pinimg.com/originals/90/c0/51/90c051810494297069df2b6b9a450c15.jpg',
        reviewer: 'ADNAN KAMRAN',
        designation: 'MARKETING MANAGER, PTCL'
    }
];

function updateFeedback() {
    const { review, profilePic, reviewer, designation } = feedbackData[currentFeedbackIndex];

    document.getElementById('review').textContent = review;
    document.getElementById('profile_pic').src = profilePic;
    document.getElementById('reviewer').textContent = reviewer;
    document.getElementById('designation').textContent = designation;
}

updateFeedback();
document.getElementById('btrg').addEventListener('click', () => {
    currentFeedbackIndex = (currentFeedbackIndex + 1) % feedbackData.length; 
    updateFeedback(); 
});
