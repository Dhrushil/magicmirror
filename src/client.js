import { Client } from "@microsoft/microsoft-graph-client";
import {authProvider} from '../src/msal.js'

const options = {
	authProvider, // An instance created from previous step
};
const client = Client.initWithMiddleware(options);

export {client}