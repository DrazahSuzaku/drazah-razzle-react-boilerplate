import HttpClient from "@core/httpClient";

export async function fetchSessions() {
    return HttpClient.get('https://eternity.test/api/users')
};

