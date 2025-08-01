import { Client, Storage, Databases, ID } from "appwrite";
import conf from "../conf/conf";
import { Query } from "appwrite";
export class Service{
    client = new Client();
    databases;
    storage;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);

    }

    async createPost({title, content, featuredImage, status, userId, userName}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique(),
                {
                    title, 
                    content,
                    featuredImage,
                    status,
                    userId,
                    userName
                    
                }
            )
        } catch (error) {
            console.log("Appwrite service::createpost::error ", error);
        }
    }

    async updatePost(id, {title, content, featuredImage, status, userName }){
        try {
           return  await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                id,

                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userName,
                }


            )

            
        } catch (error) {
            console.log("Appwrite service :: updatePost::error", error);
            return false;
        }
    }

    async deletePost(id){
        try {
             await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                id
            )
            return true;
        } catch (error) {
            console.log("Appwrite service::deletePost::error", error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            
        } catch (error) {
            console.log("Appwrite service::getPost::error".error);
            return false;
        }
    }

    async getAllPost(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            
            )
        } catch (error) {
            console.log("Appwrite service::getAllPost::error ",error);
            return false;

        }
    }
      
    
    // file upload services ---------->

    async uploadFile(file){
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("Appwrite service::uploadFile::error ", error);
            return false;
        }
    }

    async deleteFile(fileId){
       try {
        await this.storage.deleteFile(
            conf.appwriteBucketId,
            fileId
        )
        return true;
       } catch (error) {
        console.log("Appwrite service::deleteFile::error ",error);
        return false;
       }
    }

    filePreview(fileId){
        return this.storage.getFileView(
            conf.appwriteBucketId,
            fileId
        )
    }
} 

const service=new Service();
export default service;