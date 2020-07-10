const Userinput = document.querySelector("#name");
const Button = document.querySelector("#btn");
const AppendingData = Array.from(document.querySelectorAll(".result p span"));

const clintID = 'Iv1.8a5b0bcdca710dfb';
const clintSecrets = 'f6a80eb740724fa86c32214b8211fe422d8f6443';


const FetchUser = async (user) => {
    try {
        const FetchData = await fetch(`https://api.github.com/users/${user}?clint_id=${clintID}&clint_Secret=${clintSecrets}`);
        const CookedData = await FetchData.json();
        // console.log(CookedData)
        let Name = CookedData.name;
        let Username = CookedData.login;
        let Repos = CookedData.public_repos;
        let URI = CookedData.html_url;
        console.log(AppendingData);
        AppendingData[0].innerHTML = Name;
        AppendingData[1].innerHTML = Repos;
        AppendingData[2].innerHTML = Username;
        AppendingData[3].firstElementChild.innerHTML = URI;
        AppendingData[3].firstElementChild.href = URI;
        document.querySelector(".result").classList.remove("d-none");


    }
    catch (err) {
        console.log("You got an unexpected: ",err);
    }
}


Button.addEventListener("click", () => {
    const username = Userinput.value;
    if(username !== "") {
        FetchUser(username)
    }
    else {
        alert("Input area cannot be empty!");
    }
    Userinput.value = "";
})
