console.log("IT’S ALIVE!");


function $$ (selector, context = document) {
	return Array.from(context.querySelectorAll(selector));
}

let navLinks = $$("nav a");
let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname);
currentLink?.classList.add("current");

let pages = [
	{url: ".", title: "Home"},
	{url: "projects", title: "Projects"},
    {url: "resume", title: "Resume"},
    {url: "contact", title: "Contact"},
    {url: "https://github.mit.edu/oavelino", title: "Github"}
];

let nav = document.createElement("nav");
document.body.prepend(nav);

for (let p of pages) {
	let url = p.url;
	let title = p.title;

    let a = document.createElement("a");
    a.href = url;
    a.textContent = title;
    nav.append(a);
    a.classList.toggle("current", a.host === location.host && a.pathname === location.pathname);
    if (a.host !== location.host) {
        a.target = "_blank"
    }
}

document.body.insertAdjacentHTML("afterbegin", `
	<label class="color-scheme">
		Theme:
		<select>
            <option value="light dark">Default</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
		</select>
	</label>`
);


let select = document.querySelector("select")

if (localStorage.colorScheme){
    document.documentElement.style.setProperty("color-scheme", localStorage.colorScheme);
    select.value = localStorage.colorScheme;
}

select.addEventListener("input", function (event) {
	console.log("color scheme changed to", event.target.value);
    localStorage.colorScheme = event.target.value
    document.documentElement.style.setProperty("color-scheme", event.target.value);
});
