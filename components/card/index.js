const cardImageElements = document.querySelectorAll(".card-image");
const loreumPicsum = "https://picsum.photos/300/200";
const pixabay =
	"https://pixabay.com/api/?key=25576044-47f3dc3d5c6a13ce0b1ea3ae5&image_type=photo";

export const fetchImage = () => {
	// cardImageElements.forEach((cardImageElement) => {
	// 	cardImageElement.src = loreumPicsum;
	// });

	// fetch(
	// 	`https://api.unsplash.com/photos/random?client_id=yndEq37nu-CVojW1ciuxaEoAGpTes-un4Qpd9Wh_CHk&orientation=landscape&query=nature`
	// )
	// 	.then((response) => {
	// 		return response.json();
	// 	})
	// 	.then((data) => {
	// 		console.log(data.urls.regular);
	// 		cardImageElements.forEach((cardImageElement) => {
	// 			cardImageElement.setAttribute("src", data.urls.regular);
	// 		});
	// 	});

	fetch(pixabay)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			cardImageElements.forEach((cardImageElement) => {
				const totalHits = data.totalHits;
				cardImageElement.setAttribute(
					"src",
					data.hits[Math.round(Math.random() * 10)].webformatURL
				);
			});
		});
};
