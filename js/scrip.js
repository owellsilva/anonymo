const { createApp } = Vue;

createApp({
	data() {
		return {
			//tags: [
			//	"developer",
			//	"engineer",
			//	"designer",
			//	"ui",
			//	"mobile",
			//	"seo",
			//	"dev-ops",
			//	"tester"
			//],
			personnel: [
				{
					name: "owell polanco",
					photo: "https://cdn.discordapp.com/avatars/1054167971506966558/f6c3a7ed550b9718caabc516e83042ae.webp?size=128",
					role: "developer",
					role: "seo"
				},
				{
					name: "santiago suarez",
					photo: "https://cdn.discordapp.com/avatars/730083692609011763/85c0e554caaad56434a280dc939fe83a.webp?size=128",
					role: "designer"
				},
				{
					name: "luciana",
					photo: "https://imagenes-web.netlify.app/ba/lucy.jpg",
					role: "tester"
				},
				{
					name: "daniela",
					photo: "https://imagenes-web.netlify.app/ba/f4.png",
					role: "tester"
				},
				{
					name: "victor",
					photo: "https://imagenes-web.netlify.app/ba/f2.svg",
					role: "tester"
				},
				{
					name: "zarith",
					photo: "https://imagenes-web.netlify.app/ba/f3.svg",
					role: "tester"
				},
				{
					name: "emanuel",
					photo: "https://imagenes-web.netlify.app/ba/f1.png",
					role: "tester"
				}
			]
		};
	},
	methods: {
		removeDash(text) {
			if (text.includes("-")) {
				return text.replace("-", " ");
			} else {
				return text;
			}
		}
	}
}).mount("#app");