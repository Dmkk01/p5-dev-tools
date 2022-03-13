import * as fs from "fs";

export const createFile = (path: string, template: string): void => {
    fs.writeFile(path, template, (err) => console.log(err));
  };
  
export const checkIfExists = (path: string): boolean => {
    return fs.existsSync(path);
};

export const createDirectory = (path: string): void => {
    fs.promises.mkdir(path, { recursive: true }).catch(console.error);
};
  