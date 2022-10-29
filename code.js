let input_repo = document.querySelector(".get-repo .input");
let button_repo = document.querySelector(".get-repo .get-button");
let show_repos = document.querySelector(".data-repo");

// if clicked in button 

button_repo.onclick = () => {
    if (input_repo.value == "") {

        // if input is empty
        show_repos.innerHTML = "Please Enter Your Repository Name";
        show_repos.style.cssText = "color: red;"
    } else {

        // if input is not empty
        show_repos.innerHTML = "";
        show_repos.style.cssText = "color: black;"
        fetch(`https://api.github.com/users/${input_repo.value}/repos`)
        .then((repository) => repository.json())
        .then((repositories) => {
            repositories.forEach(repo => {
                // create element in repository
                let sup_div = document.createElement("div");

                // create element in repository name
                let repo_name = document.createElement("p");
                
                // create element in repository text
                let repo_name_text = document.createTextNode(repo.name);
                
                // append repo_name_text for repo_name
                repo_name.appendChild(repo_name_text);

                // append repo_name for repo
                sup_div.appendChild(repo_name);
                
                // create element in information repository
                let repo_info = document.createElement("div");

                // create element in repository url
                let url_repo = document.createElement("a");
                
                // create element in repository url text
                let url_repo_text = document.createTextNode("Visit");
                
                // append repo_name_text for url_repo
                url_repo.appendChild(url_repo_text);
                
                // get url repository
                url_repo.setAttribute("href", `https://github.com/${input_repo.value}/${repo.name}`);
                
                //open on new window
                url_repo.setAttribute("target","_black");
                
                // append url_repo for repo_info
                repo_info.appendChild(url_repo);

                // create number fo stars for repository
                let stars_num = document.createElement("span");

                // create number fo stars for repository value
                let stars_num_text = document.createTextNode(`stars ${repo.stargazers_count}`);

                // append stars_num_text stars_num 
                stars_num.appendChild(stars_num_text);

                // append url_repo for repo_info
                repo_info.appendChild(stars_num);

                // append repo_info for repo
                sup_div.appendChild(repo_info);

                // append repo for show Repositories
                show_repos.appendChild(sup_div);

                // add class name for div repo
                sup_div.className = "repo-box";
            });
        }) 
    }
}