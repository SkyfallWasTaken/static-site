const response = await fetch("/data/projects.json")
const projects = await response.json()

const projectsList = document.getElementById("projects")

projects.forEach((project) => {
    const projectCard = document.createElement("li")
    projectCard.classList.add("project-card")

    const projectTitle = document.createElement("h2")
    projectTitle.textContent = project.title
    projectCard.appendChild(projectTitle)

    const projectDescription = document.createElement("p")
    projectDescription.textContent = project.description
    projectCard.appendChild(projectDescription)

    if (project.link) {
        const projectLink = document.createElement("a")
        projectLink.href = project.link
        projectLink.classList.add("underline")
        projectLink.textContent = "↗ View Project"
        projectLink.target = "_blank"
        projectCard.appendChild(projectLink)
    }

    projectsList.appendChild(projectCard)
})