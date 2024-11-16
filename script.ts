// for element listinig:
document.getElementById("resume-form")?.addEventListener("submit", function (event) {
    event.preventDefault();



    // type assertion 
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement= document.getElementById("email")as HTMLInputElement;
    const phoneElement = document.getElementById("phone")as HTMLInputElement;
    const educationElement = document.getElementById("education")as HTMLInputElement;
    const skillsElement = document.getElementById("skills")as HTMLInputElement;
    const experienceElement = document.getElementById("experience") as HTMLInputElement;


    if (nameElement && emailElement && phoneElement && educationElement && skillsElement && experienceElement) {
        

        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const skills = skillsElement.value;
        const experience = experienceElement.value;
    


    // for output:
    const resumeOutput = `
    <h2>Resume :</h2>
    <p><strong>NAME :</strong>${name}</p>
    <p><strong>EMAIL :</strong> ${email} </p>
    <p><strong>NUMBER :</strong> ${phone} </p>

    <h3>EDUCATION</h3>
    <p>${education}</p>

    <h3>SKILLS</h3>
    <p>${skills}</p>

    <h3>EXPERIENCE</h3>
    <p>${experience}</p>
    `;


    const resumeOutputElement = document.getElementById("resumeOutput");
    if (resumeOutputElement){
        resumeOutputElement.innerHTML= resumeOutput;
    }else {
        console.error("resume Output element not found");
    } 

    }
    else{
        console.error('one or more elements not found');
    }


})


