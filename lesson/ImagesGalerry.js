export class ImagesGalerry {
    #imagesContainer;
    #currentPage;
    #limitForOnePage
    #images

    constructor(imagesContainer) {
        this.#imagesContainer = imagesContainer;
        this.#currentPage = 1;
        this.#limitForOnePage = 13;
        this.#images = []

    }

    #renderImagesCard = (image) => {
        const {download_url, author, id } = image;

        return `<figure class="image-card" id=${id}><img class="image-card__image" src=${download_url} alt=${author}>
            <figcaption class="image-card__caption">Author: ${author}</figcaption>
        </figure>`;
    }

    #addImageToDom = (images) => {
        images.forEach((image) => {
            const imageWrapper = document.createElement("div");
            imageWrapper.classList.add("image-wrapper");
            imageWrapper.innerHTML = this.#renderImagesCard(image);
            this.#imagesContainer.append(imageWrapper);

        })

    }

    fetchImages = async () => {
        const API_URL = `https://picsum.photos/v2/list?page=${this.#currentPage}&limit=${this.#limitForOnePage}`;

        try {
            const response = await fetch(API_URL);
            console.log(response);

            this.#images = await response.json();
            this.#addImageToDom(this.#images);
            this.#currentPage++;
        } catch (e) {
            throw new Error(`Error fetching images: ${e}`);
        }



    }
}