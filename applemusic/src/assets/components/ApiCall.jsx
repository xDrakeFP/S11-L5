const API = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

const ApiCall = async (query) => {
    const res = await fetch(`${API}${encodeURIComponent(query)}`);
    if (!res.ok) throw new Error("Errore nel recupero dei dati");

    const data = await res.json();
    return data.data;
};

export default ApiCall;
