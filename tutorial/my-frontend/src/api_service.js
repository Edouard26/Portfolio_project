import axios from 'axios';

const API_BASE_URL = '/api'; // Notez que nous n'avons pas besoin de spécifier l'URL complète

export const getVideos = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/videos`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des vidéos', error);
    throw error;
  }
};

export const getArticles = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/articles`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des articles', error);
    throw error;
  }
};

// Ajoutez d'autres fonctions pour les autres endpoints si nécessaire