import { apiKey, apiUrl } from "@config";
import { PersonalData } from "@lib/data";

export async function fetchPersonalInfo(): Promise<PersonalData> {
    const response = await fetch(`${apiUrl}/api/v1/personal-information/get`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "x-api-key": `${apiKey}`
        }
    });

    const data: PersonalData = await response.json();

    return data;
}
