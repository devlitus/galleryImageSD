import { isImageFile, handleDirectoryEntry } from "@libs/fileHandlers";
import { ImagePreview } from "./imagePreview";

export class DropZoneHandler {
  private dropZone: HTMLElement;
  private fileInput: HTMLInputElement;
  private preview: ImagePreview;
  private submitButton: HTMLButtonElement;
  private container: HTMLElement;

  constructor(
    dropZoneId: string,
    fileInputId: string,
    previewId: string,
    submitButtonId: string
  ) {
    this.dropZone = document.getElementById(dropZoneId)!;
    this.fileInput = document.getElementById(fileInputId) as HTMLInputElement;
    this.submitButton = document.getElementById(
      submitButtonId
    ) as HTMLButtonElement;

    const previewElement = document.getElementById(previewId)!;
    this.preview = new ImagePreview(previewElement, () =>
      this.updateSubmitButtonState()
    );
    this.container = previewElement;

    this.initializeEventListeners();
    this.updateSubmitButtonState();
    this.updateSubmitButtonState();
  }

  private initializeEventListeners(): void {
    this.dropZone.addEventListener("dragover", this.handleDragOver.bind(this));
    this.dropZone.addEventListener(
      "dragleave",
      this.handleDragLeave.bind(this)
    );
    this.dropZone.addEventListener("drop", this.handleDrop.bind(this));
    this.fileInput.addEventListener(
      "change",
      this.handleFileInputChange.bind(this)
    );
  }

  private handleDragOver(e: DragEvent): void {
    e.preventDefault();
    this.dropZone.classList.add(
      "bg-gray-100",
      "dark:bg-gray-700",
      "border-gray-400",
      "dark:border-gray-500"
    );
  }

  private handleDragLeave(): void {
    this.dropZone.classList.remove(
      "bg-gray-100",
      "dark:bg-gray-700",
      "border-gray-400",
      "dark:border-gray-500"
    );
  }

  private async handleDrop(e: DragEvent): Promise<void> {
    e.preventDefault();
    this.handleDragLeave();

    const items = e.dataTransfer?.items;
    if (items) {
      for (const item of Array.from(items)) {
        const entry = item.webkitGetAsEntry();
        if (entry) {
          const files = await handleDirectoryEntry(entry);
          files.forEach((file) => this.preview.addImage(file));
        }
      }
    } else if (e.dataTransfer?.files) {
      Array.from(e.dataTransfer.files)
        .filter(isImageFile)
        .forEach((file) => this.preview.addImage(file));
    }

    this.updateSubmitButtonState();
  }

  private handleFileInputChange(): void {
    if (this.fileInput.files) {
      Array.from(this.fileInput.files)
        .filter(isImageFile)
        .forEach((file) => this.preview.addImage(file));
      this.updateSubmitButtonState();
    }
  }

  private updateSubmitButtonState(): void {
    const hasImages = this.preview.getImageUrls().length > 0;
    this.submitButton.disabled = !hasImages;
  }
  private async fileToDataUrl(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async handleSubmit(): Promise<void> {
    try {
      this.submitButton.disabled = true;
      this.submitButton.textContent = "Subiendo...";

      const previewContainer = document.getElementById("preview");
      if (!previewContainer) return;

      const images = Array.from(previewContainer.getElementsByTagName("img"));
      const uploadPromises = images.map(async (img) => {
        const file = (img as any).originalFile;
        if (!file) return;

        const response = await fetch("/api/upload", {
          method: "POST",
          body: file,
        });

        if (!response.ok) {
          throw new Error(`Upload failed: ${response.statusText}`);
        }

        return await response.json();
      });

      const results = await Promise.all(uploadPromises);
      const successCount = results.filter(Boolean).length;

      alert(
        `${successCount} de ${images.length} imágenes subidas exitosamente`
      );

      if (successCount > 0) {
        this.preview.clear();
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("Error al subir las imágenes");
    } finally {
      this.submitButton.disabled = false;
      this.submitButton.textContent = "Subir imágenes";
    }
  }
}
