export const isImageFile = (file: File): boolean => {
  return file.type.startsWith("image/");
};

export const readFileAsDataURL = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
};

export const handleDirectoryEntry = async (
  entry: FileSystemEntry
): Promise<File[]> => {
  const files: File[] = [];

  if (entry.isFile) {
    const file = await new Promise<File>((resolve) => {
      (entry as FileSystemFileEntry).file(resolve);
    });
    if (isImageFile(file)) {
      files.push(file);
    }
  } else if (entry.isDirectory) {
    const dirReader = (entry as FileSystemDirectoryEntry).createReader();
    const entries = await new Promise<FileSystemEntry[]>((resolve) => {
      dirReader.readEntries(resolve);
    });
    for (const entry of entries) {
      const subFiles = await handleDirectoryEntry(entry);
      files.push(...subFiles);
    }
  }

  return files;
};
