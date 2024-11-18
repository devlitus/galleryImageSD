import { readFileAsDataURL } from "./fileHandlers";

export class ImagePreview {
  private container: HTMLElement;
  private onUpdateImages: () => void;

  constructor(container: HTMLElement, onUpdateImages: () => void) {
    this.container = container;
    this.onUpdateImages = onUpdateImages;
  }

  async addImage(file: File): Promise<void> {
    try {
      const imageUrl = await readFileAsDataURL(file);
      const imgContainer = this.createImageContainer(file, imageUrl);
      this.container.appendChild(imgContainer);
      this.onUpdateImages();
    } catch (error) {
      console.error("Error adding image:", error);
    }
  }

  private createImageContainer(file: File, imageUrl: string): HTMLElement {
    const container = document.createElement("div");
    container.className = "relative group";

    const img = document.createElement("img");
    img.src = imageUrl;
    img.className = "w-full h-24 object-cover rounded-lg";
    (img as any).originalFile = file;

    const deleteButton = this.createDeleteButton(container);

    container.appendChild(img);
    container.appendChild(deleteButton);

    return container;
  }

  private createDeleteButton(container: HTMLElement): HTMLButtonElement {
    const button = document.createElement("button");
    button.className =
      "absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200";
    button.innerHTML = "×";
    button.onclick = (e) => {
      e.preventDefault();
      container.remove();
      this.onUpdateImages();
    };
    return button;
  }

  getImageUrls(): string[] {
    return Array.from(this.container.getElementsByTagName("img")).map(
      (img) => img.src
    );
  }

  clear(): void {
    this.container.innerHTML = "";
    this.onUpdateImages();
  }
}
