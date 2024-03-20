console.log("IT’S ALIVE!");


function $$ (selector, context = document) {
	return Array.from(context.querySelectorAll(selector));
}

let navLinks = $$("nav a");
let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname);
currentLink?.classList.add("current");


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
