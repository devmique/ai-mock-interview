import Vapi from '@vapi-ai/web';

// Initialize with the Web Token, NOT the API key
if (!process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN) {
    throw new Error("Missing NEXT_PUBLIC_VAPI_WEB_TOKEN in .env");
  }
  
export const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN!)