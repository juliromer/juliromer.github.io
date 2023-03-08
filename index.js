    let experienceinfo = document.getElementById("experience-info")
    let educationinfo = document.getElementById("education-info")
    let skillsinfo = document.getElementById("skills-info")
    let moreexp = document.getElementById("more-experience")
    let moreedu = document.getElementById("more-education")
    let moreski = document.getElementById("more-skills")

    let showInfo = (info, icon) => {
        if (info.style.display == 'none'){
            info.style.display = 'block';
            icon.innerHTML = 'READ LESS -'
        } else {
            info.style.display = 'none'
            icon.innerHTML = 'READ MORE +'
        };
    }