import { Client, Account, ID, Avatars, Databases, Query } from "appwrite";

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    Platform: "alexandria.netlify.app",
    project: "66a20ae30023d89a823b",
    databaseId: "66a211d4003174e16d08",
    accountsCollectionId: "66a2157d000ee8595bc2",
    storageId: "66a21608001bf95bc8f0",
}

const client = new Client();


client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.project);


const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// Register User
export const createUser = async (email, password, username) => {
    // Register User
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        );
        if (!newAccount) {
            throw new Error("Failed to create user");
        }
        const avatarUrl = avatars.getInitials(username);
        await signIn(email, password);
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.accountsCollectionId,
            ID.unique(),
            {
                accountid: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            }
        )

        return newUser;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}


export async function signIn(email, password) {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        return session;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}


export async function getCurrentUser() {
    try{
        const currentAccount = await account.get();
        if (!currentAccount) {
            throw new Error("Failed to get account");
        }
        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.accountsCollectionId,
            [
                Query.equal("accountid", currentAccount.$id)
            ]
        )
        if (!currentUser) {
            throw new Error("Failed to get user");
        }
        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
    }
}