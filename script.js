var _a;
// for element listinig:
(_a = document.getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    // type assertion 
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var skillsElement = document.getElementById("skills");
    var experienceElement = document.getElementById("experience");
    if (nameElement && emailElement && phoneElement && educationElement && skillsElement && experienceElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var skills = skillsElement.value;
        var experience = experienceElement.value;
        // for output:
        var resumeOutput = "\n    <h2>Resume</h2>\n    <p><strong>NAME :</strong>".concat(name_1, "</p>\n    <p><strong>EMAIL :</strong> ").concat(email, " </p>\n    <p><strong>NUMBER :</strong> ").concat(phone, " </p>\n\n    <h3>EDUCATION</h3>\n    <p>").concat(education, "</p>\n\n    <h3>SKILLS</h3>\n    <p>").concat(skills, "</p>\n\n    <h3>EXPERIENCE</h3>\n    <p>").concat(experience, "</p>\n    ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("resume Output element not found");
        }
    }
    else {
        console.error('one or more elements not found');
    }
});
