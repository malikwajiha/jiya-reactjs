import  conf  from "../conf/conf.js";
import { Client, TablesDB, ID , Storage } from "appwrite";


export class Service{
    client = new Client();
    tablesDB;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.tablesDB = new TablesDB(this.client)
        this.bucket = new Storage(this.client)
    }


    async createPost({title, content, featuredImage, status, userId, slug}) {
        try {
            return await this.tablesDB.createRow({
                databaseId: conf.appwriteTablesDbId,
                tableId: conf.appwriteTableId,
                rowId: slug,
                data: {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            }) 
        } catch (error) {
            console.log("Appwrite service error :: createPost :: error", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}) {
        try {
            return await this.tablesDB.updateRow(    
                conf.appwriteTablesDbId,
                conf.appwriteTableId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
        )
            
        } catch (error) {
            console.log("Appwrite service error :: updatePost :: error", error);
        }
    }

    async deletePost(slug){ 
        try {
            await this.tablesDB.deleteRow(
                conf.appwriteTablesDbId,
                conf.appwriteTableId,
                slug
            )

            return true;
        } catch (error) {
            console.log("Appwrite service error :: deletePost :: error", error);
            return false;
        }

    }

    async getPost(slug) {
        try {
            return await this.tablesDB.getRow(
                conf.appwriteTablesDbId,
                conf.appwriteTableId,
                slug
            )
        
            
        } catch (error) {
            console.log("Appwrite service error :: getPost :: error", error);
            return false;
        }
    }

    async getAllPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.tablesDB.listRows(
                conf.appwriteTablesDbId,
                conf.appwriteTableId,
                [query.equal("status", "active")]
            )

        } catch (error) {
            console.log("Appwrite service error :: getAllPosts :: error", error);
            return false;
        }
    }


    // File Upload Service

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("Appwrite service error :: uploadFile :: error", error);
            return false;
        }
    }


    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
            
        } catch (error) {
            console.log("Appwrite service error :: deleteFile :: error", error);
            return false;
        }
    }

    getFilePreviewUrl(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        );
    }
}


const service = new Service();

export default service