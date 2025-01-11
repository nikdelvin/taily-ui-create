import prompts from "prompts"
import { fileURLToPath } from "node:url"
import path from "node:path"
import fs from "fs"
import {
    writeFile,
    lstat,
    readdir,
    mkdir,
    copyFile,
    readFile,
} from "fs/promises"
import { execSync } from "child_process"

const copyFilesAndDirectories = async (source, destination) => {
    const entries = await readdir(source)
    for (const entry of entries) {
        const sourcePath = path.join(source, entry)
        const destPath = path.join(destination, entry)
        const stat = await lstat(sourcePath)
        if (stat.isDirectory()) {
            await mkdir(destPath)
            await copyFilesAndDirectories(sourcePath, destPath)
        } else {
            await copyFile(sourcePath, destPath)
        }
    }
}
  
const renamePackageJsonName = async (targetDir, projectName) => {
    const packageJsonPath = path.join(targetDir, "package.json")
    try {
        const packageJsonData = await readFile(packageJsonPath, "utf8")
        const packageJson = JSON.parse(packageJsonData)
        packageJson.name = projectName
        await writeFile(
            packageJsonPath,
            JSON.stringify(packageJson, null, 2),
            "utf8"
        )
    } catch (err) {
        console.log(err.message)
    }
}


(async () => {
    try{
        const response = await prompts([
        {
            type: "text",
            name: "projectName",
            message: "Enter your project name",
            initial: "my-taily-ui-project",
            format: (val) => val.toLowerCase().split(" ").join("-"),
            validate: (val) =>
                /[a-z0-9\-]{3,}/g.test(val)
                ? true
                : "Project name should not contain special characters except hyphen (-)",
        }
        ])
        const { projectName } = response
        const targetDir = path.join(cwd, projectName)
        const sourceDir = path.resolve(
            fileURLToPath(import.meta.url),
            "../../template",
            'taily-ui-landing'
        )
        if (!fs.existsSync(targetDir)) {
            console.log("Creating directory...")
            fs.mkdirSync(targetDir, { recursive: true })
            console.log("Copying project files...")
            await copyFilesAndDirectories(sourceDir, targetDir)
            await renamePackageJsonName(targetDir, projectName)
            console.log("Installing dependencies...")
            execSync(`cd ${projectName}`)
            execSync('npm install')
            console.log("Fixing vulnerabilities...")
            execSync('npm audit fix')
            console.log("Your new Taily UI landing project is ready to edit!")
        } else {
            throw new Error("Target directory already exist!")
        }
    }
    catch(err){
        console.log(err.message);
    }
})()