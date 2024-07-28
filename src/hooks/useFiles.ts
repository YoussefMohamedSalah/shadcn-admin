import { useState } from "react";

interface FileType {
  name: string;
  url: string;
  state?: boolean;
}

const useFiles = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [filesNameSet, setFilesNameSet] = useState<Set<string>>(new Set());
  const [oldFiles, setOldFiles] = useState<FileType[]>([]);
  const [removedFilesNameSet, setRemovedFilesNameSet] = useState<Set<string>>(new Set());

  const addFile = (acceptedFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);

    const newFileNames = acceptedFiles.map(file => file.name);
    setFilesNameSet((prevFilesNameSet) => {
      const updatedSet = new Set(prevFilesNameSet);
      newFileNames.forEach(name => updatedSet.add(name));
      return updatedSet;
    });
  };

  const removeFile = (file: Partial<File> & Partial<FileType>) => {
    if ('url' in file) {
      // This is an old file
      if (file.state === undefined || file.state === false) {
        const selectedFile = oldFiles.find(oldFile => oldFile.name === file.name);
        if (selectedFile) {
          setOldFiles((prevOldFiles) =>
            prevOldFiles.map(oldFile => oldFile.name === file.name ? { ...oldFile, state: true } : oldFile)
          );
          setRemovedFilesNameSet((prevSet) => {
            const updatedSet = new Set(prevSet);
            updatedSet.delete(file.name as string);
            return updatedSet;
          });
        }
      } else {
        setOldFiles((prevOldFiles) => [
          ...prevOldFiles.filter(oldFile => oldFile.name !== file.name),
          { ...(file as FileType), state: false },
        ]);
        setRemovedFilesNameSet((prevSet) => {
          const updatedSet = new Set(prevSet);
          updatedSet.add(file.name as string);
          return updatedSet;
        });
      }
    } else {
      // This is a new file
      setFiles((prevFiles) => prevFiles.filter(f => f !== file));
      setFilesNameSet((prevFilesNameSet) => {
        const updatedSet = new Set(prevFilesNameSet);
        updatedSet.delete(file.name as string);
        return updatedSet;
      });
    }
  };

  return {
    files,
    setFiles,
    filesNameSet: Array.from(filesNameSet),
    removedFilesNameSet: Array.from(removedFilesNameSet),
    addFile,
    removeFile,
  };
};

export default useFiles;
