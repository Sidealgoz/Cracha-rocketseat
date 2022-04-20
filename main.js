let socialLinks = {
  github: 'Sidealgoz',
  youtbe: 'rocketseat',
  twitter: 'rocketseat',
  instagram: 'rocketseat_oficial',
  facebook: 'rocketseat'
}

function ChangesocialLinks() {
  for (let li of SocialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `http://${social}.com/${linksSocialMedia[social]}`
  }
}
ChangesocialLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.scr = data.avatar_url
      userLink.textContent = data.login
    })
}
getGitHubProfileInfos()
